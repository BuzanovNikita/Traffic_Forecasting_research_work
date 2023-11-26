import numpy as np
import pandas as pd
import seaborn as sns
import yaml
import os
import openpyxl
import matplotlib.pyplot as plt

from pathlib import Path
from collections import defaultdict

def get_data_yaml_dict_times(paths, target="mean cwnd", goodness_tresh=299, experiments_max=100000, with_averaging=True):
    '''
    Each file in each dir is:

{additional_info: {bbr_beta: 0.8, bbr_loss_tresh: 0.05, bbr_probe_rtt_cwnd_gain: 0.8,
    bbr_probe_rtt_duration: 200, channel_bw: 180, channel_congestion_control: bbr2,
    channel_jitt: 1, channel_loss: 1, channel_rtt: 40}, content: [{'bytes sent: ': 2439059,
      'mean cwnd: ': 245635.52422, 'mean jitter: ': 0.277538, 'mean loss2: ': 0.005505,

        ...

      'mean jitter: ': 0.285098, 'mean loss2: ': 0.002163, 'mean loss: ': 0.206585,
      'mean s_rtt: ': 46.20917, time: global}]}

    Additional information must be same on each file => Otherwise dict keys decomposition is not guaranteed.
    '''
    data = dict()
    data_keys = []
    good_data_amount = 0
    bad_data_amount = 0
    exp_count = 0
    for directory in paths:
        for filename in os.listdir(directory):
            if exp_count >= experiments_max:
                break
            dir_file = os.path.join(directory, filename)
            if os.path.isfile(dir_file) and filename not in ['TooLongERRORs', 'OtherERRORs']:
                exp_count += 1
                with open(dir_file, 'r') as f:
                    '''Analyse a single experiment'''
                    datadict = yaml.safe_load(f)

                    experiment_duration = float(datadict['content'][-2]['time'].split('-')[1])
                    '''Skip if bad data (experiment was too fast).'''
                    if (experiment_duration < goodness_tresh):
                        bad_data_amount += 1
                        continue
                    else:
                        good_data_amount += 1
                    
                    log_output_interval = 100
                    if (good_data_amount % log_output_interval == 0):
                        print("Current progress..: ", good_data_amount)
                    if (bad_data_amount % log_output_interval == 0):
                        print("BAD!: ", bad_data_amount)

                    if with_averaging:
                        data_key = tuple(datadict['additional_info'].values())
                        cur_data_keys = list(datadict['additional_info'].keys())
                    else:
                        data_key = tuple(list(datadict['additional_info'].values()) + [exp_count])
                        cur_data_keys = list(datadict['additional_info'].keys()) + ["Number of experiment"]
                    if data_keys == []:
                        data_keys = cur_data_keys
                    elif len(data_keys) != len(cur_data_keys):
                        print("WARNING: 'additional_data' fields are not the same in files given!")
                    '''Create a defaultdict() for each experiment type (varies by data_key)'''
                    if data_key not in data:
                        data[data_key] = defaultdict(int)
                    data[data_key]['runs_count'] += 1
                    speed_array = np.array([sample[target + ": "] for sample in datadict['content'][:(goodness_tresh - 1)]])
                    if 'speed_graph' in data[data_key].keys():
                        data[data_key]['speed_graph'] += speed_array
                    else:
                        data[data_key]['speed_graph'] = speed_array

    for key in data.keys():
        data[key]['speed_graph'] = data[key]['speed_graph'] / data[key]['runs_count']
    return data, data_keys


'''See how speed changes depending on the time'''
def draw_speed_graphs(data_dict, data_dict_key_semantics, graphs_max=5, start=0, end=300):
    count = -1
    plt.figure(figsize=(25, 10))
    for key, value in data_dict.items():
        count += 1
        if count == graphs_max:
            break
        sns.lineplot(data=data_dict[key]['speed_graph'][start:end], label=" ".join([f"{i[0]}: {i[1]}," for i in zip(data_dict_key_semantics, key)]) + f"    Runs_Count: {data_dict[key]['runs_count']}")

# '''Settings'''
# algos = ["BBR2"] # Анализируемые алгоритмы управления перегрузкой
# with_averaging = False
# goodness_tresh = 299 # Минимальная удобоваримая длительность эксперимента, а также сколько секунд мы анализируем
# experiments_max = 1 # Максимумальное количество анализируемых экспериментов
# paths_yaml = ["long_experiments/perfres_w3_long_experiments_fec_dummy"] # Директория с экспериментами
# path_savexlsxs = "~/" # Куда сохранять excel



# '''Parse data'''
# data_dict, data_dict_key_semantics = get_data_yaml_dict_times(paths_yaml, experiments_max=experiments_max, goodness_tresh=goodness_tresh, with_averaging=with_averaging)



# '''Put data in excel format'''
# data_dict_key_semantics_tmp = data_dict_key_semantics + ["Runs_count"] + [f"{i}-{i+1} second." for i in range(goodness_tresh - 1)]
# data_list_tmp = []
# for key, value in data_dict.items():
#     data_list_tmp_sample = list(key) + [data_dict[key]['runs_count']] + list(data_dict[key]['speed_graph'][:(goodness_tresh - 1)])
#     data_list_tmp.append(data_list_tmp_sample)
# df_tmp = pd.DataFrame(data_list_tmp, columns=data_dict_key_semantics_tmp)
# xlsx_name = "Speedchange_"
# if with_averaging:
#     xlsx_name += "averaging_"
# else:
#     xlsx_name += "noaveraging_"
# df_tmp.to_excel(f"{path_savexlsxs}/{'_'.join(algos)}_{xlsx_name}v1.xlsx")


# draw_speed_graphs(data_dict, data_dict_key_semantics)

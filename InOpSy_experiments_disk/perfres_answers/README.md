В данной серии экспериментов проихсодит выбор канала из поданных на вход десяти каналов. В соответствии с конфигурацией эксперимента в папках .experiments. 
Правильность выбора канала можно проверить [r] == rs в каждом эксперименте. 

1. choose_channel_exps_v11_adj_loss_perf_d1_300 - Прогон алгоритма STANDARD с поправочными коэффициентами: 
class TuningParams:
    xi_b = 0.95 / 1.34
    h_l_adj_mod = 2.31 # high_loss_adj_coef_multiplier
    # is found by comparing ratios of experiments with loss less/more than 0.1;
    xi_d_1 = 1.1 * 2.3 * 300
    xi_d_2 = 0.55 * 2.3
    xi_j = 0.85 * 1.6
    xi_l_1 = 1.65
Благодаря поправочным коэф-ам примененными как при генерации эксперимнетов, так и при выборе канала с опцией STANDARD, SLA оказался удовлетворен по параметрам RTT, Iperf_speed, Jitter, Loss.
2. choose_channel_exps_v10_adj_loss - Прогон алгоритма STANDARD с поправочными коэффициентами: 
class TuningParams:
    xi_b = 0.95 / 1.34
    h_l_adj_mod = 2.31 # high_loss_adj_coef_multiplier
    # is found by comparing ratios of experiments with loss less/more than 0.1;
    xi_d_1 = 1.1 * 2.3
    xi_d_2 = 0.55 * 2.3
    xi_j = 0.85 * 1.6
    xi_l_1 = 1.65
Благодаря поправочным коэф-ам примененными как при генерации эксперимнетов, так и при выборе канала с опцией STANDARD, SLA оказался удовлетворен по параметрам RTT, Iperf_speed, Jitter, Loss.
3. choose_channel_exps_v6_VQOE_v3 - Прогон алгоритма VQOE.
4. choose_channel_exps_v6_MINLOSS - Прогон алгоритма MINLOSS.
5. choose_channel_exps_v6_MINRTT - Прогон алгоритма MINRTT.
6. choose_channel_exps_v6_RANDOM - Прогон алгоритма RANDOM.
7. choose_channel_exps_v6_STANDARD_NOFEC - Прогон алгоритма STANDARD_NOFEC.

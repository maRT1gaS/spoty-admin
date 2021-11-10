import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Statistics, TopCharts } from '../../interfaces/Statistics.interface';

interface StatisticsState {
  loading: boolean;
  error: boolean;
  statistics: Statistics;
  topCharts: TopCharts[] | [];
}

const initialState: StatisticsState = {
  loading: true,
  error: false,
  statistics: <Statistics>{},
  topCharts: [],
};

export const fetchGetStatistics = createAsyncThunk(
  'statistics/fetchGetStatistics',
  async () => {
    const statistics = await (
      await axios.get<Statistics>('/api/statistics/allstatistics')
    ).data;
    const topCharts = await (
      await axios.get<TopCharts[]>('/api/statistics/topcharts')
    ).data;
    return { statistics, topCharts };
  }
);

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGetStatistics.pending.type]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchGetStatistics.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.statistics = action.payload.statistics;
      state.topCharts = action.payload.topCharts;
    },
    [fetchGetStatistics.rejected.type]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// export const {  } = editModalSlice.actions;

export default statisticsSlice.reducer;

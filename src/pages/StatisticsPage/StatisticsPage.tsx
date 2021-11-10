import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchGetStatistics } from '../../redux/slices/statisticsSlice';
import {
  StatisticsItem,
  Loader,
  SongChart,
  HomeLink,
  ErrorNotification,
  EmptyListTitle,
} from '../../components';
import {
  StatisticsWrap,
  StatisticsCharts,
  StatisticsStats,
  StatisticsChartsTitle,
} from './StatisticsPage.style';

const StatisticsPage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isLoading, statistics, topCharts, error } = useAppSelector(
    (state) => ({
      isLoading: state.statistics.loading,
      statistics: state.statistics.statistics,
      topCharts: state.statistics.topCharts,
      error: state.statistics.error,
    })
  );

  useEffect(() => {
    dispatch(fetchGetStatistics());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {error && <ErrorNotification title='Ошибка!' />}
          <StatisticsWrap>
            <HomeLink />
            {topCharts.length > 0 && statistics?.users ? (
              <>
                <StatisticsCharts>
                  <StatisticsChartsTitle>Чарт. ТОП-10</StatisticsChartsTitle>
                  {topCharts.map((chart, index) => {
                    return (
                      <SongChart
                        key={chart.id}
                        place={index + 1}
                        song={chart}
                      />
                    );
                  })}
                </StatisticsCharts>
                <StatisticsStats>
                  <StatisticsItem
                    title='Всего пользователей:'
                    stats={statistics.users}
                  />
                  <StatisticsItem
                    title='Всего исполнителей:'
                    stats={statistics.artists}
                  />
                  <StatisticsItem
                    title='Всего загружено аудиофайлов:'
                    stats={statistics.songs}
                  />
                </StatisticsStats>
              </>
            ) : (
              <EmptyListTitle text='Данных нет!' />
            )}
          </StatisticsWrap>
        </>
      )}
    </>
  );
};

export default StatisticsPage;

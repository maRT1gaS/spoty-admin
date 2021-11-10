import React from 'react';
import moment from 'moment';
import { SongChartProps } from './SongChart.props';
import {
  SongItem,
  SongItemContent,
  SongItemPlace,
  SongItemInfo,
  SongItemName,
  SongItemSecondInfo,
  SongItemTime,
  SongItemListener,
} from './SongChart.style';

export const SongChart: React.FC<SongChartProps> = ({
  song,
  place,
}: SongChartProps): JSX.Element => {
  return (
    <SongItem>
      <SongItemContent>
        <SongItemPlace>{place}</SongItemPlace>
        <SongItemListener>{song.listens}</SongItemListener>
        <SongItemInfo>
          <SongItemName>{song.name}</SongItemName>
          <SongItemSecondInfo>
            {song.artist.name}
            &ensp;&bull;&ensp;
            {song.album.name}
          </SongItemSecondInfo>
        </SongItemInfo>
      </SongItemContent>
      <SongItemTime>
        <span>{moment().minute(0).second(song.duration).format('mm:ss')}</span>
      </SongItemTime>
    </SongItem>
  );
};

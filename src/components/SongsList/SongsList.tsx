import React from 'react';
import { SongsListProps } from './SongsList.props';
import { SongItem } from './SongItem/SongItem';
import { EmptyListTitle } from '../EmptyListTitle/EmptyListTitle';

export const SongsList: React.FC<SongsListProps> = ({
  songsList,
}: SongsListProps): JSX.Element => (
  <>
    {songsList.length ? (
      songsList.map((song) => <SongItem key={song.id} song={song} />)
    ) : (
      <EmptyListTitle text='Список песен пока пуст.' />
    )}
  </>
);

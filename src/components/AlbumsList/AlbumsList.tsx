import React from 'react';
import { AlbumsListProps } from './AlbumsList.props';
import { AlbumItem } from './AlbumItem/AlbumItem';
import { EmptyListTitle } from '../EmptyListTitle/EmptyListTitle';

export const AlbumsList: React.FC<AlbumsListProps> = ({
  albumsList,
}: AlbumsListProps): JSX.Element => (
  <>
    {albumsList.length ? (
      albumsList.map((album) => <AlbumItem key={album.id} album={album} />)
    ) : (
      <EmptyListTitle text='Список альбомов пока пуст.' />
    )}
  </>
);

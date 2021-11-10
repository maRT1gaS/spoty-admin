import React from 'react';
import { ArtistsListProps } from './ArtistsList.props';
import { ArtistItem } from './ArtistItem/ArtistItem';
import { EmptyListTitle } from '../EmptyListTitle/EmptyListTitle';

export const ArtistsList: React.FC<ArtistsListProps> = ({
  artistsList,
}: ArtistsListProps): JSX.Element => (
  <>
    {artistsList.length ? (
      artistsList.map((artist) => (
        <ArtistItem key={artist.id} artist={artist} />
      ))
    ) : (
      <EmptyListTitle text='Список исполнителей пока пуст.' />
    )}
  </>
);

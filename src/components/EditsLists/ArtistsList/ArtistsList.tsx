import React from 'react';
import { ArtistsListProps } from './ArtistsList.props';
import { ArtistItem } from './ArtistItem/ArtistItem';
import { EmptyListTitle } from '../../EmptyListTitle/EmptyListTitle';
import { ListWrapper } from '../ListWrapper/ListWrapper';

export const ArtistsList: React.FC<ArtistsListProps> = ({
  artistsList,
}: ArtistsListProps): JSX.Element => (
  <ListWrapper>
    {artistsList.length ? (
      artistsList.map((artist) => (
        <ArtistItem key={artist.id} artist={artist} />
      ))
    ) : (
      <EmptyListTitle text='Список исполнителей пока пуст.' />
    )}
  </ListWrapper>
);

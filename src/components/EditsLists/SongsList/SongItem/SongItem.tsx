import React from 'react';
import { SongItemProps } from './SongItem.props';
import {
  ItemWrap,
  ItemContent,
  ItemInfo,
  ItemInfoName,
  ItemSpanWrap,
  ItemBtnCon,
  ItemSpan,
  ItemBtnSvg,
} from './SongItem.style';
import EditIcon from '../../../../assets/svg/edit.svg';
import RemoveIcon from '../../../../assets/svg/remove.svg';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { fetchDelSong } from '../../../../redux/slices/songsSlice';
import { closeConfirmation } from '../../../../redux/slices/confirmationSlice';
import { openEditWindow, deleteItem } from '../../../../helpers/editFunc';

export const SongItem: React.FC<SongItemProps> = ({
  song,
}: SongItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const delSong = (idSong: string): void => {
    dispatch(fetchDelSong(idSong));
    dispatch(closeConfirmation());
  };

  return (
    <ItemWrap>
      <ItemContent>
        <ItemInfo>
          <ItemInfoName>{song.name}</ItemInfoName>
        </ItemInfo>
      </ItemContent>
      <ItemSpanWrap>
        <ItemSpan>Прослушано всего:</ItemSpan>
        <ItemSpan>{song.listens}</ItemSpan>
      </ItemSpanWrap>
      <ItemSpanWrap>
        <ItemSpan>Тип:</ItemSpan>
        <ItemSpan>{song.tags.join(' ')}</ItemSpan>
      </ItemSpanWrap>
      <ItemBtnCon>
        <ItemBtnSvg
          onClick={(event) =>
            openEditWindow(event, dispatch, song, 'modalSong')
          }
        >
          <EditIcon />
        </ItemBtnSvg>
        <ItemBtnSvg
          onClick={(event) =>
            deleteItem(event, dispatch, delSong, song.id, song.name)
          }
        >
          <RemoveIcon />
        </ItemBtnSvg>
      </ItemBtnCon>
    </ItemWrap>
  );
};

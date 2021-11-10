import React, { useEffect, useRef, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import {
  FetchData,
  EditModalSongProps,
  InitialValueProps,
  ErrorsFormProps,
} from './EditModalSong.props';
import { CustomForm } from './EditModalSong.style';
import EditModalWrapper from '../EditModalWrapper/EditModalWrapper';
import { Input } from '../../Input/Input';
import { InputFile } from '../../InputFile/InputFile';
import { fetchPutSong, fetchPostSong } from '../../../redux/slices/songsSlice';
import { closeEditModal } from '../../../redux/slices/editModalSlice';

export const EditModalSong: React.FC<EditModalSongProps> = ({
  type,
  song,
  idArtist,
  idAlbum,
}: EditModalSongProps): JSX.Element => {
  const [songURL, setSongURL] = useState<string>('');
  const dispatch = useAppDispatch();
  const initialValuesRef = useRef<InitialValueProps>();

  useEffect(() => {
    if (type === 'edit') {
      if (song?.name) {
        const tagsString = song.tags.join(',');
        initialValuesRef.current = {
          name: song.name,
          song: song.url,
          tags: tagsString,
        };
        setSongURL(`/api/${song.url}`);
      }
    }
  }, [song?.url, type, song?.name, song?.tags]);

  const handleSubmitForm = (values: FetchData) => {
    values.artist = idArtist;
    values.album = idAlbum;
    switch (type) {
      case 'edit':
        if (song?.id) {
          const { id } = song;
          dispatch(fetchPutSong({ id, values }));
          dispatch(closeEditModal());
        }
        break;
      case 'add':
        dispatch(fetchPostSong(values));
        dispatch(closeEditModal());
        break;
      default:
    }
  };

  return (
    <EditModalWrapper>
      <Form
        onSubmit={handleSubmitForm}
        initialValues={initialValuesRef.current || undefined}
        validate={(values) => {
          const errors: ErrorsFormProps = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.song) {
            errors.song = 'Required';
          }
          if (!values.tags) {
            errors.tags = 'Required';
          }
          return errors;
        }}
        render={({ handleSubmit, submitting, pristine, valid }) => (
          <CustomForm onSubmit={handleSubmit}>
            <Field<string> type='text' name='name'>
              {({ input: { value, onChange, name } }) => (
                <Input
                  name={name}
                  type='text'
                  value={value}
                  onChange={onChange}
                  autoComplete='off'
                  placeholder='Введите название песни'
                />
              )}
            </Field>
            <Field<string> type='text' name='tags'>
              {({ input: { value, onChange, name } }) => (
                <Input
                  name={name}
                  type='text'
                  value={value}
                  onChange={onChange}
                  autoComplete='off'
                  placeholder='Введите тип песни, через запитую'
                />
              )}
            </Field>
            <Field<FileList> type='file' name='song'>
              {({ input: { name, onChange } }) => (
                <InputFile
                  title={songURL ? 'Изменить песню' : 'Добавить песню'}
                  id='song'
                  accept='.mp3'
                  name={name}
                  onChange={(event) => {
                    if (event.target.files) {
                      onChange(event.target.files);
                    }
                  }}
                />
              )}
            </Field>
            <button disabled={submitting || !valid || pristine} type='submit'>
              {type === 'edit' ? 'Изменить' : 'Добавить'}
            </button>
          </CustomForm>
        )}
      />
    </EditModalWrapper>
  );
};

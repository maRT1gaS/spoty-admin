import React, { useState, useEffect, useRef } from 'react';
import { Form, Field } from 'react-final-form';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import {
  FetchData,
  EditModalAlbumProps,
  InitialValueProps,
  ErrorsFormProps,
} from './EditModalAlbum.props';
import { ImageForm, CustomForm, ImageFormImg } from './EditModalAlbum.style';
import EditModalWrapper from '../EditModalWrapper/EditModalWrapper';
import { Input } from '../../Input/Input';
import { InputFile } from '../../InputFile/InputFile';
import {
  fetchPutAlbum,
  fetchPostAlbum,
} from '../../../redux/slices/albumsSlice';
import PreviewImg from '../../../assets/img/preview.jpeg';
import { closeEditModal } from '../../../redux/slices/editModalSlice';
import { setImagePreview } from '../../../helpers/setPreviewImage';

export const EditModalAlbum: React.FC<EditModalAlbumProps> = ({
  type,
  album,
  idArtist,
}: EditModalAlbumProps): JSX.Element => {
  const [image, setImage] = useState<string>('');
  const [nameAlbum, setNameAlbum] = useState<string>('');
  const dispatch = useAppDispatch();
  const initialValuesRef = useRef<InitialValueProps>();

  useEffect(() => {
    if (type === 'edit') {
      if (album?.name) {
        initialValuesRef.current = {
          name: album.name,
          image: album.imageUrl,
          year: album.year,
        };
        setNameAlbum(album.name);
        setImage(`/api/${album.imageUrl}`);
      }
    }
  }, [album?.imageUrl, album?.name, album?.year, type]);

  const handleSubmitForm = (values: FetchData) => {
    switch (type) {
      case 'edit':
        if (album?.id) {
          const { id } = album;
          dispatch(fetchPutAlbum({ id, values, idArtist }));
          dispatch(closeEditModal());
        }
        break;
      case 'add':
        dispatch(fetchPostAlbum({ values, idArtist }));
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
          if (!values.image) {
            errors.image = 'Required';
          }
          if (!values.year) {
            errors.year = 'Required';
          }
          if (new Date().getFullYear() < Number(values.year)) {
            errors.year = 'Error';
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
                  placeholder='Введите название альбома'
                />
              )}
            </Field>
            <Field<string> type='number' name='year'>
              {({ input: { value, onChange, name } }) => (
                <Input
                  name={name}
                  type='number'
                  value={value}
                  onChange={onChange}
                  autoComplete='off'
                  placeholder='Введите год'
                />
              )}
            </Field>
            <ImageForm>
              <ImageFormImg
                src={image === '' ? PreviewImg : image}
                alt={nameAlbum === '' ? 'previewImg' : nameAlbum}
              />
              <Field<FileList> type='file' name='image'>
                {({ input: { name, onChange } }) => (
                  <InputFile
                    title={
                      image ? 'Изменить изображение' : 'Добавить изображение'
                    }
                    accept='image/jpeg,image/png'
                    id='image'
                    name={name}
                    onChange={(event) => {
                      if (event.target.files) {
                        onChange(event.target.files);
                        setImagePreview(event.target.files[0], setImage);
                      }
                    }}
                  />
                )}
              </Field>
            </ImageForm>
            <button disabled={submitting || !valid || pristine} type='submit'>
              {type === 'edit' ? 'Изменить' : 'Добавить'}
            </button>
          </CustomForm>
        )}
      />
    </EditModalWrapper>
  );
};

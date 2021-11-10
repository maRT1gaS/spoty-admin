import React, { useState, useEffect, useRef } from 'react';
import { Form, Field } from 'react-final-form';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import {
  FetchData,
  EditModalArtistProps,
  InitialValueProps,
  ErrorsFormProps,
} from './EditModalArtist.props';
import { ImageForm, CustomForm, ImageFormImg } from './EditModalArtist.style';
import EditModalWrapper from '../EditModalWrapper/EditModalWrapper';
import { Input } from '../../Input/Input';
import { InputFile } from '../../InputFile/InputFile';
import {
  fetchPutArtist,
  fetchPostArtist,
} from '../../../redux/slices/artistsSlice';
import PreviewImg from '../../../assets/img/preview.jpeg';
import { closeEditModal } from '../../../redux/slices/editModalSlice';
import { setImagePreview } from '../../../helpers/setPreviewImage';

export const EditModalArtist: React.FC<EditModalArtistProps> = ({
  type,
  artist,
}: EditModalArtistProps): JSX.Element => {
  const [image, setImage] = useState<string>('');
  const [nameArtist, setNameArtist] = useState<string>('');
  const dispatch = useAppDispatch();
  const initialValuesRef = useRef<InitialValueProps>();

  useEffect(() => {
    if (type === 'edit') {
      if (artist?.name) {
        initialValuesRef.current = {
          name: artist.name,
          image: artist.imageUrl,
        };
        setNameArtist(artist.name);
        setImage(`/api/${artist.imageUrl}`);
      }
    }
  }, [artist?.imageUrl, artist?.name, type]);

  const handleSubmitForm = (values: FetchData) => {
    switch (type) {
      case 'edit':
        if (artist?.id) {
          const { id } = artist;
          dispatch(fetchPutArtist({ id, values }));
          dispatch(closeEditModal());
        }
        break;
      case 'add':
        dispatch(fetchPostArtist(values));
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
                />
              )}
            </Field>
            <ImageForm>
              <ImageFormImg
                src={image === '' ? PreviewImg : image}
                alt={nameArtist === '' ? 'previewImg' : nameArtist}
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

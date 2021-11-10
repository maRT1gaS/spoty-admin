import React from 'react';
import { TagsProps } from './Tags.props';
import { TagsWrap, TagsWrapItem, TagsWrapTypes } from './Tags.style';

export const Tags: React.FC<TagsProps> = ({ tags }: TagsProps): JSX.Element => (
  <>
    {Boolean(tags.length) && (
      <TagsWrap>
        <TagsWrapTypes>Тип музыки: </TagsWrapTypes>
        {tags.map((tag: string) => (
          <TagsWrapItem key={tag}>{tag}</TagsWrapItem>
        ))}
      </TagsWrap>
    )}
  </>
);

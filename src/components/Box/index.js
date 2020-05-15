/** @jsx jsx */
import styled from '@emotion/styled';
import {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop';
import {
  compose,
  space,
  color,
  layout,
  flexbox,
  typography,
  position,
  border,
} from 'styled-system';
import extraConfig from './config';

export const truncate = props => {
  if (props.isTruncated) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };
  }
};

const systemProps = compose(
  layout,
  color,
  space,
  position,
  typography,
  flexbox,
  border,
  extraConfig,
);

const shouldForwardProp = createShouldForwardProp([...props, 'd']);

const nativeHTMLPropAlias = ['htmlWidth', 'htmlHeight'];

const Box = styled('div', {
  // shouldForwardProp,
  shouldForwardProp: (prop) => {
    if (nativeHTMLPropAlias.includes(prop)) {
      return true;
    }
    return shouldForwardProp(prop);
  },
})((props) => props.css, systemProps);

export default Box;

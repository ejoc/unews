/* eslint no-underscore-dangle: off */
/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import preflight from './preflight';

const defaultConfig = (theme) => ({
  light: {
    color: theme.colors.gray[800],
    bg: undefined,
    borderColor: theme.colors.gray[200],
    placeholderColor: theme.colors.gray[400],
  },
});

const CSSReset = ({ config }) => {
  const configCSS = (theme) => {
    const _defaultConfig = defaultConfig(theme);

    const _config = config
      ? config(theme, _defaultConfig)
      : defaultConfig(theme);

    const { color, bg, borderColor, placeholderColor } = _config.light;

    return css`
      html {
        line-height: 1.5;
        color: ${color};
        background-color: ${bg};
      }

      /**
      * Allow adding a border to an element by just adding a border-width.
      */

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        border-color: ${borderColor};
      }

      input:-ms-input-placeholder,
      textarea:-ms-input-placeholder {
        color: ${placeholderColor};
      }

      input::-ms-input-placeholder,
      textarea::-ms-input-placeholder {
        color: ${placeholderColor};
      }

      input::placeholder,
      textarea::placeholder {
        color: ${placeholderColor};
      }
    `;
  };

  return (
    <Global styles={(theme) => css([preflight(theme), configCSS(theme)])} />
  );
};

export default CSSReset;

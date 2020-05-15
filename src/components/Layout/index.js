import React from 'react';
import css from '@styled-system/css';
import Header from './Header';
import Footer from './Footer';
import Box from '../Box';


const Layout = ({ children }) => (
  <div>
    <Header />
    <Box
      css={css({
        minHeight: 'screenHeight',
      })}
    >
      {children}
    </Box>
    <Footer />
  </div>
);

export default Layout;

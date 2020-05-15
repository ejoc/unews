import React from 'react';

const customIcons = {
  avatar: {
    path: (
      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    ),
  },
  'question-outline': {
    path: (
      <g stroke="currentColor" strokeWidth="1.5">
        <path
          // strokeLinecap="full"
          fill="none"
          d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
        />
        <path
          fill="none"
          // strokeLinecap="full"
          d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
        />
        <circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
      </g>
    ),
  },
};

export default customIcons;

import React from 'react'
import Box from '../Box';

const PostItem = ({ title }) => {
  return (
    <Box
      as="li"
      p={5}
      display="flex"
      alignItems="center"
      css={{
        counterIncrement: 'item',
        '&:before': {
          width: '3rem',
          fontSize: '3rem',
          marginRight: '1rem',
          content: 'counter(item)',
          fontStyle: 'italic',
          color: '#e2e8f0'
        }
      }}
    >
      <Box display="inline">
        {title}
      </Box>
    </Box>
  )
}

export default PostItem
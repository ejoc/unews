import React from 'react'
import Box from '../Box';
import PostItem from '../PostItem';

const PostList = ({ posts }) => {
  return (
    <Box
      as="ol"
      mt={4}
      css={{
        '> * + *': {
          listStyleType: 'none',
          borderTopWidth: '1px',
          listStyle: 'none',
        },
        // 'li::before': {
        //   background: 'red',
        //   content: "'as'",
        // }
      }}
    >
      {posts.map(post => (
        <PostItem key={post.title} {...post} />
      ))}
    </Box>
  )
}

export default PostList;
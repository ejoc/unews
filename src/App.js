import React from 'react';
import { ThemeProvider } from 'emotion-theming'
import theme from './theme';
import Box from './components/Box';
import Layout from './components/Layout';
import PostList from './components/PostList';
import CSSReset from './components/CSSReset';
import fetch from 'axios';

const API_KEY = '489ca5d5c6e07f057ec7d9a6a69be9d8'
const END_POINT = `http://api.chartbeat.com/live/toppages/v3/?apikey=${API_KEY}&host=eluniverso.com&limit=5`;

const initialState = {
  loading: false,
  data: {},
  error: undefined
};


function reducer(state, action) {
  switch (action.type) {
    case 'request':
      return { ...state, loading: true }
    case 'succeed':
      return { loading: false, data: action.payload }
    case 'error':
      return { loading: false, error: action.error }
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  React.useEffect(() => {
    async function fecthData () {
      dispatch({ type: 'request' })
      try {
        const res = await fetch(END_POINT)
        dispatch({ type: 'succeed', payload: res.data })
        // console.log(res)
      } catch(error) {
        dispatch({ type: 'error', error })
      }
    }
    fecthData()
  }, [])

  if (state.loading) {
    return <Box>Loading..</Box>
  }

  if (state.error) {
    return <Box bg="red">{state.error.message}</Box>
  }

  const posts = state.data?.pages || []
  const displayPosts = posts.filter(post => post.stats.article !== 0)

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Layout>
        <Box mx="auto" maxWidth="500px">
          <Box
            fontSize="2xl"
            borderBottomWidth={1}
            borderBottomColor="#a6cae3"
            borderStyle="solid"
            color="#084F8D"
            pb={1}
          >
            LO MÁS LEÍDO
          </Box>
          <PostList posts={displayPosts} />
        </Box>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

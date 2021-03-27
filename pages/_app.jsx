import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'
import GlobalStyles from 'styles/GlobalStyles'
const queryClient = new QueryClient()

const App = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App

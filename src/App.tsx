import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { Router } from './Routes'
import store from './redux/store'
import { defaultTheme } from './styles/defaultTheme'
import { GlobalStyle } from './styles/global'
import { ScrollToTop } from './components/ScrollToTop'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Provider store={store}>
          <ScrollToTop />
          <Router />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

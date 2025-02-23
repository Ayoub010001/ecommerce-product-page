import { Provider } from 'react-redux'
import './App.css'
import Main from './components/Main'
import NavBar from './components/NavBar'
import { store } from './Store/Store'

function App() {

  return (
    <Provider store={store}>
      <NavBar />
      <Main />
    </Provider>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const  root = createRoot(document.getElementById('root'))
root.render(
<Provider store={store}>
  <App/>
</Provider>
)


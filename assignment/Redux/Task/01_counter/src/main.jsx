import { StrictMode } from 'react'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

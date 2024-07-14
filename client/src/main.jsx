// main.jsx
import ReactDOM from 'react-dom/client';
import store  from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/global.scss'; 

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter
    basename={
      import.meta.env.BASE_URL === '/'
        ? '/'
        : import.meta.env.BASE_URL.replace(/\/$/, '')
    }
  >
    <App />
  </BrowserRouter>
);

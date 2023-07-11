
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
// console.log(import.meta.env.VITE_CLIENT_ID)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={`577316870252-kusujbmtdcuiarskvlbkcmtk1oscuval.apps.googleusercontent.com`}>
      <App />
    </GoogleOAuthProvider>
  </Provider>
)

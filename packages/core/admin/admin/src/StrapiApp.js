import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './core/store/configureStore';
import reducers from './reducers';
import basename from './utils/basename';
import LanguageProvider from './containers/LanguageProvider';
// TODO remove
import App from './containers/App';
import Fonts from './components/Fonts';

// TODO
import translationMessages from './translations';

// const App = () => 'todo';

window.strapi = {
  backendURL: process.env.STRAPI_ADMIN_BACKEND_URL,
};

class StrapiApp {
  plugins = {};

  reducers = { ...reducers };

  async initialize() {
    console.log('initializing');

    return this;
  }

  async boot() {
    console.log('booting');

    return this;
  }

  render() {
    const store = configureStore(this);

    return (
      <Provider store={store}>
        <Fonts />
        <LanguageProvider messages={translationMessages}>
          <BrowserRouter basename={basename}>
            <App store={store} />
          </BrowserRouter>
        </LanguageProvider>
      </Provider>
    );
  }
}

export default () => new StrapiApp();

import Auth from '@aws-amplify/auth';
import { configureOpenVidu } from '@videoforce/use-openvidu';
import React from 'react';
import ReactDOM from 'react-dom';

import Widget from './Widget';

export interface Config {
  site: string;
  region: string;
  identityPoolId: string;
  identityPoolRegion: string;
  userPoolId: string;
  userPoolWebClientId: string;
  apiUrl: string;
}

export const init = (elementId: string, config: Config) => {
  const { apiUrl, site, ...authConfig } = config;
  configureOpenVidu(apiUrl);
  Auth.configure(authConfig);

  Auth.currentCredentials().then(() => {
    ReactDOM.render(<Widget site={site} />, document.getElementById(elementId));
  });
};

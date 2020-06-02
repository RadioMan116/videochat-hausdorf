import Auth from '@aws-amplify/auth';
import React from 'react';
import ReactDOM from 'react-dom';
import { User } from '@videoforce/commons';
import Widget from './Widget';
import { configureOpenVidu } from '@videoforce/use-openvidu';

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

  Auth.currentCredentials().then((credentials) => {
    const user: User = {
      identityId: credentials.identityId,
      role: 'viewer',
    };
    ReactDOM.render(
      <Widget user={user} site={site} />,
      document.getElementById(elementId),
    );
  });
};

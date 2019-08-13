import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider
  } from 'angularx-social-login';

export function getAuthServiceConfigs() {
    const config = new AuthServiceConfig([
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider : new GoogleLoginProvider('283622793536-89eahgn02p5d0fg37fsrjn0l6q64k20j.apps.googleusercontent.com')
      }
    ]);

    return config;
  }

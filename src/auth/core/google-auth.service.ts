import { Injectable, Scope } from '@nestjs/common';
import * as google from 'googleapis';
import * as config from 'src/auth/config';

@Injectable({ scope: Scope.DEFAULT }) //Singleton
export class GoogleAuthService {
  private oauth2Client: google.Auth.OAuth2Client;
  private authUrl: string;

  constructor() {
    this.oauth2Client = new google.Auth.OAuth2Client(
      config.GOOGLE_CLIENT_ID,
      config.GOOGLE_CLIENT_SECRET,
      config.GOOGLE_REDIRECT_URI,
    );

    this.generateAuthUrl();
  }

  private generateAuthUrl() {
    const scopes = [
      config.SCOPE_CALENDAR,
      config.SCOPE_CONTACTS,
      config.SCOPE_EMAIL,
      config.SCOPE_PROFILE,
    ];

    this.authUrl = this.oauth2Client.generateAuthUrl({
      access_type: config.ACCESS_TYPE,
      scope: scopes,
    });
  }

  getAuthUrl() {
    return this.authUrl;
  }
}

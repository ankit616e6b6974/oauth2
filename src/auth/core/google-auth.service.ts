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

  async getToken(code):Promise<any>{
    return await this.oauth2Client.getToken(code);
  }

  async getUserInfo(tokens):Promise<any>{
    const userInfo = await google.google.people('v1').people.get({
      'personFields': 'names,emailAddresses',
      'resourceName': 'people/me',
    }, {
      headers: {
        Authorization: `Bearer ${tokens.tokens.access_token}`,
      },
    });

    return userInfo
  }

  getAuthUrl() {
    return this.authUrl;
  }
}

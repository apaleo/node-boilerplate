import axios from 'axios';
import * as qs from 'querystring';
import { AccessToken, TokenCredential } from '@azure/core-http';

export class ApaleoOauth implements TokenCredential {
  private readonly httpClient = axios.create();

  public async getToken(): Promise<AccessToken | null> {
    if (!process.env.APALEO_CLIENT_ID || !process.env.APALEO_CLIENT_SECRET) {
      throw new Error('Apaleo client ID or secret missing');
    }

    const now = new Date();

    const response = await this.httpClient.post(
      `${process.env.APALEO_IDENTITY_URL}/connect/token`,
      qs.stringify({
        grant_type: 'client_credentials',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: process.env.APALEO_CLIENT_ID,
          password: process.env.APALEO_CLIENT_SECRET,
        },
      }
    );

    return {
      token: response.data.access_token,
      expiresOnTimestamp: now.getTime() + response.data.expires_in * 1000,
    };
  }
}

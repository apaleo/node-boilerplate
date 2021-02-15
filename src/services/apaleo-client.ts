import {
  ApaleoBookingAPI,
  ReservationModel,
} from '../../clients/apaleo/booking/client';
import { ApaleoOauth } from './apaleo-oauth';

export class ApaleoClient {
  private baseUrl = 'https://api.apaleo-staging.com';

  constructor(private apaleoOAuthService: ApaleoOauth = new ApaleoOauth()) {}

  public async getReservation(id: string): Promise<ReservationModel> {
    const client: ApaleoBookingAPI = new ApaleoBookingAPI(
      this.apaleoOAuthService,
      this.baseUrl
    );
    try {
      return await client.bookingReservationsByIdGet(id);
    } catch (error) {
      console.log(error);
    }
  }
}

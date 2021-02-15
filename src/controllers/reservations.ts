import { Request, Response } from 'express';
import { ApaleoClient } from '../services/apaleo-client';

/**
 * Get reservation by id
 * @route GET /reservations/:id
 */
export const getReservationById = async (req: Request, res: Response) => {
  const reservationService = new ApaleoClient();
  const reservation = await reservationService.getReservation(req.params.id);

  res.json(reservation);
};

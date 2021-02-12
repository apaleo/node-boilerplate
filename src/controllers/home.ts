import { Request, Response } from 'express';
import path from "path";

/**
 * Home page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
  res.sendFile(path.dirname(require.main.filename) + '/views/home.html');
};

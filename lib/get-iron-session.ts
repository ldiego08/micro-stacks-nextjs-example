import { NextPageContext } from 'next';
import * as Iron from 'iron-session';
import { sessionOptions } from './session';
import { AppContext } from 'next/app';

export const getIronSession = (req: NextPageContext['req'], res: NextPageContext['res']) => {
  return Iron.getIronSession(req as any, res as any, sessionOptions);
};

export const getSessionFromAppContext = (appContext: AppContext) => {
  return getIronSession(appContext.ctx.req, appContext.ctx.res);
};

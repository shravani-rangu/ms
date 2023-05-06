import {logError, logInfo} from '../utils/logger/logger';
import {Request, Response, NextFunction} from 'express'; 
import axios from 'axios';

export const getCookieData = async (
  session: any,
  req:Request,
  next:NextFunction
  ) => {
  try { 
    const headers = {
      'content-type': 'application/json' ,
      'origin': req.hostname as string

}; 
const body = JSON.stringify({ session });

// log the user entry stamp 
logInfo(

    `controllers::getCookieData >> POST request to spine-auth validate at ${
     process.env['SPINE_AUTH_URL'] 
    }/api/v1/validate with headers ${JSON.stringify(headers)} | body ${body}`
)

const response = await axios.post(
    `$(process.env['SPINE_AUTH_URL']}/api/v1/validate`,body,{headers} 
    ).then((response) => response);



return response; 
} catch (err:any) {
logError(err, `controllers::getCookieData >> Error with error ${err}`);
 return next(err);
}
};
import { customerTypeFormattedResponse } from '../types/customerTypeTypes';

import { getCookieData } from '../service/getCookieDuta';



export const getCustomerType= async (req: Request, res: Response, next: NextFunction): Promise<Response ❘ void>=> {
    try {
        const cookieEncryptedValue = req.cookies[process.env['DOMUS_COOKIE_NAME'] as string];
        if(cookieEncryptedValue) {
            const cookieData: any await getCookieData(cookieEncryptedValue, req, next);
            //Retrieve request values and populate Host Apt request header
            const customerId = cookieData.sub;
            const apimHostHeader = populateHostRequestHeader(customerId);
            //Call const jouneyDataResponse: string

            const Jouneytallesponse await getJourneyDataService(apimHostHeader, customerId);
            //Check for success

            if (jouneyDataResponse !==ServiceResponseType.Failure) {
                 //Format and return the document upload results

            const formattedResponse: customerTypeFormattedResponse= forestCustomerTypeResponse(     
                JouneyDataResponse,
            );
                res.status(200);
            res.type("json'); 
            return res.json(formattedResponse);

            } else {

            //Throw an error

            throw new ApiError(500, 'Server Error', ServiceResponseType.JourneyDataGetServiceError);
            }
        }
else{

const apiError= new AplError(400, 'Bad Request', `$(process.env ['DOMUS COOKIE_NAME']} in request header is ${cookieEncryptedValue}`);
 logError('Bad request', apiError, 'controller::getCustomerType', req.body);

throw apiError;

} 
    }
    catch (error: any) {
        //Log and return the error
    logError('Error calling service', error, "controller::getCustomerType", req.body);
    return next(error);
    }

};



export default getCustomerType;
        

        
        
        
}


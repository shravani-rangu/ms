import getCustomerType from '../../../controllers/customerType'
import {Router} from 'express'
import logAxiosRequest from '../../../utils/intercepter/axiosIntercepter';

logAxiosRequest();
    const v1Router=Router();
    v1Router.get('/getCustomerType',getCustomerType);
    export default v1Router;
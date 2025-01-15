import jwt from 'jsonwebtoken';
import {catchErrorHandler} from '../utils/catchErrorHandler.js';

export const nurseAuth = (req, res, next) => {
    try {
        // Get token
        const {token} = req.cookies;

        
    } catch (error) {
        
    }
}
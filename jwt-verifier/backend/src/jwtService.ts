import * as jwt from 'jsonwebtoken'

export const generateJWT = (payload:object, secretKey:string)=> {
    const token = jwt.sign({
        data: payload,
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, secretKey);
}

export const verifyJWT = (token:string, secretKey:string)=> {
    
}
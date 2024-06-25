import * as dotenv from 'dotenv';
import path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env')});

export type Env = {
    readonly PROJECT_NAME: string,
    readonly ENVIROMENT: string,
    readonly S3_IMAGE_BUCKET_NAME: string
}
console.log(process.env);
const ensureString = (value:any): string => {
    if(!value || value.length ===0) {
        throw new Error('Env Not Configured Correctly');
    }
    return value;
}

export const getConfig = (): Env => {
    return {
        PROJECT_NAME: ensureString(process.env.PROJECT_NAME),
        ENVIROMENT: ensureString(process.env.ENVIROMENT),
        S3_IMAGE_BUCKET_NAME: ensureString(process.env.S3_IMAGE_BUCKET_NAME)
    }
}
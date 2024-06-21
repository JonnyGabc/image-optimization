import * as dotenv from 'dotenv';
import path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env')});

export type Env = {
    ENVIROMENT: string,
    S3_IMAGE_BUCKET_NAME: string
}

if (!process.env.ENVIROMENT || process.env.S3_IMAGE_BUCKET_NAME) {
    throw new Error('Env Not Configured Correctly');
}

export const getConfig = (): Env => {
    return {
        ENVIROMENT: process.env.ENVIROMENT
        S3_IMAGE_BUCKET_NAME: process.env.S3_IMAGE_BUCKET_NAME
    }
}
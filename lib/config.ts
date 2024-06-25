import * as dotenv from 'dotenv';
import path = require('path');

dotenv.config({ path: path.resolve(__dirname, './.env')});

export type Env = {
    PROJECT_NAME: string,
    ENVIROMENT: string,
    S3_IMAGE_BUCKET_NAME: string
}

if (!process.env.PROJECT_NAME|| !process.env.ENVIROMENT || !process.env.S3_IMAGE_BUCKET_NAME) {
    throw new Error('Env Not Configured Correctly');
}

export const getConfig = (): Env => {
    return {
        PROJECT_NAME: process.env.PROJECT_NAME || 'test',
        ENVIROMENT: process.env.ENVIROMENT || 'test',
        S3_IMAGE_BUCKET_NAME: process.env.S3_IMAGE_BUCKET_NAME || ''
    }
}
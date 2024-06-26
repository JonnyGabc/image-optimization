import * as dotenv from 'dotenv';
import path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env')});

export type Env = {
    readonly PROJECT_NAME: string,
    readonly ENVIRONMENT: string,
    readonly S3_IMAGE_BUCKET_NAME: string
}
const validString = (value:any): string => {
    if(!value || value.length === 0) {
        throw new Error('.env Not Configured Correctly. Look at sample.env');
    }
    return value;
}

export const getConfig = (): Env => {
    return {
        PROJECT_NAME: validString(process.env.PROJECT_NAME),
        ENVIRONMENT: validString(process.env.ENVIRONMENT),
        S3_IMAGE_BUCKET_NAME: validString(process.env.S3_IMAGE_BUCKET_NAME)
    }
}
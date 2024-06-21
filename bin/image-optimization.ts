#!/usr/bin/env node

import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ImageOptimizationStack } from '../lib/image-optimization-stack';
import { getConfig } from '../lib/config';

const config = getConfig();

const app = new cdk.App();
new ImageOptimizationStack(app, `${config.ENVIROMENT}-ImgTransformationStack`, config);

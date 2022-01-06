#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ToolboxBaseStack } from '../lib/toolbox-base-stack';

const app = new cdk.App();
new ToolboxBaseStack(app, 'ToolboxBaseStack', {
  env: {
    account: '822585835475',
    region: 'us-west-2',
  }
});

app.synth();

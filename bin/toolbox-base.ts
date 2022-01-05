#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ToolboxBaseStack } from '../lib/toolbox-base-stack';

const app = new cdk.App();
new MyPipelineStack(app, 'MyPipelineStack', {
  env: {
    account: '822585835475',
    region: 'us-west-2',
  }
});

app.synth();

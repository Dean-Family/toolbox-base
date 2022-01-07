import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DockerImageAsset } from 'aws-cdk-lib/aws-ecr-assets';
import * as path from 'path';

export class ToolboxBaseEcrStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      //new Repository(this, 'ContainerImage');
      new DockerImageAsset(this, 'ContainerImage', {
        directory: path.join(__dirname, 'container')
      });
    }
}

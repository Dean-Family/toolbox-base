import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Repository } from @aws-cdk/aws-ecr;

export class ToolboxBaseEcrStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      new Repository(this, 'ToolboxBase');
    }
}

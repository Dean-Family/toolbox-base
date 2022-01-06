import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import { ToolboxBaseEcrStack } from './my-pipeline-lambda-stack';

export class ToolboxBaseEcrStage extends cdk.Stage {
    
    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
      super(scope, id, props);
  
      const ecrStack = new ToolboxBaseEcrStack(this, 'Toolbox Base Repo');      
    }
}

import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { ToolboxBaseEcrStage } from './toolbox-base-ecr-stage'

export class ToolboxBaseStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'ToolboxBase',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.connection('Dean-Family/toolbox-base', 'main', {
            connectionArn: 'arn:aws:codestar-connections:us-west-2:822585835475:connection/955d3126-4e46-4c16-9e98-cba0fc7f9558',
        }),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });
    pipeline.addStage(new ToolboxBaseEcrStage(this, "test"));
  }
}

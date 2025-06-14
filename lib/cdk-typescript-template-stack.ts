import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

// const __dirname = import.meta.dirname;  

export class CdkTypeScriptTemplateStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  }
}

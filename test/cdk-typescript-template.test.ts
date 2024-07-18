import { describe, it, expect } from 'vitest';
import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import { CdkTypeScriptTemplateStack } from '../lib/cdk-typescript-template-stack';

describe('CdkTypeScriptTemplateStack', () => {
  it('creates an empty stack', () => {
    const app = new cdk.App();
    const stack = new CdkTypeScriptTemplateStack(app, 'MyTestStack');
    const template = Template.fromStack(stack);

    // Implement tests here.
  });
});

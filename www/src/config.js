// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "15kr0nvrto63frg17fdbdrn60u",     // CognitoClientID
  "api_base_url": "https://7o8u6ksot5.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-techweekdemo.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1ianra3ju95cy.amplifyapp.com"                                      // AmplifyURL
};

export default config;

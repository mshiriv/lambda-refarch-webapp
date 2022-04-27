// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "3dlavbqa7f712bdifbau80lbri",     // CognitoClientID
  "api_base_url": "https://8h0diw0xzg.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-techweekdemo.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1dwx2cdvg5mih.amplifyapp.com"                                      // AmplifyURL
};

export default config;

AWS.config.region="us-east-1"
AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-1:940d3945-8a8f-4c11-9b86-ac6351c3ee26',RoleArn:"arn:aws:iam::311462725992:role/service-role/trustRoleInsightsApp"})


var cloudwatchlogs = new AWS.CloudWatchLogs();


var params = {
    logGroupName: '/aws/lambda/test2Func',
  };
  cloudwatchlogs.describeLogStreams(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
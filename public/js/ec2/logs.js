AWS.config.update({ 
    region: "us-east-1",
 accessKeyId:"AKIAURBFABFUMLS7W7FW",
secretAccessKey:"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"});

var cloudwatchlogs = new AWS.CloudWatchLogs();


var params = {
    logGroupName: '/aws/lambda/test2Func',
  };
  cloudwatchlogs.describeLogStreams(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
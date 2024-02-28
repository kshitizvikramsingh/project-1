

var cloudwatch = new AWS.CloudWatch()
endTime = new Date()
console.log(endTime)
const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));  
console.log(yesterday)
var params = {
    EndTime: endTime, /* required */
    MetricName: 'CPUUtilization', /* required */
    Namespace: 'AWS/EC2', /* required */
    Period: '3600', /* required */
    StartTime:yesterday, /* required */
    Dimensions: [
      {
        Name: 'InstanceId', /* required */
        Value: 'i-0b7e9408b87ea8023' /* required */
      },
      /* more items */
    ],
    Statistics: [
      "Maximum"
      /* more items */
    ],
    Unit: "Seconds"
  };
  cloudwatch.getMetricStatistics(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
AWS.config.region="us-east-1"
AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-1:940d3945-8a8f-4c11-9b86-ac6351c3ee26',RoleArn:"arn:aws:iam::311462725992:role/service-role/trustRoleInsightsApp"})
let cpu=[];
let period=[];
var cloudwatch = new AWS.CloudWatch()
endTime = new Date()
console.log(endTime)
const yesterday = new Date(new Date().setDate(new Date().getDate() - 186));  
console.log(yesterday)
var params = {
    EndTime: endTime, /* required */
    MetricName: 'CPUUtilization', /* required */
    Namespace: 'AWS/EC2', /* required */
    Period: '2678400', /* required */
    StartTime:yesterday, /* required */
    Dimensions: [
      {
        Name: 'InstanceId', /* required */
        Value: 'i-0b7e9408b87ea8023' /* required */
      },
      /* more items */
    ],
    Statistics: [
      "Average"
      /* more items */
    ]
  };
  cloudwatch.getMetricStatistics(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else  
    {
        console.log(data);
        for(let i=0;i<5;i++){
            period[i]=data.Datapoints[i].Timestamp
           cpu[i]= data.Datapoints[i].Average
        }
        
    }         
      period.sort()  
    let chartDiv=document.createElement("div")
              document.body.appendChild(chartDiv)
              let canvas=document.createElement("canvas")
              canvas.id="myChart1"
              canvas.style.textAlign="center"
              chartDiv.appendChild(canvas)
              const ctx = document.getElementById('myChart1');
         console.log(cpu)
          //console.log(period)
              new Chart(ctx, {
                
                data: {
                  labels:period,
                  datasets: [{
                    type:"bar",
                    label:"CPU Utilization in last 6 months",
                    data: cpu
                  }]
                },
                options: {
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  },
                  layout:{
                    padding:20
                  }
                }
              });
    
    
    
    // successful response
  });
  console.log(cpu)
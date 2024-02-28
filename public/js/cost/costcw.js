let sum3=0;
var params2 = {
    Granularity:"MONTHLY", /* required */
    Metrics: [ /* required */
      'UnblendedCost',
      /* more items */
    ],
    TimePeriod: { /* required */
      End: '2024-01-31', /* required */
      Start: '2023-08-01' /* required */
    },
    Filter: { /* Expression */
      Dimensions: {
        Key:"SERVICE",
        Values: ["AmazonCloudWatch"],
        MatchOptions: [
            
            /* more items */
          ]
            
            /* more items */
          
      
      }
    },
  };
  

costexplorer.getCostAndUsage(params2, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else    {
    console.log(data)
    document.body.append(document.createElement("br"))
    let p1=document.createElement("p")
    p1.innerText="Cost in last 6 months by CloudWatch:"
    p1.style.fontWeight=600
    p1.className="title is-3"
    document.body.append(p1)
    document.body.append(document.createElement("br"))
    for(let i=0; i<data.ResultsByTime.length;i++){
        console.log(data.ResultsByTime[i].Total.UnblendedCost.Amount)
        document.body.append(document.createElement("p").innerText="Month Start date-"+data.ResultsByTime[i].TimePeriod.Start)
        document.body.append(document.createElement("p").innerText="Till-"+data.ResultsByTime[i].TimePeriod.End+"➡️")
        document.body.append(document.createElement("p").innerText="  ₹"+data.ResultsByTime[i].Total.UnblendedCost.Amount*82.90)
        document.body.append(document.createElement("br"))
        sum3=sum3+ data.ResultsByTime[i].Total.UnblendedCost.Amount*82.90
        console.log("Sum is "+sum3) 
    }
    let p2=document.createElement("p")
    p2.innerText="Total cost is: "+"₹"+sum3
    p2.style.color="blue"
    document.body.append(p2)
  } ;           // successful response
});
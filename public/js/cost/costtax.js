let sum2=0;
var params3 = {
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
        Values: ["Tax"],
        MatchOptions: [
            
            /* more items */
          ]
            
            /* more items */
          
      
      }
    },
  };

costexplorer.getCostAndUsage(params3, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else    {
      console.log(data)
      document.body.append(document.createElement("br"))
    let p1=document.createElement("p")
    p1.innerText="Cost in last 6 months by Tax:"
    p1.style.fontWeight=600
    p1.className="title is-3"
    document.body.append(p1)
      document.body.append(document.createElement("br"))
      for(let i=0; i<data.ResultsByTime.length;i++){
          console.log(data.ResultsByTime[i].Total.UnblendedCost.Amount)

          let div=document.createElement("div")
      div.className="card"
      document.body.appendChild(div)

          let timeStart=document.createElement("p")
          timeStart.innerText="Month Start date-"+data.ResultsByTime[i].TimePeriod.Start
          div.appendChild(timeStart)
          
          let timeEnd=document.createElement("p")
          timeEnd.innerText="Till-"+data.ResultsByTime[i].TimePeriod.End+"➡️"
          div.appendChild(timeEnd)

          let amt=document.createElement("p")
          amt.innerText="  ₹"+data.ResultsByTime[i].Total.UnblendedCost.Amount*82.90
          amt.style.color="green"
          div.appendChild(amt)

          document.body.append(document.createElement("br"))

          sum2=sum2+ data.ResultsByTime[i].Total.UnblendedCost.Amount*82.90
       console.log("Sum is "+sum2)
      }
      let p2=document.createElement("p")
      p2.innerText="Total cost is: "+"₹"+sum2
      p2.style.color="blue"
      document.body.append(p2)
    } ;           // successful response
  });
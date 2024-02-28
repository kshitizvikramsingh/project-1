AWS.config.region="us-east-1"
AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-1:940d3945-8a8f-4c11-9b86-ac6351c3ee26',RoleArn:"arn:aws:iam::311462725992:role/service-role/trustRoleInsightsApp"})




let services=[]
var params = {
    Dimension: "SERVICE", /* required */
    TimePeriod: { /* required */
      End: '2024-01-31', /* required */
      Start: '2023-08-01' /* required */
    },
    Context: "COST_AND_USAGE",
    SortBy: [
      {
        Key: 'UnblendedCost', /* required */
        SortOrder: "ASCENDING"
      },
      /* more items */
    ]
  };
  let inputService=document.createElement("select")
  var costexplorer = new AWS.CostExplorer({apiVersion: '2017-10-25'});
  costexplorer.getDimensionValues(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     {
        for(let i=0;i<data.DimensionValues.length;i++){
            services[i]=data.DimensionValues[i].Value
            console.dir("get dimension values data: "+data.DimensionValues[i].Value) 
            var option = document.createElement("option");
            option.text = services[i];
            inputService.add(option)
            
        }
        
       document.body.appendChild(inputService)
        

        var params2 = {
            Granularity:"MONTHLY", /* required */
            Metrics: [ /* required */
              'UnblendedCost',
              /* more items */
            ],
            TimePeriod: { /* required */
              End: "2024-01-31", /* required */
              Start: "2023-08-01" /* required */
            },
            Filter: { /* Expression */
              Dimensions: {
                Key:"SERVICE",
                Values: services,
                MatchOptions: [
                    
                    /* more items */
                  ]
                    
                    /* more items */
                  
              
              }
            },
          };

``
          costexplorer.getCostAndUsage(params2, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else    {
              console.log(data)
              document.body.append(document.createElement("br"))
          
             
          
          
              let h1=document.createElement("h1")
              h1.innerText="Cost in last 6 months by "+services
              h1.style.fontWeight=600
              h1.className="title is-3"
              document.body.append(h1)
               
              document.body.append(document.createElement("br"))
              for(let i=0; i<data.ResultsByTime.length;i++){
                  console.log(data.ResultsByTime[i].Total.UnblendedCost.Amount)
          
                let div=document.createElement("div")
                div.className="card"
                document.body.appendChild(div)
                  let timeStart=document.createElement("p")
                  timeStart.innerText="Month Start date-"+data.ResultsByTime[i].TimePeriod.Start
                  div.appendChild(timeStart)
          
                  let timeStop=document.createElement("p")
                  timeStop.innerText="Till-"+data.ResultsByTime[i].TimePeriod.End+"➡️"
                  div.appendChild(timeStop)
          
                  periodStop=data.ResultsByTime[i].TimePeriod.End
                  periodStart[i]=data.ResultsByTime[i].TimePeriod.Start
                  chartData[i]=data.ResultsByTime[i].Total.UnblendedCost.Amount*82.90
          
                  let amt=document.createElement("p")
                  amt.innerText="  ₹"+data.ResultsByTime[i].Total.UnblendedCost.Amount*82.90
                  amt.style.color="green"
                  div.appendChild(amt)
          
                 document.body.append(document.createElement("br"))
          
                 sum=sum+ data.ResultsByTime[i].Total.UnblendedCost.Amount*82.90
                 console.log("Sum is "+sum)
                 
                  
              }
              console.log("periodStart"+periodStart)
              let p2=document.createElement("p")
              p2.innerText="Total cost is: "+"₹"+sum
              p2.style.color="blue"
              document.body.append(p2)
              // chart for ec2 cost 
              let chartDiv=document.createElement("div")
              document.body.appendChild(chartDiv)
              let canvas=document.createElement("canvas")
              canvas.id="myChart"
              canvas.style.textAlign="center"
              chartDiv.appendChild(canvas)
              const ctx = document.getElementById('myChart');
          
              new Chart(ctx, {
                
                data: {
                  labels: periodStart,
                  datasets: [{
                    type:"bar",
                    label:"test",
                    data: chartData
                  },
                  {
                    type:"bar",
                    label: 'Cost in last 6 months by EC2',
                    data: chartData,
                    backgroundColor: [
                      'rgba(255, 99, 132)',
                      'rgba(255, 159, 64)',
                      'rgba(255, 205, 86)',
                      'rgba(75, 192, 192)',
                      'rgba(54, 162, 235)',
                      'rgba(153, 102, 255)',
                      'rgba(201, 203, 207)'
                    ],
                    borderWidth: 1
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
            } ;           // successful response
          });
        console.log("services from service script: "+services[0]) 
        
        
          }        // successful response
  });
  
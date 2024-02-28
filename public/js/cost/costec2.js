AWS.config.region="us-east-1"
AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-1:940d3945-8a8f-4c11-9b86-ac6351c3ee26',RoleArn:"arn:aws:iam::311462725992:role/service-role/trustRoleInsightsApp"})
let e;
let start=document.getElementById("startDate")
e=start.options[start.selectedIndex].value
  console.log("button "+e)
let end=document.getElementById("endDate")

let button=document.getElementById("changeDate")
button.addEventListener("click",(event)=>{
  event.preventDefault()
  selectElement = 
  document.querySelector('#startDate');
output = selectElement.value;
console.log(output);
})


  console.log("services from ec2 script: "+services[0])    
     


var costexplorer = new AWS.CostExplorer({apiVersion: '2017-10-25'});
let sum=0;

  
  let chartData=[];
  let periodStart=[];
  let periodStop=[];








  


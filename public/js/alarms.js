
AWS.config.region="us-east-1"
AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-1:940d3945-8a8f-4c11-9b86-ac6351c3ee26',
RoleArn:"arn:aws:iam::311462725992:role/service-role/trustRoleInsightsApp"})

// Create CloudWatch service object
var cw = new AWS.CloudWatch({ apiVersion: "2010-08-01" });

cw.describeAlarms({ StateValue: "ALARM" }, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    let heading=document.createElement("h1")
    heading.innerText="Alarms in 'ALARM' Status"
    heading.className="title"
    document.body.appendChild(heading)
    // List the names of all current alarms in the console
    data.MetricAlarms.forEach(function (item, index, array) {
      console.log(item.AlarmName);
      console.log(item.AlarmDescription);
let div2=document.createElement("div")
div2.className="card"
document.body.appendChild(div2)
      let alarmName=document.createElement("p")
      alarmName.innerText="Alarm Name:🔔 "+item.AlarmName
      alarmName.style.fontWeight=600
      alarmName.style.color="blue"
      div2.appendChild(alarmName)
      

      if(typeof(div)!==null){
        document.querySelector(".preload").style.display="none"
        
    }
    else{
        document.querySelector(".preload").style.display="block"
    }

      document.body.append(document.createElement("br"))
      let alarmDesc=document.createElement("p")
      alarmDesc.innerText="Alarm Description:📄 "+item.AlarmDescription
      alarmDesc.style.color="green"
      alarmDesc.style.fontWeight=600
        div2.appendChild(alarmDesc)
        document.body.append(document.createElement("br"))
    });
    
  }
});

//insufficient data alarms


cw.describeAlarms({ StateValue: "OK" }, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    let heading=document.createElement("h1")
    heading.innerText="Alarms in 'OK' Status"
    heading.className="title"
    document.body.appendChild(heading)
    // List the names of all current alarms in the console
    data.MetricAlarms.forEach(function (item, index, array) {
      console.log(item.AlarmName);
      console.log(item.AlarmDescription);
let div2=document.createElement("div")
div2.className="card"
document.body.appendChild(div2)
      let alarmName=document.createElement("p")
      alarmName.innerText="Alarm Name:🔔 "+item.AlarmName
      alarmName.style.fontWeight=600
      alarmName.style.color="blue"
      div2.appendChild(alarmName)
      

      if(typeof(div)!==null){
        document.querySelector(".preload").style.display="none"
        
    }
    else{
        document.querySelector(".preload").style.display="block"
    }

      document.body.append(document.createElement("br"))
      let alarmDesc=document.createElement("p")
      alarmDesc.innerText="Alarm Description:📄 "+item.AlarmDescription
      alarmDesc.style.color="green"
      alarmDesc.style.fontWeight=600
        div2.appendChild(alarmDesc)
        document.body.append(document.createElement("br"))
    });
    
  }
});

// Set the region
AWS.config.region="us-east-1"
AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-1:940d3945-8a8f-4c11-9b86-ac6351c3ee26',RoleArn:"arn:aws:iam::311462725992:role/service-role/trustRoleInsightsApp"})

// Create EC2 service object
var ec2 = new AWS.EC2({ apiVersion: "2016-11-15" });
let instances=[];
var params = {
  DryRun: false,
};



// Call EC2 to retrieve policy for selected bucket
ec2.describeInstances(params, function (err, data) {
  if (err) {
    console.log("Error", err.stack);
  } else {
    //console.log(data.Reservations[1].Instances[0])

    for(let i=0;i<data.Reservations.length;i++){
        // console.log(data.Reservations[i].Instances[0].InstanceId)
       instances[i]=data.Reservations[i].Instances[0].InstanceId
    //console.log(instances)
    //console.log(data.Reservations[i])

    let div=document.createElement("div")
div.className="card"
document.body.appendChild(div)
        let image=document.createElement("img")
        image.src="/img/ec2.png"
        div.appendChild(image)
        let title=document.createElement("p")
        title.innerText="Instance No.  "+(i+1)+"\nClick here to get more details about the instance"
        title.style.fontWeight=600
        div.appendChild(title)


    div.addEventListener("click",()=>{
      let notification=document.createElement("div")
      let cancel=document.createElement("button")
      notification.className="notification is-primary"
      notification.style.marginBottom=20+ "px" 
      notification.style.position="relative"
      notification.popover
      cancel.className="delete"
      notification.appendChild(cancel)
      document.body.appendChild(notification)
  
      ec2.describeInstances(params, function (err, data) {
        if (err) {
          console.log("Error", err.stack);
        } else {
          console.log(data.Reservations[i])

          
          let instanceId=document.createElement("p")
          instanceId.innerText="Instance ID: "+data.Reservations[i].Instances[0].InstanceId
          notification.appendChild(instanceId)
          let instanceType=document.createElement("p")
          instanceType.innerText="Instance Type: "+data.Reservations[i].Instances[0].InstanceType
          notification.appendChild(instanceType)
          let instanceState=document.createElement("p")
          instanceState.innerText="Instance State: "+ data.Reservations[i].Instances[0].State.Name
          instanceState.style.fontWeight=600
          notification.appendChild(instanceState)

          cancel.addEventListener("click",()=>{
            notification.removeChild(instanceId)
            notification.removeChild(instanceState)
            notification.removeChild(instanceType)
            document.body.removeChild(notification)
            
        })
        }
      })

      

    })
    }
  }
})
    
  

console.log(instances)
var params2 = {
    InstanceIds:
       instances
    
   };
   let button=document.getElementById("button1")
   
   if(button){
    button.addEventListener("click",(e)=>{
        e.preventDefault()
        ec2.startInstances(params2, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log("start instance data:"+data);           // successful response
            /*
            data = {
             StartingInstances: [
                {
               CurrentState: {
                Code: 0, 
                Name: "pending"
               }, 
               InstanceId: "i-1234567890abcdef0", 
               PreviousState: {
                Code: 80, 
                Name: "stopped"
               }
              }
             ]
            }
            */
          });
       }) 
   }
   
   let button2=document.getElementById("btn2")
   button2.addEventListener("click",()=>{
    var params = {
        InstanceIds: instances
       };
       ec2.stopInstances(params, function(err, data) {
         if (err) console.log(err, err.stack); // an error occurred
         else     console.log(data);           // successful response
         /*
         data = {
          StoppingInstances: [
             {
            CurrentState: {
             Code: 64, 
             Name: "stopping"
            }, 
            InstanceId: "i-1234567890abcdef0", 
            PreviousState: {
             Code: 16, 
             Name: "running"
            }
           }
          ]
         }
         */
       });
   })
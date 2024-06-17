// AWS.config.region="us-east-1"
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-1:940d3945-8a8f-4c11-9b86-ac6351c3ee26',RoleArn:"arn:aws:iam::311462725992:role/service-role/trustRoleInsightsApp"})

// var iam = new AWS.IAM({apiVersion: '2010-05-08'});



const btn2=document.getElementById("deleteUser")
btn2.addEventListener("click",(event)=>{
    event.preventDefault()


console.log("Hello")

    let deleteUser=document.getElementById("inputDelete")
let delUser=deleteUser.value
var params = {
    UserName: delUser
   };
   iam.deleteUser(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else    {
        console.log(data);   


        let user=document.createElement("div")
            user.className="card"
            user.style.backgroundColor="red"
            user.style.color="white"
            user.textContent="Deleted User with request Id: "+data.ResponseMetadata.RequestId
            document.body.appendChild(user)
     }         // successful response
   });
})

AWS.config.region="us-east-1"
AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-1:940d3945-8a8f-4c11-9b86-ac6351c3ee26',RoleArn:"arn:aws:iam::311462725992:role/service-role/trustRoleInsightsApp"})

var iam = new AWS.IAM({apiVersion: '2010-05-08'});


console.log(window.location.search)



const btn=document.getElementById("createUser")
btn.addEventListener("click",(event)=>{
    event.preventDefault()

    let user=document.getElementById("input")
let userNamez=user.value
console.log(userNamez)
var params = {
    UserName: userNamez
   };



   console.log("hello")
   console.log(params.UserName)
       iam.createUser(params, function(err, data) {
         if (err) console.log(err, err.stack); // an error occurred
         else     {
            console.log(data);
            let user=document.createElement("div")
            user.className="card"
            user.style.backgroundColor="green"
            user.style.color="white"
            user.textContent="New User created with the name: "+data.User.UserName+" "+"AWS arn: "+data.User.Arn
            document.body.appendChild(user)
         } 
        });   
})
       // successful response
     /*
     data = {
      User: {
       Arn: "arn:aws:iam::123456789012:user/Bob", 
       CreateDate: <Date Representation>, 
       Path: "/", 
       UserId: "AKIAIOSFODNN7EXAMPLE", 
       UserName: "Bob"
      }
     }
     */
  
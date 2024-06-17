var params = {
};


const btn3=document.getElementById("listUsers")
btn3.addEventListener("click",(event)=>{
    event.preventDefault()
console.log("Hello")

    iam.listUsers(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else    {
      
          console.log(data.Users[0]);  
      
          let user=document.createElement("div")
          user.className="card"
          user.style.backgroundColor="blue"
          user.style.color="white"
          for(let i=0;i<data.Users.length;i++){
              let txt=document.createTextNode(i+". "+data.Users[i].UserName)
              user.appendChild(txt)
              user.appendChild(document.createElement("br"))
              document.body.appendChild(user)
          }
          
          
        }          // successful response
        /*
        data = {
         Users: [
            {
           Arn: "arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/engineering/Juan", 
           CreateDate: <Date Representation>, 
           PasswordLastUsed: <Date Representation>, 
           Path: "/division_abc/subdivision_xyz/engineering/", 
           UserId: "AID2MAB8DPLSRHEXAMPLE", 
           UserName: "Juan"
          }, 
            {
           Arn: "arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/engineering/Anika", 
           CreateDate: <Date Representation>, 
           PasswordLastUsed: <Date Representation>, 
           Path: "/division_abc/subdivision_xyz/engineering/", 
           UserId: "AIDIODR4TAW7CSEXAMPLE", 
           UserName: "Anika"
          }
         ]
        }
        */
      });

})

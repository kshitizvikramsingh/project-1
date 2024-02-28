let cancel=document.getElementById("delete")
cancel.addEventListener("click",()=>{
    let notification=document.getElementById("notification")
    document.body.removeChild(notification)
})
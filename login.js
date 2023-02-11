function validate(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("password").value;
    
    if(username.trim()==""){
        alert("Username must be filled");
        return false;
    }else if(password.trim()==""){
        alert("Password must be filled");
        return false;
    }else if(password.length<5){ 
        alert("Password too short")
        return false;
    }else{
        alert("You have logged in successfully");
    }
    }
    
function login(event) {

    // Where did the event happend
    const form = event.currentTarget;

    // Collect Data from Form
    const username = form.elements["inputEmail"].value; 
    const password = form.elements["inputPassword"].value; 

    // Perform Logic
    if(username == "2@3.om" && password == "password") {
        window.location.href = '/'; 
    }
    else {
        alert("Invalid User")
    }
    
    return false;
}
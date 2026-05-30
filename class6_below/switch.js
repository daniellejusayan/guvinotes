//switch is used to compare 1 value with multiple options

switch(expression ){
    case value1:
        // code to execute if expression equals value1
        break;
    case value2:
        // code to execute if expression equals value2
        break;
    default:
        // code to execute if expression doesn't match any case
}

let grade = "A";
switch(grade){
    case "A": 
        console.log("Excellent");
        break; // break is used to exit the switch statement after a case is matched
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    default:
        console.log("Invalid grade");
}

let role = "admin";
switch(role){
    case "manager":
        console.log("Manager Access");
        break;
    case "admin":
        console.log("Admin Access");
        break; 
    case "user":
        console.log("User Access");
        break;
        default:
            console.log("No Access");
}

let IPL = "RCB";
switch(IPL) {
    case "CSK":
        console.log("not won a single match");
        break; 
    case "RCB":
        console.log("won 2 matches");
        break;
    case "PK":
        console.log("won 1 match");
        break;
        default:
            console.log("nobody won");
}
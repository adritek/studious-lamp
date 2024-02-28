let userRole = "admin";
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = "subscriber";
let userCategory;

let isAuthenticated = true;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

const user = "Employee"
// const user = "Enrolled Memeber"
// const user = "Subscriber"
// const user = "Visitor"

switch (user) {
    case "Employee":
    case "Subscriber":
        console.log(`User proflie: ${user}\n You are authorised for: Dietary Services`);
        break;
    case "Enrolled Memeber":
        console.log(`User proflie: ${user}\n You are authorised for: Dietary Services and Dietician One-on-One`);
        break;
    
    default:
        console.log(`User proflie: ${user}\n You need to enroll or at least subscribe first to avail this facility.`)
        break;
}
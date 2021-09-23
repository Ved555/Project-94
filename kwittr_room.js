function Logout(){
    localStorage.removeItem("username");
    window.location = "index.html";
}
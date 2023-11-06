function login() {
    uname = un.value
    //storage in local storage 
    localStorage.setItem("uname", uname)
    // Redirection
    window.location = 'home.html'
}

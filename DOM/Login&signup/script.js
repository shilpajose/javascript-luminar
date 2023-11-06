function create(){
    acno=a1.value
    uname=u1.value
    psw=p1.value
    cpsw=cp1.value

    if(psw==cpsw){

        if(acno in localStorage){
            ale.innerHTML=`<p class="text-danger">User already exists</p>`
            // ale.innerHTML=""
        }
        else{
            //create an object user with user details
            user={uname,acno,psw}
            //storage in ls
            localStorage.setItem(acno,JSON.stringify(user))
            window.location='index.html'
        }
        // ale.innerHTML=""
    }
    else{
        ale.innerHTML=`<p class="text-danger">Password doesn't match</p>`
    }
}
function login() {
    acno=a2.value
    psw=p2.value
    //check accno in local storage
    if(acno in localStorage){
        userObj = JSON.parse(localStorage.getItem(acno))
        if(userObj.psw == psw){
            window.location='home.html'
            alert("Login success")
        }
        else{
            alert("incorrect password")
        }
        
    }
    else{
        alert("Acno not registered")
    }
}
function logout() {
    localStorage.removeItem("acno")
    window.location='index.html'
    
}
function searchBook() {
    window.location= 'SearchBook.html'
}
function addBook() {
    bookid = book_id.value
    bookname = book_name.value
    author =author_name.value
    bookdescription = book_des.value

    if(bookname in localStorage){
        alert("Already added")
    }
    else{
        localStorage.setItem("bookid",bookid)
        localStorage.setItem("bookname",bookname)
        localStorage.setItem("author",author)
        localStorage.setItem("bookdescription",bookdescription)
        alert("Book Details added")
    }
}

function search() {
    bname=bs.value
    if(bname in localStorage){
       searchObj=JSON.parse(localStorage.getItem(bname))
       book_details.innerHTML = `<p>Book Name:${searchObj.bookname}</p>`
    }
    else{
        // alert("There is no book in this name please add")
        book_details.innerHTML=`<p class="container card w-75 p-5" style="text-align:left;color:purple;">
        Book name:${searchObj.bookname}<br>
        Author name:${searchObj.author}<br>
        Description:${searchObj.bookdescription}<br>
</p>`
    }
}

// function search(){
//     bname=bn1.value
//     if(bname in localStorage){
//         booksObj=JSON.parse(localStorage.getItem(bname))
//         d1.innerHTML=`<p class="container card w-75 p-5" style="text-align:left;color:purple;">
//                     Book name:${booksObj.bname}<br>
//                     Author name:${booksObj.aname}<br>
//                     Description:${booksObj.bdesc}<br>
//         </p>`
//     }
//     else{
//         d1.innerHTML=`<p style="color:red">BOOK NOT FOUND!</p>`
//     }
// }
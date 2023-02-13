function getPosts(userId){

  fetch("https://jsonplaceholder.typicode.com/posts?userId=" +userId)
  .then(response => {
    if(response.ok)
    { 
     return response.json()
    }
  })
  .then(posts => {
    let subject = document.querySelector(".subject-content")
    subject.innerHTML =""
    for(post of posts){
      let content= `  
      <div class="subject-content">
      <h3>${post.title}</h3>
      <h4>${post.body}</h4>
  </div>

      `
      subject.innerHTML +=content

    }

  })
}



 
function getUsers(){
return new Promise( (resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if(response.ok)
      { 
       return response.json()
      }else{
        reject("error with users request")
      }
    })
    .then(users => {
      let user_info = document.querySelector(".user")
      user_info.innerHTML =""
                for(user of users){
              let content= `  
              <div class="user-info" onclick="userClicked(${user.id}, this)" >
              <h3>${user.name}</h3>
              <h3>${user.email} </h3>
          </div>
  
              `
              user_info.innerHTML +=content
            }
            resolve()
        })
       })
      }

getUsers()
.then( () => {
  getPosts(1)
})
.catch( (error) => {
  console.log(error)
})
function userClicked(id, el){
  getPosts(id)

  let sellectEl=document.getElementsByClassName("sellect")

  for(element of sellectEl){
       element.classList.remove("sellect")
  }
  el.classList.add("sellect")
}
const textBtn = document.querySelector("#textBtn");
const jsonBtn = document.querySelector("#jsonBtn");
const apiBtn=document.querySelector("#apiBtn")
const result = document.querySelector("#result");

textBtn.addEventListener("click", getText);
jsonBtn.addEventListener("click", getJson);
apiBtn.addEventListener("click", getApi);

function getText() {
  fetch("./data/info.txt")
    .then( (response) => response.text())
    .then((data)=> {
      let html = data;
      result.innerHTML += html;
    });
}

function getJson() {
  fetch("./data/info.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let html = "<table class='table table-bordered table-striped'>";
      data.forEach((user) => {
        html += `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.surname}</td>
    </tr>`;
      });

      html+="</table>"
      result.innerHTML+=html
    });
}


function getApi(){
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"GEt",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(response=>response.json())
    .then(posts=>{
        let html="<ol>"

        posts.forEach(post => {
            html+=
            `<li>
                <ul type="square">
                    <li>UserId : ${post.userId}</li>
                    <li>Id : ${post.id}</li>
                    <li>Title : ${post.title}</li>
                    <li>Body : ${post.body}</li>
                </ul>
            </li>`
        });
        html+="</ol>"
        result.innerHTML+=html
    }).catch(err=>{
        alert("Failed request")
    })
}
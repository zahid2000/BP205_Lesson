const textBtn = document.querySelector("#textBtn");
const jsonBtn = document.querySelector("#jsonBtn");
const apiBtn = document.querySelector("#apiBtn");
const postBtn = document.querySelector("#postBtn");
const axiosBtn = document.querySelector("#axiosBtn");
const ajaxBtn = document.querySelector("#ajaxBtn");
const result = document.querySelector("#result");

textBtn.addEventListener("click", getText);
jsonBtn.addEventListener("click", getJson);
apiBtn.addEventListener("click", getApi);
postBtn.addEventListener("click", postApi);
axiosBtn.addEventListener("click",getApiAxios)
ajaxBtn.addEventListener("click",getApiAjax)

function getText() {
  fetch("./data/info.txt")
    .then((response) => response.text())
    .then((data) => {
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

      html += "</table>";
      result.innerHTML += html;
    });
}

function getApi() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GEt",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((posts) => {
      let html = "<ol>";

      posts.forEach((post) => {
        html += `<li>
                <ul type="square">
                    <li>UserId : ${post.userId}</li>
                    <li>Id : ${post.id}</li>
                    <li>Title : ${post.title}</li>
                    <li>Body : ${post.body}</li>
                </ul>
            </li>`;
      });
      html += "</ol>";
      result.innerHTML += html;
    })
    .catch((err) => {
      alert("Failed request");
    });
}

function postApi() {
  let post = {
    userId: 2,
    title: "BP205",
    body: "Last Lesson",
  };
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.parse(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((post) => {
      console.log(post);
    });
}

function getApiAxios(){
axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
  console.log(response.data);
})

}


function getApiAjax(){

  const xhr=new XMLHttpRequest()

  xhr.onload=function(){
    console.log(JSON.parse(this.responseText))
  }

  xhr.open("GET","https://restcountries.com/v3.1/all",true)

  xhr.send()



}

$("#jqueryAjaxBtn").click(getApiAjaxWithJquery)
function getApiAjaxWithJquery(){
  $.ajax({
    url:"https://jsonplaceholder.typicodee.com/posts",
    method:"GET",
    success:(response)=>{
      console.log(response);
    },
    error:(err)=>
    console.log(err)
  })
}


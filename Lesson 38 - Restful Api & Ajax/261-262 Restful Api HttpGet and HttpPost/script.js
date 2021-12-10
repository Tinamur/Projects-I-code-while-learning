document.querySelector("#getOne").addEventListener("click", getOne);

document.querySelector("#getAll").addEventListener("click", getAll);

document.querySelector('#postData').addEventListener("click", postData);

function getOne() {
  var id = document.getElementById("postId").value;
  var url = "https://jsonplaceholder.typicode.com/posts/" + id;
  var xhr = new XMLHttpRequest();
  loader(true);
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (this.status === 200) {
      post = JSON.parse(this.responseText);
      var html = "";
      html += `
      <div class="card mb-2">
          <div class="card-header">
            ${post.title}
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>${post.body}</p>
            </blockquote>
          </div>
        </div>`;
      document.querySelector("#results").innerHTML = html;
    }
    loader(false);
  };

  xhr.send();
}

function getAll() {
  var url = "https://jsonplaceholder.typicode.com/posts";
  var xhr = new XMLHttpRequest();
  loader(true);
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (this.status === 200) {
      posts = JSON.parse(this.responseText);
      var html = "";
      posts.forEach((post) => {
        html += `
      <div class="card mb-2">
          <div class="card-header">
            ${post.title}
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>${post.body}</p>
            </blockquote>
          </div>
        </div>`;
      });
      document.querySelector("#results").innerHTML = html;
    }
    loader(false);
  };

  xhr.send();
}

function postData() {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();
    loader(true);

    const data = {
        userId : document.querySelector('#setUserId').value,
        title : document.querySelector('#setTitle').value,
        body : document.querySelector('#setBody').value,
    }

    var json = JSON.stringify(data)
    
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');

    xhr.onload = function () {
        if (xhr.status===201 && xhr.readyState===4) {
            var post = JSON.parse(this.responseText);
            var html = "";
      html += `
      <div class="card mb-2">
          <div class="card-header">
            ${post.title}
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>${post.body}</p>
            </blockquote>
          </div>
        </div>`;
      document.querySelector("#postResults").innerHTML = html;
        }
        loader(false);
    }
    xhr.send(json);

}

function loader(on) {
    
    var loadImage = document.querySelector("#loading");
    
    if (on) {
        loadImage.style.display = "block";
    }else{
        loadImage.style.display = "none";
    }
    
}

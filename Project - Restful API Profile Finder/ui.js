//UI class - UI and html related functions

class UI {
  constructor() {
    this.profileContainer = document.querySelector("#profileContainer");
    this.profileList = document.querySelector("#profileList");
    this.alert = document.querySelector("#alert");
    this.loadingIcon = document.querySelector("#loading");
  }

  async getProfiles() {
    const profilesResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const profiles = await profilesResponse.json();

    let html = "";

    profiles.forEach((profile) => {
      html += `
          <tr>
            <td>${profile.username}</td>
          </tr>
          `;
    });
    profileList.innerHTML = html;
  }

  showProfile(profile) {
    this.profileContainer.innerHTML = `
    <div class ="card card-body">
        <div class ="row">
            <div class="col-md-3">
                <a href="https://placeholder.com"><img src="https://via.placeholder.com/200x200" class="img-thumbnail"></a>
            </div>
            <div class="col-md-9">
                <h4>Contact</h4>
                <ul class="list-group">
                <li class="list-group-item">
                name : ${profile.name}
                </li>
                <li class="list-group-item">
                username : ${profile.username}
                </li>
                <li class="list-group-item">
                email : ${profile.email}
                </li>
                <li class="list-group-item">
                address : ${profile.address.street}, 
                ${profile.address.suite}, 
                ${profile.address.city}, 
                ${profile.address.zipcode}
                </li>
                <li class="list-group-item">
                phone : ${profile.phone}
                </li>
                <li class="list-group-item">
                website : ${profile.website}
                </li>
                <li class="list-group-item">
                company name : ${profile.company.name}
                </li>
                </ul>
                <h4 class="mt-4">Todo List</h4>
                <ul id="todo" class="list-group">

                </ul>

            </div>
        </div>
    </div>
    `;
  }

  showTodo(todo) {
    let html = "";
    todo.forEach((item) => {
      if (item.completed) {
        html += `
            <li class="list-group-item bg-success">
            ${item.title}
            </li>
            `;
      } else {
        html += `
            <li class="list-group-item bg-secondary">
            ${item.title}
            </li>`;
      }
    });
    this.profileContainer.querySelector("#todo").innerHTML = html;
  }

  showAlert(text) {
    this.alert.innerHTML = `${text} is not found`;
  }

  clear() {
    this.profileContainer.innerHTML = "";
    this.alert.innerHTML = "";
  }

  loadlingControls(statement) {
    if (statement) {
      this.loadingIcon.style.display = "block";
    } else {
      this.loadingIcon.style.display = "none";
    }
  }
}

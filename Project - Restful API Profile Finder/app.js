
//This is app.js, call other classes from here

const profile = new Profile();
const ui = new UI();
ui.getProfiles();

const searchProfile = document.querySelector("#searchProfile");

searchProfile.addEventListener("keyup", (event) => {
  ui.clear();
  let text = event.target.value;
  ui.loadlingControls(true); //show load screen

  if (text !== "") {
    profile
      .getProfile(text)
      .then((response) => {
        if (response.profile.length === 0) {
          ui.showAlert(text);
          
        } else {
          ui.showProfile(response.profile[0]);
          ui.showTodo(response.todo);
        }
        ui.loadlingControls(false);//hide load screen
      })
      .catch((error) => {
        ui.showAlert(text);
        ui.loadlingControls(false);//hide load screen
      });
  } else {
    ui.loadlingControls(false);//hide load screen
  }
});

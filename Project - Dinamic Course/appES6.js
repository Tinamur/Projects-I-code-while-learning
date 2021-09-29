//This part is ES6 code

//-------------------------------------------------------------------------------------//

//ES6 Using Classes

//Course Class
class Course {
  constructor(title, instructor, image) {
    this.courseId = Math.floor(Math.random() * 10000); // Using stupid methods for generating key
    this.title = title;
    this.instructor = instructor;
    this.image = image;
  }
}

//UI Class
class UI {
  addCourseToList(course) {
    const list = document.getElementById("course-list");

    var html = `
            <tr>
                <td><img width ="100px" src = "img/${course.image}"/></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href="#" data-id ="${course.courseId}" class= "btn btn-danger btn-sm delete">Delete</a></td>
            </tr>
        `;

    list.innerHTML += html;
  }

  clearControls() {
    const title = (document.getElementById("title").value = "");
    const instructor = (document.getElementById("instructor").value = "");
    const image = (document.getElementById("image").value = "");
  }

  deleteCourse(element) {
    if (element.classList.contains("delete")) {
      element.parentElement.parentElement.remove();
      return true; // If we dont do this allert messages show even if we dont click delete
    }
  }

  showAlert(message, className) {
    var alert = `
    <div class = "alert alert-${className} fixed-top">
    ${message}
    </div>
    `;
    const row = document.querySelector(".row");

    row.insertAdjacentHTML("beforeBegin", alert); //beforeBegin,afterBegin,beforeEnd,afterEnd

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

//Storage Class -- Using local storage to simulate database
class Storage {
  static getCourses() {
    let courses;
    if (localStorage.getItem("courses") === null) {
      courses = [];
    } else {
      courses = JSON.parse(localStorage.getItem("courses"));
    }
    return courses;
  }

  static displayCourses() {
    const courses = Storage.getCourses();
    courses.forEach((course) => {
      const ui = new UI();
      ui.addCourseToList(course);
    });
  }

  static addCourse(course) {
    const courses = Storage.getCourses();
    courses.push(course);
    localStorage.setItem("courses", JSON.stringify(courses));
  }

  static deleteCourse(element) {
    const id = element.getAttribute("data-id");
    const courses = Storage.getCourses();
    courses.forEach((course, index) => {
      if (course.courseId == id) {
        courses.splice(index, 1);
      }
    });
    localStorage.setItem("courses", JSON.stringify(courses));
  }
}
//-------------------------------------------------------------------------------------//

document.addEventListener("DOMContentLoaded", Storage.displayCourses);

//Form Control
document.getElementById("new-course").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value;
  const instructor = document.getElementById("instructor").value;
  const image = document.getElementById("image").value;

  //Create Course Object
  const course = new Course(title, instructor, image);

  //Create UI
  const ui = new UI();

  //Check for blank
  if (title === "" || instructor === "" || image === "") {
    ui.showAlert("Please complete the form", "warning");
  } else {
    //add course to list
    ui.addCourseToList(course);

    //Save to Local Storage
    Storage.addCourse(course);

    //clear controls
    ui.clearControls();
    ui.showAlert("The course has beed added", "success");
  }
  //stop the page from refreshing
  e.preventDefault();
});

//-------------------------------------------------------------------------------------//

//Delete List Items
document.getElementById("course-list").addEventListener("click", function (e) {
  const ui = new UI();

  if (ui.deleteCourse(e.target) == true) {
    //delete from Local Storage
    Storage.deleteCourse(e.target);

    ui.showAlert("The course has beed deleted", "danger");
  }
});

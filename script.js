const btnshow = document.querySelector(".btn-show");
const nav_links = document.querySelector(".nav-links");

btnshow.addEventListener("click", () => {
  nav_links.classList.toggle("open");
  btnshow.classList.toggle("open");
});

var navlinks = document.getElementById("nav-links");
function showMenu() {
  navlinks.style.right = "0";
}
function hideMenu() {
  navlinks.style.right = "-200px";
}

const form = document.querySelector("form");
function sendEmail1() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "vishwa.g4567@gmail.com",
    Password: "AA06646DA038B5F8EF75E7CA691D3C2E6C58",
    To: "vishwa.g7476@gmail.com",
    From: "vishwa.g4567@gmail.com",
    Subject:
      "New Contact Form Enquiry For " +
      document.getElementById("subject").value,
    Body:
      "Name: " +
      document.getElementById("name").value +
      " <br> Email: " +
      document.getElementById("email").value +
      " <br> Subject: " +
      document.getElementById("subject").value +
      " <br> Message: " +
      document.getElementById("message").value,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully",
        icon: "success",
      });
    }
  });
}
function sendEmail2() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "vishwa.g4567@gmail.com",
    Password: "AA06646DA038B5F8EF75E7CA691D3C2E6C58",
    To: document.getElementById("email").value,
    From: "vishwa.g4567@gmail.com",
    Subject: "Thank you For Submitting A Form",
    Body:
      "Hello <b>" +
      document.getElementById("name").value +
      ",</b> <br> <br> Thank you for submitting a form in my website and I will response your inquiry as soon as possible. <br> <br> <b> Thanking you, </b> <br> <b> Vishwa G, </b> <br> <b> Front-End Developer </b> ",
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail2();
  sendEmail1();
});

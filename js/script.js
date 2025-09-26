welcomeMessage();

function welcomeMessage() {
    let username = prompt("Please enter your name:");
    if (username) {
        document.getElementById("username").innerHTML = username;
    } else {
        alert("Hi, Welcome to Website!");
    }
}

function validateForm() {
  let name = document.getElementById("name").value;
  let birthdate = document.getElementById("birthdate").value;
  let gender = document.querySelector('input[name="gender"]:checked')?.value;
  let message = document.getElementById("message").value;

  // log ke console
  console.log(name,birthdate,gender,message);

  // Ambil waktu lengkap
  let currentTime = new Date().toString(); 

  // Isi box hasil
  document.getElementById("currentTime").innerText = currentTime;
  document.getElementById("resultName").innerText = name;
  document.getElementById("resultBirthdate").innerText = birthdate;
  document.getElementById("resultGender").innerText = gender || "-";
  document.getElementById("resultMessage").innerText = message;

  // Menampilkan box hasil
  document.getElementById("resultBox").classList.remove("hidden");
}

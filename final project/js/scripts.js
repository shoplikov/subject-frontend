// Registration password repeat validation. 
function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatPassword").value;
    var passwordMessage = document.getElementById("passwordMessage");

    if (!fullName || !email || !password || !repeatPassword) {
        alert("All fields are required.");
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return;
    }

    if (password !== repeatPassword) {
        passwordMessage.innerHTML = "Passwords do not match.";
        return;
    } else {
        passwordMessage.innerHTML = ""; 
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }



    alert("Registration successful!");
    location.replace("index.html")
}

// Login validation
function validateLoginForm() {
  var email = document.getElementById("form2Example17").value;
  var password = document.getElementById("form2Example27").value;

  if (!email || !password) {
      alert("Email and password are required.");
      return;
  }

  alert("Login successful!");

  // Play the success sound
  playSuccessSound();

  // Redirect to index.html
  location.replace("index.html");
}

function playSuccessSound() {
  var successSound = document.getElementById("successSound");
  
  // Check if the audio element is supported
  if (successSound && typeof successSound.play === 'function') {
      successSound.play();
  }
}

// Jquery smooth scrolling
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } 
    });
  });

// Double down arrow animation
var animatedImage = document.getElementById('animatedImage');
var position = 0;
var direction = 1; 

function animate() {
  position += 1 * direction;
  animatedImage.style.transform = 'translateY(' + position + 'px)';


  if (position >= 25 || position <= 0) {
    direction *= -1;
  }

  requestAnimationFrame(animate);
}

animate();

// Redirects
function redirectLogin() {
  location.replace("login.html")
}

function redirectReviews() {
  location.replace("reviews.html")
}

// Sound scrpit

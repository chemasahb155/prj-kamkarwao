$(document).ready(function(){

     $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>35)
        {
            $('.header').css({'background':'#141414','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }
        else
        {
            $('.header').css({'background':'none','box-shadow':'none'});
        }
    });

    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	  updateCount();
   });

   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp(500);
    $(this).next('.accordion-body').slideDown(500);
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
});

});

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const loginHeading = document.getElementById("loginHeading");
    const signupHeading = document.getElementById("signupHeading");

    function showFormBasedOnHash() {
        if (window.location.hash == "#signup") {
            signupForm.style.display = "block";
            signupHeading.style.display = "block";
            loginForm.style.display = "none";
            loginHeading.style.display = "none";
        } else {
            signupForm.style.display = "none";
            signupHeading.style.display = "none";
            loginForm.style.display = "block";
            loginHeading.style.display = "block";
        }
    }

    window.addEventListener("hashchange", showFormBasedOnHash);
    showFormBasedOnHash();
});
function check(){
const password = document.getElementById('password');
const confirmpass = document.getElementById('confirmPassword')
const p = document.getElementById('error')
if(password.value !== confirmpass.value)
    {
        document.getElementById('error').innerHTML = "Password and Confirm Password are not same";
    }
};
const firebaseConfig = {
    apiKey: "AIzaSyAaRL2S8YceKVTYi1qwziIPIO_hZc1W5ag",
    authDomain: "kaam-karwao.firebaseapp.com",
    projectId: "kaam-karwao",
    storageBucket: "kaam-karwao.appspot.com",
    messagingSenderId: "614721455455",
    appId: "1:614721455455:web:3c331af94f58d5dc23e2ea"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();
 function register(){
    uname = document.getElementById('name').value
   contact = document.getElementById('contactNumber').value
   email = document.getElementById('email').value
   password = document.getElementById('password').value
   confpassword = document.getElementById('confirmPassword').value

  
  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }
  if (validate_field(full_name) == false || validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false) {
    alert('One or More Extra Fields is Outta Line!!')
    return
  }
 
  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      email : email,
      full_name : full_name,
      favourite_song : favourite_song,
      milk_before_cereal : milk_before_cereal,
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // DOne
    alert('User Created!!')
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })

 function validate(){
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email))
        {
            return true
        }
        else{
            return false
        }
 }

 function validate_pass(){
    if (password < 6)
        {
            document.getElementById('error').innerHTML = "Password must be greaater than 6 digits";
            return false
        }      
    else if (password !== confpassword)
    {
        document.getElementById('error').innerHTML = "Password and Confirm Password are not same";
        return false
    }
    else 
    {
        return true
    }
 }
 }
 window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
function sendmail(){document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    var fromName = document.getElementById('from_name').value;
    var emailId = document.getElementById('email_id').value;
    var contactNo = document.getElementById('contact_no').value;
    var message = document.getElementById('message').value;

    // Send the email using EmailJS
    emailjs.send("service_cp5fudv", "template_yrs3ugg", {
        from_name: fromName,
        email_id: emailId,
        contact_no: contactNo,
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Email sent successfully!") ;
    }, function(error) {
        console.log('FAILED...', error);
        alert("Failed to send email. Please try again later.");
    });
});
}
function requestform(){
    var form = document.getElementById('serviceRequestForm');
    
    if (!form.classList.contains("submitted")) {
        form.classList.add("submitted");
        
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the form values
            var name = document.getElementById('name').value;
            var phone = document.getElementById('phone').value;
            var email = document.getElementById('email').value;
            var address = document.getElementById('address').value;
            var majorService = document.getElementById('majorService').value;
            var minorService = document.getElementById('minorService').value;
            var fileInput = document.getElementById('file');
            var file = fileInput.files[0];

            if (file) {
                var reader = new FileReader();
                reader.onload = function(event) {
                    // Create the email params object
                    var params = {
                        from_name: name,
                        contact_no: phone,
                        email: email,
                        address: address,
                        major_service: majorService,
                        minor_service: minorService,
                        attachment: {
                            filename: file.name,
                            content: event.target.result.split(',')[1], // Base64 encoded string
                            contentType: file.type
                        }
                    };

                    // Send the email using EmailJS
                    emailjs.send("service_cp5fudv", "template_zfrbyvs", params)
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        alert("Request submitted successfully!");
                    }, function(error) {
                        console.log('FAILED...', error);
                        alert("Failed to submit request. Please try again later.");
                    });
                };
                reader.readAsDataURL(file); // Read the file as Base64
            } else {
                // Create the email params object without attachment
                var params = {
                    from_name: name,
                    contact_no: phone,
                    email: email,
                    address: address,
                    major_service: majorService,
                    minor_service: minorService,
                    attachment: ''
                };

                // Send the email using EmailJS
                emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert("Request submitted successfully!");
                }, function(error) {
                    console.log('FAILED...', error);
                    alert("Failed to submit request. Please try again later.");
                });
            }
        });
    }
}

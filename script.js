
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.getElementById("menu-icon");
    const closeSidebar = document.getElementById("close-sidebar");

    menuIcon.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    closeSidebar.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let activeButton = null;
    const buttons = document.querySelectorAll(".custom-button");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const target = document.getElementById(button.getAttribute("data-target"));
            const details = document.querySelectorAll(".details");
            details.forEach(function (detail) {
                detail.style.display = "none";
            });
            if (activeButton) {
                activeButton.style.backgroundColor = "#778a97";
            }
            target.style.display = "block";
            activeButton = button;
            button.style.backgroundColor = "#35ce89"; 
        });
    });

    const defaultSection = document.getElementById("details-1");
    defaultSection.style.display = "block";
    activeButton = document.querySelector(".custom-button[data-target='details-1']");
    if (activeButton) {
        activeButton.style.backgroundColor = "#35ce89"; 
    }

    const details = document.querySelectorAll(".details");
    details.forEach(function (detail) {
        if (detail !== defaultSection) {
            detail.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let activeButton = null;


    const buttons = document.querySelectorAll(".custom1-button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            
            const target = document.getElementById(button.getAttribute("data-target"));

            const details = document.querySelectorAll(".details1");
            details.forEach(function (detail) {
                detail.style.display = "none";
            });

            
            if (activeButton) {
               
                activeButton.style.backgroundColor = ""; 
            }

            
            target.style.display = "block";

            
            activeButton = button;

          
            button.style.backgroundColor = "lightcoral"; 
        });
    });

   
    const defaultSection = document.getElementById("details-6"); 
    defaultSection.style.display = "block";
    activeButton = document.querySelector(".custom1-button[data-target='details-6']"); 
    if (activeButton) {
        activeButton.style.backgroundColor = "lightcoral"; 
    }

    
    const details = document.querySelectorAll(".details1");
    details.forEach(function (detail) {
        if (detail !== defaultSection) {
            detail.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    let activeButton = null;

   
    const buttons = document.querySelectorAll(".custom2-button");

   
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            
            const target = document.getElementById(button.getAttribute("data-target"));

            
            const details = document.querySelectorAll(".details2");
            details.forEach(function (detail) {
                detail.style.display = "none";
            });

           
            if (activeButton) {
               
                activeButton.style.backgroundColor = "#778a97";
            }

          
            target.style.display = "block";

            
            activeButton = button;

            
            button.style.backgroundColor = "#35ce89"; 
        });
    });

    
    const defaultSection = document.getElementById("details-13");
    defaultSection.style.display = "block";
    activeButton = document.querySelector(".custom2-button[data-target='details-13']");
    if (activeButton) {
        activeButton.style.backgroundColor = "#35ce89";
    }

    
    const details = document.querySelectorAll(".details2");
    details.forEach(function (detail) {
        if (detail !== defaultSection) {
            detail.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedback-form");


    const firstName = document.getElementById("firstName");
    const firstNameWarning = document.getElementById("firstNameWarning");

    firstName.addEventListener("input", function () {
        if (firstName.value.length < 6 || !/^[a-zA-Z]+$/.test(firstName.value)) {
            firstNameWarning.style.display = "block";
        } else {
            firstNameWarning.style.display = "none";
        }
    });

  
    const password = document.getElementById("password");
    const passwordWarning = document.getElementById("passwordWarning");

    password.addEventListener("input", function () {
        if (password.value.length < 6) {
            passwordWarning.style.display = "block";
        } else {
            passwordWarning.style.display = "none";
        }
    });


    const email = document.getElementById("email");
    const emailWarning = document.getElementById("emailWarning");

    email.addEventListener("input", function () {
        if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email.value)) {
            emailWarning.style.display = "block";
        } else {
            emailWarning.style.display = "none";
        }
    });


    const mobile = document.getElementById("mobile");
    const mobileWarning = document.getElementById("mobileWarning");

    mobile.addEventListener("input", function () {
        if (!/^\d{10}$/.test(mobile.value)) {
            mobileWarning.style.display = "block";
        } else {
            mobileWarning.style.display = "none";
        }
    });

   
    const lastName = document.getElementById("lastName");
    const lastNameWarning = document.getElementById("lastNameWarning");

    lastName.addEventListener("input", function () {
        if (lastName.value.trim() === "") {
            lastNameWarning.style.display = "block";
        } else {
            lastNameWarning.style.display = "none";
        }
    });

    
    const address = document.getElementById("address");
    const addressWarning = document.getElementById("addressWarning");

    address.addEventListener("input", function () {
        if (address.value.trim() === "") {
            addressWarning.style.display = "block";
        } else {
            addressWarning.style.display = "none";
        }
    });

    

    form.addEventListener("submit", function (event) {
        event.preventDefault();

    });
});

  
const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("keyup", function() {
    const password = passwordInput.value;
    let strength = "Weak";

    if (password.length >= 6) {
        
        if (password.length >= 10) {
            strength = "Strong";
        } else {
            strength = "Medium";
        }
    }
    strengthText.textContent = `${strength}`;
    strengthText.className = strength.toLowerCase(); 
});


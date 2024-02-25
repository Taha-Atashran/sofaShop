function search() {
  blockSearch.style.display = "flex";
  dSearch.style.display = "block";
}
function deleteSearch() {
  blockSearch.style.display = "none";
  dSearch.style.display = "none";
}
function openMenu() {
  menuHamberger.style.width = "80%";
}
function closeMenu() {
  menuHamberger.style.width = "0";
}
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.onscroll = function () {
  handleScroll();
};

function handleScroll() {
  var paragraph = document.getElementById("fixedParagraph");
  if (window.scrollY > 200) {
    // If scrollY is greater than 100px, set paragraph position to fixed at the top
    paragraph.style.position = "fixed";
    paragraph.style.top = "0";
    scrollToTopBtn.style.display = "block";
    chatIcon.style.display = "block";
  } else {
    // Reset paragraph position if scrollY is less than or equal to 100px
    paragraph.style.position = "static";
    scrollToTopBtn.style.display = "none";
    chatIcon.style.display = "none";
  }
}

var p = 0;
function heart() {
  if (p == 0) {
    heartCard.style.color = "red";

    p = 1;
  } else if (p == 1) {
    heartCard.style.color = "#ddd";

    p = 0;
  }
}

var p = 0;
function heartt() {
  if (p == 0) {
    heartCardd.style.color = "red";

    p = 1;
  } else if (p == 1) {
    heartCardd.style.color = "#ddd";

    p = 0;
  }
}

var p = 0;
function hearttt() {
  if (p == 0) {
    heartCarddd.style.color = "red";

    p = 1;
  } else if (p == 1) {
    heartCarddd.style.color = "#ddd";

    p = 0;
  }
}

var p = 0;
function heartttt() {
  if (p == 0) {
    heartCardddd.style.color = "red";

    p = 1;
  } else if (p == 1) {
    heartCardddd.style.color = "#ddd";

    p = 0;
  }
}

var swiper = new Swiper(".mySwiperr", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiperr-pagination",
    clickable: true,
  },
  breakpoints: {
    750: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // 768: {
    //   slidesPerView: 2,
    //   spaceBetween: 210,
    // },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// JavaScript functions for showing and hiding the modal
function showModal() {
  document.getElementById("welcomeModal").style.display = "flex";
  setTimeout(function () {
    hideModal();
  }, 1000);
}

function hideModal() {
  document.getElementById("welcomeModal").style.display = "none";
}

function chatBox() {
  chatModal.style.display = "flex";
}
function closeChatBox() {
  chatModal.style.display = "none";
}

/////

function validateAndRefreshh() {
  var textInputValue = document.getElementById("textInput").value;
  var errorMessage = document.getElementById("error-message");

  if (textInputValue.trim() === "") {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    swal({
      icon: "success",
      text: "پیام شما با موفقیت ارسال گردید",
      timer: 1000,
      button: false,
    });

    textInput.value = "";

    setTimeout(function () {
      chatModal.style.display = "none";
    }, 1000);
  }
}

//////

function validateAndRefresh() {
  const fullNameInput = document.getElementById("fullName").value;
  const phoneNumberInput = document.getElementById("phoneNumber").value;
  const errorDiv = document.getElementById("error");
  const loadingDiv = document.getElementById("loading");

  // Reset error and loading messages
  errorDiv.innerText = "";
  loadingDiv.style.display = "none";

  // Validate full name
  if (!fullNameInput) {
    errorDiv.innerText = "نام و نام خانوادگی خود را وارد کنید.";
    return;
  }

  // Validate phone number
  if (!phoneNumberInput) {
    errorDiv.innerText = "شماره موبایل خود را وارد کنید.";
    return;
  } else if (
    phoneNumberInput.length !== 11 ||
    !phoneNumberInput.startsWith("09")
  ) {
    errorDiv.innerText = "شماره وارد شده اشتباه است.";
    return;
  }

  // Display loading message
  loadingDiv.style.display = "block";

  // Simulate loading for 2 seconds and then refresh the page
  setTimeout(function () {
    filterLogin.style.display = "none";
    fillterNumber.style.display = "flex";
    startTimer();
  }, 2000);
}
//////

let timer = 120; // 2 minutes in seconds
let timerInterval;

function startTimer() {
  timerInterval = setInterval(function () {
    timer--;
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    document.getElementById("timer").innerText = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;

    if (timer <= 0) {
      clearInterval(timerInterval);
      document.getElementById("timer").innerText = "";
      document.getElementById("restartMessage").style.display = "block";
      resetForm();
    }
  }, 1000);
}

function restartTimer() {
  startTimer();
  timer = 120;
  document.getElementById("restartMessage").style.display = "none";
}

////

function openLogin() {
  filterLogin.style.display = "flex";
}
function closeLogin() {
  filterLogin.style.display = "none";
}

/////

function resetForm() {
  document.getElementById("myForm").reset();
  document.getElementById("timer").innerText = "2:00";
  document.getElementById("error").innerText = ""; // Clear error message
  document.getElementById("loading").style.display = "none"; // Hide loading message
  clearInterval(timerInterval);
  timer = 120;
}

function validateAndSubmit() {
  const userInput = document.getElementById("userInput").value;
  const errorMessage = document.getElementById("errorMessage");
  const submitButton = document.getElementById("submitButton");

  // Clear previous messages
  errorMessage.textContent = "";

  // Check if the user entered text
  if (userInput.trim() === "") {
    errorMessage.textContent = "لطفا کد را وارد کنید";
  } else {
    // successMessage.textContent = 'Good man!';

    // Display loading state on the button
    submitButton.innerHTML = "در حال تائید...";
    submitButton.disabled = true;

    // Simulate a delay of 2 seconds (2000 milliseconds)
    setTimeout(() => {
      // Reset button state
      submitButton.innerHTML = "Submit";
      submitButton.disabled = false;

      // Refresh the page
      location.reload();
    }, 2000);
  }
}

//////

function closeNumber() {
  formNumber.style.display = "none";
}

/////

function deleteFmain() {
  firstMain.style.display = "none";
}
/////
function deleteSmain() {
  secondMain.style.display = "none";
}

/////

function oMenu() {
  menuHamberger.style.width = "80%";
}

//////

document.addEventListener("DOMContentLoaded", function () {
  let number = 1; // Start from 1
  const numberBox = document.getElementById("numberBoxxx");

  function updateNumber() {
    numberBox.innerText = number;
  }

  document
    .getElementById("incrementButtonnn")
    .addEventListener("click", function () {
      number++;
      updateNumber();
    });

  document
    .getElementById("decrementButtonnn")
    .addEventListener("click", function () {
      if (number > 1) {
        // Ensure the number doesn't go below 1
        number--;
        updateNumber();
      }
    });

  updateNumber(); // Initial update
});

/////

document.addEventListener("DOMContentLoaded", function () {
  let number = 1; // Start from 1
  const numberBox = document.getElementById("numberBoxxxx");

  function updateNumber() {
    numberBox.innerText = number;
  }

  document
    .getElementById("incrementButtonnnn")
    .addEventListener("click", function () {
      number++;
      updateNumber();
    });

  document
    .getElementById("decrementButtonnnn")
    .addEventListener("click", function () {
      if (number > 1) {
        // Ensure the number doesn't go below 1
        number--;
        updateNumber();
      }
    });

  updateNumber(); // Initial update
});

//////////

// Initialize ten input numbers
let inputs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// Function to handle the button clicks
function handleButtonClick(buttonType, index) {
  if (buttonType === "up") {
    inputs[index]++;
  } else if (buttonType === "down") {
    inputs[index] = Math.max(1, inputs[index] - 1);
  }

  // Update the input values on the page
  for (let i = 0; i < inputs.length; i++) {
    document.getElementById(`input${i + 1}`).value = inputs[i];
  }
}



var swiper = new Swiper(".mySwiperpp", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiperpp2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


document.addEventListener("DOMContentLoaded", function() {
  let number = 1; // Start from 1
  const numberBox = document.getElementById("numberBox");

  function updateNumber() {
    numberBox.innerText = number;
  }

  document.getElementById("incrementButton").addEventListener("click", function() {
    number++;
    updateNumber();
  });

  document.getElementById("decrementButton").addEventListener("click", function() {
    if (number > 1) { // Ensure the number doesn't go below 1
      number--;
      updateNumber();
    }
  });

  updateNumber(); // Initial update
});


document.addEventListener("DOMContentLoaded", function() {
  const tags = document.querySelectorAll(".clickable-tag");

  function removeRedBox() {
    tags.forEach(tag => {
      tag.classList.remove("red-box");
    });
  }

  tags.forEach(tag => {
    tag.addEventListener("click", function() {
      removeRedBox();
      tag.classList.add("red-box");
    });
  });

  tags[0].classList.add("red-box");
});



////

document.addEventListener("DOMContentLoaded", function() {
  let number = 1; // Start from 1
  const numberBox = document.getElementById("numberBoxx");

  function updateNumber() {
    numberBox.innerText = number;
  }

  document.getElementById("incrementButtonn").addEventListener("click", function() {
    number++;
    updateNumber();
  });

  document.getElementById("decrementButtonn").addEventListener("click", function() {
    if (number > 1) { // Ensure the number doesn't go below 1
      number--;
      updateNumber();
    }
  });

  updateNumber(); // Initial update
});


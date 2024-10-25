// Tạo biến tham chiếu đến modal và hình ảnh trong modal
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementsByClassName("close")[0];

// Lấy tất cả các hình ảnh trong phần tử .inner-box
const images = document.querySelectorAll(".inner-box img");

// Thêm sự kiện click vào từng hình ảnh
images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "block"; // Hiển thị modal
    modalImage.src = image.src; // Gán nguồn ảnh cho modal
  });
});

// Đóng modal khi người dùng click vào nút close
closeModal.onclick = () => {
  modal.style.display = "none";
};

// Đóng modal khi người dùng click ra ngoài modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// Slider-one
const sliderOne = document.querySelector(".slide-one .inner-list-image");
const slidesOne = document.querySelectorAll(".slide-one .slides-one");
let st = 0;

let autoPlaySliderOne = setInterval(() => {
  st += 1;
  if (st >= 3) {
    st = 0;
  } else if (st < 0) {
    st = totalSlides - 1;
  }
  sliderOne.style.transform = `translateX(-${st * 100}%)`;
}, 3000);
// Slider auto phần Chứng Nhân
const slider = document.querySelector(".inner-center .inner-list-cer");
const slides = document.querySelectorAll(
  ".inner-center .inner-list-cer .inner-box"
);
const size_slides = slides.length;
const a = 4;

let start_slides = 0;
let autoPlay = setInterval(() => {
  start_slides += a;
  if (start_slides >= size_slides) {
    start_slides = 0;
  }
  sliderToScroll();
}, 3000);

function sliderToScroll() {
  if (start_slides + a > size_slides) {
    const tmp = start_slides + a - size_slides;
    slider.style.transform = `translateX(-${(start_slides - tmp) * 25}%)`;
  } else {
    slider.style.transform = `translateX(-${start_slides * 25}%)`;
  }
}
// Dừng autoplay khi hover
slider.addEventListener("mouseover", () => {
  clearInterval(autoPlay);
});

// Tiếp tục autoplay khi không hover
slider.addEventListener("mouseout", () => {
  autoPlay = setInterval(() => {
    start_slides += a;
    if (start_slides >= size_slides) {
      start_slides = 0;
    }
    sliderToScroll();
  }, 3000);
});

// slider-study
// Slider-one
const sliderStudy = document.querySelector(".study-school .inner-slide-study");
let s = 0;

let autoPlaySliderStudy = setInterval(() => {
  s += 1;
  if (s >= 10) {
    s = 0;
  } else if (s < 0) {
    s = 9;
  }
  sliderStudy.style.transform = `translateX(-${s * 100}%)`;
}, 3000);

 const data = [
 {
    videoUrl: "https://raw.githubusercontent.com/Hnatta/arsip/main/video/1.mp4",
    review: "korban dian tersangka arif camera hadi.",
    name: "BKK Plumbon",
    designation: "11 juli 2011 7;57 malam",
  },
  {
    videoUrl: "https://raw.githubusercontent.com/Hnatta/arsip/main/video/2.mp4",
    review:
      "kegiatan .",
    name: "BKK Plumbon",
    designation: "06 juli 2011 11;00 siang",
  },
  {
    videoUrl: "https://raw.githubusercontent.com/Hnatta/arsip/main/video/3.mp4",
    review: "kegiatan las.",
    name: "BKK Plumbon",
    designation: "6 juli 2011 12;49 siang",
  },
  {
    videoUrl: "https://raw.githubusercontent.com/Hnatta/arsip/main/video/4.mp4",
    review:
      "kegiatan .",
    name: "BKK Plumbon",
    designation: "7 juli 2011 10;17 siang",
  },
  {
    videoUrl: "https://raw.githubusercontent.com/livebloggerofficial/Testimonials-Page/main/videos/testimonial5.mp4",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, enim.",
    name: "Robert Wilson",
    designation: "Sales Executive, MNO Corporation",
  },
];

const showMoreBtn = document.querySelector(
  ".testimonials-container .show-more-btn"
);
const testimonials = document.querySelector(".testimonials");
let latestTestimonialIndex = 0;

const generateTestimonial = (videoUrl, review, name, designation) => {
  const htmlCode = `<div class="testimonial">
  <div class="video">
    <video
      controls
      width="100%"
      src="${videoUrl}"
    ></video>
  </div>
  <div class="review">
    ${review}
  </div>
  <div class="bottom">
    <div class="name">${name}</div>
    <div class="designation">${designation}</div>
  </div>
</div>`;

  return htmlCode;
};

const showTestimonial = () => {
  let index = latestTestimonialIndex;

  for (let i = index; i < index + 4; i++) {
    if (!data[i]) {
      showMoreBtn.style.display = "none";
      return;
    }

    testimonials.innerHTML += generateTestimonial(
      data[i].videoUrl,
      data[i].review,
      data[i].name,
      data[i].designation
    );

    latestTestimonialIndex++;
  }
};

showTestimonial();

showMoreBtn.addEventListener("click", showTestimonial);

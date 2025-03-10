import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ReviewSider.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const reviews = [
  {
    name: "Dennis V ",
    review:
      "Excellent job developing our app. They were professional, delivered on time, and created a user-friendly, high-quality app. Recommended! ",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    name: "Ajinkya M ",
    review:
      "BrainArt IT Solution flawlessly converted our Figma design into a smooth, high-performance iOS & Android app. Great communication, on-time delivery, and pixel-perfect execution! Highly recommended!  ",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
  },
  {
    name: "Niil S",
    review:
      "NextStep Freelancing Company Website by BrainArt IT Solution is sleek, fast, and user-friendly! Smooth navigation, great design, and secure payments make it a top-notch platform. Highly recommended!  ",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
  },
  {
    name: "Nayan S ",
    review:
      "Absolutely stunning website! Sleek design, and a flawless user experience. BrainArt IT Solution nailed it! ",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
  {
    name: "Meet P",
    review: "Outstanding app development service! Delivered high-quality work ahead of schedule with clear communication and great responsiveness. Highly recommended for mobile development. Thanks, Nidhi! ",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
];

const ReviewSider = () => {
  return (
    <div className="sec-title wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="000ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms", animationName: "fadeInUp", margin: "100px 0px" }}>
      <div className="d-flex align-items-center justify-content-center">
        <img decoding="async" src="https://ostechwp.pixydrops.com/wp-content/uploads/2024/05/sec-title-s-1.png" alt="sec-title-s-1" title="sec-title-s-1" className="sec-title__img" />
        <h6 className="sec-title__tagline">TESTIMONIAL</h6>
      </div>
      <h3 className="sec-title__title text-center ">What Customers are <br /> Saying?</h3>

      <div className="max-w-7xl mx-auto p-6" style={{ margin: "50px 0px 0px 0px" }}>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 review-card">
                <div className="flex items-center gap-3">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <i key={i} className="fa-solid fa-star" style={{ color: "#EE8624", fontSize: "25px", marginBottom: "10px" }}></i>
                    ))}
                </div>
                <p className="review-text">{review.review}</p>
                <div className="mt-4 flex gap-2 items-center">
                  <h3 className="font-semibold">{review.name}</h3>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 38" className="tes-box-svg">
                  <path d="M61 37.6621C43.331 20.1523 12.9713 5.69967 0 0.662109H61V37.6621Z" />
                </svg>
                <div className="comma-box">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSider;

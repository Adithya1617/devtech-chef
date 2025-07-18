"use client";
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVentures",
    company: "E-commerce",
    content:
      "DevTech AI's recommendation engine increased our conversion rates by 340% within the first quarter. Their team's expertise and support were exceptional.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Director",
    company: "Manufacturing",
    content:
      "The predictive maintenance solution has reduced our downtime by 60% and saved us millions in operational costs. Truly transformative technology.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Head of Analytics",
    company: "Healthcare",
    content:
      "Their medical imaging AI has improved our diagnostic accuracy significantly while reducing analysis time from hours to minutes.",
    rating: 5,
  },
];

const Expert = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-primary/15 py-16">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="text-center mt-24 mb-12">
          <p className="text-yellow-500 text-3xl lg:text-5xl font-bold mb-12 tracking-widest uppercase">
            Client Testimonials
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-black dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-black/60 dark:text-white/70 max-w-3xl mx-auto mt-4">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders say about
            working with DevTech AI.
          </p>
        </div>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index}>
              <div className="m-3 py-10 px-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-yellow-300 hover:shadow-xl">
                <div className="mb-4">
                  <div className="flex justify-center space-x-1 mb-2">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <div className="font-semibold text-black dark:text-white">{t.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t.role}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Expert;

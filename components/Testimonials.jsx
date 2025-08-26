import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper"

import { Press, FadeUp } from "@/components/animations"
import { reviews } from "@/constants"

import "swiper/css"
import "swiper/css/navigation"

const stars = [0, 1, 2, 3, 4]

export default function Testimonials({ seeMore }) {
  return (
    <section className="testimonials page-section">
      <div className="section-container">
        <div key="x1" className="content flex flex-col items-center">
          <FadeUp key="00">
            <h1 className="heading">
              The Best FX Signal&nbsp;
              <br className="sm:hidden" />
              Service Provider
            </h1>
          </FadeUp>

          <FadeUp key="01">
            <div className="stars">
              {stars?.map((i) => (
                <img key={i + " star"} src="/assets/icons/rating_star_full.svg" />
              ))}
            </div>
          </FadeUp>

          <FadeUp key="02">
            <p>4.7/5 rating from 159 reviews</p>
          </FadeUp>
        </div>

        <Swiper
          key="x2"
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 10 },
            380: { slidesPerView: 1.5, spaceBetween: 10 },
            480: { slidesPerView: 1.8, spaceBetween: 10 },
            580: { slidesPerView: 2.1, spaceBetween: 10 },
            680: { slidesPerView: 2.3, spaceBetween: 20 },
            1024: { slidesPerView: 2.8, spaceBetween: 30 },
            1440: { slidesPerView: 3.5, spaceBetween: 30 },
          }}
          navigation={{
            prevEl: ".previous-btn",
            nextEl: ".next-btn",
          }}
          grabCursor={true}
          loop={true}
          className="relative"
        >
          {reviews?.map(({ title, date, pic, comment }, i) => (
            <SwiperSlide key={i + title}>
              <div className="card">
                <div className="content">
                  <div className="comment">
                    <p>{comment}</p>
                  </div>
                </div>

                <div className="profile">
                  <div className="pic">
                    <img src={pic} alt={title} />
                  </div>

                  <div className="text-xs">
                    <p className="font-bold">{title}</p>
                    <p>{date}</p>
                    <div className="stars-sm">
                      {stars?.map((i) => (
                        <img key={"star-sm" + i} src="/assets/icons/rating_star_full.svg" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <button key="prev" className="navigation left-2">
            <img src="/assets/icons/previous.svg" alt="Previous Slide" />
          </button>
          <button key="next" className="navigation right-2">
            <img src="/assets/icons/next.svg" alt="Next Slide" />
          </button>
        </Swiper>
      </div>

      {seeMore && (
        <FadeUp key="x3" className="w-full flex justify-center page-section">
          <Press>
            <Link href="/testimonials" className="brand-btn-yellow">
              See More
              <img src="/assets/icons/see_more_dark.svg" alt="See More" className="ml-2 inline-flex w-3 h-3" />
            </Link>
          </Press>
        </FadeUp>
      )}
    </section>
  )
}

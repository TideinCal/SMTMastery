import { Press, FadeUp } from "@/components/animations"

export default function TradeLiveWithUs() {
  return (
    <section className="mastery__trade theme-dark py-9">
      <div className="trade-container">
        <FadeUp>
          <h2 className="trade-title">Trade Live With Us</h2>
        </FadeUp>

        <div className="trade-cols">
          <div className="trade-video">
            <FadeUp>
              <div className="play-btn relative group">
                <a href="https://www.youtube.com/watch?v=sGJ2sRJI9-c&t=1s" target="_blank">
                  <img src="/assets/images/video.jpg" alt="" className="video-img" />
                  <img src="/assets/icons/play_icon.svg" className="play-icon" />
                </a>
              </div>
            </FadeUp>
          </div>

          <div className="trade-content-col">
            <div className="trade-content">
              <FadeUp>
                <h2 className="font-black">Here's a glimpse.</h2>
              </FadeUp>

              <FadeUp>
                <p className="font-light mb-5 md:mb-9">
                  We trade Live with our members via Zoom and Telegram. Here's a snippet of one of our live sessions.
                </p>
              </FadeUp>

              <FadeUp>
                <Press>
                  <a href="https://www.youtube.com/watch?v=sGJ2sRJI9-c&t=1s" target="_blank" className="brand-btn">
                    See More
                    <img src="/assets/icons/see_more_light.svg" alt=">" className="ml-2 inline-flex w-3 h-3" />
                  </a>
                </Press>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

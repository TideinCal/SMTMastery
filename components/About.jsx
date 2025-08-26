export default function About({ dark }) {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-pic">
          <img
            src={dark ? "/assets/images/about_pic.jpg" : "/assets/images/about_pic_light.jpg"}
            alt="Timur Insanally: Educator / Founder of SMT Mastery"
          />
        </div>

        <div className="about-content">
          <div>
            <h2 className={`about-title ${!dark ? "text-white" : ""}`}>About the Trader</h2>
            <p className="about-text">
              Tim is a cancer survivor who established himself as a Six-Figure Trader and Educator based in New York. He
              has amassed 24k followers on IG and has traveled globally for his insights in the Forex market and has
              handled hundreds of students who are now full time Fx traders.
              <br />
              <br />
              He has established over 150 6-figure traders in the past 4 years & continues to fulfill his mission.
            </p>
          </div>

          <div className="about-featured">
            <h6 className="text-light text-sm">Featured on</h6>

            <div className="separator" />

            <div className="featured-img">
              <img
                src={dark ? "/assets/images/about1.jpg" : "/assets/images/about1_light.jpg"}
                alt="Business Insider"
              />
              <img src="/assets/images/about2.jpg" alt="AP" />
              <img src={dark ? "/assets/images/about3.jpg" : "/assets/images/about3_light.jpg"} alt="Yahoo finance" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

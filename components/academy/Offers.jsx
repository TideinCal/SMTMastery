import { FadeUp, Press } from "@/components/animations"

const benefits = [
  "SMT Forex Beginner’s Course (16 videos)",
  "SMT Intermediate Course (23 videos)",
  "SMT Homework to sharpen your skills",
  "Video access anywhere with dedicated app",
  "Get access to the Global SMT Trading Community",
  "Mentorship from Tim",
  "Get Exclusive 3x Live & recorded calls every week",
  "Get funded with our 12 month trading roadmap",
]

const offers = [
  {
    caption: "Live Monthly Signals",
    title: "$125",
    subtitle: "Monthly",
    link: "https://whop.com/smtmastery"

  },
  {
    active: true,
    caption: "SMT Academy Education",
    title: "$750",
    subtitle: "Lifetime",
    link: "https://whop.com/smtmastery/?productId=prod_wjstGbBkxLZAB"

  },
  {
    caption: "Signals & Education",
    title: "$1250",
    subtitle: "Lifetime",
    link: "https://whop.com/smtmastery/?productId=prod_KQgUwsZAwFQie"
  },
]

export default function Offers() {
  return (
    <section className="page-section">
      <div className="section-container">
        <FadeUp className="text-center">
          <span className="text-brand-white font-bold text-lg md:text-2xl">Welcome to the</span>
          <br />
          <span className="font-black text-brand-red text-2xl md:text-4xl leading-4">Smart Money Team</span>
        </FadeUp>

        <div className="page-section grid grid-cols-1 md:grid-cols-2">
          <FadeUp className="col-1">
            <img src="/assets/images/books.jpg" alt="Books" className="w-full max-h-[450px] object-contain" />
          </FadeUp>

          <div className="col-2 flex justify-center">
            <div className="content-list-container">
              {benefits?.map((item, i) => (
                <FadeUp key={i + item} className="content-list">
                  <div className="bullet">
                    <img src="/assets/icons/checked.svg" alt="" />
                  </div>
                  <div className="text-sm">{item}</div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        <div className="offers grid grid-cols-1 md:grid-cols-3 items-center" id="offerCosts">
          {offers?.map(({ active, caption, title, subtitle, link }, i) => (
            <FadeUp key={title + i + 1} className="offer text-center p-5 flex flex-col items-center font-light">
              {active && <div className="pill bg-brand-red scale-75">Most Popular</div>}

              <div className="caption uppercase font-black text-lg md:text-xl mb-2">{caption}</div>

              <div
                className={`offer-card ${
                  active ? "bg-brand-red lg:scale-110" : "bg-[#3e3e3e]"
                } p-5 rounded-xl md:rounded-3xl
              `}
              >

                <div className="title mb-3">
                  <span className="text-6xl font-bold">{title}</span>
                  <div className="per lowercase">{caption}</div>
                </div>

                {subtitle && <div className="subtitle mb-5">{subtitle}</div>}

                <Press>
                  <a href={link} className="brand-btn-white">
                    Join SMT {caption}
                  </a>
                </Press>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="payment w-full flex justify-center">
          <img src="/assets/images/payment.jpg" alt="" className="max-h-[104px]" />
        </FadeUp>
      </div>
    </section>
  )
}

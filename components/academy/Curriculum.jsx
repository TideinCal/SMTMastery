const course = [
  {
    level: "Beginner",
    list: ["Forex Basics", "Risk Management & Calculate Pips", "Timing & Logistics", "Mindset"],
  },
  {
    level: "Intermediate",
    list: [
      "Logistics",
      "Determinant Factors that Truly Influence Price",
      "Types of Gaps & Inefficiencies in the Marketplace",
      "Market Maker Programs",
      "Manipulation",
      "Time",
    ],
  },
  {
    coming: true,
    level: "Advanced",
    list: ["Coming Soon!"],
  },
]
import { FadeUp } from "@/components/animations"

export default function Curriculum() {
  return (
    <section className="page-section overflow-hidden">
      <div className="section-container">
        <FadeUp className="content flex flex-col items-center gap-5">
          <img src="/assets/images/smt_academy.jpg" alt="" className="h-[67px] md:h-[72px] lg:h-[77px]" />

          <h1 className="heading">The Curriculum</h1>
        </FadeUp>

        <div className="curriculum grid grid-cols-1 md:grid-cols-2">
          <div className="col-1">
            <FadeUp className="img my-5 md:my-0">
              <img
                src="/assets/images/curriculum.png"
                alt="Curriculum"
                className="scale-110 max-h-[500px] object-contain"
              />
            </FadeUp>
          </div>

          <div className="col-2 md:order-first">
            {course?.map(({ coming, level, list }, i) => (
              <div key={level} className="course text-xs md:text-sm text-center md:text-left">
                <FadeUp className={`pill ${coming ? "bg-gray-300 text-brand-black" : "bg-brand-red text-white"} my-2`}>
                  {level}
                </FadeUp>

                <div className="pl-2 mb-2">
                  {list?.map((item) => (
                    <FadeUp key={item}>{item}</FadeUp>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

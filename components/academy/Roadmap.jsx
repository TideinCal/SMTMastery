import { Steps } from "@/components"
import { ScaleUp, FadeUp } from "@/components/animations"
import { counters, roadmap } from "@/constants"

export default function Roadmap() {
  return (
    <section className="roadmap page-section bg-white">
      <div className="section-container ">
        <div className="counters">
          {counters?.map(({ title, count }, i) => (
            <ScaleUp key={title} className="counter">
              <h1 className="count">{count}</h1>
              <p className="title">{title}</p>
            </ScaleUp>
          ))}
        </div>

        <div className="content">
          <FadeUp className="heading-center">
            <span className="text-brand-red">Zero-To-Funded Trading Roadmap</span>
            <br />
            Get Funded in 12 Months
          </FadeUp>
        </div>

        <Steps data={roadmap} />
      </div>
    </section>
  )
}

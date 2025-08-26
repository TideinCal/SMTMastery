import { useState } from "react"
import Accordion from "./Accordion"
import { FAQs } from "@/constants"
import { FadeUp } from "@/components/animations"

export default function FAQ() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="faq-section">
      <div className="faq-container">
        <FadeUp className="faq-col-1">
          <h2 className="title">
            <span>Frequently</span>
            <span>Asked</span>
            <span>Questions</span>
          </h2>
        </FadeUp>

        <div className="faq-col-2">
          {FAQs?.map(({ question, answer }, i) => (
            <FadeUp key={question}>
              <Accordion i={i} expanded={expanded} setExpanded={setExpanded} title={question} body={answer} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

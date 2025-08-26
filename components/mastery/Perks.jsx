import { Fragment } from "react"
import Image from "next/image"

import { FadeUp } from "@/components/animations"
import { perks } from "@/constants"

export default function Perks() {
  return (
    <section className="mastery__perks-section light-theme">
      <div className="container mx-auto">
        <h2 className="perks-title">Perks of joining</h2>

        <div className="perks">
          {perks?.map(({ img, title, points }, i) => (
            <Fragment key={title + i}>
              <div className="perk">
                <FadeUp className="img relative w-[90px] h-[50px]">
                  <Image src={img} alt={title} fill style={{ objectFit: "contain" }} />
                </FadeUp>

                <FadeUp className="title">{title}</FadeUp>

                <FadeUp className="points">
                  <ul className="list-disc list-inside">
                    {points?.map((point, j) => (
                      <li key={j + point}>{point}</li>
                    ))}
                  </ul>
                </FadeUp>
              </div>

              <div className="line">
                <img src="/assets/icons/line.svg" alt="line" />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

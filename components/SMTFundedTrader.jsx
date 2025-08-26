import Link from "next/link"

import { EnterLeft, Press, FadeUp } from "@/components/animations"

export default function SMTFundedTrader({ academy }) {
  return (
    <section className="page-section">
      <div className="section-container">
        <div className="content text-center">
          <FadeUp className="heading-center">
            SMT Funded Trader&nbsp;
            <br className="sm:hidden" />
            Hall of Fame
            <br />
            <span className="text-brand-red">
              {academy ? "Start your Fundiing Journey with us!" : "Get Funded with us!"}
            </span>
          </FadeUp>

          <FadeUp>
            <p className="my-6 sm:my-7">
              A true testament of our quality FX signals.
              <br />
              <span className="font-bold">Any funding firm, we got you covered!</span>
            </p>
          </FadeUp>
        </div>

        <div className="certificates">
          <EnterLeft duration={1} className="col-1 relative w-[30%] z-[4]">
            <img
              src="/assets/images/certificate1.jpg"
              alt="Certificate 1"
              className="absolute w-full object-contain scale-[1.2] translate-x-[5%] rotate-[0.8deg]"
            />
          </EnterLeft>

          <EnterLeft duration={0.75} className="col-2 relative w-[20%] z-[3]">
            <img
              src="/assets/images/certificate2.jpg"
              alt="Certificate 2"
              className="absolute w-full object-contain scale-[1.35] translate-x-[14%] translate-y-[25%] rotate-[0.8deg]"
            />
          </EnterLeft>

          <EnterLeft duration={0.5} className="col-3 relative w-[30%] z-[2]">
            <img
              src="/assets/images/certificate3.jpg"
              alt="Certificate 3"
              className="absolute w-full object-contain scale-125 rotate-1"
            />
          </EnterLeft>

          <EnterLeft duration={0.25} className="col-4 relative w-[30%] z-[1]">
            <img
              src="/assets/images/certificate4.jpg"
              alt="Certificate 4"
              className="absolute w-full object-contain scale-125 -translate-x-[5%] translate-y-[12%] rotate-[0.8deg]"
            />
          </EnterLeft>
        </div>

        <FadeUp className="w-full flex justify-center xl:mt-12">
          <Press>
            <Link href="/hall-of-fame" className="brand-btn">
              See More
              <img src="/assets/icons/see_more_light.svg" alt="See More" className="ml-2 inline-flex w-3 h-3" />
            </Link>
          </Press>
        </FadeUp>
      </div>
    </section>
  )
}

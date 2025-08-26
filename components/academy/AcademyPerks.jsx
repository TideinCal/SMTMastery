import { Steps } from "@/components"
import { FadeUp } from "@/components/animations"
import { mainPerks, academyPerks } from "@/constants"

export default function AcademyPerks() {
  return (
    <section className="page-section dark bg-white dark:bg-black">
      <div className="section-container">
        <div className="content">
          <h1 className="heading-center">Perks of Joining</h1>
        </div>

        <div className="main-perks">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {mainPerks?.map(({ title, icon, details }, i) => (
              <div key={title} className="roadmap-card flex flex-col items-center text-center">
                <FadeUp className="icon flex justify-center py-4">
                  <img src={icon} alt={title} className="h-[300px] object-contain" />
                </FadeUp>

                <FadeUp className="title font-bold sm:text-lg">
                  <div>{title}</div>
                </FadeUp>

                <FadeUp className="details max-w-[280px] p-4 leading-5 sm:text-sm md:text-base md:leading-5">
                  {details}
                </FadeUp>
              </div>
            ))}
          </div>
        </div>

        <Steps data={academyPerks} />
      </div>
    </section>
  )
}

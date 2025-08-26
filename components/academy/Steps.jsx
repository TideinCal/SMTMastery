import { ScaleUp, FadeUp } from "@/components/animations"

export default function Steps({ data }) {
  return (
    <div className="steps">
      {data?.map(({ id, title, subtitle, icon, details }, i) => (
        <div key={title} className="flex flex-col text-center">
          {id && <FadeUp className="id">{i + 1}</FadeUp>}

          <ScaleUp className="icon">
            <img src={icon} alt={title} className="h-16 object-contain" />
          </ScaleUp>

          <div className="title">
            <FadeUp>{title}</FadeUp>
            {subtitle && <FadeUp className="subtitle">3 months</FadeUp>}
          </div>

          <FadeUp className="details">{details}</FadeUp>
        </div>
      ))}
    </div>
  )
}

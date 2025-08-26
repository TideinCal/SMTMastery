import { FadeUp } from "@/components/animations"

import LightGallery from "lightgallery/react"
import "lightgallery/css/lightgallery.css"

export default function ImageGallery({ grids: [grid1, grid2, grid3, grid4] }) {
  return (
    <div className="img-grid grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
      <FadeUp>
        <LightGallery
          counter={false}
          download={false}
          showCloseIcon
          mousewheel
          controls
          elementClassNames="grid-col flex flex-wrap gap-2.5 sm:gap-4 md:gap-5"
        >
          {grid1?.map((img, i) => (
            <a href={img} key={img + i} className="rounded-lg sm:rounded-2xl overflow-hidden cursor-pointer group">
              <img src={img} className="group-hover:scale-125" />
            </a>
          ))}
        </LightGallery>
      </FadeUp>

      <FadeUp>
        <LightGallery
          counter={false}
          download={false}
          showCloseIcon
          mousewheel
          controls
          elementClassNames="grid-col flex flex-wrap gap-2.5 sm:gap-4 md:gap-5"
        >
          {grid2?.map((img, i) => (
            <a href={img} key={img + i} className="rounded-lg sm:rounded-2xl overflow-hidden cursor-pointer group">
              <img src={img} className="group-hover:scale-125" />
            </a>
          ))}
        </LightGallery>
      </FadeUp>

      <FadeUp>
        <LightGallery
          counter={false}
          download={false}
          showCloseIcon
          mousewheel
          controls
          elementClassNames="grid-col flex flex-wrap gap-2.5 sm:gap-4 md:gap-5"
        >
          {grid3?.map((img, i) => (
            <a href={img} key={img + i} className="rounded-lg sm:rounded-2xl overflow-hidden cursor-pointer group">
              <img src={img} className="group-hover:scale-125" />
            </a>
          ))}
        </LightGallery>
      </FadeUp>

      <FadeUp>
        <LightGallery
          counter={false}
          download={false}
          showCloseIcon
          mousewheel
          controls
          elementClassNames="grid-col flex flex-wrap gap-2.5 sm:gap-4 md:gap-5"
        >
          {grid4?.map((img, i) => (
            <a href={img} key={img + i} className="rounded-lg sm:rounded-2xl overflow-hidden cursor-pointer group">
              <img src={img} className="group-hover:scale-125" />
            </a>
          ))}
        </LightGallery>
      </FadeUp>
    </div>
  )
}

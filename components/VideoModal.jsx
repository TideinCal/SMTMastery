import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

export default function VideoModal({ i, video, active, setActive }) {
  const isOpen = i === active

  const [isBrowser, setIsBrowser] = useState(false)
  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (!isBrowser) return

  function handleCloseModal({ target, currentTarget }) {
    if (target !== currentTarget) return
    setActive(false)
  }

  return createPortal(
    <div className={`modal z-50 ${isOpen ? "active" : ""}`} onClick={handleCloseModal}>
      <div className="w-3/4 h-3/4">
        <video
          src={isOpen ? video : ""}
          controls
          className="w-full h-full bg-brand-black"
          controlsList="nodownload"
        ></video>
      </div>
    </div>,
    document.getElementById("modal")
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

export function useParallax(offset = 0.5) {
  const ref = useRef<HTMLDivElement>(null)
  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const elementTop = rect.top
      const windowHeight = window.innerHeight

      // Parallax effect: move slower than scroll speed when element is in view
      if (elementTop < windowHeight && elementTop + rect.height > 0) {
        const scrollProgress = (windowHeight - elementTop) / (windowHeight + rect.height)
        setTranslateY(-scrollProgress * 30 * offset)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [offset])

  return { ref, translateY }
}

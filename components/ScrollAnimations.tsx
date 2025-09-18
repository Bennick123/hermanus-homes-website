"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    // Reset all animations when route changes
    const resetAnimations = () => {
      const animatedElements = document.querySelectorAll(".fade-in-up")
      animatedElements.forEach((el) => {
        el.classList.remove("visible")
      })
    }

    // Reset animations immediately
    resetAnimations()

    // Small delay to ensure DOM is ready and then re-initialize
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      }, observerOptions)

      const animatedElements = document.querySelectorAll(".fade-in-up")
      animatedElements.forEach((el) => observer.observe(el))

      return () => {
        animatedElements.forEach((el) => observer.unobserve(el))
        observer.disconnect()
      }
    }, 150) // Increased delay slightly

    return () => {
      clearTimeout(timer)
    }
  }, [pathname]) // Re-run when pathname changes

  return null
}

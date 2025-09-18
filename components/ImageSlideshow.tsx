"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageSlideshowProps {
  images: string[]
  title: string
  className?: string
}

export default function ImageSlideshow({ images, title, className = "" }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  // Filter out images that failed to load
  const validImages = images.filter((_, index) => !imageErrors.has(index))

  const goToPrevious = useCallback(() => {
    if (validImages.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length)
    }
  }, [validImages.length])

  const goToNext = useCallback(() => {
    if (validImages.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % validImages.length)
    }
  }, [validImages.length])

  const goToSlide = (index: number) => {
    if (index >= 0 && index < validImages.length) {
      setCurrentIndex(index)
    }
  }

  const handleImageError = (originalIndex: number) => {
    setImageErrors((prev) => new Set([...prev, originalIndex]))
    console.warn(`Failed to load image: ${images[originalIndex]}`)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        goToPrevious()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToPrevious, goToNext])

  // Reset current index if it's out of bounds after filtering
  useEffect(() => {
    if (currentIndex >= validImages.length && validImages.length > 0) {
      setCurrentIndex(0)
    }
  }, [currentIndex, validImages.length])

  if (!images || images.length === 0) {
    return (
      <div
        className={`relative h-96 md:h-[500px] bg-gray-200 rounded-lg flex items-center justify-center ${className}`}
      >
        <p className="text-gray-500">No images available</p>
      </div>
    )
  }

  if (validImages.length === 0) {
    return (
      <div
        className={`relative h-96 md:h-[500px] bg-gray-200 rounded-lg flex items-center justify-center ${className}`}
      >
        <div className="text-center">
          <p className="text-gray-500 mb-2">Images are loading...</p>
          <p className="text-sm text-gray-400">Please check image paths if this persists</p>
        </div>
      </div>
    )
  }

  const currentImage = validImages[currentIndex]
  const originalIndex = images.indexOf(currentImage)

  return (
    <div className={`relative ${className}`}>
      {/* Main Image Display */}
      <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={currentImage || "/placeholder.svg?height=600&width=800"}
          alt={`${title} - Image ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          priority={currentIndex === 0}
          sizes="100vw"
          onError={() => handleImageError(originalIndex)}
          onLoad={() => {
            // Remove from error set if image loads successfully
            setImageErrors((prev) => {
              const newSet = new Set(prev)
              newSet.delete(originalIndex)
              return newSet
            })
          }}
        />

        {/* Navigation Arrows - Only show if more than 1 valid image */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Image Counter */}
        {validImages.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {currentIndex + 1} / {validImages.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation - Only show if more than 1 valid image */}
      {validImages.length > 1 && (
        <div className="mt-4">
          {/* Dots Indicator for Mobile */}
          <div className="flex justify-center space-x-2 md:hidden">
            {validImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-blue-600 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Strip for Desktop */}
          <div className="hidden md:flex space-x-2 overflow-x-auto pb-2">
            {validImages.map((image, index) => {
              const originalImageIndex = images.indexOf(image)
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                    index === currentIndex ? "ring-2 ring-blue-600 ring-offset-2" : "opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <Image
                    src={image || "/placeholder.svg?height=64&width=80"}
                    alt={`${title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                    onError={() => handleImageError(originalImageIndex)}
                  />
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

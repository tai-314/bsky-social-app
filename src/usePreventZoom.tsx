/* eslint-disable */
import React, {useEffect} from 'react'

export const useDisablePinchZoomEffect = () => {
  useEffect(() => {
    const disablePinchZoom = e => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }
    document.addEventListener('touchmove', disablePinchZoom, {passive: false})
    return () => {
      document.removeEventListener('touchmove', disablePinchZoom)
    }
  }, [])
}

function usePreventZoom() {
  useEffect(() => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    if (!isIOS) return

    const inputs = document.querySelectorAll('input, textarea')
    inputs.forEach(input => {
      const computedStyle = window.getComputedStyle(input)
      const currentFontSize = parseFloat(computedStyle.fontSize)
      if (currentFontSize < 16) {
        input.style.fontSize = '16px'
      }
    })
  }, [])
}

export default usePreventZoom

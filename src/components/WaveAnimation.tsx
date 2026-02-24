"use client"

import { useEffect, useRef } from "react"

export default function WaveAnimation() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const opts = {
      lineWidth: 4,
      numberOfPoints: 20,
      amplitude: 15,
      spacing: 10,
      margin: 10,
      fixedWidth: 300,
    }

    const width = opts.fixedWidth
    const height = opts.amplitude + opts.margin * 2

    const points: number[] = []
    for (let i = opts.numberOfPoints; i--; ) points.push(i)

    let animId: number

    const animate = () => {
      const path = svg.querySelector("path")
      const glow = svg.querySelector("#glow feDropShadow")
      if (!path || !glow) return

      const coords = points.map((n) => {
        const first = n === 0
        const last = n === opts.numberOfPoints - 1
        const x = ((width - opts.margin * 2) / (opts.numberOfPoints - 1)) * n + opts.margin
        const y = first || last ? height / 2 : (height - opts.amplitude) / 2 + Math.random() * opts.amplitude
        return { x, y }
      })

      path.setAttribute("d", "M" + coords.map((c) => c.x + "," + c.y).join(" L"))

      const deviation = Math.random() * (5 - 2) + 2
      path.style.opacity = String(deviation / 5 + 0.2)
      path.style.strokeWidth = String(opts.lineWidth)
      glow.setAttribute("stdDeviation", String(deviation))

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <div className="flex items-center justify-center">
      <svg ref={svgRef} width="300" height="35">
        <defs>
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#FFD700" />
          </filter>
        </defs>
        <path style={{ filter: "url(#glow)" }} d="M10,0 L100,0" stroke="#FFD700" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  )
}

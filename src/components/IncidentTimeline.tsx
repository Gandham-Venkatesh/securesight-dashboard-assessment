'use client'

import { useState, useRef, useEffect } from 'react'
import { Incident } from '@/types'

interface IncidentTimelineProps {
  incidents: Incident[]
  onTimeSelect?: (time: Date) => void
}

export function IncidentTimeline({ incidents, onTimeSelect }: IncidentTimelineProps) {
  const [scrubberPosition, setScrubberPosition] = useState(50) // percentage
  const timelineRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  // Generate 24-hour timeline
  const hours = Array.from({ length: 24 }, (_, i) => i)
  
  // Get today's date for timeline
  const today = new Date()
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59)

  const getIncidentPosition = (incident: Incident) => {
    const incidentTime = new Date(incident.tsStart)
    const dayStart = new Date(incidentTime.getFullYear(), incidentTime.getMonth(), incidentTime.getDate())
    const dayEnd = new Date(incidentTime.getFullYear(), incidentTime.getMonth(), incidentTime.getDate(), 23, 59, 59)
    
    const totalMs = dayEnd.getTime() - dayStart.getTime()
    const incidentMs = incidentTime.getTime() - dayStart.getTime()
    
    return (incidentMs / totalMs) * 100
  }

  const getIncidentColor = (type: string) => {
    switch (type) {
      case 'Gun Threat':
        return 'bg-red-500'
      case 'Unauthorized Access':
        return 'bg-orange-500'
      case 'Suspicious Activity':
        return 'bg-yellow-500'
      case 'Perimeter Breach':
        return 'bg-purple-500'
      case 'Vandalism':
        return 'bg-pink-500'
      case 'Fire Detected':
        return 'bg-red-600'
      default:
        return 'bg-gray-500'
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateScrubberPosition(e)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateScrubberPosition(e)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const updateScrubberPosition = (e: MouseEvent | React.MouseEvent) => {
    if (!timelineRef.current) return
    
    const rect = timelineRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    
    setScrubberPosition(percentage)
    
    // Calculate the time based on position
    const totalMs = endOfDay.getTime() - startOfDay.getTime()
    const selectedMs = (percentage / 100) * totalMs
    const selectedTime = new Date(startOfDay.getTime() + selectedMs)
    
    onTimeSelect?.(selectedTime)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging])

  const getCurrentTime = () => {
    const totalMs = endOfDay.getTime() - startOfDay.getTime()
    const selectedMs = (scrubberPosition / 100) * totalMs
    const selectedTime = new Date(startOfDay.getTime() + selectedMs)
    
    return selectedTime.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    })
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-white font-semibold">24-Hour Timeline</h3>
        <div className="text-slate-300 text-sm">
          Current Time: {getCurrentTime()}
        </div>
      </div>
      
      {/* Timeline */}
      <div className="relative">
        {/* Hour markers */}
        <div className="flex justify-between text-xs text-slate-400 mb-2">
          {hours.filter((_, i) => i % 4 === 0).map(hour => (
            <span key={hour}>{hour.toString().padStart(2, '0')}:00</span>
          ))}
        </div>
        
        {/* Timeline track */}
        <div 
          ref={timelineRef}
          className="relative h-12 bg-slate-700 rounded-lg cursor-pointer"
          onMouseDown={handleMouseDown}
        >
          {/* Hour grid lines */}
          {hours.map(hour => (
            <div
              key={hour}
              className="absolute top-0 bottom-0 w-px bg-slate-600"
              style={{ left: `${(hour / 24) * 100}%` }}
            />
          ))}
          
          {/* Incident markers */}
          {incidents.map(incident => (
            <div
              key={incident.id}
              className={`absolute top-1 w-2 h-10 rounded-full ${getIncidentColor(incident.type)} opacity-80 hover:opacity-100 transition-opacity`}
              style={{ left: `${getIncidentPosition(incident)}%` }}
              title={`${incident.type} - ${new Date(incident.tsStart).toLocaleTimeString()}`}
            />
          ))}
          
          {/* Scrubber */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-blue-500 rounded-full cursor-grab active:cursor-grabbing"
            style={{ left: `${scrubberPosition}%` }}
          >
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg" />
          </div>
        </div>
        
        {/* Timeline labels */}
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>00:00</span>
          <span>12:00</span>
          <span>23:59</span>
        </div>
      </div>
    </div>
  )
}
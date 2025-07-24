'use client'

import { useState } from 'react'
import { Play, Pause, Volume2, Maximize } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Incident } from '@/types'

interface IncidentPlayerProps {
  incident: Incident | null
}

export function IncidentPlayer({ incident }: IncidentPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // This is the placeholder when no incident is selected.
  if (!incident) {
    return (
      <div className="bg-slate-900/80 border border-slate-700 rounded-lg h-full flex items-center justify-center">
        <div className="text-center text-slate-500">
          <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
          <p>Select an incident to view footage</p>
        </div>
      </div>
    )
  }

  const getIncidentTypeColor = (type: string) => {
    switch (type) {
      case 'Gun Threat': return 'bg-red-600';
      case 'Unauthorized Access': return 'bg-orange-600';
      case 'Suspicious Activity': return 'bg-yellow-600';
      case 'Perimeter Breach': return 'bg-purple-600';
      case 'Vandalism': return 'bg-pink-600';
      case 'Fire Detected': return 'bg-red-700';
      default: return 'bg-gray-600';
    }
  }

  return (
    // Main container: Using CSS Grid with defined rows.
    // grid-rows-[1fr_auto] means: first row takes all available space, second row takes its content's height.
    <div className="bg-slate-900/80 border border-slate-700 rounded-lg h-full grid grid-rows-[1fr_auto]">
      
      {/* Video Player Area: This is the first row. It will not stretch anymore. */}
      {/* `min-h-0` is a crucial fix for flex/grid items to prevent them from overflowing. */}
      <div className="relative bg-black rounded-t-lg overflow-hidden row-start-1 min-h-0">
        <img
          src={incident.thumbnailUrl}
          alt="Incident footage"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Controls */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="ghost"
            size="icon"
            className="h-16 w-16 bg-black/50 hover:bg-black/70 text-white rounded-full"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
          </Button>
        </div>

        {/* Top Overlay Info */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
          <div className="space-y-2 pointer-events-auto">
            <Badge className={`${getIncidentTypeColor(incident.type)} text-white shadow-lg`}>
              {incident.type}
            </Badge>
            <div className="text-white text-sm bg-black/50 px-2 py-1 rounded">
              {incident.camera?.name} - {incident.camera?.location}
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-white bg-black/50 hover:bg-black/70 pointer-events-auto">
            <Maximize className="h-4 w-4" />
          </Button>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-4 pointer-events-none">
          <Button variant="ghost" size="icon" className="text-white bg-black/50 hover:bg-black/70 pointer-events-auto">
            <Volume2 className="h-4 w-4" />
          </Button>
          <div className="flex-1 bg-white/20 h-1.5 rounded-full pointer-events-auto cursor-pointer">
            <div className="bg-blue-500 h-1.5 rounded-full w-1/3"></div>
          </div>
          <div className="text-white text-sm bg-black/50 px-2 py-1 rounded pointer-events-auto">
            00:45 / 02:30
          </div>
        </div>
      </div>

      {/* Camera Thumbnails Strip: This is the second row. */}
      <div className="p-3 bg-slate-800/50 rounded-b-lg border-t border-slate-700 row-start-2">
        <div className="flex space-x-3">
          <div className="w-24 h-16 bg-slate-700 rounded-md border-2 border-blue-500 overflow-hidden">
            <img
              src={incident.thumbnailUrl}
              alt="Camera view"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-24 h-16 bg-slate-700 rounded-md border border-slate-600 overflow-hidden opacity-60">
            <img
              src="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Camera view"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

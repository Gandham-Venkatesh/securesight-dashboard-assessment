'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { IncidentPlayer } from '@/components/IncidentPlayer'
import { IncidentList } from '@/components/IncidentList'
import { IncidentTimeline } from '@/components/IncidentTimeline'
import { Incident } from '@/types'

export default function Dashboard() {
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null)
  const [allIncidents, setAllIncidents] = useState<Incident[]>([])

  useEffect(() => {
    const fetchAllIncidents = async () => {
      try {
        const response = await fetch('/api/incidents') 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json()
        setAllIncidents(data)
        if (data.length > 0) {
            setSelectedIncident(data[0]);
        }
      } catch (error) {
        console.error('Error fetching all incidents:', error)
      }
    }
    fetchAllIncidents()
  }, [])

  const handleTimeSelect = (time: Date) => {
    console.log('Selected time:', time)
  }

  return (
    // We use min-h-screen to ensure the dark background covers the whole page, even when scrolling
    <div className="min-h-screen bg-slate-900 text-white">
      
      <header className="sticky top-0 z-10 bg-slate-900/80 backdrop-blur-sm">
        <Navbar />
      </header>
      
      {/* Main Content Area */}
      <div className="p-6">
        {/* We are giving the content grid a specific, larger height (75% of viewport height) */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[75vh]">
          
          <div className="lg:col-span-2 h-full min-h-0">
            <IncidentPlayer incident={selectedIncident} />
          </div>
          
          <div className="lg:col-span-1 h-full min-h-0">
            <IncidentList 
              onSelectIncident={setSelectedIncident}
              selectedIncident={selectedIncident}
            />
          </div>

        </main>
      </div>
      
      {/* Timeline Area */}
      <footer className="px-6 pb-6">
        <IncidentTimeline 
          incidents={allIncidents}
          onTimeSelect={handleTimeSelect}
        />
      </footer>
    </div>
  )
}

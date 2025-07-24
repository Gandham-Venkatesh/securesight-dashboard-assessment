'use client'

import { useState, useEffect } from 'react'
import { AlertTriangle, MapPin, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Incident } from '@/types'
import { formatTimestamp, formatDuration } from '@/lib/utils'

interface IncidentListProps {
  onSelectIncident: (incident: Incident) => void
  selectedIncident: Incident | null
}

export function IncidentList({ onSelectIncident, selectedIncident }: IncidentListProps) {
  const [incidents, setIncidents] = useState<Incident[]>([])
  const [loading, setLoading] = useState(true)
  const [resolvingIds, setResolvingIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    const fetchIncidents = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/incidents?resolved=false');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setIncidents(data);
      } catch (error) {
        console.error('Error fetching incidents:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchIncidents();
  }, []);

  const handleResolve = async (incident: Incident, e: React.MouseEvent) => {
    e.stopPropagation();
    
    setResolvingIds(prev => new Set(prev).add(incident.id));
    
    // Optimistic UI update
    setIncidents(prev => prev.filter(i => i.id !== incident.id));
    
    try {
      await fetch(`/api/incidents/${incident.id}/resolve`, {
        method: 'PATCH'
      });
    } catch (error) {
      console.error('Error resolving incident:', error);
      // Revert on error
      setIncidents(prev => [...prev, incident].sort((a, b) => 
        new Date(b.tsStart).getTime() - new Date(a.tsStart).getTime()
      ));
    } finally {
      setResolvingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(incident.id);
        return newSet;
      });
    }
  };

  const getIncidentIcon = (type: string) => {
    switch (type) {
      case 'Gun Threat': return '🔫';
      case 'Unauthorized Access': return '🚪';
      case 'Suspicious Activity': return '👁️';
      case 'Perimeter Breach': return '🚧';
      case 'Vandalism': return '🔨';
      case 'Fire Detected': return '🔥';
      default: return '⚠️';
    }
  };

  const getIncidentTypeColor = (type: string) => {
    switch (type) {
        case 'Gun Threat': return 'bg-red-200/20 text-red-300 border-red-500/30';
        case 'Unauthorized Access': return 'bg-orange-200/20 text-orange-300 border-orange-500/30';
        case 'Suspicious Activity': return 'bg-yellow-200/20 text-yellow-300 border-yellow-500/30';
        case 'Perimeter Breach': return 'bg-purple-200/20 text-purple-300 border-purple-500/30';
        case 'Vandalism': return 'bg-pink-200/20 text-pink-300 border-pink-500/30';
        case 'Fire Detected': return 'bg-red-200/20 text-red-300 border-red-500/30';
        default: return 'bg-gray-200/20 text-gray-300 border-gray-500/30';
    }
  };

  if (loading) {
    return (
      <div className="bg-slate-900/80 border border-slate-700 rounded-lg h-full p-6">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-24 bg-slate-800 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    // We are now using CSS Grid for the layout
    <div className="bg-slate-900/80 border border-slate-700 rounded-lg h-full grid grid-rows-[auto_1fr]">
      {/* Header: This is the first row (auto height) */}
      <div className="p-4 border-b border-slate-700 row-start-1">
        <h3 className="font-semibold tracking-tight text-white flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
          Unresolved Incidents ({incidents.length})
        </h3>
      </div>
      
      {/* Content: This is the second row (takes all remaining space) */}
      <div className="overflow-y-auto space-y-3 p-4 row-start-2">
        {incidents.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-slate-500">
            <CheckCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No unresolved incidents</p>
          </div>
        ) : (
          incidents.map((incident) => (
            <div
              key={incident.id}
              className={`p-3 rounded-lg border cursor-pointer transition-all hover:bg-slate-800/60 ${
                selectedIncident?.id === incident.id
                  ? 'bg-slate-700/50 border-blue-500'
                  : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'
              } ${resolvingIds.has(incident.id) ? 'opacity-50 pointer-events-none' : ''}`}
              onClick={() => onSelectIncident(incident)}
            >
              <div className="flex space-x-4">
                <div className="w-20 h-16 bg-slate-800 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={incident.thumbnailUrl}
                    alt="Incident thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1.5">
                    <Badge className={`text-xs font-medium border ${getIncidentTypeColor(incident.type)}`}>
                      <span className="mr-1.5">{getIncidentIcon(incident.type)}</span>
                      {incident.type}
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs bg-green-600/80 hover:bg-green-600 text-white border-green-700/50 h-7 px-3"
                      onClick={(e) => handleResolve(incident, e)}
                      disabled={resolvingIds.has(incident.id)}
                    >
                      {resolvingIds.has(incident.id) ? '...' : 'Resolve'}
                    </Button>
                  </div>
                  <div className="space-y-1 text-sm text-slate-300">
                    <div className="flex items-center text-slate-200 font-medium">
                      <MapPin className="h-3.5 w-3.5 mr-1.5 text-slate-500" />
                      <span className="truncate">{incident.camera?.name}</span>
                    </div>
                    <div className="flex items-center text-slate-400 text-xs">
                      <Clock className="h-3 w-3 mr-1.5" />
                      <span>{formatTimestamp(new Date(incident.tsStart))}</span>
                      <span className="mx-2 text-slate-600">•</span>
                      <span>{formatDuration(new Date(incident.tsStart), new Date(incident.tsEnd))}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

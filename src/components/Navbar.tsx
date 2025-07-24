import { Shield, Camera, AlertTriangle, Users, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-blue-400" />
          <h1 className="text-xl font-bold text-white">SecureSight</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
            <Camera className="h-4 w-4 mr-2" />
            Cameras
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Incidents
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
            <Users className="h-4 w-4 mr-2" />
            Users
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </nav>
  )
}
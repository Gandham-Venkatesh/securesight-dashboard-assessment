import { PrismaClient, Incident } from '@prisma/client'

const prisma = new PrismaClient()

const incidentTypes = [
  'Gun Threat',
  'Unauthorized Access', 
  'Suspicious Activity',
  'Perimeter Breach',
  'Vandalism',
  'Fire Detected'
]

const thumbnailUrls = [
  'https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2346092/pexels-photo-2346092.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2346093/pexels-photo-2346093.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg?auto=compress&cs=tinysrgb&w=400'
]

async function main() {
  console.log('🌱 Starting seed...')

  // Clear existing data
  await prisma.incident.deleteMany()
  await prisma.camera.deleteMany()

  // Create cameras
  const cameras = await Promise.all([
    prisma.camera.create({
      data: {
        name: 'ShopFloor A',
        location: 'Main Production Floor - North Wing'
      }
    }),
    prisma.camera.create({
      data: {
        name: 'Vault',
        location: 'Secure Storage Area - Basement Level'
      }
    }),
    prisma.camera.create({
      data: {
        name: 'Entrance',
        location: 'Main Building Entrance - Ground Floor'
      }
    })
  ])

  console.log(`✅ Created ${cameras.length} cameras`)

  // Generate incidents across 24 hours
  const incidents: Incident[] = []
  const today = new Date()
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())

  for (let i = 0; i < 15; i++) {
    const camera = cameras[Math.floor(Math.random() * cameras.length)]
    const incidentType = incidentTypes[Math.floor(Math.random() * incidentTypes.length)]
    
    // Random time within 24 hours
    const randomHour = Math.floor(Math.random() * 24)
    const randomMinute = Math.floor(Math.random() * 60)
    const randomSecond = Math.floor(Math.random() * 60)
    
    const tsStart = new Date(startOfDay)
    tsStart.setHours(randomHour, randomMinute, randomSecond)
    
    // Incident duration between 30 seconds and 5 minutes
    const durationMs = (30 + Math.random() * 270) * 1000
    const tsEnd = new Date(tsStart.getTime() + durationMs)
    
    const incident = await prisma.incident.create({
      data: {
        cameraId: camera.id,
        type: incidentType,
        tsStart,
        tsEnd,
        thumbnailUrl: thumbnailUrls[Math.floor(Math.random() * thumbnailUrls.length)],
        resolved: Math.random() > 0.7 // 30% chance of being resolved
      }
    })
    
    incidents.push(incident)
  }

  console.log(`✅ Created ${incidents.length} incidents`)
  
  // Show summary
  const unresolvedCount = incidents.filter(i => !i.resolved).length
  console.log(`📊 Summary:`)
  console.log(`   - Total incidents: ${incidents.length}`)
  console.log(`   - Unresolved: ${unresolvedCount}`)
  console.log(`   - Resolved: ${incidents.length - unresolvedCount}`)
  
  console.log('🎉 Seed completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
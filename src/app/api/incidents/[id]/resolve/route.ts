import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// This is the final, correct version using the Promise-based params type
// This fix is based on the solution for a known issue in Next.js 15
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // The key fix is here
) {
  try {
    // We need to 'await' the params because they are now a Promise
    const { id } = await params;

    // Find the incident by its ID and update the 'resolved' status to true
    const updatedIncident = await prisma.incident.update({
      where: { id },
      data: { resolved: true },
      include: {
        camera: true // Also include camera details in the response
      }
    })

    // Return the updated incident data as a JSON response
    return NextResponse.json(updatedIncident)
  } catch (error) {
    // If any error occurs, log it and return a 500 status code
    console.error('Error resolving incident:', error)
    return NextResponse.json(
      { error: 'Failed to resolve incident' },
      { status: 500 }
    )
  }
}

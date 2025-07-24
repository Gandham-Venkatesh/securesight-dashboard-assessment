import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// This is the function that handles PATCH requests to /api/incidents/[id]/resolve

// Define a specific type for the context parameter
type PatchContext = {
  params: {
    id: string;
  };
};

export async function PATCH(
  request: NextRequest,
  context: PatchContext // Using the new, more specific type here
) {
  try {
    const { id } = context.params;

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

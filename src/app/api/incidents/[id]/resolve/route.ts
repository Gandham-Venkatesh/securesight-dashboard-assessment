import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// This is the function that handles PATCH requests to /api/incidents/[id]/resolve

// Let's define a very clear type for the context object that Next.js passes to the route handler.
// This context contains the dynamic URL parameters.
interface RouteContext {
  params: {
    id: string;
  };
}

export async function PATCH(request: Request, context: RouteContext) {
  try {
    // We get the 'id' from the context object.
    const { id } = context.params;

    // Find the incident by its ID and update the 'resolved' status to true
    const updatedIncident = await prisma.incident.update({
      where: { id },
      data: { resolved: true },
      include: {
        camera: true // Also include camera details in the response
      }
    });

    // Return the updated incident data as a JSON response
    return NextResponse.json(updatedIncident);
  } catch (error) {
    // If any error occurs, log it and return a 500 status code
    console.error('Error resolving incident:', error);
    return NextResponse.json(
      { error: 'Failed to resolve incident' },
      { status: 500 }
    );
  }
}

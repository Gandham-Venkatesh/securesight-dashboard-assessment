import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTimestamp(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(date)
}

export function formatDuration(start: Date, end: Date): string {
  const diffMs = end.getTime() - start.getTime()
  const diffSeconds = Math.floor(diffMs / 1000)
  const minutes = Math.floor(diffSeconds / 60)
  const seconds = diffSeconds % 60
  
  if (minutes > 0) {
    return `${minutes}m ${seconds}s`
  }
  return `${seconds}s`
}
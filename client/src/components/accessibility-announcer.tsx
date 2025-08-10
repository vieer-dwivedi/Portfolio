import { useEffect } from 'react';

interface AccessibilityAnnouncerProps {
  message: string;
  priority?: 'polite' | 'assertive';
}

export default function AccessibilityAnnouncer({ 
  message, 
  priority = 'polite' 
}: AccessibilityAnnouncerProps) {
  useEffect(() => {
    if (!message) return;

    // Create announcement element
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only'; // Screen reader only
    announcer.textContent = message;

    document.body.appendChild(announcer);

    // Clean up after announcement
    const timer = setTimeout(() => {
      if (document.body.contains(announcer)) {
        document.body.removeChild(announcer);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (document.body.contains(announcer)) {
        document.body.removeChild(announcer);
      }
    };
  }, [message, priority]);

  return null;
}

// Hook for managing accessibility announcements
export function useAccessibilityAnnouncer() {
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    // Create and inject announcement
    const event = new CustomEvent('accessibility-announcement', {
      detail: { message, priority }
    });
    window.dispatchEvent(event);
  };

  return { announce };
}
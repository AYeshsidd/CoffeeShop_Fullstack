'use client';

import React from 'react';

/**
 * Announcement Bar Component
 * Solid accent background for promotional messages - no excessive gradients
 */
export const AnnouncementBar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-accent-500 text-white py-2.5 shadow-sm border-b border-accent-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-center">
          <svg className="w-4 h-4 flex-shrink-0 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <p className="text-sm font-medium">
            <span className="hidden sm:inline">Free delivery on orders over £30 · </span>
            <span className="font-semibold">Evening Brunch Menu Available 5-9 PM</span>
          </p>
        </div>
      </div>
    </div>
  );
};

AnnouncementBar.displayName = 'AnnouncementBar';

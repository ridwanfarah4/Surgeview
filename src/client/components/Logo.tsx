// src/client/components/Logo.tsx
// Use this if you prefer a simple text-based logo

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Wave icon */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none"
        className="text-current"
      >
        <path 
          d="M4 20C4 20 8 12 12 12C16 12 16 20 20 20C24 20 24 12 28 12C32 12 36 20 36 20" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      
      {/* Text */}
      <span className="text-xl font-bold tracking-tight">
        Surge<span className="text-blue-600">view</span>
      </span>
    </div>
  )
}

// Simple version - just text
export function LogoText({ className = "" }: { className?: string }) {
  return (
    <span className={`text-xl font-bold tracking-tight ${className}`}>
      Surge<span className="text-blue-600">view</span>
    </span>
  )
}

// Minimal version - just icon
export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 32 32" 
      fill="none"
      className={className}
    >
      <path 
        d="M4 20C4 20 8 12 12 12C16 12 16 20 20 20C24 20 24 12 28 12C32 12 36 20 36 20" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

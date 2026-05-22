import type { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  variant?: 'coral' | 'amber' | 'sage';
  className?: string;
}

export default function GradientText({ children, variant = 'coral', className = '' }: GradientTextProps) {
  return (
    <span className={`gradient-text-${variant} ${className}`}>
      {children}
    </span>
  );
}

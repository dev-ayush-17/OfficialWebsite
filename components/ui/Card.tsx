import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'coral' | 'amber' | 'sage';
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  glowColor,
  hover = true,
}: CardProps) {
  const glowClass = glowColor ? `glow-${glowColor}` : '';
  const hoverClass = hover ? 'hover:border-[var(--border-hover)] hover:-translate-y-1 hover:shadow-lg' : '';

  return (
    <div
      className={`glass-card gradient-border p-6 ${glowClass} ${hoverClass} transition-all duration-400 ${className}`}
    >
      {children}
    </div>
  );
}

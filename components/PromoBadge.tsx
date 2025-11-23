import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface PromoBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  code?: string;
}

export const PromoBadge: React.FC<PromoBadgeProps> = ({ size = 'md', className = '', code = 'LPBN' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering parent click events
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-1',
    md: 'text-base px-4 py-2',
    lg: 'text-2xl px-8 py-4 font-bold tracking-widest'
  };

  return (
    <button 
      className={`inline-flex items-center gap-2 bg-betting-accent/10 border-2 border-betting-accent text-betting-accent rounded-full cursor-pointer hover:bg-betting-accent hover:text-white transition-all duration-300 group ${sizeClasses[size]} ${className}`}
      onClick={handleCopy}
      title="Copier le code"
    >
      <span className="font-mono">CODE: <span className="font-bold text-white group-hover:text-white">{code}</span></span>
      {copied ? <Check size={size === 'lg' ? 24 : 16} /> : <Copy size={size === 'lg' ? 24 : 16} />}
    </button>
  );
};
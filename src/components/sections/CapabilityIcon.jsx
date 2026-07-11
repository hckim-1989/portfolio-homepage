/**
 * CapabilityIcon — 3가지 pillar 추상 SVG 아이콘
 * Claude design: 코드 인라인 생성, currentColor 사용
 */
export default function CapabilityIcon({ pillarId, className = '' }) {
  if (pillarId === 'brand') {
    return (
      <svg
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Brand — overlapping arcs */}
        <circle cx="32" cy="40" r="22" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="48" cy="40" r="22" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="40" cy="40" r="3" fill="currentColor"/>
      </svg>
    );
  }
  if (pillarId === 'crm') {
    return (
      <svg
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* CRM — concentric tiers */}
        <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="40" cy="40" r="12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="40" cy="40" r="4" fill="currentColor"/>
      </svg>
    );
  }
  if (pillarId === 'engagement') {
    return (
      <svg
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Engagement — node network */}
        <line x1="20" y1="22" x2="60" y2="58" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="60" y1="22" x2="20" y2="58" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="20" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="22" r="4" fill="currentColor"/>
        <circle cx="60" cy="22" r="4" fill="currentColor"/>
        <circle cx="20" cy="58" r="4" fill="currentColor"/>
        <circle cx="60" cy="58" r="4" fill="currentColor"/>
        <circle cx="40" cy="40" r="5" fill="var(--color-canvas)" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    );
  }
  if (pillarId === 'dx') {
    return (
      <svg
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* DX — fragmented squares merging into one */}
        <rect x="14" y="14" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="32" y="14" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <rect x="14" y="32" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <rect x="40" y="40" width="26" height="26" fill="currentColor"/>
        <path d="M48 53 L52 57 L60 49" fill="none" stroke="var(--color-canvas)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (pillarId === 'product') {
    return (
      <svg
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Product Lifecycle — 3-phase timeline (Launch → Grow → Sustain) */}
        <line x1="16" y1="40" x2="64" y2="40" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
        <circle cx="16" cy="40" r="6" fill="currentColor"/>
        <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="64" cy="40" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 40 L36 40" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M44 40 L60 40" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      </svg>
    );
  }
  return null;
}

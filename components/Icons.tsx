


import React from 'react';

export const BinocularsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 18L14 18" />
    <path d="M5 12L5 7C5 5.34315 6.34315 4 8 4L10 4" />
    <path d="M19 12L19 7C19 5.34315 17.6569 4 16 4L14 4" />
    <path d="M5 12L10 12" />
    <path d="M14 12L14 18" />
    <path d="M10 12L10 18" />
    <path d="M10 4L14 4" />
  </svg>
);

export const FieldscopeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21L12 15" />
    <path d="M8 21L16 21" />
    <path d="M3 9L21 9" />
    <path d="M6 9L6 3L18 3L18 9" />
    <path d="M10 15L14 15" />
  </svg>
);

export const CameraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

export const TelephotoCameraIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
        <path d="M2 9.5h2.29a1 1 0 0 1 .94.66l.32 1.11" />
        <path d="M22 9.5h-2.29a1 1 0 0 0-.94.66l-.32 1.11" />
        <line x1="12" y1="5" x2="12" y2="4" />
    </svg>
);


export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const QrCodeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <line x1="14" y1="14" x2="14" y2="21" />
        <line x1="21" y1="14" x2="21" y2="21" />
        <line x1="14" y1="14" x2="21" y2="14" />
    </svg>
);

const birdIllustrations: Record<string, React.FC<{ className?: string }>> = {
    '까치': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.95) translate(5,5)"><path d="M40 85 L25 90 L50 95 L75 90 L60 85 L50 90 Z" fill="#27272a" /><path d="M50 20 C 30 20 20 40 30 60 L 50 85 L 70 60 C 80 40 70 20 50 20 Z" fill="#27272a" /><path d="M50 55 C 40 65 60 65 50 55" fill="none" /><path d="M 50 55 C 45 60 40 70 40 80 L 60 80 C 60 70 55 60 50 55 Z" fill="#f8fafc" /><circle cx="40" cy="30" r="12" fill="#27272a" /><circle cx="38" cy="28" r="2" fill="white" /><polygon points="28,28 20,27 20,33 28,32" fill="#4a5568" /></g></svg>),
    '참새': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5, 10) scale(0.9)"><path d="M50 30 C 20 30, 10 70, 45 85 C 80 70, 80 30, 50 30 Z" fill="#967969"/><circle cx="35" cy="40" r="15" fill="#967969"/><path d="M35 30 C 45 25 50 35 45 45" fill="#a68a7b"/><circle cx="32" cy="38" r="3" fill="#27272a"/><polygon points="20,40 15,38 15,42" fill="orange"/><path d="M 60 60 C 70 50 85 60 75 75 Z" fill="#6b5b4e"/></g></svg>),
    '직박구리': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.95) translate(5,5)"><path d="M50 30 C 20 30, 15, 70, 45, 90 C 75 70, 80 30, 50 30 Z" fill="#a1a1aa"/><path d="M35 25 C 30 20 40 20 35 25 L 32 18 L 38 18 Z" fill="#a1a1aa"/><circle cx="35" cy="35" r="15" fill="#a1a1aa" /><circle cx="32" cy="33" r="3" fill="#1a202c" /><polygon points="20,35 15,33 15,37" fill="#6b7280" /></g></svg>),
    '박새': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5, 5) scale(0.9)"><path d="M50 35 C 25 35 20 65 45 90 C 70 65 75 35 50 35Z" fill="#fde047" /><path d="M50 50 L 50 90" stroke="#1a202c" strokeWidth="5" strokeLinecap="round" /><circle cx="38" cy="35" r="18" fill="#1a202c" /><path d="M38 30 C 48 30 48 45 38 45" fill="#f8fafc" /><circle cx="35" cy="33" r="2.5" fill="#1a202c" /><polygon points="20,35 15,33 15,37" fill="orange" /></g></svg>),
    '오목눈이': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(10, -5)"><circle cx="40" cy="50" r="25" fill="#f3e8ff"/><path d="M40 30 C 50 30 60 40 55 55 L 40 50 Z" fill="#d1d5db"/><circle cx="30" cy="45" r="3" fill="black"/><path d="M 20 45 L 15 42 L 15 48 Z" fill="orange"/><path d="M65 50 L 95 30 L 90 50 L 95 70 L 65 50" fill="#27272a"/></g></svg>),
    '꾀꼬리': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M50 30 C 25 30 20 60 45 85 C 70 60 75 30 50 30Z" fill="#facc15" /><circle cx="35" cy="35" r="15" fill="#facc15"/><path d="M30 25 L 40 35" stroke="black" strokeWidth="3" /><circle cx="32" cy="32" r="3" fill="black"/><polygon points="20,33 15,30 15,40 20,37" fill="orange" /><path d="M 60,50 C 75,45 85,60 70,75 Z" fill="#422006"/></g></svg>),
    '파랑새': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M50 30 C 25 30 20 60 45 85 C 70 60 75 30 50 30Z" fill="#38bdf8" /><circle cx="35" cy="35" r="15" fill="#38bdf8"/><circle cx="32" cy="32" r="3" fill="black"/><polygon points="20,33 15,30 15,40 20,37" fill="black"/><path d="M 60,50 C 75,45 85,60 70,75 Z" fill="#0891b2"><animateTransform attributeName="transform" type="rotate" from="0 65 65" to="10 65 65" dur="1s" repeatCount="indefinite" /></path><circle cx="68" cy="63" r="5" fill="white"/></g></svg>),
    '딱따구리': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M50 30 C 40 30 35 60 50 90 L 55 30 Z" fill="#1a202c"/><path d="M50 50 L 52 70" stroke="white" strokeWidth="2" /><circle cx="40" cy="30" r="10" fill="#1a202c" /><path d="M40 20 C 45 18 45 25 40 25 Z" fill="#dc2626"/><path d="M30 28 L 45 28 L 40 35 Z" fill="#e11d48"/><circle cx="38" cy="28" r="2" fill="white" /><polygon points="30,30 20,25 30,25" fill="#6b7280" /></g></svg>),
    '원앙': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M50 40 C 20 40 10 70 45 85 C 80 70 80 40 50 40Z" fill="#a16207"/><path d="M 70 60 L 80 40 L 90 60 Z" fill="#f97316"/><path d="M35 40 C 45 30 55 40 45 50" fill="white"/><circle cx="35" cy="45" r="18" fill="#059669"/><circle cx="32" cy="43" r="3" fill="black"/><polygon points="18,45 13,43 13,47" fill="orange" /></g></svg>),
    '호반새': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M50 30 C 25 30 20 60 45 85 C 70 60 75 30 50 30Z" fill="#f97316" /><circle cx="35" cy="35" r="15" fill="#f97316"/><circle cx="32" cy="32" r="3" fill="#1a202c"/><path d="M 25,35 L 5,32 L 25,38 Z" fill="#dc2626" stroke="#1a202c" strokeWidth="1.5"/></g></svg>),
    '황새': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(10,0) scale(0.9)"><path d="M50 20 C 30 20 20 50 40 70 L 60 70 C 80 50 70 20 50 20Z" fill="#f8fafc" /><path d="M45 70 L 40 95" stroke="#ef4444" strokeWidth="4"/><path d="M55 70 L 60 95" stroke="#ef4444" strokeWidth="4"/><circle cx="40" cy="30" r="12" fill="#f8fafc"/><path d="M35 25 L 20 20 L 35 30 Z" fill="#ef4444"/><circle cx="38" cy="28" r="2" fill="black"/></g></svg>),
    '두루미': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(10,0) scale(0.9)"><path d="M50 20 C 30 20 20 50 40 70 L 60 70 C 80 50 70 20 50 20Z" fill="white" /><path d="M45 70 L 40 95" stroke="black" strokeWidth="4"/><path d="M55 70 L 60 95" stroke="black" strokeWidth="4"/><path d="M50 65 L 70 80 L 80 70 L 50 60 Z" fill="black"/><circle cx="40" cy="30" r="12" fill="white"/><circle cx="43" cy="22" r="5" fill="#dc2626"/><circle cx="38" cy="28" r="2" fill="black"/><path d="M35 25 L 20 22 L 35 30 Z" fill="black"/></g></svg>),
    '흑두루미': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(10,0) scale(0.9)"><path d="M50 20 C 30 20 20 50 40 70 L 60 70 C 80 50 70 20 50 20Z" fill="#4b5563" /><path d="M45 70 L 40 95" stroke="#27272a" strokeWidth="4"/><path d="M55 70 L 60 95" stroke="#27272a" strokeWidth="4"/><circle cx="40" cy="30" r="12" fill="#4b5563"/><path d="M40 25 C 50 30 50 40 40 40 L 35 40 Z" fill="white"/><circle cx="43" cy="22" r="5" fill="#dc2626"/><circle cx="38" cy="28" r="2" fill="black"/><path d="M30 25 L 18 22 L 30 30 Z" fill="black"/></g></svg>),
    '독수리': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M50 30 C 20 30 10 60 50 90 C 90 60 80 30 50 30Z" fill="#422006"/><path d="M50 30 C 40 20 60 20 50 30" fill="white" /><path d="M 60 55 C 80 45 95 65 75 80 Z" fill="#a16207"/><circle cx="40" cy="35" r="15" fill="#422006"/><circle cx="38" cy="33" r="2" fill="yellow"/><path d="M25 35 C 20 30 20 40 25 35 Q 28 32 25 30 Z" fill="yellow"/></g></svg>),
    '되솔새': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5, 5) scale(0.9)"><path d="M50 35 C 25 35 20 65 45 90 C 70 65 75 35 50 35Z" fill="#a16207" /><circle cx="38" cy="35" r="18" fill="#1e293b" /><path d="M25 30 C 40 25 50 30 45 35" stroke="#facc15" strokeWidth="4" fill="none" /><circle cx="35" cy="33" r="2.5" fill="white" /><polygon points="20,35 15,33 15,37" fill="orange" /></g></svg>),
    '기러기': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M40 40 C 20 40 10 60 30 75 L 70 50 L 40 40Z" fill="#6b7280" /><path d="M70 50 L 90 30 L 75 50 L 90 70 L 70 50Z" fill="#4b5563"/><circle cx="30" cy="45" r="10" fill="#6b7280" /><circle cx="28" cy="43" r="2" fill="black"/><path d="M20 45 L 15 43 L 20 47 Z" fill="orange"/></g></svg>),
    '재두루미': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(10,0) scale(0.9)"><path d="M50 20 C 30 20 20 50 40 70 L 60 70 C 80 50 70 20 50 20Z" fill="#a1a1aa" /><path d="M45 70 L 40 95" stroke="black" strokeWidth="4"/><path d="M55 70 L 60 95" stroke="black" strokeWidth="4"/><circle cx="40" cy="30" r="12" fill="#a1a1aa"/><path d="M40 20 C 50 25 50 40 40 40 L 35 40 Z" fill="white"/><path d="M30 35 C 35 30 40 30 38 38 Z" fill="#ef4444"/><circle cx="38" cy="28" r="2" fill="black"/><path d="M30 25 L 18 22 L 30 30 Z" fill="black"/></g></svg>),
    '큰기러기': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M40 40 C 20 40 10 60 30 75 L 70 50 L 40 40Z" fill="#6b7280" /><path d="M70 50 L 90 30 L 75 50 L 90 70 L 70 50Z" fill="#4b5563"/><circle cx="30" cy="45" r="10" fill="#6b7280" /><path d="M22 43 C 21 45 22 47 22 47 L 24 47 L 24 43 Z" fill="white" /><circle cx="28" cy="43" r="2" fill="black"/><path d="M20 45 L 15 43 L 20 47 Z" fill="orange"/></g></svg>),
    '노랑부리저어새': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(10,0) scale(0.9)"><path d="M50 20 C 30 20 20 50 40 70 L 60 70 C 80 50 70 20 50 20Z" fill="#fef9c3" /><path d="M45 70 L 45 90" stroke="black" strokeWidth="3"/><path d="M55 70 L 55 90" stroke="black" strokeWidth="3"/><circle cx="40" cy="30" r="12" fill="#fef9c3"/><path d="M35 25 L 20 25 C 20 20 35 20 35 25 Z" fill="#facc15"/><path d="M20 25 C 18 25 18 28 20 28 L 20 25 Z" fill="#facc15" /><circle cx="38" cy="28" r="2" fill="black"/></g></svg>),
    '흰물떼새': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5, 10) scale(0.9)"><path d="M50 40 C 30 40, 20 70, 45 85 C 70 70, 70 40, 50 40 Z" fill="#e2e8f0"/><circle cx="35" cy="45" r="15" fill="#e2e8f0"/><path d="M30 35 C 40 30 45 40 40 45" fill="white"/><circle cx="32" cy="42" r="3" fill="#27272a"/><polygon points="20,45 15,43 15,47" fill="#475569"/><path d="M 45 85 L 40 95" stroke="#475569" strokeWidth="3" /><path d="M 55 85 L 60 95" stroke="#475569" strokeWidth="3" /></g></svg>),
    '검은머리갈매기': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M40 40 C 20 40 10 60 30 75 L 70 50 L 40 40Z" fill="#f1f5f9" /><path d="M70 50 L 90 30 L 75 50 L 90 70 L 70 50Z" fill="#cbd5e1"/><circle cx="30" cy="45" r="10" fill="#1e293b" /><circle cx="28" cy="43" r="2" fill="white"/><path d="M20 45 L 15 43 L 20 47 Z" fill="red"/></g></svg>),
    '흑꼬리도요': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M50 50 C 30 50 20 70 40 85 L 60 85 C 80 70 70 50 50 50Z" fill="#a3a3a3"/><path d="M45 85 L 40 95" stroke="#a3a3a3" strokeWidth="3"/><path d="M55 85 L 60 95" stroke="#a3a3a3" strokeWidth="3"/><circle cx="45" cy="55" r="10" fill="#a3a3a3"/><path d="M40 50 L 20 45 L 40 55 Z" fill="#404040"/><path d="M60 85 L 80 75 L 75 85 L 80 95 L 60 85Z" fill="black"/><circle cx="43" cy="53" r="2" fill="black"/></g></svg>),
    '청다리도요': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M50 50 C 30 50 20 70 40 85 L 60 85 C 80 70 70 50 50 50Z" fill="#d4d4d4"/><path d="M45 85 L 40 95" stroke="#84cc16" strokeWidth="3"/><path d="M55 85 L 60 95" stroke="#84cc16" strokeWidth="3"/><circle cx="45" cy="55" r="10" fill="#d4d4d4"/><path d="M40 50 L 20 45 L 40 55 Z" fill="#57534e"/><circle cx="43" cy="53" r="2" fill="black"/></g></svg>),
    '꿩': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M40 50 C 20 50 15 70 35 85 L 55 85 C 75 70 70 50 40 50Z" fill="#854d0e" /><path d="M60 70 L 95 60 L 90 70 L 95 80 Z" fill="#a16207" /><circle cx="35" cy="55" r="12" fill="#059669" /><path d="M30 50 C 35 45 40 45 38 52 Z" fill="#dc2626" /><circle cx="33" cy="53" r="2" fill="white" /><polygon points="23,55 18,53 23,57" fill="#ca8a04" /></g></svg>),
    '물총새': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M50 40 C 30 40 25 70 50 85 C 75 70 70 40 50 40Z" fill="#f97316" /><path d="M50 40 C 30 40 30 30 50 30 C 70 30 70 40 50 40Z" fill="#0ea5e9" /><circle cx="40" cy="45" r="15" fill="#0ea5e9" /><path d="M25 45 L 5 42 L 25 48 Z" fill="#4b5563" /><circle cx="38" cy="43" r="2" fill="black" /></g></svg>),
    '부엉이': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M50 30 C 25 30 20 60 50 90 C 80 60 75 30 50 30Z" fill="#78350f" /><path d="M40 20 L 35 30 L 45 30 Z" fill="#a16207" /><path d="M60 20 L 55 30 L 65 30 Z" fill="#a16207" /><circle cx="40" cy="45" r="10" fill="#fde047" /><circle cx="60" cy="45" r="10" fill="#fde047" /><circle cx="40" cy="45" r="5" fill="black" /><circle cx="60" cy="45" r="5" fill="black" /><path d="M50 50 L 45 55 L 55 55 Z" fill="#f97316" /></g></svg>),
    '제비': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M50 30 C 30 30 20 50 50 70 C 80 50 70 30 50 30Z" fill="#1e293b" /><path d="M50 70 L 40 95 L 50 80 L 60 95 Z" fill="#1e293b" /><circle cx="45" cy="40" r="10" fill="#1e293b" /><circle cx="43" cy="38" r="2" fill="white" /><path d="M35 40 L 30 38 L 35 42 Z" fill="orange" /></g></svg>),
    '백로': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(10,0) scale(0.9)"><path d="M50 30 C 30 30 25 60 45 80 L 55 80 C 75 60 70 30 50 30Z" fill="#ffffff" /><path d="M48 80 L 45 95" stroke="black" strokeWidth="3" /><path d="M52 80 L 55 95" stroke="black" strokeWidth="3" /><path d="M40 35 Q 50 20 60 35" fill="none" stroke="#ffffff" strokeWidth="8" /><circle cx="60" cy="35" r="8" fill="#ffffff" /><path d="M65 35 L 75 30 L 68 38 Z" fill="yellow" /><circle cx="62" cy="33" r="2" fill="black" /></g></svg>),
    '왜가리': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(10,0) scale(0.9)"><path d="M50 30 C 30 30 25 60 45 80 L 55 80 C 75 60 70 30 50 30Z" fill="#94a3b8" /><path d="M48 80 L 45 95" stroke="black" strokeWidth="3" /><path d="M52 80 L 55 95" stroke="black" strokeWidth="3" /><path d="M40 35 Q 50 20 60 35" fill="none" stroke="#94a3b8" strokeWidth="8" /><circle cx="60" cy="35" r="8" fill="#94a3b8" /><path d="M60 28 C 65 25 70 28 60 32 Z" fill="black" /><path d="M65 35 L 75 30 L 68 38 Z" fill="#6b7280" /><circle cx="62" cy="33" r="2" fill="white" /></g></svg>),
    '청둥오리': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M50 50 C 20 50 10 80 50 85 C 90 80 80 50 50 50Z" fill="#a16207" /><circle cx="35" cy="55" r="15" fill="#166534" /><path d="M35 50 L 40 48" stroke="#f8fafc" strokeWidth="3" /><circle cx="32" cy="53" r="2" fill="black" /><path d="M20 55 L 10 53 L 20 57 Z" fill="#facc15" /></g></svg>),
    '고니': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(10,0) scale(0.9)"><path d="M50 50 C 20 50 20 80 50 85 C 80 80 80 50 50 50Z" fill="#f0f9ff" /><path d="M40 55 Q 50 20 70 40" fill="none" stroke="#f0f9ff" strokeWidth="10" /><circle cx="70" cy="40" r="10" fill="#f0f9ff" /><path d="M75 40 L 85 38 L 78 42 Z" fill="black" /><circle cx="72" cy="38" r="2" fill="black" /></g></svg>),
    '마도요': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M50 50 C 30 50 20 70 40 85 L 60 85 C 80 70 70 50 50 50Z" fill="#a3a3a3"/><path d="M45 85 L 40 95" stroke="#a3a3a3" strokeWidth="3"/><path d="M55 85 L 60 95" stroke="#a3a3a3" strokeWidth="3"/><circle cx="45" cy="55" r="10" fill="#a3a3a3"/><path d="M40 50 Q 10 40 20 60" stroke="#404040" strokeWidth="3" fill="none"/><circle cx="43" cy="53" r="2" fill="black"/></g></svg>),
    '알락꼬리마도요': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M50 50 C 30 50 20 70 40 85 L 60 85 C 80 70 70 50 50 50Z" fill="#a16207"/><path d="M45 85 L 40 95" stroke="#a16207" strokeWidth="3"/><path d="M55 85 L 60 95" stroke="#a16207" strokeWidth="3"/><circle cx="45" cy="55" r="10" fill="#a16207"/><path d="M40 52 Q 20 45 30 58" stroke="#57534e" strokeWidth="3" fill="none"/><path d="M45 50 L 50 48" stroke="white" strokeWidth="1"/><circle cx="43" cy="53" r="2" fill="black"/></g></svg>),
    '민물도요': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M50 60 C 35 60 30 80 45 90 L 55 90 C 70 80 65 60 50 60Z" fill="#d4d4d4" /><path d="M50 60 C 50 55 45 55 45 60" fill="#fca5a5" /><circle cx="45" cy="65" r="8" fill="#d4d4d4"/><path d="M40 65 L 30 63 L 40 67 Z" fill="#404040"/><circle cx="43" cy="63" r="1.5" fill="black"/><path d="M48 90 L 46 98" stroke="black" strokeWidth="2"/><path d="M52 90 L 54 98" stroke="black" strokeWidth="2"/></g></svg>),
    '좀도요': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M50 60 C 35 60 30 80 45 90 L 55 90 C 70 80 65 60 50 60Z" fill="#78350f" /><circle cx="45" cy="65" r="8" fill="#78350f"/><path d="M40 65 L 30 63 L 40 67 Z" fill="#27272a"/><circle cx="43" cy="63" r="1.5" fill="white"/><path d="M48 90 L 46 98" stroke="#4b5563" strokeWidth="2"/><path d="M52 90 L 54 98" stroke="#4b5563" strokeWidth="2"/></g></svg>),
    '저어새': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(10,0) scale(0.9)"><path d="M50 20 C 30 20 20 50 40 70 L 60 70 C 80 50 70 20 50 20Z" fill="#f8fafc" /><path d="M45 70 L 45 90" stroke="black" strokeWidth="3"/><path d="M55 70 L 55 90" stroke="black" strokeWidth="3"/><circle cx="40" cy="30" r="12" fill="#f8fafc"/><path d="M40 25 C 25 25 25 35 40 35 Z" fill="black"/><path d="M35 25 L 20 25 C 20 20 35 20 35 25 Z" fill="#27272a"/><path d="M20 25 C 18 25 18 28 20 28 L 20 25 Z" fill="#27272a" /><circle cx="38" cy="28" r="2" fill="white"/></g></svg>),
    '알락할미새': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M45 40 C 30 40 25 60 40 75 L 50 75 C 65 60 60 40 45 40Z" fill="#f1f5f9" /><path d="M45 40 C 40 30 50 30 45 40" fill="#1e293b"/><path d="M50 75 L 85 60 L 80 70 L 85 80 Z" fill="#1e293b" /><circle cx="38" cy="45" r="10" fill="#f1f5f9"/><circle cx="36" cy="43" r="2" fill="black"/><path d="M28 45 L 23 43 L 28 47 Z" fill="orange" /></g></svg>),
    '동고비': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M50 35 C 30 35 20 60 45 85 C 70 60 70 35 50 35Z" fill="#fb923c" /><circle cx="40" cy="40" r="18" fill="#60a5fa"/><path d="M30 38 L 50 42" stroke="#1e293b" strokeWidth="3" /><circle cx="38" cy="38" r="2" fill="black"/><path d="M22 40 L 17 38 L 22 42 Z" fill="#4b5563" /></g></svg>),
    '호사비오리': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M50 50 C 20 50 10 80 50 85 C 90 80 80 50 50 50Z" fill="#e5e7eb" /><path d="M50 55 C 40 60 40 70 50 75" fill="none" stroke="black" strokeWidth="1" /><path d="M60 55 C 50 60 50 70 60 75" fill="none" stroke="black" strokeWidth="1" /><path d="M70 55 C 60 60 60 70 70 75" fill="none" stroke="black" strokeWidth="1" /><circle cx="35" cy="55" r="15" fill="#166534" /><path d="M35 45 L 40 40 L 45 45" fill="none" stroke="#166534" strokeWidth="3" /><circle cx="32" cy="53" r="2" fill="white" /><path d="M20 55 L 10 53 L 20 57 Z" fill="#ef4444" /></g></svg>),
    '넓적부리도요': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M50 60 C 35 60 30 80 45 90 L 55 90 C 70 80 65 60 50 60Z" fill="#a8a29e" /><path d="M50 60 C 50 55 45 55 45 60" fill="white" /><circle cx="45" cy="65" r="8" fill="#a8a29e"/><path d="M40 65 L 30 63 L 28 65 L 30 67 Z" fill="#27272a"/><path d="M30 63 C 25 62 25 68 30 67" fill="#27272a"/><circle cx="43" cy="63" r="1.5" fill="black"/><path d="M48 90 L 46 98" stroke="black" strokeWidth="2"/><path d="M52 90 L 54 98" stroke="black" strokeWidth="2"/></g></svg>),
    '팔색조': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5, 5) scale(0.9)"><path d="M50 35 C 25 35 20 65 45 90 C 70 65 75 35 50 35Z" fill="#d2b48c" /><path d="M48 85 C 50 95 40 95 42 85 Z" fill="#ef4444" /><path d="M50 40 C 65 40 70 60 60 70 C 55 65 50 50 50 40 Z" fill="#22c55e" /><circle cx="58" cy="55" r="8" fill="#3b82f6" /><circle cx="38" cy="35" r="18" fill="#1e293b" /><path d="M25 33 C 40 28 50 33 45 38" stroke="#a16207" strokeWidth="5" fill="none" /><circle cx="35" cy="33" r="2.5" fill="white" /><polygon points="20,35 15,33 15,37" fill="black" /></g></svg>),
    '매': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M50 30 C 25 30 20 60 50 90 C 80 60 75 30 50 30Z" fill="#4b5563" /><path d="M50 50 L 50 90" stroke="#9ca3af" strokeWidth="2" /><path d="M 60 55 C 80 45 95 65 75 80 Z" fill="#6b7280"/><circle cx="40" cy="35" r="15" fill="#4b5563"/><path d="M40 30 C 50 30 50 45 40 45" fill="#e5e7eb" /><circle cx="38" cy="33" r="2" fill="yellow"/><path d="M25 35 C 20 30 20 40 25 35 Q 28 32 25 30 Z" fill="yellow"/></g></svg>),
    '황조롱이': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M50 35 C 30 35 25 65 50 90 C 75 65 70 35 50 35Z" fill="#f59e0b" /><path d="M50 60 L 52 80" stroke="#a16207" strokeWidth="2" /><circle cx="40" cy="38" r="15" fill="#d1d5db" /><circle cx="38" cy="36" r="2" fill="black"/><path d="M25 38 C 20 33 20 43 25 38 Q 28 35 25 33 Z" fill="black"/></g></svg>),
    '말똥가리': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M50 30 C 20 30 15 60 50 90 C 85 60 80 30 50 30Z" fill="#a16207" /><path d="M50 50 L 50 85" stroke="#fefce8" strokeWidth="2" /><path d="M 60 55 C 80 45 95 65 75 80 Z" fill="#78350f"/><circle cx="40" cy="35" r="15" fill="#a16207"/><circle cx="38" cy="33" r="2" fill="black"/><path d="M25 35 C 20 30 20 40 25 35 Q 28 32 25 30 Z" fill="yellow"/></g></svg>),
    '참매': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M50 30 C 25 30 20 60 50 90 C 80 60 75 30 50 30Z" fill="#6b7280" /><path d="M50 50 C 60 60 50 70 50 80" stroke="#f1f5f9" strokeWidth="1" /><path d="M 60 55 C 80 45 95 65 75 80 Z" fill="#94a3b8"/><circle cx="40" cy="35" r="15" fill="#6b7280"/><path d="M30 33 L 50 33" stroke="white" strokeWidth="2"/><circle cx="38" cy="33" r="2" fill="red"/><path d="M25 35 C 20 30 20 40 25 35 Q 28 32 25 30 Z" fill="yellow"/></g></svg>),
    '물수리': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="scale(0.9) translate(5,5)"><path d="M50 30 C 20 30 15 60 50 90 C 85 60 80 30 50 30Z" fill="#422006" /><path d="M 60 55 C 80 45 95 65 75 80 Z" fill="#a16207"/><circle cx="40" cy="35" r="15" fill="#e5e7eb"/><path d="M30 35 L 50 38" stroke="black" strokeWidth="2"/><circle cx="38" cy="33" r="2" fill="yellow"/><path d="M25 35 C 20 30 20 40 25 35 Q 28 32 25 30 Z" fill="black"/></g></svg>),
    '흰뺨검둥오리': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M50 50 C 20 50 10 80 50 85 C 90 80 80 50 50 50Z" fill="#57534e" /><circle cx="35" cy="55" r="15" fill="#57534e" /><path d="M35 50 C 45 50 45 60 35 60" fill="#f1f5f9" /><circle cx="32" cy="53" r="2" fill="black" /><path d="M20 55 L 10 53 L 20 57 Z" fill="#facc15" /></g></svg>),
    '따오기': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(10,0) scale(0.9)"><path d="M50 30 C 30 30 25 60 45 80 L 55 80 C 75 60 70 30 50 30Z" fill="#fdf6e4" /><path d="M48 80 L 45 95" stroke="#374151" strokeWidth="3" /><path d="M52 80 L 55 95" stroke="#374151" strokeWidth="3" /><path d="M40 35 Q 50 20 60 35" fill="none" stroke="#fdf6e4" strokeWidth="8" /><circle cx="60" cy="35" r="8" fill="#fdf6e4" /><path d="M55 30 C 50 25 45 30 50 35" fill="#ef4444" /><path d="M65 35 Q 75 20 85 40" stroke="black" strokeWidth="3" fill="none"/><circle cx="58" cy="33" r="2" fill="black" /></g></svg>),
    '꺅도요': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5,5) scale(0.9)"><path d="M50 50 C 30 50 20 70 40 85 L 60 85 C 80 70 70 50 50 50Z" fill="#856d4b"/><path d="M45 85 L 40 95" stroke="#5d4a35" strokeWidth="3"/><path d="M55 85 L 60 95" stroke="#5d4a35" strokeWidth="3"/><circle cx="45" cy="55" r="10" fill="#856d4b"/><path d="M40 50 L 10 45 L 40 55 Z" fill="#5d4a35"/><path d="M50 55 C 55 50 55 60 50 65" stroke="white" strokeWidth="1" fill="none" /><circle cx="43" cy="53" r="2" fill="black"/></g></svg>),
    'default': ({ className }) => (<svg viewBox="0 0 100 100" className={className}><g transform="translate(5, 5) scale(0.9)"><path d="M 50,30 C 25,30 20,60 45,85 C 50,90 70,90 75,85 C 100,60 95,30 70,30 C 65,25 55,25 50,30 Z" fill={"#a1a1aa"} stroke="#1a202c" strokeWidth="2"/><circle cx="35" cy="35" r="15" fill={"#a1a1aa"} stroke="#1a202c" strokeWidth="2"/><circle cx="32" cy="32" r="3" fill="#1a202c"/><path d="M 20,33 C 15,30 15,40 20,37 L 25,35 Z" fill="orange" stroke="#1a202c" strokeWidth="1.5"/></g></svg>),
};

export const SpeciesIllustration: React.FC<{ className?: string; name: string }> = ({ className, name }) => {
    const Illustration = birdIllustrations[name] || birdIllustrations['default'];
    return <Illustration className={className} />;
};

// Fix: Export the SceneryColors interface to allow for strong typing of color configuration objects.
export interface SceneryColors {
  sky: [string, string];
  mountains: [string, string];
  trees: [string, string, string];
  foreground: [string, string, string];
  water?: [string, string];
}

export const BackgroundScenery: React.FC<{ className?: string; colors: SceneryColors }> = ({ className, colors }) => (
  <svg className={className} preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor: colors.sky[0], stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: colors.sky[1], stopOpacity: 1}} />
      </linearGradient>
      <filter id="blurFilter">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
      </filter>
    </defs>
    <rect width="1200" height="800" fill="url(#skyGradient)" />
    
    {/* Clouds - New realistic elements */}
    <g opacity="0.8">
        <path d="M 100 150 Q 150 100 250 120 T 400 100 T 550 150 Q 500 180 400 170 T 250 180 T 100 150 Z" fill="#f0f9ff" filter="url(#blurFilter)" />
        <path d="M 700 80 Q 750 50 850 70 T 1000 50 T 1150 100 Q 1100 130 1000 120 T 850 130 T 700 80 Z" fill="#f0f9ff" />
        <path d="M 300 220 Q 350 180 450 200 T 600 180 T 750 220 Q 700 250 600 240 T 450 250 T 300 220 Z" fill="#f0f9ff" filter="url(#blurFilter)" />
        <path d="M 80 80 Q 120 40 200 60 T 300 40 T 400 80 Q 350 110 250 100 T 150 110 T 80 80 Z" fill="#f0f9ff" />
        <path d="M 900 180 Q 950 140 1050 160 T 1150 140 T 1200 180 Q 1150 210 1050 200 T 950 210 T 900 180 Z" fill="#f0f9ff" filter="url(#blurFilter)" />
    </g>

    {/* Mountains - More varied shapes, added a third layer */}
    {/* Farthest, light gray, blurred */}
    <path d="M -50,650 Q 100,580 250,620 C 350,680 450,550 550,600 Q 700,650 850,580 C 950,650 1100,550 1250,650 L 1250,800 L -50,800 Z" fill="#e0e0e0" filter="url(#blurFilter)" opacity="0.7" />
    {/* Middle layer, slightly darker, blurred */}
    <path d="M -50,600 Q 150,500 350,620 C 450,680 600,550 750,600 Q 900,650 1100,550 C 1200,600 1250,600 1250,600 L 1250,800 L -50,800 Z" fill={colors.mountains[0]} filter="url(#blurFilter)" />
    {/* Closest layer, main color, no blur */}
    <path d="M -100,650 Q 200,550 450,680 C 550,720 700,600 850,650 Q 1000,700 1200,600 C 1300,650 1300,700 1300,700 L 1300,800 L -100,800 Z" fill={colors.mountains[1]} />

    {colors.water && (
        <g>
            <ellipse cx="600" cy="740" rx="550" ry="100" fill={colors.water[0]} />
            <ellipse cx="600" cy="740" rx="550" ry="100" fill={colors.water[1]} opacity="0.5">
                <animate attributeName="ry" values="100;102;100" dur="5s" repeatCount="indefinite" />
                <animate attributeName="rx" values="550;555;550" dur="5s" repeatCount="indefinite" />
            </ellipse>
        </g>
    )}

    {/* Trees - Added trunks and more irregular canopies */}
    <g transform="translate(900, 350) scale(1.2)">
      <path d="M 95,250 L 105,250 L 105,170 Q 100,165 95,170 Z" fill={colors.trees[0]} /> {/* Trunk 1 */}
      <circle cx="100" cy="55" r="58" fill={colors.trees[1]} />
      <circle cx="60" cy="75" r="48" fill={colors.trees[2]} />
      <circle cx="140" cy="70" r="52" fill={colors.trees[1]} />
    </g>

    <g transform="translate(150, 400)">
        <path d="M 75,250 L 85,250 L 85,140 Q 80,135 75,140 Z" fill={colors.trees[0]} /> {/* Trunk 2 */}
        <circle cx="80" cy="85" r="48" fill={colors.trees[1]} />
        <circle cx="45" cy="100" r="38" fill={colors.trees[2]} />
        <circle cx="115" cy="88" r="40" fill={colors.trees[1]} />
    </g>
    
    <ellipse cx="200" cy="750" rx="250" ry="100" fill={colors.foreground[0]} />
    <ellipse cx="1000" cy="780" rx="300" ry="120" fill={colors.foreground[1]} />
    <ellipse cx="600" cy="820" rx="400" ry="150" fill={colors.foreground[2]} />
  </svg>
);

export const BinocularOverlaySVG: React.FC = () => (
    <svg viewBox="0 0 1200 800" className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
            <mask id="bino-mask">
                <rect width="1200" height="800" fill="white" />
                <circle cx="420" cy="400" r="260" fill="black" />
                <circle cx="780" cy="400" r="260" fill="black" />
            </mask>
        </defs>

        <rect width="1200" height="800" fill="black" mask="url(#bino-mask)" />
        
        <g stroke="rgba(200, 200, 200, 0.5)" strokeWidth="2">
            <line x1="450" y1="400" x2="750" y2="400" />
            <line x1="600" y1="385" x2="600" y2="415" />
            <line x1="585" y1="400" x2="615" y2="400" />
            <g strokeWidth="1.5">
                <line x1="525" y1="395" x2="525" y2="405" />
                <line x1="675" y1="395" x2="675" y2="405" />
            </g>
        </g>
    </svg>
);

export const SwarovskiOverlaySVG: React.FC = () => (
    <svg viewBox="0 0 1200 800" className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
            <mask id="swarovski-mask">
                <rect width="1200" height="800" fill="white" />
                <rect x="200" y="150" width="800" height="500" rx="80" fill="black" />
            </mask>
        </defs>
        <rect width="1200" height="800" fill="black" mask="url(#swarovski-mask)" />
    </svg>
);

export const FieldscopeOverlay = () => (
    <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-10"
        style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 40%, black 41%)'
        }}
    />
);
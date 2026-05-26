function CTAPandas() {
  return (
    <svg viewBox="0 0 360 280" fill="none" className="w-full h-full">
      {/* 언덕 */}
      <ellipse cx="180" cy="272" rx="210" ry="65" fill="#C4956A" />

      {/* 판다 1 - 왼쪽 (채팅 말풍선 들고 있는) */}
      {/* 몸통 */}
      <ellipse cx="95" cy="230" rx="34" ry="38" fill="white" />
      {/* 머리 */}
      <circle cx="95" cy="185" r="37" fill="white" />
      {/* 귀 */}
      <circle cx="72" cy="158" r="13" fill="#111827" />
      <circle cx="118" cy="158" r="13" fill="#111827" />
      {/* 눈 패치 */}
      <ellipse cx="84" cy="180" rx="11" ry="11" fill="#111827" />
      <ellipse cx="106" cy="180" rx="11" ry="11" fill="#111827" />
      {/* 눈 */}
      <circle cx="86" cy="178" r="4.5" fill="white" />
      <circle cx="108" cy="178" r="4.5" fill="white" />
      <circle cx="87" cy="179" r="2.5" fill="#111827" />
      <circle cx="109" cy="179" r="2.5" fill="#111827" />
      {/* 코 */}
      <ellipse cx="95" cy="193" rx="5.5" ry="4" fill="#374151" />
      {/* 발 */}
      <ellipse cx="78" cy="264" rx="13" ry="8" fill="#111827" />
      <ellipse cx="112" cy="264" rx="13" ry="8" fill="#111827" />
      {/* 말풍선 */}
      <rect x="112" y="115" width="80" height="55" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="2" />
      <polygon points="122,170 112,182 135,170" fill="white" stroke="#E5E7EB" strokeWidth="2" />
      <polygon points="122,170 135,170 125,182" fill="white" />
      {/* 말풍선 안 이모지 표현 */}
      <circle cx="140" cy="138" r="12" fill="#FCD34D" />
      <ellipse cx="136" cy="136" rx="2" ry="2.5" fill="#111827" />
      <ellipse cx="144" cy="136" rx="2" ry="2.5" fill="#111827" />
      <path d="M134 143 Q140 148 146 143" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* 별 */}
      <text x="155" y="148" fontSize="14" fill="#FBBF24">★</text>
      <text x="170" y="148" fontSize="14" fill="#FBBF24">★</text>

      {/* 판다 2 - 오른쪽 (별점 들고 있는) */}
      {/* 몸통 */}
      <ellipse cx="265" cy="230" rx="34" ry="38" fill="white" />
      {/* 머리 */}
      <circle cx="265" cy="185" r="37" fill="white" />
      {/* 귀 */}
      <circle cx="242" cy="158" r="13" fill="#111827" />
      <circle cx="288" cy="158" r="13" fill="#111827" />
      {/* 눈 패치 */}
      <ellipse cx="254" cy="180" rx="11" ry="11" fill="#111827" />
      <ellipse cx="276" cy="180" rx="11" ry="11" fill="#111827" />
      {/* 눈 */}
      <circle cx="256" cy="178" r="4.5" fill="white" />
      <circle cx="278" cy="178" r="4.5" fill="white" />
      <circle cx="257" cy="179" r="2.5" fill="#111827" />
      <circle cx="279" cy="179" r="2.5" fill="#111827" />
      {/* 코 */}
      <ellipse cx="265" cy="193" rx="5.5" ry="4" fill="#374151" />
      {/* 발 */}
      <ellipse cx="248" cy="264" rx="13" ry="8" fill="#111827" />
      <ellipse cx="282" cy="264" rx="13" ry="8" fill="#111827" />
      {/* 별점 카드 */}
      <rect x="168" y="110" width="92" height="58" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="2" />
      <polygon points="248,168 260,168 250,180" fill="white" stroke="#E5E7EB" strokeWidth="2" />
      <polygon points="248,168 260,168 255,180" fill="white" />
      {/* 별점 안 내용 */}
      <text x="176" y="134" fontSize="11" fill="#FBBF24">★ ★ ★ ★ ★</text>
      <rect x="176" y="140" width="55" height="5" rx="2.5" fill="#E5E7EB" />
      <rect x="176" y="150" width="40" height="5" rx="2.5" fill="#E5E7EB" />
    </svg>
  )
}

export default function CTASection() {
  return (
    <section className="bg-blue-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-16 flex items-center justify-between min-h-[420px]">
        <div>
          <h2 className="text-5xl font-bold leading-tight text-gray-900">
            믿을 수 있는<br />판다마켓 중고 거래
          </h2>
        </div>
        <div className="w-96 h-72 flex-shrink-0">
          <CTAPandas />
        </div>
      </div>
    </section>
  )
}

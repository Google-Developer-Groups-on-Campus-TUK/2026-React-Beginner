function HeroPanda() {
  return (
    <svg viewBox="0 0 320 300" fill="none" className="w-full h-full">
      {/* 건물들 */}
      <rect x="228" y="82" width="44" height="168" rx="5" fill="#93C5FD" />
      <rect x="236" y="93" width="10" height="10" rx="2" fill="#DBEAFE" />
      <rect x="253" y="93" width="10" height="10" rx="2" fill="#DBEAFE" />
      <rect x="236" y="109" width="10" height="10" rx="2" fill="#DBEAFE" />
      <rect x="253" y="109" width="10" height="10" rx="2" fill="#DBEAFE" />
      <rect x="236" y="125" width="10" height="10" rx="2" fill="#DBEAFE" />
      <rect x="253" y="125" width="10" height="10" rx="2" fill="#DBEAFE" />
      <rect x="275" y="112" width="36" height="138" rx="5" fill="#60A5FA" />
      <rect x="283" y="122" width="8" height="8" rx="2" fill="#BFDBFE" />
      <rect x="296" y="122" width="8" height="8" rx="2" fill="#BFDBFE" />
      <rect x="283" y="137" width="8" height="8" rx="2" fill="#BFDBFE" />
      <rect x="296" y="137" width="8" height="8" rx="2" fill="#BFDBFE" />
      <rect x="198" y="138" width="26" height="112" rx="5" fill="#BFDBFE" />
      {/* 나무 */}
      <rect x="176" y="196" width="8" height="36" rx="3" fill="#92400E" />
      <circle cx="180" cy="186" r="21" fill="#34D399" />
      <circle cx="167" cy="194" r="15" fill="#4ADE80" />
      {/* 언덕 */}
      <ellipse cx="148" cy="292" rx="220" ry="72" fill="#C4956A" />
      {/* 판다 몸통 */}
      <ellipse cx="143" cy="254" rx="45" ry="50" fill="white" />
      {/* 판다 머리 */}
      <circle cx="143" cy="191" r="49" fill="white" />
      {/* 귀 */}
      <circle cx="109" cy="156" r="18" fill="#111827" />
      <circle cx="177" cy="156" r="18" fill="#111827" />
      {/* 눈 패치 */}
      <ellipse cx="130" cy="184" rx="14" ry="14" fill="#111827" />
      <ellipse cx="156" cy="184" rx="14" ry="14" fill="#111827" />
      {/* 눈 흰자 */}
      <circle cx="132" cy="182" r="6" fill="white" />
      <circle cx="158" cy="182" r="6" fill="white" />
      {/* 눈동자 */}
      <circle cx="133" cy="183" r="3.5" fill="#111827" />
      <circle cx="159" cy="183" r="3.5" fill="#111827" />
      {/* 코 */}
      <ellipse cx="143" cy="200" rx="7" ry="5" fill="#374151" />
      {/* 웃음 */}
      <path d="M136 207 Q143 214 150 207" stroke="#374151" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* 팔 */}
      <ellipse cx="98" cy="250" rx="15" ry="30" fill="#F9FAFB" transform="rotate(-12 98 250)" />
      <ellipse cx="188" cy="250" rx="15" ry="30" fill="#F9FAFB" transform="rotate(12 188 250)" />
      {/* 스마트폰 */}
      <rect x="120" y="246" width="46" height="36" rx="5" fill="#3B82F6" />
      <rect x="123" y="249" width="40" height="30" rx="3" fill="#60A5FA" />
      {/* 발 */}
      <ellipse cx="122" cy="298" rx="16" ry="9" fill="#111827" />
      <ellipse cx="164" cy="298" rx="16" ry="9" fill="#111827" />
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section className="bg-blue-200 pt-20 overflow-hidden min-h-[520px] flex items-end">
      <div className="w-full max-w-6xl mx-auto px-16 flex items-end justify-between">
        <div className="pb-24 flex-1">
          <h1 className="text-5xl font-bold leading-snug text-gray-900">
            일상의 모든 물건을<br />거래해 보세요
          </h1>
          <button className="mt-10 px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors text-sm">
            구경하러 가기
          </button>
        </div>
        <div className="w-80 h-72 flex-shrink-0">
          <HeroPanda />
        </div>
      </div>
    </section>
  )
}

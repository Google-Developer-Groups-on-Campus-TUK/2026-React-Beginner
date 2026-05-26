function RegisterIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full h-full p-6">
      {/* 파란 폴더들 */}
      <rect x="30" y="140" width="70" height="55" rx="6" fill="#3B82F6" />
      <rect x="30" y="132" width="35" height="14" rx="4" fill="#3B82F6" />
      <rect x="110" y="145" width="60" height="48" rx="6" fill="#60A5FA" />
      <rect x="110" y="138" width="30" height="12" rx="4" fill="#60A5FA" />
      {/* 핑크 쇼핑백 */}
      <rect x="155" y="85" width="55" height="65" rx="6" fill="#F472B6" />
      <path d="M165 85 C165 72 200 72 200 85" stroke="#EC4899" strokeWidth="4" fill="none" strokeLinecap="round" />
      <rect x="170" y="102" width="30" height="4" rx="2" fill="#EC4899" />
      {/* 보라 쇼핑백 */}
      <rect x="70" y="80" width="52" height="62" rx="6" fill="#A78BFA" />
      <path d="M79 80 C79 68 112 68 112 80" stroke="#7C3AED" strokeWidth="4" fill="none" strokeLinecap="round" />
      <rect x="84" y="97" width="28" height="4" rx="2" fill="#7C3AED" />
      {/* 하트 눈 아이콘 */}
      <circle cx="155" cy="48" r="25" fill="#FDE68A" />
      <path d="M148 44 C148 41 144 38 140 42 L148 51 L156 42 C152 38 148 41 148 44Z" fill="#EF4444" transform="translate(5, 1)" />
      <path d="M162 44 C162 41 158 38 154 42 L162 51 L170 42 C166 38 162 41 162 44Z" fill="#EF4444" transform="translate(-4, 1)" />
      {/* 가위 */}
      <circle cx="230" cy="130" r="10" fill="none" stroke="#6B7280" strokeWidth="3" />
      <circle cx="218" cy="145" r="10" fill="none" stroke="#6B7280" strokeWidth="3" />
      <line x1="226" y1="120" x2="200" y2="75" stroke="#6B7280" strokeWidth="3" strokeLinecap="round" />
      <line x1="214" y1="136" x2="190" y2="75" stroke="#6B7280" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export default function RegisterSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-10 flex items-center gap-20">
        <div className="w-96 h-64 bg-purple-50 rounded-3xl flex items-center justify-center flex-shrink-0 overflow-hidden">
          <RegisterIllustration />
        </div>
        <div>
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-wide">Register</p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 leading-tight">
            판매를 원하는<br />상품을 등록하세요
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            어떤 물건이던 판매하고 싶은<br />상품을 쉽게 등록하세요
          </p>
        </div>
      </div>
    </section>
  )
}

function HotItemsIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full h-full">
      {/* 하트들 */}
      <path d="M218 38 C218 33 213 29 208 34 L218 46 L228 34 C223 29 218 33 218 38Z" fill="#F472B6" />
      <path d="M240 52 C240 48 236 45 232 49 L240 59 L248 49 C244 45 240 48 240 52Z" fill="#FB7185" transform="scale(0.85) translate(40, 15)" />
      <path d="M196 52 C196 48 192 45 188 49 L196 59 L204 49 C200 45 196 48 196 52Z" fill="#F9A8D4" transform="scale(0.9) translate(-20, 5)" />
      {/* 티셔츠 */}
      <path d="M100 72 L66 98 L84 110 L84 172 L196 172 L196 110 L214 98 L180 72 C175 88 105 88 100 72Z" fill="#4ADE80" />
      <path d="M100 72 C105 88 175 88 180 72" stroke="#22C55E" strokeWidth="2" fill="none" />
      {/* 판다 발 - 왼쪽 */}
      <ellipse cx="70" cy="200" rx="20" ry="13" fill="#111827" />
      <ellipse cx="50" cy="202" rx="14" ry="10" fill="#111827" />
      <circle cx="63" cy="195" r="3" fill="#374151" />
      <circle cx="76" cy="193" r="3" fill="#374151" />
      {/* 판다 발 - 오른쪽 */}
      <ellipse cx="210" cy="200" rx="20" ry="13" fill="#111827" />
      <ellipse cx="230" cy="202" rx="14" ry="10" fill="#111827" />
      <circle cx="204" cy="195" r="3" fill="#374151" />
      <circle cx="217" cy="193" r="3" fill="#374151" />
    </svg>
  )
}

export default function HotItemsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-10 flex items-center gap-20">
        <div className="w-96 h-64 bg-gray-100 rounded-3xl flex items-center justify-center flex-shrink-0 overflow-hidden">
          <HotItemsIllustration />
        </div>
        <div>
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-wide">Hot Items</p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 leading-tight">
            인기 상품을<br />확인해 보세요
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            가장 HOT한 중고거래 물들을<br />판다 마켓에서 확인해 보세요
          </p>
        </div>
      </div>
    </section>
  )
}

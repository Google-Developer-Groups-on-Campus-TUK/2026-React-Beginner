function SearchIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full h-full p-8">
      {/* 돋보기 원 */}
      <circle cx="120" cy="105" r="60" stroke="#60A5FA" strokeWidth="12" fill="white" />
      {/* 돋보기 손잡이 */}
      <line x1="163" y1="148" x2="210" y2="195" stroke="#3B82F6" strokeWidth="14" strokeLinecap="round" />
      {/* 돋보기 안 아이콘 */}
      <circle cx="105" cy="95" r="6" fill="#BFDBFE" />
      <rect x="92" y="110" width="36" height="5" rx="2.5" fill="#BFDBFE" />
    </svg>
  )
}

export default function SearchSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-10 flex items-center gap-20">
        <div>
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-wide">Search</p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 leading-tight">
            구매를 원하는<br />상품을 검색하세요
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            구매하고 싶은 물건은 검색에서<br />쉽게 찾아보세요
          </p>
        </div>
        <div className="w-96 h-64 bg-blue-100 rounded-3xl flex items-center justify-center flex-shrink-0 overflow-hidden">
          <SearchIllustration />
        </div>
      </div>
    </section>
  )
}

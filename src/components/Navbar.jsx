function PandaLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="8" fill="#3B82F6" />
      <circle cx="18" cy="20" r="10" fill="white" />
      <circle cx="11" cy="12" r="4" fill="#111827" />
      <circle cx="25" cy="12" r="4" fill="#111827" />
      <ellipse cx="14.5" cy="19" rx="4" ry="4" fill="#111827" />
      <ellipse cx="21.5" cy="19" rx="4" ry="4" fill="#111827" />
      <circle cx="15.5" cy="18" r="1.5" fill="white" />
      <circle cx="22.5" cy="18" r="1.5" fill="white" />
      <ellipse cx="18" cy="25" rx="3" ry="2" fill="#374151" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PandaLogo />
          <span className="font-bold text-lg text-gray-900">판다마켓</span>
        </div>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
          로그인
        </button>
      </div>
    </nav>
  )
}

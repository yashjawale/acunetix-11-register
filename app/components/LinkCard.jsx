import Link from 'next/link'

function LinkCard({ displayName, formLink }) {
  return (
    <Link
      target="_blank"
      className="block p-4 tracking-normal shadow-pink-500 shadow-md text-2xl border-white border-2 rounded-xl transition-all hover:bg-slate-900 hover:border-pink-500 hover:scale-95"
      href={formLink}
    >
      {displayName}
    </Link>
  )
}

export default LinkCard

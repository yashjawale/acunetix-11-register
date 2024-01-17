import Link from 'next/link'

function LinkCard({ displayName, formLink }) {
  return (
    <Link
      target="_blank"
      className="block p-4 text-pink-500 border-white border-2 rounded-xl"
      href={formLink}
    >
      {displayName}
    </Link>
  )
}

export default LinkCard

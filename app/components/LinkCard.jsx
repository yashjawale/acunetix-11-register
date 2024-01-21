import Link from 'next/link'

function LinkCard({ displayName, formLink }) {
  return (
    <Link
      target="_blank"
      className={`flex bg-backgroundHighlight items-center p-4 tracking-normal shadow-accent shadow-md text-lg border-neutral-100 border-2 rounded-xl transition-all hover:border-accent hover:scale-95 ${displayName === "Treasure Trove" && "col-span-2"}`}
      href={formLink}
    >
      {displayName}
    </Link>
  )
}

export default LinkCard

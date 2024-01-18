import Image from 'next/image'
import LinkCard from './components/LinkCard'

import Link from 'next/link'

import acunetixLogo from './assets/acunetix-logo.png'

import { FaInstagram, FaChrome, FaLinkedinIn } from 'react-icons/fa6'

const eventLinks = [
  {
    eventName: 'Gamestorm',
    formLink: 'https://forms.gle/7QYj6CgWqP44dwUFA',
  },
  {
    eventName: 'Treasure Trove',
    formLink: 'https://forms.gle/MPDAHifsTB1PNXRi9',
  },
  {
    eventName: 'Code of Lies',
    formLink: 'https://forms.gle/RYyxCaq7mDhR28ji7',
  },
  {
    eventName: 'DPL',
    formLink: 'https://forms.gle/NS4Z6Mc5F99gxTFA6',
  },
  {
    eventName: 'Timescape',
    formLink: 'https://forms.gle/mxquE6FJC7wkGXbJ8',
  },
  {
    eventName: 'Brainiac',
    formLink: 'https://forms.gle/6RKACmcE4nirUNmA8',
  },
  {
    eventName: 'PromptSaga',
    formLink: 'https://forms.gle/QAAwf8463BVnAWhz9',
  },
  {
    eventName: 'CinemEyes Lens',
    formLink: 'https://forms.gle/4wX75aTwwDpvPRgZ6',
  },
  {
    eventName: 'Ctrl Alt Elite',
    formLink: 'https://forms.gle/7URUTQdTv1ErgExU7',
  },
  {
    eventName: 'UX Hunt',
    formLink: 'https://forms.gle/xtgprukFqU1j7ddT8',
  },
  {
    eventName: 'InsightOPs',
    formLink: 'https://forms.gle/jHcXt1EbQaLt7ThX9',
  },
]

const STREAMLIT_ENABLE = true

export default function Home() {
  if (STREAMLIT_ENABLE) {
    return (
      <frameset>
        <frame src="https://acunetix11.streamlit.app/?embed=True" />
      </frameset>
    )
  } else {
    return (
      <main className="tracking-tighter bg-[#070415] text-neutral-100 container max-w-4xl mx-auto py-16 px-6 flex flex-col items-center gap-8">
        <Image
          src={acunetixLogo}
          width={100}
          height={100}
          alt="Acunetix Logo"
        />
        <h1 className="font-title uppercase text-5xl tracking-normal text-neutral-200">
          Register
        </h1>
        <div className="text-white text-2xl flex gap-6 pb-5 [&>*]:border-neutral-100 [&>*]:border-2 [&>*]:rounded-full [&>*]:p-2 [&>*]:transition-colors [&>*:hover]:text-pink-500 [&>*:hover]:border-pink-500">
          <Link target="_blank" href="https://acunetix11.tech/">
            <FaChrome />
          </Link>
          <Link target="_blank" href="https://instagram.com/acunetix.dit/">
            <FaInstagram />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/acunetix-dit/"
          >
            <FaLinkedinIn />
          </Link>
        </div>
        <div className="flex flex-col gap-8 w-full">
          {eventLinks.map((event) => (
            <LinkCard
              key={event.formLink}
              displayName={event.eventName}
              formLink={event.formLink}
            />
          ))}
        </div>
      </main>
    )
  }
}

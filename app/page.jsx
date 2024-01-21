import Image from 'next/image'
import LinkCard from './components/LinkCard'

import Link from 'next/link'

import acunetixLogo from './assets/acunetix-logo.png'

import { FaInstagram, FaChrome, FaLinkedinIn } from 'react-icons/fa6'

import { STREAMLIT_ENABLE } from './settings'

const eventLinks = [
  {
    eventName: 'Gamestorm',
    formLink: 'https://forms.gle/7QYj6CgWqP44dwUFA',
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
  // {
  //   eventName: 'Treasure Trove',
  //   formLink: 'https://forms.gle/MPDAHifsTB1PNXRi9',
  // },
]

export default function Home() {
  if (STREAMLIT_ENABLE) {
    return (
      <iframe
        style={{ height: '100svh' }}
        width="100%"
        height="100%"
        src="https://acunetix11.streamlit.app/?embed=True"
      ></iframe>
    )
  } else {
    return (
      <main className="tracking-tighter bg-background text-neutral-100 container max-w-4xl mx-auto py-16 px-6 flex flex-col items-center gap-6 relative">
        <Image
          src={acunetixLogo}
          width={100}
          height={100}
          alt="Acunetix Logo"
        />
        {/* <p className='absolute text-center top-12 text-white text-opacity-10 font-black text-7xl md:text-8xl w-full z-0'>ACUNETIX 11.0</p> */}
        <h1 className="font-title uppercase text-5xl tracking-normal text-neutral-200">
          Register
        </h1>
        <div className="text-neutral-200 text-2xl flex gap-6 pb-5 [&>*]:border-neutral-200 [&>*]:border-2 [&>*]:rounded-full [&>*]:p-2 [&>*]:transition-colors [&>*:hover]:text-accent [&>*:hover]:border-accent">
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
        <div className="grid grid-cols-2 gap-4 w-full">
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

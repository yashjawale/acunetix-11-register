import Image from 'next/image'
import LinkCard from './components/LinkCard'

const eventLinks = [
  {
    eventName: 'Gamestorm',
    formLink: 'https://forms.gle/7QYj6CgWqP44dwUFA'
  }, {
    eventName: 'Treasure Trove',
    formLink: 'https://forms.gle/MPDAHifsTB1PNXRi9',
  }, {
    eventName: 'Code of Lies',
    formLink: 'https://forms.gle/RYyxCaq7mDhR28ji7'
  }, {
    eventName: 'DPL',
    formLink: 'https://forms.gle/NS4Z6Mc5F99gxTFA6'
  }, {
    eventName: 'Timescape',
    formLink: 'https://forms.gle/mxquE6FJC7wkGXbJ8'
  }, {
    eventName: 'Brainiac',
    formLink: 'https://forms.gle/6RKACmcE4nirUNmA8'
  }, {
    eventName: 'PromptSaga',
    formLink: 'https://forms.gle/QAAwf8463BVnAWhz9'
  }, {
    eventName: 'CinemEyes Lens',
    formLink: 'https://forms.gle/4wX75aTwwDpvPRgZ6'
  }, {
    eventName: 'Ctrl Alt Elite',
    formLink: 'https://forms.gle/7URUTQdTv1ErgExU7'
  },
  {
    eventName: 'UX Hunt',
    formLink: 'https://forms.gle/xtgprukFqU1j7ddT8'
  }, {
    eventName: 'InsightOPs',
    formLink: 'https://forms.gle/jHcXt1EbQaLt7ThX9'
  }
]

export default function Home() {
  return (
    <main className='container p-8 flex flex-col gap-8'>
      <h1>Register</h1>
      <div className='flex flex-col gap-8'>
        {eventLinks.map(event => <LinkCard key={event.formLink} displayName={event.eventName} formLink={event.formLink} />)}
      </div>
    </main>
  )
}

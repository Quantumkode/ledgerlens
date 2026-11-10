import Hero from '../components/sections/Hero.jsx';
import { Highlights, Problem, Features, HowItWorks, SectionHead } from '../components/sections/Story.jsx';
import { Audience, Aws, EarlyAccess, Pricing, Team, Contact } from '../components/sections/Company.jsx';
import Demo from '../components/dashboard/Demo.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Problem />
      <Features />
      <HowItWorks />
      <section id="demo" className="border-t border-line bg-paper-2/40 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHead n="04" kicker="Interactive demo" title="Close a month in the sample workspace.">Search transactions, open a record, approve or dispute flagged items and inspect extracted document fields. Everything below is fictional sample data.</SectionHead>
          <div className="mt-12"><Demo /></div>
        </div>
      </section>
      <Audience />
      <Aws />
      <EarlyAccess />
      <Pricing />
      <Team />
      <Contact />
    </>
  );
}

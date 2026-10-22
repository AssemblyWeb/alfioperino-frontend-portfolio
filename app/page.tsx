'use client'

const projects = [
  {
    number: '01',
    title: 'Revance Therapeutics',
    category: 'Biotech / Luxury aesthetics',
    summary: 'Revance is a leading firm in the biotechnology and aesthetic medicine sector that develops and offers an advanced range of subproducts focused on skincare and specialized treatments, highlighted by its most recognized brands: the neuromodulator DAXXIFY®, the Teoxane RHA® dermal filler collection, and the PanOxyl® acne-control dermatological line.',
    image: 'projects/revance2.png',
    metrics: ['+40% engagement', '96/100 Lighthouse'],
    contribution: 'I successfully managed the migration of the web ecosystem from traditional WordPress architectures to a high-performance headless stack utilizing SvelteKit and Hygraph. By decoupling the front-end and leveraging a structured content framework, we drastically optimized page performance and boosted development speed. This transformation simplified maintenance and established an extensible foundation, allowing our team to ship new features and execute system upgrades effortlessly.',
    stack: ['Svelte 5 Kit', 'Tailwind CSS', 'Hygraph CMS', 'Vercel', 'WCAG accessibility' ],
  },
  {
    number: '02',
    title: 'Movistar CRM',
    category: 'Enterprise telecommunications',
    summary: 'Movistar is the largest cellphone provider in Argentina, powering millions of regional lines with its telecommunications network. This CRM operates as the core CRM software framework developed for all of Latin America.',
    image: 'projects/movistar.png',
    metrics: ['Cut transaction wait time from 14s to 8s', '+11% retention conversion'],
    contribution: 'Led a cross-functional engineering squad while bridging technical architecture and UI/UX design. Mentored junior front-end and back-end developers through hands-on guidance, code reviews, and architectural alignment. To streamline decision-making across complex microservices workflows, directly crafted initial wireframes and interactive UI concepts in Figma for the design team, effectively eliminating cross-department bottlenecks between technical debt and user experience.',
    stack: ['React', 'Figma', 'MongoDB', 'MySQL', 'Express', 'CI/CD', 'Microservices'],
  },
  {
    number: '03',
    title: 'Proactiv',
    category: 'Consumer health products ecommerce',
    summary: 'Proactiv is a leading American skincare brand specializing in acne treatment systems. Operating a full featured e-commerce store, the platform drives skincare routine kits and recurring subscriptions directly to consumers worldwide.',
    image: 'projects/proactiv.png',
    metrics: ['+8% Sales Increase', '-20% Dev time for deployments'],
    contribution: 'Developed and maintained high traffic storefront for The Proactiv Company on the Kibo Commerce platform. Designed and prototyped new e-commerce features in Figma to accelerate workflows, while contributing to the transition of legacy microfrontends to Next.js architecture to optimize performance and scalability.',
    stack: ['Kibo', 'Next.js', 'AWS Services', 'CSS modules', 'Typescript', 'WCAG accessibility'],
  },
]

export default function Page() {
  return (
    <main className="site-shell">

      <article className="portfolio">
        <header className="hero">
          <div>
            <p className="eyebrow !text-xl">Alfio Perino / 2026</p>
            <h1>Frontend<br /><em>designer.</em></h1>
          </div>
          <div className="hero-meta">
            <p>Technology should bring people together.<br></br>I bridge the gap between design and&nbsp;engineering to build clear digital products that people enjoy.</p>
            <p className="contact">Buenos Aires · Argentina<br />alfioperino@gmail.com</p>
          </div>
        </header>

        <section className="intro-grid">
          <p className="section-kicker">Selected projects</p>
          <p className="intro-copy">Digital products that combine frontend design and clean, accessible, user-centered code.</p>
        </section>

        <div className="projects">
          {projects.map((project) => (
            <section className="project" key={project.number}>
              <div className="project-heading">
                <span className="project-number">{project.number}</span>
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.category}</p>
                </div>
              </div>
              <div className="project-visual">
                <img src={project.image} alt={`${project.title} interface preview`} />
              </div>
              <div className="project-details">
                <p className="project-summary">{project.summary}</p>
                <div className="metric-row">
                  {project.metrics.map((metric) => <span key={metric}>{metric}</span>)}
                </div>
                <div className="detail-columns">
                  <div>
                    <p className="detail-label">Contribution</p>
                    <p>{project.contribution}</p>
                  </div>
                  <div>
                    <p className="detail-label">Toolkit</p>
                    <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <footer className="footer">
          <div><span className="footer-mark">Alfio Perino / 2026</span><p>Thanks for scrolling.</p></div>
          <div className="footer-right"><p>Let&apos;s make something<br />worth using.</p><strong>alfioperino@gmail.com</strong></div>
        </footer>
      </article>
    </main>
  )
}

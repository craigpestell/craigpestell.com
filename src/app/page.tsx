import Earlier from '@/components/Earlier';
import Footer from '@/components/Footer';
import Header, { sections } from '@/components/Header';
import Hero from '@/components/Hero';
import Product from '@/components/Product';
import Section from '@/components/Section';
import SectionTracker from '@/components/SectionTracker';
import Stack from '@/components/Stack';
import StructuredData from '@/components/StructuredData';
import Work from '@/components/Work';
import { portfolioData } from '@/data/portfolio';

const sectionIds = sections.map((section) => section.id);

export default function Home() {
  const { personalInfo, site, experience, projects, skills, education } = portfolioData;
  const product = projects.find((project) => project.id === site.productId);

  return (
    <>
      <StructuredData personalInfo={personalInfo} />
      <SectionTracker ids={sectionIds} />
      <Header />
      <main>
        <Hero personalInfo={personalInfo} site={site} />
        <Section id="work" title="Work" intro={site.workIntro}>
          <Work roles={experience.filter((role) => role.site)} />
        </Section>
        {product && (
          <Section id="product" title="Product" intro={site.productIntro} tinted>
            <Product project={product} />
          </Section>
        )}
        <Section id="earlier" title="Earlier" intro={site.earlierIntro}>
          <Earlier roles={experience.filter((role) => !role.site)} />
        </Section>
        <Section id="stack" title="Stack" intro={site.stackIntro}>
          <Stack skills={skills} education={education} />
        </Section>
      </main>
      <Footer personalInfo={personalInfo} site={site} />
    </>
  );
}

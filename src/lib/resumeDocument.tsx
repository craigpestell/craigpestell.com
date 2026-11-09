import { Document, Link, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { Experience, PortfolioData } from '@/data/portfolio';
import { formatShortMonthYear } from '@/lib/formatDate';

// Colours follow the site's Readout theme (src/app/themes/readout.css).
const ink = '#15212B';
const muted = '#52606B';
const accent = '#0A5E6E';
const rule = '#D0D7D2';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 34,
    paddingHorizontal: 40,
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    lineHeight: 1.4,
    color: ink,
  },
  header: {
    marginBottom: 10,
    paddingBottom: 9,
    borderBottomWidth: 1.5,
    borderBottomColor: ink,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.15,
  },
  headline: {
    fontSize: 11.5,
    marginBottom: 5,
  },
  contactLine: {
    fontSize: 9,
    color: muted,
  },
  link: {
    color: accent,
    textDecoration: 'none',
  },
  section: {
    marginBottom: 9,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 5,
    paddingBottom: 2,
    borderBottomWidth: 0.75,
    borderBottomColor: rule,
  },
  item: {
    marginBottom: 7,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  itemTitle: {
    fontSize: 10.5,
    flex: 1,
  },
  bold: {
    fontFamily: 'Helvetica-Bold',
  },
  dates: {
    fontSize: 9,
    color: muted,
    marginLeft: 12,
    flexShrink: 0,
  },
  bulletRow: {
    flexDirection: 'row',
    marginTop: 1.5,
    paddingLeft: 4,
  },
  bulletMark: {
    width: 9,
  },
  bulletText: {
    flex: 1,
  },
  meta: {
    fontSize: 8.5,
    color: muted,
    marginTop: 2,
  },
  compactItem: {
    marginBottom: 4,
  },
});

function dateRange(start: string, end?: string) {
  return `${formatShortMonthYear(start)} – ${end ? formatShortMonthYear(end) : 'Present'}`;
}

function yearRange(start: string, end: string) {
  const [from, to] = [start.slice(0, 4), end.slice(0, 4)];
  return from === to ? from : `${from}–${to}`;
}

// Strips the scheme so links read as "linkedin.com/in/name".
function displayUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletMark}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

function ItemHeader({ title, detail, dates }: { title: string; detail: string; dates: string }) {
  return (
    <View style={styles.itemHeader}>
      <Text style={styles.itemTitle}>
        <Text style={styles.bold}>{title}</Text>
        {detail ? `, ${detail}` : ''}
      </Text>
      <Text style={styles.dates}>{dates}</Text>
    </View>
  );
}

function Role({ exp }: { exp: Experience }) {
  const summary = exp.resume?.summary ?? exp.description;
  const dates = dateRange(exp.startDate, exp.endDate);

  if (exp.resume?.compact) {
    return (
      <View style={styles.compactItem} wrap={false}>
        <ItemHeader title={exp.company} detail={exp.position} dates={dates} />
        <Text>{summary}</Text>
      </View>
    );
  }

  const points = exp.resume?.points ?? exp.achievements.slice(0, 3);

  return (
    // A role never splits across pages.
    <View style={styles.item} wrap={false}>
      <ItemHeader title={exp.company} detail={exp.position} dates={dates} />
      <Text>{summary}</Text>
      {points.map((point) => (
        <Bullet key={point}>{point}</Bullet>
      ))}
      {exp.technologies.length > 0 && (
        <Text style={styles.meta}>{exp.technologies.join(', ')}</Text>
      )}
    </View>
  );
}

function SkillsSection({ skills }: { skills: PortfolioData['skills'] }) {
  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    languages: 'Languages',
    tools: 'Tools & Platforms',
    other: 'Other',
  };
  const categoryOrder = ['languages', 'frontend', 'backend', 'tools', 'other'];

  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.sectionTitle}>Technical Skills</Text>
      {categoryOrder.map((category) => {
        const categorySkills = skills.filter((skill) => skill.category === category);
        if (categorySkills.length === 0) return null;

        return (
          <Text key={category}>
            <Text style={styles.bold}>{categoryLabels[category]}: </Text>
            {categorySkills.map((skill) => skill.name).join(', ')}
          </Text>
        );
      })}
    </View>
  );
}

export function ResumeDocument({ data }: { data: PortfolioData }) {
  const { personalInfo, resume } = data;
  const roles = data.experience.filter((experience) => experience.resumeIncluded !== false);
  const product = data.projects.find((project) => project.id === data.site.productId);
  const links = [personalInfo.website, personalInfo.linkedin, personalInfo.github];

  return (
    <Document
      title={`${personalInfo.name} - Resume`}
      author={personalInfo.name}
      subject={resume.headline}
      language="en-US"
    >
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.headline}>{resume.headline}</Text>
          <Text style={styles.contactLine}>
            <Link src={`mailto:${personalInfo.email}`} style={styles.link}>{personalInfo.email}</Link>
            {`  |  ${personalInfo.phone}  |  ${personalInfo.location}, ${resume.locationNote}`}
          </Text>
          <Text style={styles.contactLine}>
            {links.map((url, index) => (
              <Text key={url}>
                {index > 0 ? '  |  ' : ''}
                <Link src={url} style={styles.link}>{displayUrl(url)}</Link>
              </Text>
            ))}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text>{personalInfo.summary}</Text>
          <Text style={styles.meta}>{resume.availability}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {roles.map((exp) => (
            <Role key={exp.id} exp={exp} />
          ))}
          <View style={styles.compactItem} wrap={false}>
            <Text>
              <Text style={styles.bold}>Earlier: </Text>
              {resume.earlierCareerSummary}
            </Text>
          </View>
        </View>

        {product && (
          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>Open Source</Text>
            <Text>
              <Text style={styles.bold}>{product.title}. </Text>
              {product.description}.{' '}
              {product.projectUrl && (
                <Link src={product.projectUrl} style={styles.link}>{displayUrl(product.projectUrl)}</Link>
              )}
            </Text>
          </View>
        )}

        <SkillsSection skills={data.skills} />

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Education</Text>
          {data.education.map((edu) => (
            <ItemHeader
              key={edu.id}
              title={edu.field ? `${edu.degree}, ${edu.field}` : edu.degree}
              detail={edu.institution}
              dates={yearRange(edu.startDate, edu.endDate)}
            />
          ))}
        </View>
      </Page>
    </Document>
  );
}

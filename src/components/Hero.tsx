import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import Image from 'next/image';
import { PersonalInfo } from '@/data/portfolio';

interface HeroProps {
  personalInfo: PersonalInfo;
}

export default function Hero({ personalInfo }: HeroProps) {
  return (
    <section id="about" aria-label="About" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 via-accent/5 to-background pt-28 md:pt-36 pb-20">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-primary to-accent p-1">
              {personalInfo.profileImage ? (
                <Image 
                  src={personalInfo.profileImage} 
                  alt={`${personalInfo.name} - illustrated avatar`}
                  width={192}
                  height={192}
                  sizes="192px"
                  className="w-full h-full rounded-full object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-4xl font-bold text-muted-foreground">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Senior full-stack engineer building tools users adopt by default
            </h2>
          </div>

          {/* Summary */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.summary}
          </p>

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
            {personalInfo.availability}
          </div>

          <div className="mb-8 grid gap-4 text-left sm:grid-cols-3 max-w-4xl mx-auto">
            <div className="rounded-lg border border-border bg-card/70 p-4">
              <h3 className="font-semibold text-foreground">Architecture ownership</h3>
              <p className="mt-1 text-sm text-muted-foreground">Frontend, API, and platform decisions that hold together in production.</p>
            </div>
            <div className="rounded-lg border border-border bg-card/70 p-4">
              <h3 className="font-semibold text-foreground">Ambiguous problems</h3>
              <p className="mt-1 text-sm text-muted-foreground">Turning operational pain into durable workflows.</p>
            </div>
            <div className="rounded-lg border border-border bg-card/70 p-4">
              <h3 className="font-semibold text-foreground">Engineering leverage</h3>
              <p className="mt-1 text-sm text-muted-foreground">Reusable systems, tooling, documentation, and guidance for teams.</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label={`Connect with ${personalInfo.name} on LinkedIn`}
            >
              <Linkedin className="w-6 h-6 text-card-foreground" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label={`See ${personalInfo.name}'s code on GitHub`}
            >
              <Github className="w-6 h-6 text-card-foreground" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-card rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label={`Send email to ${personalInfo.name}`}
            >
              <Mail className="w-6 h-6 text-card-foreground" />
            </a>
            <a
              href="/api/resume"
              className="p-3 bg-card rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label={`Get ${personalInfo.name}'s resume`}
            >
              <FileText className="w-6 h-6 text-card-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

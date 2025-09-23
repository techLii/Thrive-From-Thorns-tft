"use client";

import { ExternalLink, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TEAM_MEMBERS } from "../content/team-content";

export default function TeamMembers() {
  return (
    <section
      id="team"
      className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-csag-primary">Core Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto rounded-minimal" />
          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Volunteers, donors, and partners are vital in transforming lives,
            and hearing directly from those who have experienced this impact
            firsthand can be incredibly powerful and inspiring.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 animate-slide-up">
          {TEAM_MEMBERS.map((m) => (
            <TeamMemberCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  socialMedia: string;
  imageUrl: string;
  testimonial: string;
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [expanded, setExpanded] = React.useState(false);
  const maxChars = 260;
  const isLong = member.testimonial.length > maxChars;
  const displayText =
    expanded || !isLong
      ? member.testimonial
      : member.testimonial.slice(0, maxChars).trimEnd() + "…";

  return (
    <article className="group relative flex flex-col h-full border border-gray-200 rounded-lg bg-white/70 backdrop-blur-sm p-6 hover:border-csag-primary/40 transition-colors">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <Link
          href={member.socialMedia}
          className="shrink-0 focus:outline-none focus:ring-2 focus:ring-csag-primary rounded-lg"
          aria-label={`View ${member.name}'s profile`}
          target="_blank"
        >
          <Image
            src={member.imageUrl}
            alt={`${member.name} headshot`}
            width={80}
            height={80}
            className="h-20 w-20 rounded-lg object-cover border border-gray-200"
            sizes="80px"
            quality={70}
          />
        </Link>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 leading-snug">
            {member.name}
          </h3>
          <p className="text-csag-primary text-sm font-medium mt-1">
            {member.designation}
          </p>
          <div className="mt-2">
            <Link
              href={member.socialMedia}
              target="_blank"
              className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-csag-primary transition-colors"
            >
              View Profile <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
        <Quote className="h-6 w-6 text-csag-accent/40 hidden sm:block" />
      </div>

      {/* Testimonial */}
      <p className="text-gray-600 text-sm leading-relaxed italic flex-1">
        &ldquo;{displayText}&rdquo;
      </p>

      {/* Actions */}
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="mt-4 self-start text-xs font-semibold tracking-wide text-csag-primary hover:text-csag-accent transition-colors"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      {/* Accent bar */}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-csag-primary/60 via-csag-accent/60 to-csag-primary/60 opacity-0 group-hover:opacity-100 transition-opacity" />
    </article>
  );
}

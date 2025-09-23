export const metadata = {
  title: "Donor Privacy Policy | Thrive From Thorns",
  description: "Thrive From Thorns donor privacy protection statement.",
  alternates: { canonical: "/donor-privacy-policy" },
  openGraph: {
    title: "Donor Privacy Policy | TWT",
    description: "Thrive From Thorns donor privacy protection statement.",
    url: "/donor-privacy-policy",
  },
  twitter: {
    card: "summary",
    title: "Donor Privacy Policy | TWT",
    description: "Thrive From Thorns donor privacy protection statement.",
  },
};

export default function DonorPrivacyPolicyPage() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Donor <span className="text-TWT-primary">Privacy Policy</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-TWT-primary to-TWT-accent mx-auto rounded-minimal" />
        </header>
        <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:leading-relaxed prose-li:leading-relaxed">
          <h2 className="text-xl font-semibold mt-12 mb-4">
            1. Thrive From Thorns’s Commitment to the Protection of
            Personal Information
          </h2>
          <p>
            At Thrive From Thorns, we attach a very high value to the
            privacy of our donors. Accordingly, Thrive From Thorns does
            not sell or share donor information with other non-profit or
            for-profit organizations.
          </p>
          <h2 className="text-xl font-semibold mt-12 mb-4">
            2. The Personal Information that Thrive From Thorns Collects
            and Maintains about Donors
          </h2>
          <p>
            The information we collect about a donor or prospective donor that
            may, alone or in combination, constitute personal information
            includes name, email, phone, home contact information, programs or
            projects an individual wish to support, and future communication
            preferences. The personal information that we maintain about a donor
            or prospective donor includes the amounts and manner in which he or
            she has contributed or promised to contribute to Thrive From Thorns
            Kenya.
          </p>
          <h2 className="text-xl font-semibold mt-12 mb-4">
            3. The Purposes for which Thrive From Thorns Collects Personal
            Information about Donors and the Sources of that Information
          </h2>
          <p>
            We collect personal information about donors and prospective donors
            for the following purposes: Any such personal information, collected
            for these purposes, will be collected from the individual to whom it
            relates or from a publicly available source of information.
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>Conducting and facilitating fundraising,</li>
            <li>Managing our relationship with donors, and</li>
            <li>
              Meeting any legal or regulatory requirements relating to
              activities of Thrive From Thorns
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-12 mb-4">
            4. The Disclosure of Personal Information about Donors by Child
            Survival Aid Kenya
          </h2>
          <p>
            We will not disclose any personal information other than donor name
            for annual report listing. Any person requesting anonymity is listed
            as anonymous. We will not disclose any personal information about a
            donor or perspective donor to anyone outside Thrive From Thorns
            Kenya or any of its affiliated entities without the knowledge or
            consent of that donor or prospective donor except as follows:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>
              To an auditor in connection with an audit of Thrive From Thorns
              Kenya;
            </li>
            <li>
              To a lawyer who is representing Thrive From Thorns in a
              matter to which the personal information relates;
            </li>
            <li>
              To comply with a summon, warrant, or requirement under an order or
              rule of court;
            </li>
            <li>
              To a government institution that has made a request for the
              information, identifying its authority to do so, in connection
              with the administration of any law of the Republic of Kenya; or
            </li>
            <li>
              In any other circumstance where disclosure is specifically
              permitted under any applicable personal information protection
              legislation.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-12 mb-4">
            5. Discontinue Contact Upon Request Policy
          </h2>
          <p>
            It is the policy of Thrive From Thorns to discontinue
            contacting any person upon that person’s oral or written request
            directed to the organization, its professional fundraiser, or other
            agent. Recipients of Thrive From Thorns e-newsletters are
            given the option to unsubscribe at the top of each e-newsletter.
          </p>
          <h3 className="text-lg font-semibold mt-10 mb-4">Contacting Us</h3>
          <p>
            If you have comments or questions about our donor privacy policy or
            would like to be removed from our mailing list, or would like to
            make your donation anonymously, please email us at{" "}
            <a
              href="mailto:thrivewiththorns@gmail.com"
              className="text-TWT-primary hover:underline"
            >
              thrivewiththorns@gmail.com
            </a>{" "}
            or call us at +254 00 000 0000.
          </p>
        </div>
      </div>
    </section>
  );
}

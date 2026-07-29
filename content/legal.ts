/**
 * Legal copy, ported verbatim from the existing site.
 *
 * Deliberately not rewritten for house style: these are approved legal
 * documents, and changing their wording is a legal decision rather than an
 * editorial one. Only the "Last updated" dates and the surrounding markup are
 * this project's concern.
 */

export type LegalSection = {
  readonly title: string;
  readonly body: string;
};

export const privacy = {
  headline: "Privacy Policy",
  lastUpdated: "Last updated: June 2026",
  intro:
    'ABC Teknology ("we", "our", "us") operates the ABC AI mobile application. This policy explains what information we collect, how we use it, and your rights regarding that information.',
  sections: [
    {
      title: "1. Information we collect",
      body: "When you use ABC AI, we may collect information you provide directly, such as your name and email address when you create an account. We also collect usage data automatically, including the searches you perform, the features you interact with, and basic device information such as operating system version and app version. We do not collect payment information; all purchases are completed directly through the relevant store app.",
    },
    {
      title: "2. How we use your information",
      body: "We use collected information to operate and improve the app, personalise your experience, send you important service updates, and respond to your support requests. We do not sell your personal information to third parties.",
    },
    {
      title: "3. Data sharing",
      body: "We may share anonymised, aggregated usage data with analytics providers to help us understand how the app is used. We may also share data with service providers who assist us in operating the app, subject to confidentiality agreements. We will disclose information if required by law or to protect the rights and safety of our users.",
    },
    {
      title: "4. Data retention",
      body: "We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your account and associated data at any time by contacting us at privacy@abcteknology.com.",
    },
    {
      title: "5. Security",
      body: "We implement industry-standard security measures to protect your data, including encryption in transit and at rest. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
    },
    {
      title: "6. Cookies and tracking",
      body: "Our app does not use cookies. Our website may use essential cookies to maintain your session and preferences. We do not use advertising or tracking cookies.",
    },
    {
      title: "7. Children",
      body: "ABC AI is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.",
    },
    {
      title: "8. Changes to this policy",
      body: "We may update this Privacy Policy from time to time. We will notify you of significant changes through the app or by email. Continued use of the app after changes take effect constitutes your acceptance of the updated policy.",
    },
    {
      title: "9. Contact",
      body: "If you have questions about this Privacy Policy or how we handle your data, please contact us at privacy@abcteknology.com.",
    },
  ] as const satisfies readonly LegalSection[],
} as const;

export const terms = {
  headline: "Terms of Service",
  lastUpdated: "Last updated: June 2026",
  intro:
    "Please read these Terms of Service carefully before using ABC AI. These terms govern your use of the ABC AI app operated by ABC Teknology.",
  sections: [
    {
      title: "1. Acceptance of terms",
      body: "By downloading or using the ABC AI application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the app.",
    },
    {
      title: "2. Description of service",
      body: "ABC AI is a price comparison tool that retrieves and displays publicly available grocery prices from participating online stores in the UAE. We do not sell groceries and are not a party to any transaction between you and any store. All purchases are made directly through the relevant store's own platform.",
    },
    {
      title: "3. Accuracy of price information",
      body: "We make every effort to display accurate, real-time pricing. However, prices on third-party stores can change at any time. ABC AI does not guarantee the accuracy or completeness of any price information shown, and is not responsible for discrepancies between prices displayed in the app and prices charged at checkout on a store's platform.",
    },
    {
      title: "4. User accounts",
      body: "You are responsible for maintaining the confidentiality of your account credentials. You must notify us immediately of any unauthorised use of your account. We reserve the right to suspend or terminate accounts that violate these terms.",
    },
    {
      title: "5. Prohibited use",
      body: "You may not use ABC AI to scrape, reproduce, or redistribute price data; to reverse engineer or attempt to extract source code from the app; to introduce malicious software; or to use the service in any way that violates applicable UAE law.",
    },
    {
      title: "6. Intellectual property",
      body: "All content, trademarks, and software in the ABC AI app are the property of ABC Teknology or its licensors. You are granted a limited, non-exclusive, non-transferable licence to use the app for personal, non-commercial purposes.",
    },
    {
      title: "7. Limitation of liability",
      body: "To the fullest extent permitted by law, ABC Teknology shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app, including but not limited to losses resulting from price inaccuracies or store availability.",
    },
    {
      title: "8. Governing law",
      body: "These terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of the UAE.",
    },
    {
      title: "9. Changes to terms",
      body: "We may modify these terms at any time. Continued use of the app after changes are posted constitutes your acceptance. We will provide notice of material changes through the app.",
    },
    {
      title: "10. Contact",
      body: "Questions about these terms can be directed to legal@abcteknology.com.",
    },
  ] as const satisfies readonly LegalSection[],
} as const;

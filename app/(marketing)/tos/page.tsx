import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://traintap.io
// - Name: ShipFast
// - Contact information: marc@traintap.io
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://traintap.io/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Effective Date: April 5, 2024

Welcome to TrainTap. The following terms and conditions (the "Terms of Service") govern your access to and use of TrainTap, including any content, functionality, and services offered on or through https://traintap.io (the "Website"), whether as a guest or a registered user.

Please read the Terms of Service carefully before you start to use the Website. By using the Website or by clicking to accept or agree to the Terms of Service when this option is made available to you, you accept and agree to be bound and abide by these Terms of Service and our Privacy Policy, found at https://traintap.io/privacy-policy, incorporated herein by reference. If you do not want to agree to these Terms of Service or the Privacy Policy, you must not access or use the Website.

1. Service Description

TrainTap provides a platform for fitness trainers to manage schedules, client relationships, workout planning, and more. It is designed to enhance efficiency and training quality.

2. Use License

Subject to your compliance with these Terms of Service, TrainTap grants you a personal, non-transferable, non-exclusive, revocable, limited license to use and access the Website and services.

3. Account Registration

To access certain features of the Website, you must register an account. You agree to provide accurate, current, and complete information and to update such information to keep it accurate, current, and complete.

4. User Conduct

You agree not to use the Website in a way that violates any laws, infringes on anyone's rights, is offensive, or interferes with the Website or any features on the Website.

5. Ownership and Intellectual Property

The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by TrainTap, its licensors, or other providers of such material.

6. User Data

We will maintain certain data that you transmit to the Website for the purpose of managing the performance of the Website, as well as data relating to your use of the Website. You are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Website.

7. Purchases and Refunds

Users who purchase a subscription plan may use the specific features associated with that plan. A full refund can be requested within 14 days after the purchase, subject to our refund policy.

8. Modifications to the Terms of Service

We may revise and update these Terms of Service from time to time at our sole discretion. All changes are effective immediately when we post them. Your continued use of the Website following the posting of revised Terms of Service means that you accept and agree to the changes.

9. Governing Law

These Terms of Service shall be governed by and construed in accordance with the laws of Romania, without giving effect to any choice or conflict of law provision or rule.

10. Contact Information

To ask questions or comment about these Terms of Service, contact us at contact@traintap.io.

By using TrainTap, you represent and warrant that you have read and understood, and agree to be bound by these Terms of Service. If you do not agree with these Terms of Service, you are not authorized to use or access the Website.

Thank you for using TrainTap!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;

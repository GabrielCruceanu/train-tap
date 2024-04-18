import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://traintap.io
// - Name: TrainTap
// - Description: TrainTap is a cutting-edge application designed to revolutionize the way fitness trainers manage their schedules, client relationships, and workout planning. With a focus on saving time and enhancing efficiency, TrainTap offers streamlined scheduling, effortless client management, customizable workout plans, and direct communication tools all in one platform. It empowers trainers to focus on what they do best—delivering impactful training sessions—while handling the administrative tasks that can often be time-consuming. Whether you're looking to grow your client base, simplify your business operations, or elevate the training experience, TrainTap is your go-to solution for taking your fitness training business to the next level. Join the community of trainers who are maximizing their potential with TrainTap.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: contact@traintap.io

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`
Effective Date: April 5, 2024

This Privacy Policy applies to the TrainTap application and website (https://traintap.io), owned and operated by TrainTap ("we", "us", or "our"). It explains how we collect, use, disclose, and safeguard your information when you visit our website and use our application. We are committed to protecting your personal information and your right to privacy.

1. Information We Collect

We collect information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device (“personal information”). Specifically, we collect the following categories of personal information:

- Personal Identification Information: Full Name, Email Address, Phone Number (Optional), Date of Birth, Gender, and Physical Address.
- Fitness and Health Data: Health Information, Fitness Goals, Workout History, Dietary Preferences and Restrictions, Progress Photos, and Body Measurements.
- Financial Information: Payment Details (processed and stored by third-party services) and Purchase History.
- Technical Data: Device Information, IP Address, Cookies and Similar Technologies, and Usage Data.
- Communication Data: Messages and Feedback.
- Security Data: Login Information and Activity Logs.

2. Purpose of Data Collection

Your data is collected for various purposes, including to:
- Process orders and provide our services.
- Improve and personalize your experience with TrainTap.
- Communicate with you about your account and provide customer support.
- For security, to protect our website and application.

3. Data Sharing

We do not share your personal data with any third parties, except as required by law or to protect our rights and interests.

4. Children's Privacy

Our services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13.

5. Security of Your Information

We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.

6. Updates to This Privacy Policy

We may update this privacy policy from time to time. The updated version will be indicated by an updated “Effective Date” and the updated version will be effective as soon as it is accessible. You are advised to review this privacy policy periodically for any changes.

7. Your Rights

You have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please contact us at contact@traintap.io.

8. Contact Information

If you have questions or comments about this Privacy Policy, please contact us at:

Email: contact@traintap.io

This Privacy Policy has been designed to be compliant with major data protection regulations, including GDPR and CCPA. By using our services, you agree to the collection and use of information in accordance with this policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;

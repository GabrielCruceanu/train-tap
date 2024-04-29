import ForgotPasswordForm from "@/components/app/auth/forgot-password-form";
import AuthLayout from "@/components/layouts/auth-layout";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: `Forgot Password`,
  canonicalUrlRelative: "/forgot-password",
});

export default function LoginPage() {
  return (
    <AuthLayout
      backgroundImage={
        "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/white-building.jpg"
      }
      qoute={
        "If something stands between you and your success, move it. Never be denied."
      }
      author={"Dwayne “The Rock” Johnson"}
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}

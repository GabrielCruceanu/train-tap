import LoginForm from "@/components/app/auth/login-form";
import AuthLayout from "@/components/layouts/auth-layout";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: `Login`,
  canonicalUrlRelative: "/login",
});

export default function LoginPage() {
  return (
    <AuthLayout
      backgroundImage={
        "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/white-building.jpg"
      }
      qoute={
        "If you don’t find the time, if you don’t do the work, you\n" +
        "            don’t get the results."
      }
      author={"Arnold Schwarzenegger"}
    >
      <LoginForm />
    </AuthLayout>
  );
}

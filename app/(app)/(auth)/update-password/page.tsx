import LoginForm from "@/components/app/auth/login-form";
import AuthLayout from "@/components/layouts/auth-layout";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: `Update Password`,
  canonicalUrlRelative: "/update-password",
});

export default function LoginPage() {
  return (
    <AuthLayout
      backgroundImage={
        "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/white-building.jpg"
      }
      qoute={"Action is the foundational key to all success."}
      author={"Pablo Picasso"}
    >
      <LoginForm />
    </AuthLayout>
  );
}

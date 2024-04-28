import { AcmeIcon } from "@/components/icons/social";
import { User } from "@nextui-org/user";

type AuthLayoutProps = {
  children: React.ReactNode;
  backgroundImage: string;
  qoute: string;
  author: string;
};

const AuthLayout = ({
  children,
  backgroundImage,
  qoute,
  author,
}: AuthLayoutProps) => {
  return (
    <div className="relative flex h-screen w-screen">
      {/* Brand Logo */}
      <div className="absolute left-2 top-5 lg:left-5">
        <div className="flex items-center">
          <AcmeIcon size={40} />
          <p className="font-medium">TrainTap</p>
        </div>
      </div>

      {/* Form */}
      <div className="flex w-full items-center justify-center bg-background lg:w-1/2">
        {children}
      </div>

      {/* Right side */}
      <div
        className="relative hidden w-1/2 flex-col-reverse rounded-medium p-10 shadow-small lg:flex"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-end gap-4">
          {/* <User
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
            }}
            classNames={{
              base: "flex flex-row-reverse",
              name: "w-full text-right text-black",
              description: "text-black/80",
            }}
            description="Founder & CEO at ACME"
            name="Bruno Reichert"
          /> */}
          <p className="w-full text-right text-2xl text-black/60">
            <span className="font-medium">“</span>
            <span className="font-normal italic">{qoute}</span>
            <span className="font-medium">”</span>
            <strong className="block">{author}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

"use client";

import * as React from "react";
import { cn } from "@/utils/cn";
import { Input } from "@nextui-org/input";
import { Spacer } from "@nextui-org/spacer";
import { Button } from "@nextui-org/button";

interface AccountSettingCardProps {
  className?: string;
}

const AccountSetting = React.forwardRef<
  HTMLDivElement,
  AccountSettingCardProps
>(({ className, ...props }, ref) => (
  <>
    <div ref={ref} className={cn("p-2", className)} {...props}>
      {/* Full name */}
      <div>
        <p className="text-base font-medium text-default-700">Full name</p>
        <p className="mt-1 text-sm font-normal text-default-400">
          Name to be used for emails.
        </p>
        <Input className="mt-2" placeholder="e.g Kate Moore" />
      </div>
      <Spacer y={2} />
      {/* Username */}
      <div>
        <p className="text-base font-medium text-default-700">Username</p>
        <p className="mt-1 text-sm font-normal text-default-400">
          Nickname or first name.
        </p>
        <Input className="mt-2" placeholder="kate.moore" />
      </div>
      <Spacer y={2} />
      {/* Email Address */}
      <div>
        <p className="text-base font-medium text-default-700">Email Address</p>
        <p className="mt-1 text-sm font-normal text-default-400">
          The email address associated with your account.
        </p>
        <Input className="mt-2" placeholder="e.g kate.moore@acme.com" />
      </div>
      <Spacer y={2} />
      <Button className="mt-4 bg-default-foreground text-background" size="sm">
        Update Account
      </Button>
    </div>
    {/* Password */}
    <div ref={ref} className={cn("mt-3 p-2", className)} {...props}>
      {/* Current Password*/}
      <div>
        <p className="text-base font-medium text-default-700">
          Current Password
        </p>
        <p className="mt-1 text-sm font-normal text-default-400">
          Enter your current password.
        </p>
        <Input className="mt-2" placeholder="e.g Kate Moore" />
      </div>
      <Spacer y={2} />
      {/* New Password */}
      <div>
        <p className="text-base font-medium text-default-700">New Password</p>
        <p className="mt-1 text-sm font-normal text-default-400">
          Enter a new password.
        </p>
        <Input className="mt-2" placeholder="kate.moore" />
      </div>
      <Spacer y={2} />
      {/* Confirm Password */}
      <div>
        <p className="text-base font-medium text-default-700">
          Confirm Password
        </p>
        <p className="mt-1 text-sm font-normal text-default-400">
          Confirm your new password.
        </p>
        <Input className="mt-2" placeholder="kate.moore" />
      </div>
      <Button className="mt-4 bg-default-foreground text-background" size="sm">
        Update Password
      </Button>
    </div>
  </>
));

AccountSetting.displayName = "AccountSetting";

export default AccountSetting;

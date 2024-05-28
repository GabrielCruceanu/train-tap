"use client";
import AccountSetting from "@/components/app/settings/account-setting";
import AppearanceSetting from "@/components/app/settings/appearance-setting";
import BillingSetting from "@/components/app/settings/billing-setting";
import ProfileSetting from "@/components/app/settings/profile-setting";
import { Select, SelectItem } from "@nextui-org/react";
import { Tab, Tabs } from "@nextui-org/tabs";

export default function Page() {
  return (
    <>
      {/*  Tabs */}
      <Tabs
        fullWidth
        classNames={{
          base: "mt-6",
          cursor: "bg-content1 dark:bg-content1",
          panel: "w-full p-0 pt-4",
        }}
      >
        <Tab key="profile" title="Profile" aria-label="Profile">
          <ProfileSetting />
        </Tab>
        <Tab key="account" title="Account" aria-label="Account">
          <AccountSetting />
        </Tab>
        <Tab key="billing" title="Billing" aria-label="Billing">
          <BillingSetting />
        </Tab>
        <Tab key="appearance" title="Appearance" aria-label="Appearance">
          <AppearanceSetting />
        </Tab>
      </Tabs>
    </>
  );
}

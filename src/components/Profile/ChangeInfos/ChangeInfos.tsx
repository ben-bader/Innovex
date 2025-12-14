"use client";
import Input from "@/src/UI/Input";
import SecondaryButton from "@/src/UI/SecondaryButton";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ChangeInfos:React.FC = () => {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [Infosmessage, setInfosMessage] = useState({ msg: "", color: "" });
  const [passMessage, setPassMessage] = useState({ msg: "", color: "" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  async function updateInfos(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/user/update", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ userId: session?.user?.id, name, email }),
    });
    if (!res?.ok) {
      setInfosMessage({ msg: "Failed to update user info", color: "#f00" });
      return;
    }
    const data = await res.json();
    update?.();
    setInfosMessage({ msg: "Informations changes succesfuly", color: "#0f0" });
  }

  const [newPassword, SetNewPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  async function updatePass(e: React.FormEvent) {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPassMessage({ msg: "Passwords do not match", color: "#f00" });
      return;
    }
    const res = await fetch("/api/user/update-password", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ userId: session?.user?.id, newPassword }),
    });
    if (!res?.ok) {
      setPassMessage({ msg: "Failed to update password", color: "#f00" });
      return;
    }
    const data = await res.json();

    update?.();
    setPassMessage({ msg: "Password changed succesfuly", color: "#0f0" });
  }
  async function deleteAccount() {
    const confirmed = confirm(
      "This action is irreversible. Delete your account?"
    );

    if (!confirmed) return;

    const res = await fetch("/api/account", {
      method: "DELETE",
    });

    if (res.ok) {
      await signOut({ callbackUrl: "/main" });
    }
  }


  return (
    <div className="flex flex-col gap-16">
      <h1 className="-mb-12">Change Informations </h1>
      <div className="p-4 bg-gray-900/50 border rounded-md border-white/30 w-[60%] max-md:w-full">
        <form onSubmit={updateInfos} className=" flex flex-col gap-6">
          <label htmlFor="usename" className="flex flex-col gap-2">
            Username
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="new name"
            />
          </label>
          <label htmlFor="email" className="flex flex-col gap-2">
            Email
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="new@email.com"
            />
          </label>
          {Infosmessage.msg && (
            <p style={{ color: Infosmessage.color }}>*{Infosmessage.msg}</p>
          )}
     
            <SecondaryButton text="Confirm"/>

        </form>
      </div>
      <h1 className="-mb-12">Change Password </h1>
      <div className="p-4 bg-gray-900/50 border rounded-md border-white/30 w-[60%] max-md:w-full">
        <form onSubmit={updatePass} className=" flex flex-col gap-6">
          <label htmlFor="password" className="flex flex-col gap-2">
            New Password
            <Input
              onChange={(e) => {
                SetNewPassword(e.target.value);
              }}
              placeholder="new password"
            />
          </label>
          <label htmlFor="email" className="flex flex-col gap-2">
            Confirm password
            <Input
              onChange={(e) => {
                SetConfirmPassword(e.target.value);
              }}
              placeholder="confirm password"
            />
          </label>
          {passMessage.msg && <p style={{color:passMessage.color}}>*{passMessage.msg}</p>}
            <SecondaryButton text="Change Password" />
        </form>
      </div>
      <h1 className="-mb-12">Delete Account</h1>
      <div className="p-4 bg-gray-900/50 border rounded-md border-white/30 w-[60%] max-md:w-full">
        <p className="mb-4 text-gray-200">
          Deleting your account is <strong>permanent</strong> and cannot be
          undone. All your data, including your events, favorites, and profile
          information, will be permanently removed from our system.
        </p>

        <button
          onClick={deleteAccount}
          className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
export default ChangeInfos;
"use client";

import SecondaryButton from "@/src/UI/SecondaryButton";
import { Mail, UserRound } from "lucide-react";
import { color, motion } from "motion/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  userId: string;
}

const Contact = () => {
  const { data: session } = useSession();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    userId: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ message: "", color: "" });
  // Set userId when session loads
  useEffect(() => {
    if (session?.user?.id) {
      setForm((prev) => ({ ...prev, userId: session.user.id }));
    }
  }, [session]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.userId) {
      setMessage({
        message: "You must be logged in to send a message!!",
        color: "red",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Something went wrong");
      } else {
        setMessage({
          message: "Message sent successfully, wait soon for our reply !! ",
          color: "green",
        });
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          userId: session?.user?.id || "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative flex flex-col gap-16 justify-center items-center py-16 px-20 max-sm:px-6"
    >
      <div className="absolute bg-violet-500 w-[30rem] h-[20rem] top-0 right-[0%] rounded-full blur-[200px] -z-10" />
      <div className="overflow-hidden flex items-center gap-2 text-lg">
        <div className="w-0.5 h-5 bg-white/80" />
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Contact
        </motion.span>
      </div>

      <div className="flex max-sm:flex-col gap-32 max-sm:gap-16 w-full justify-center">
        <div className="flex flex-col w-full gap-6">
          <h1 className="text-4xl font-semibold">Let&apos;s Get In Touch.</h1>
          <p>
            Or just reach out manually to{" "}
            <a
              href="mailto:hello@innovex.com"
              className="text-blue-500 underline"
            >
              hello@innovex.com
            </a>
          </p>
          <p style={{ color: message.color }}>{message.message}</p>
        </div>

        <div className="flex w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            {/* Name */}
            <p className="-mb-2 text-sm">Full name</p>
            <label className="flex items-center gap-2 p-2 backdrop-blur-3xl bg-gray-900/50 border border-white/20 rounded-md w-full">
              <UserRound />
              <input
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="outline-none w-full"
                required
              />
            </label>

            {/* Email */}
            <p className="-mb-2 text-sm">Email address</p>
            <label className="flex items-center gap-2 p-2 backdrop-blur-3xl bg-gray-900/50 border border-white/20 rounded-md w-full">
              <Mail />
              <input
                type="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="outline-none w-full"
                required
              />
            </label>

            {/* Phone */}
            <p className="-mb-2 text-sm">Phone number</p>
            <PhoneInput
              country="us"
              value={form.phone}
              onChange={(value) => setForm({ ...form, phone: value })}
              enableSearch
              inputClass="!w-full !rounded-md !py-5 !backdrop-blur-3xl !bg-gray-900/50 !border !border-white/20"
              dropdownClass="!text-black !rounded-md"
              buttonClass="!bg-gray-800/50 !border-white/20 !rounded-l-md"
            />

            {/* Message */}
            <p className="-mb-2 text-sm">Message</p>
            <textarea
              placeholder="Enter your message here"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-md bg-gray-900/50 border backdrop-blur-3xl border-white/20 outline-none p-2 w-full"
              cols={50}
              rows={4}
              required
            />

            {/* Agreement */}
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" className="peer sr-only" required />
              <div className="w-4 h-4 rounded border border-gray-400 peer-checked:bg-blue-500 peer-checked:border-blue-500 flex items-center justify-center transition-all">
                <svg
                  className="w-3 h-3 text-gray-950 transition-all"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="my-2">
                I hereby agree to our{" "}
                <a
                  href="/main/Policy/Privacy"
                  className="text-blue-500 underline"
                >
                  Privacy Policy
                </a>{" "}
                terms.
              </p>
            </label>

            <SecondaryButton text={loading ? "Sending..." : "Send Message"} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

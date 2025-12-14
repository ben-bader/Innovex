"use client";

import { motion } from "framer-motion";

const  Privacy:React.FC = ()  => {
  const updatedAt = "December 7, 2025";

  return (
    <section
      id="privacy"
      className="flex flex-col items-center justify-center px-20 py-20 max-sm:px-6"
    >
      <div className="absolute pointer-events-none w-[500px] h-[700px] hero-gradient rounded-tl-[300px] -left-[500px] top-0 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full max-w-5xl"
      >
        {/* header */}
        <div className="text-start -mt-12 mb-8">
          <span className="text-sm py-1 bg-pink-500 rounded-full px-3 text-white inline-block mb-3">
            Privacy Policy
          </span>

          <h1 className="lg:text-6xl text-4xl mb-4">
            {" "}
            <span className="font-squid text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-blue-500">
              Privacy
            </span>{" "}
            Policy
          </h1>
          <p className="text-gray-300 max-w-2xl">
            This Privacy Policy explains how Innovex (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) collects, uses, discloses, and
            protects your personal information when you use our website and
            services. Last updated: {updatedAt}.
          </p>
        </div>

        {/* content */}
        <article className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 text-gray-200 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p className="text-sm">
              We collect information you provide directly (such as
              account/profile information, messages, and support requests) and
              information collected automatically (such as device data and
              analytics). When you contact us (for example via the contact
              form), we collect the data you submit (name, email, phone,
              message).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. How We Use Information
            </h2>
            <p className="text-sm">
              We use collected information to provide and improve our services,
              communicate with you, respond to requests, and comply with legal
              obligations. We may use contact information to send transactional
              or administrative messages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. Sharing & Disclosure
            </h2>
            <p className="text-sm">
              We do not sell your personal data. We may share information with
              service providers who support our operations (hosting, analytics),
              and when required by law or to protect rights and safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Security</h2>
            <p className="text-sm">
              We implement reasonable technical and organizational measures to
              protect your information. However, no system is 100% secure—please
              exercise caution when sharing sensitive information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Your Choices</h2>
            <p className="text-sm">
              You can access, update, or delete your account information by
              contacting us. You may opt out of marketing communications by
              following the unsubscribe instructions included in those messages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Contact</h2>
            <p className="text-sm">
              For privacy inquiries, email us at{" "}
              <a
                className="text-blue-400 underline"
                href="mailto:innovexexplorer@gmail.com"
              >
               innovexexplorer@gmail.com
              </a>
              .
            </p>
          </section>

          <div className="pt-4 border-t border-white/5 text-sm text-gray-400">
            <p>
              Innovex — Building great experiences. This policy may be updated
              from time to time; we will post changes on this page.
            </p>
          </div>
        </article>
      </motion.div>
    </section>
  );
}
export default Privacy;
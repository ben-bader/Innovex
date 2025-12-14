"use client";

import { motion } from "framer-motion";

const TermsPage:React.FC = () => {
  const updatedAt = "December 7, 2025";
  return (
    <section
      id="terms"
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
            Terms & Conditions
          </span>

          <h1 className="lg:text-6xl text-4xl font-semibold mb-4">
            <span className="font-squid text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-blue-500">
              Terms
            </span>{" "}
            & Conditions
          </h1>
          <p className="text-gray-300 max-w-2xl">
            These Terms govern your use of Innovex&apos;s website and services.
            By accessing or using our services, you accept these Terms. Last
            updated: {updatedAt}.
          </p>
        </div>

        {/* content */}
        <article className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 text-gray-200 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Use of Service</h2>
            <p className="text-sm">
              You agree to use the service only for lawful purposes. You must
              not misuse the services or interfere with them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. Account Responsibility
            </h2>
            <p className="text-sm">
              You are responsible for keeping your account credentials secure
              and for all activity that occurs under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. Intellectual Property
            </h2>
            <p className="text-sm">
              All content on the site, including design, text, logos, and
              images, is owned by Innovex or its licensors. You may not
              reproduce or distribute content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Termination</h2>
            <p className="text-sm">
              We reserve the right to suspend or terminate accounts that violate
              these Terms or applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              5. Disclaimers & Limitation
            </h2>
            <p className="text-sm">
              Services are provided &quot;as is.&quot; Innovex is not liable for
              indirect damages. Our total liability is limited to the fees paid
              by you in the last 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Governing Law</h2>
            <p className="text-sm">
              These Terms are governed by the laws of the jurisdiction in which
              Innovex is located. Disputes will be resolved in local courts
              unless otherwise agreed.
            </p>
          </section>

          <div className="pt-4 border-t border-white/5 text-sm text-gray-400">
            <p>
              If you have questions about these Terms, contact{" "}
              <a
                className="text-blue-400 underline"
                href="mailto:innovexexplorer@gmail.com"
              >
               innovexexplorer@gmail.com
              </a>
              .
            </p>
          </div>
        </article>
      </motion.div>
    </section>
  );
}
export default TermsPage;
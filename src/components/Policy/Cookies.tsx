"use client";

import { motion } from "framer-motion";
import React from "react";
const CookiesPolicyPage:React.FC =() => {
  const updatedAt = "December 7, 2025";

  return (
    <section
      id="cookies"
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
          <span className="text-sm py-1 bg-blue-500 rounded-full px-3 text-white inline-block mb-3">
            Cookies Policy
          </span>

          <h1 className="lg:text-6xl text-4xl font-semibold mb-4">
            <span className="font-squid text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-blue-500">
              Cookies
            </span>{" "}
            Policy
          </h1>
          <p className="text-gray-300 max-w-2xl">
            This Cookies Policy explains how Innovex uses cookies and similar
            tracking technologies. By using our website, you agree to our use of
            cookies. Last updated: {updatedAt}.
          </p>
        </div>

        {/* content */}
        <article className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 text-gray-200 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. What Are Cookies?
            </h2>
            <p className="text-sm">
              Cookies are small text files stored on your device to enhance your
              browsing experience, remember preferences, and help us analyze how
              users interact with our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. How We Use Cookies
            </h2>
            <p className="text-sm mb-3">
              Innovex uses cookies for several purposes, including:
            </p>

            <ul className="list-disc ml-6 text-sm space-y-2">
              <li>Ensuring the website functions properly.</li>
              <li>Remembering your settings and preferences.</li>
              <li>Improving performance and user experience.</li>
              <li>Analyzing traffic and usage patterns.</li>
              <li>Providing optional personalized content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. Types of Cookies We Use
            </h2>
            <ul className="list-disc ml-6 text-sm space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to
                operate.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us measure and
                understand usage.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember preferences such
                as language.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used only if you consent to
                personalized ads.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              4. Third-Party Cookies
            </h2>
            <p className="text-sm">
              Some third parties (such as analytics services or embedded content
              providers) may place cookies on your device. These third parties
              are responsible for their own cookies and may have their own
              privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Managing Cookies</h2>
            <p className="text-sm">
              You can disable or delete cookies through your browser settings at
              any time. However, disabling essential cookies may affect
              functionality or performance of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              6. Updates to This Policy
            </h2>
            <p className="text-sm">
              We may update this Cookies Policy when needed. Any updates will be
              posted on this page with the revised date.
            </p>
          </section>

          <div className="pt-4 border-t border-white/5 text-sm text-gray-400">
            <p>
              If you have questions about this Cookies Policy, contact{" "}
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
export default CookiesPolicyPage;
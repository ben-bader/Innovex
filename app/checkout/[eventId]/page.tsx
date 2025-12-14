"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import SecondaryButton from "@/src/UI/SecondaryButton";
import Input from "@/src/UI/Input";
import { Event, useEvents } from "@/src/hooks/useEvents";
import Loader from "@/src/UI/Loader";

export default function CheckoutForm() {
  const router = useRouter();
  const { events, loading } = useEvents();
  const params = useParams();
  const eventId = Number(params.eventId);

  const [form, setForm] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const event = events.find((e: Event) => e.id === eventId);
  const price = event?.price ?? null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (price === null) {
      setError("Event not found or price is unavailable.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId, price }),
      });

      if (!res.ok) {
        const text = await res.text();
        setError(`Payment failed: ${text}`);
        setSubmitting(false);
        return;
      }

      router.push("/main/profile");
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setSubmitting(false);
    }
  }

  if (loading) return <Loader />;
  if (price === null) return <p className="text-center mt-10 text-red-500">Event not found</p>;

  return (
    <div className="relative min-h-screen flex items-center justify-center px-20 max-md:px-6">
      <div className="absolute pointer-events-none w-125 h-175 hero-gradient rounded-tl-[300px] -left-[500px] top-0 -z-10" />
      <div className="absolute bottom-0 right-24 bg-gradient-to-l from-teal-600 to-blue-600 blur-[90px] rounded-full w-[20rem] h-[20rem] -z-10" />

      <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Checkout</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input name="cardName" placeholder="Cardholder Name" onChange={handleChange} required />
          <Input name="cardNumber" placeholder="Card Number" maxLength={19} onChange={handleChange} required />

          <div className="flex gap-4">
            <Input name="expiry" placeholder="MM/YY" maxLength={5} onChange={handleChange} required />
            <Input name="cvc" placeholder="CVC" maxLength={3} onChange={handleChange} required />
          </div>

          <p className="text-lg text-center font-semibold">Price: ${(price / 100).toFixed(2)}</p>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <SecondaryButton text={submitting ? "Processing..." : "Confirm Payment"} disabled={submitting} />

          <p className="text-xs text-gray-400 text-center mt-2">
            just a fake checkout  no real payment is processed
          </p>
        </form>
      </div>
    </div>
  );
}

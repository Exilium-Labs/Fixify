import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import WhyFixify from "./components/WhyFixify";
import Footer from "./components/Footer";
import { Suspense } from "react";

const DynamicLiveDashboard = dynamic(
  () => import("./components/LiveDashboard"),
  {
    loading: () => <p className="text-center text-gray-400">Fixify is preparing your live insights...</p>,
    ssr: false,
  }
);

const DynamicJoinRevolution = dynamic(
  () => import("./components/JoinRevolution"),
  {
    loading: () => <p className="text-center text-gray-400">Fixify is powering up engagement tools...</p>,
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="bg-gray-900 text-white overflow-x-hidden" aria-label="FIXIFY Main Content">
      <Hero />
      <div className="border-t border-gray-800" />
      <section id="how-it-works" aria-label="How Fixify Works">
        <HowItWorks />
      </section>
      <div className="border-t border-gray-800" />
      <section id="features" aria-label="Fixify Features">
        <Features />
      </section>
      <div className="border-t border-gray-800" />
      <section id="use-cases" aria-label="Fixify Use Cases">
        <UseCases />
      </section>
      <div className="border-t border-gray-800" />
      <section id="why-fixify" aria-label="Why Choose Fixify">
        <WhyFixify />
      </section>
      <div className="border-t border-gray-800" />
      <Suspense fallback={<p className="text-center text-gray-400">Fixify is preparing your live insights...</p>}>
        <section id="live-dashboard" aria-label="Live Analytics Dashboard">
          <DynamicLiveDashboard />
        </section>
      </Suspense>
      <div className="border-t border-gray-800" />
      <Suspense fallback={<p className="text-center text-gray-400">Fixify is powering up engagement tools...</p>}>
        <section id="join" aria-label="Join the Fixify Movement">
          <DynamicJoinRevolution />
        </section>
      </Suspense>
      <Footer />
    </main>
  );
}

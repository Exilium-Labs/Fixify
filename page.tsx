import dynamic from "next/dynamic";
import { Suspense } from "react";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import WhyFixify from "./components/WhyFixify";
import Footer from "./components/Footer";

const Hero = dynamic(() => import("./components/Hero"), {
  loading: () => <div className="text-center py-10 text-gray-400">Loading Hero...</div>,
  ssr: false,
});
const DynamicLiveDashboard = dynamic(() => import("./components/LiveDashboard"), {
  loading: () => <p className="text-center text-gray-400">Fixify is preparing your live insights...</p>,
  ssr: false,
});
const DynamicJoinRevolution = dynamic(() => import("./components/JoinRevolution"), {
  loading: () => <p className="text-center text-gray-400">Fixify is powering up engagement tools...</p>,
  ssr: false,
});

import Head from "next/head";
// inside component before <main>:
<Head>
  <title>Fixify — AI-Powered Solana Yield Insights</title>
  <meta name="description" content="Fixify helps you unlock data-driven DeFi insights on Solana with real-time dashboards and predictive tools." />
</Head>


// ... top of file
export default function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-gray-900 text-white overflow-x-hidden relative" aria-label="FIXIFY Main Content">
      <div className="absolute inset-0 z-0 opacity-10 animate-pulse bg-gradient-to-br from-fuchsia-500 via-indigo-600 to-blue-500 blur-3xl" />
      <div className="relative z-10">
        <Suspense fallback={<div className="text-center py-10 text-gray-400">Loading Hero...</div>}>
          <Hero />
        </Suspense>
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
      </div>
    </main>
  );
}


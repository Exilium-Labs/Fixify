import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import WhyFixify from "./components/WhyFixify"; // Renamed from WhyVIGLO
import Footer from "./components/Footer";
import { Suspense } from "react";

/**
 * Dynamically imported components with loading fallback
 */
const DynamicLiveDashboard = dynamic(
  () => import("./components/LiveDashboard"),
  {
    loading: () => <p className="text-center text-gray-400">Loading Live Dashboard...</p>,
    ssr: false,
  }
);

const DynamicJoinRevolution = dynamic(
  () => import("./components/JoinRevolution"),
  {
    loading: () => <p className="text-center text-gray-400">Loading Join Revolution...</p>,
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="bg-gray-900 text-white overflow-x-hidden">
      <Hero />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="use-cases">
        <UseCases />
      </section>
      <section id="why-fixify">
        <WhyFixify />
      </section>
      <Suspense fallback={<p className="text-center text-gray-400">Loading Dashboard...</p>}>
        <section id="live-dashboard">
          <DynamicLiveDashboard />
        </section>
      </Suspense>
      <Suspense fallback={<p className="text-center text-gray-400">Loading Join Revolution...</p>}>
        <section id="join">
          <DynamicJoinRevolution />
        </section>
      </Suspense>
      <Footer />
    </main>
  );
}

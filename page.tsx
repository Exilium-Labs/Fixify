import dynamic from "next/dynamic"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Features from "./components/Features"
import UseCases from "./components/UseCases"
import WhyVIGLO from "./components/WhyVIGLO"
import Footer from "./components/Footer"

const DynamicLiveDashboard = dynamic(() => import("./components/LiveDashboard"), {
  loading: () => <p>Loading...</p>,
})

const DynamicJoinRevolution = dynamic(() => import("./components/JoinRevolution"), {
  loading: () => <p>Loading...</p>,
})

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
      <section id="why-viglo">
        <WhyVIGLO />
      </section>
      <section id="live-dashboard">
        <DynamicLiveDashboard />
      </section>
      <section id="join">
        <DynamicJoinRevolution />
      </section>
      <Footer />
    </main>
  )
}


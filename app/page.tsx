import { Suspense } from "react"
import dynamic from "next/dynamic"
import Header from "../components/Header"
import Footer from "../components/Footer"

const DynamicHero = dynamic(() => import("../components/Hero"), { ssr: false })
const DynamicDashboard = dynamic(() => import("../components/Dashboard"), { ssr: false })
const DynamicWhyApexify = dynamic(() => import("../components/WhyApexify"), { ssr: false })
const DynamicHowItWorks = dynamic(() => import("../components/HowItWorks"), { ssr: false })
const DynamicSmartDeFiEngine = dynamic(() => import("../components/SmartDeFiEngine"), { ssr: false })
const DynamicIntegrations = dynamic(() => import("../components/Integrations"), { ssr: false })
const DynamicFAQs = dynamic(() => import("../components/FAQs"), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicHero />
      </Suspense>
      <DynamicDashboard />
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicWhyApexify />
        <DynamicHowItWorks />
        <DynamicSmartDeFiEngine />
        <DynamicIntegrations />
        <DynamicFAQs />
      </Suspense>
      <Footer />
    </main>
  )
}


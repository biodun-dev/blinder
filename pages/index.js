import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import InsightsAndTrends from "../components/ui/Insights";
import YouTubeEmbed from "../components/ui/YouTubeEmbed";
import ClientSolutions from "../components/ui/ClientSolutions"


export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      <LogoGrid />
      <Features />
      {/* <YouTubeEmbed/> */}
    
      <GradientWrapper>
     
        <CTA />
      </GradientWrapper>
     < ClientSolutions/>
      <InsightsAndTrends />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper> 
      <FooterCTA />
    </>
  );
}

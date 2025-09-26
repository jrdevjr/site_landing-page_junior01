
import { CallToAction, CustomerStorySection, FeatureSection, HeroSection } from "@/templates/landing-page/sections";
import { SupportSection } from "@/templates/landing-page/sections/support-section/support-section";

export const LandingPage = () => {
    return (
  
     <article className=" flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
     </article>
   
  
    );
};
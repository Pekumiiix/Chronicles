import Discover from "./sections/discover";
import FaqSection from "./sections/faq";
import Hero from "./sections/hero";
import HowItWorks from "./sections/how-it-works";
import JoinUs from "./sections/join-us";
import StoriesSection from "./sections/stories";

export default function LandingPage() {
  return (
    <>
      <Hero />

      <Discover />

      <StoriesSection />

      <HowItWorks />

      <FaqSection />

      <JoinUs />
    </>
  );
}

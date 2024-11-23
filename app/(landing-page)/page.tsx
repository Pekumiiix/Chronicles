import Discover from "./sections/discover";
import FaqSection from "./sections/faq";
import HowItWorks from "./sections/how-it-works";
import JoinUs from "./sections/join-us";
import StoriesSection from "./sections/stories";

export default function LandingPage() {
  return (
    <>
      <Discover />

      <StoriesSection />

      <HowItWorks />

      <FaqSection />

      <JoinUs />
    </>
  );
}

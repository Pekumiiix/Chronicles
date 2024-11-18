import FaqSection from "./sections/faq";
import HowItWorks from "./sections/how-it-works";
import JoinUs from "./sections/join-us";

export default function LandingPage() {
  return (
    <>
      <HowItWorks />

      <FaqSection />

      <JoinUs />
    </>
  );
}

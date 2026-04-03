import { MountainIntro } from "@/features/MountainIntro/ui/MountainIntro";
import { PopularDestinations } from "@/features/PopularDestinations/ui/PopularDestinations";
import { Footer } from "@/features/Footer/ui/Footer";

export const LandingPage = () => {
  return (
    <>
      <MountainIntro />
      <PopularDestinations />
      <Footer />
    </>
  );
};
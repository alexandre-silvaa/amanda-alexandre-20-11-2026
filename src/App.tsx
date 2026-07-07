import { useEffect } from "react";
import { Toaster } from "sonner";
import { EventSection } from "./components/sections/EventSection";
import { GiftsSection } from "./components/sections/GiftsSection";
import { HeroSection } from "./components/sections/HeroSection";
import { StorySection } from "./components/sections/StorySection";
import { inviteData } from "./data/weeding-data";
import { tw } from "./styles/tw";
import { initializeMercadoPago } from "./utils/mercadoPago";

function App() {
  useEffect(() => {
    void initializeMercadoPago();
  }, []);

  return (
    <div className={tw.app}>
      <Toaster />

      <HeroSection data={inviteData} />
      <StorySection data={inviteData} />
      <EventSection data={inviteData} />
      <GiftsSection />
      {/* <RsvpSection data={inviteData} /> */}
      {/* <GallerySection /> */}
      {/* <FooterSection data={inviteData} /> */}
    </div>
  );
}

export default App;

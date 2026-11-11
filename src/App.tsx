import { Toaster } from "sonner";
import { EventSection } from "./components/sections/EventSection";
import { GiftsSection } from "./components/sections/GiftsSection";
import { RsvpSection } from "./components/sections/RsvpSection";
import { HeroSection } from "./components/sections/HeroSection";
import { StorySection } from "./components/sections/StorySection";
import { inviteData } from "./data/weeding-data";
import { tw } from "./styles/tw";
import { FooterSection } from "./components/sections/FooterSection";
import { GallerySection } from "./components/sections/GallerySection";

function App() {

  return (
    <div className={tw.app}>
      <Toaster />

      <HeroSection data={inviteData} />
      <StorySection data={inviteData} />
      <EventSection data={inviteData} />
      <GiftsSection />
      <RsvpSection />
      <GallerySection />
      <FooterSection data={inviteData} />
    </div>
  );
}

export default App;

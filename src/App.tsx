import { HeroSection } from './components/sections/HeroSection'
import { inviteData } from './data/weeding-data'
import { tw } from './styles/tw'

function App() {
  return (
    <div className={tw.app}>
      <HeroSection data={inviteData} />
      {/* <StorySection data={inviteData} />
      <GamesSection data={inviteData} />
      <EventSection data={inviteData} />
      <GiftsSection data={inviteData} />
      <RsvpSection data={inviteData} />
      <GallerySection />
      <FooterSection data={inviteData} /> */}
    </div>
  )
}

export default App

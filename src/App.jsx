import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HotItemsSection from './components/HotItemsSection'
import SearchSection from './components/SearchSection'
import RegisterSection from './components/RegisterSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HotItemsSection />
        <SearchSection />
        <RegisterSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default App

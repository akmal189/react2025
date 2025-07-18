import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CompanyInfo from './features/company/CompanyInfo'
import AboutSection from './features/about/AboutSection';
import ServicesSection from './features/services/ServicesSection';
import ContactSection from './features/contact/ContactSection';

export default function App() {
  return (
    <div>
        <div className="site-wrapper">
          <Header />
            <main className="p-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold">Main Content</h2>
                    <p>This is where your main content goes.</p>
                    <CompanyInfo />
                    <AboutSection />
                    <ServicesSection />
                    <ContactSection />
                </div>
            </main>
          <Footer />
        </div>
    </div>
  )
}
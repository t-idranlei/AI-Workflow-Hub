import LandingHeader from "./app/landing-page/header";
import LandingHero from "./app/landing-page/hero";
import LandingFeatures from "./app/landing-page/features";
import LandingHowItWorks from "./app/landing-page/howItWorks";
import { ThemeProvider } from "./app/landing-page/theme-provider";
import LandingFooter from "./app/landing-page/footer";
import CatalogPage from "./app/catalog/tools/catalog";
import CatalogHeader from "./app/catalog/tools/header";
import CatalogFooter from "./app/catalog/tools/footer";
import GuidelinePage from "./app/catalog/guidelines/guidelines"
import GuidelineHeader from "./app/catalog/guidelines/header";
import CommunityPage from "./app/catalog/community/community"
import CommunityHeader from "./app/catalog/community/header"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="fixed inset-0 h-full w-screen flex flex-col bg-white dark:bg-gray-950 overflow-y-auto">
          <Routes>
            <Route path="/" element={<LandingHeader />} />
            <Route path="/catalog" element={<CatalogHeader />} />
            <Route path="/guidelines" element={<GuidelineHeader />} />
            <Route path="/community" element={<CommunityHeader />} />
          </Routes>

          <main className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <LandingHero />
                    <LandingFeatures />
                    <LandingHowItWorks />
                  </>
                }
              />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/guidelines" element={<GuidelinePage />} />
              <Route path="/community" element={<CommunityPage />} />
            </Routes>
          </main>
          <Routes>
            <Route path="/" element={<LandingFooter />} />
            <Route path="/catalog" element={<CatalogFooter />} />
            <Route path="/guidelines" element={<CatalogFooter />} />
            <Route path="/community" element={<CatalogFooter />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

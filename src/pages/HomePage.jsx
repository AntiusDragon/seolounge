import { BusinessGrowth } from "../sections/BusinessGrowth";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { HowCanWeHelp } from "../sections/HowCanWeHelp";
import { Services } from "../sections/Services";

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services limit={3} />
                <BusinessGrowth />
                <HowCanWeHelp />
            </main>
            <Footer />
        </>
    )
}
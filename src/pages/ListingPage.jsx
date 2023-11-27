import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { Listing } from "../sections/Listing";

export function ListingPage() {
  return (
    <>
        <Header />
        <main>
            <Listing />
        </main>
        <Footer />
    </>
  );
}

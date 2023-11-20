import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Services } from "./components/Services";


function App() {
  return (
    <div>
      <Header />
      <main>
        <Services />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./pages/Login";

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Login />
    </div>
  );
}


import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Navbar from "./Components/Navbar";
import About from "./Pages/about/About.jsx"
import Contact from "./Pages/contact/Contact.jsx"
import Gallery from "./Pages/gallery/Gallery.jsx"
import Home from "./Pages/home/Home.jsx"
import Notefound from "./Pages/notFound/Notefound.jsx"
import Plans from "./Pages/plans/Plans.jsx"
import Trainers from "./Pages/trainers/Trainers.jsx"
import {ChakraProvider} from '@chakra-ui/react'
import BackToTop from "./Components/BacktoTop";
import Footer from "./Components/Footer.jsx";


function App () {
  return (
<>   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<Notefound />} />

      </Routes>
      <BackToTop />

    </BrowserRouter>
      <Footer /> 

    </>
  );
}

export default App;

import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import image1 from "./images/img1.png";
import image2 from "./images/img2.png";
import image3 from "./images/img3.png";
import image4 from "./images/img4.png";
import Article from "./Article";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="contacts">
        <Card img={image1} name="Giorgi Shermadini" height="2.17" />
        <Card img={image2} name="Tornike Shengelia" height="2.06" />
        <Card img={image3} name="Rati AndronikaSvili" height="1.93" />
        <Card img={image4} name="Goga Bitadze" height="2.13" />
      </div>
      <Article />
      <Footer />
    </div>
  );
}

export default App;

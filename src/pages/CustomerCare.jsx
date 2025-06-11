import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CustomerCare = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Customer care Page</h2>
        <p>Welcome to the Customer care page! This is where your main content goes.</p>
      </main>
      <Footer />
    </>
  );
};

export default CustomerCare;

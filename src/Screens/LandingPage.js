// App.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/sideBar'; 
import Services from '../components/Services';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 lg:px-8">
        <Hero />
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar className="md:w-1/4 lg:w-1/5" /> 
          <ProductGrid className="md:w-3/4 lg:w-4/5" /> 
        </div>
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

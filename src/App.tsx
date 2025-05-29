import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { HomePage } from './pages/home';
import { TestimonialsPage } from './pages/testimonials';
import { InfoPage } from './pages/info';
import { ContactPage } from './pages/contact';
import { WarrantyPage } from './pages/warranty';
import { ProductsPage } from './pages/products';
import { ChatSupport } from './components/chat-support';
import { LoadingScreen } from './components/loading-screen'; 

const App: React.FC = () => {
  // Initialize loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  // Show loading screen while isLoading is true
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen">
      <div className="animated-bg"></div>
      <div className="grid-lines"></div>
      <div className="blur-circle blur-circle-1"></div>
      <div className="blur-circle blur-circle-2"></div>
      <div className="torus top-20 right-10 opacity-30"></div>
      <div className="torus bottom-20 left-10 opacity-20"></div>

      <Navbar />

      <motion.main
        className="container mx-auto px-4 py-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/testimonials" component={TestimonialsPage} />
          <Route path="/info" component={InfoPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/warranty" component={WarrantyPage} />
        </Switch>
      </motion.main>

      <ChatSupport />

      <Footer />
    </div>
  );
};

export default App;

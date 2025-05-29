import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { HomePage } from './pages/home';
import { TestimonialsPage } from './pages/testimonials';
import { InfoPage } from './pages/info';
import { ContactPage } from './pages/contact';
import { WarrantyPage } from './pages/warranty';
import { ProductsPage } from './pages/products'; // Added import for ProductsPage
import { ChatSupport } from './components/chat-support'; // Added import for ChatSupport

const App: React.FC = () => {
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
          <Route path="/products" component={ProductsPage} /> {/* Added route for Products page */}
          <Route path="/testimonials" component={TestimonialsPage} />
          <Route path="/info" component={InfoPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/warranty" component={WarrantyPage} />
        </Switch>
      </motion.main>
      
      <ChatSupport /> {/* Added chat support component */}
      
      <Footer />
    </div>
  );
};

export default App;
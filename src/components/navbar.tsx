import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  
  const menuItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Produk', path: '/products' }, // Added Products menu item
    { name: 'Testimoni', path: '/testimonials' },
    { name: 'Informasi', path: '/info' },
    { name: 'Kontak', path: '/contact' },
    { name: 'Info', path: '/warranty' },
  ];

  return (
    <HeroNavbar 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
      className="bg-content1/50 backdrop-blur-md border-b border-white/10"
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-primary rounded-full opacity-20 animate-pulse"></div>
              <Icon icon="lucide:cloud" className="w-8 h-8 text-primary" />
            </div>
            <p className="font-bold text-inherit text-xl">Warung Virtual</p>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={location.pathname === item.path}>
            <Link 
              to={item.path}
              className={`text-sm ${location.pathname === item.path ? 'text-primary font-medium' : 'text-foreground/80'} transition-colors hover:text-primary`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={Link} 
            to="/products"
            color="primary" 
            variant="flat" 
            startContent={<Icon icon="lucide:shopping-cart" />}
            className="font-medium"
          >
            Order Now
          </Button>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu className="bg-content1/95 backdrop-blur-md pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link 
              to={item.path}
              className={`w-full ${location.pathname === item.path ? 'text-primary font-medium' : 'text-foreground/80'} transition-colors hover:text-primary`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
};
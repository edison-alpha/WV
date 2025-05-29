import React from 'react';
import { motion } from 'framer-motion';
import { Divider, Input, Select, SelectItem, Chip, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { ProductCard } from '../components/product-card';

// Product data (same as in HomePage)
const products = [
  {
    id: "digital-ocean-free",
    name: "Digital Ocean Free Tier",
    logo: "/src/img/digitalocean.svg",
    description: "Basic cloud VPS with Digital Ocean infrastructure",
    price: 50000,
    stock: 15,
    features: [
      "1 GB RAM",
      "1 vCPU",
      "25 GB SSD",
      "1 TB Transfer",
      "Free Setup"
    ],
    duration: "1 Month",
    category: "free-tier"
  },
  {
    id: "digital-ocean-basic",
    name: "Digital Ocean Basic VPS",
    logo: "/src/img/digitalocean.svg",
    description: "Affordable entry-level VPS on Digital Ocean",
    price: 90000,
    stock: 10,
    features: [
      "2 GB RAM",
      "1 vCPU",
      "50 GB SSD",
      "2 TB Transfer",
      "Easy Scaling"
    ],
    duration: "1 Month",
    category: "premium"
  },
  {
    id: "digital-ocean-premium",
    name: "Digital Ocean Premium VPS",
    logo: "/src/img/digitalocean.svg",
    description: "High performance VPS with premium features on Digital Ocean",
    price: 180000,
    stock: 5,
    features: [
      "4 GB RAM",
      "2 vCPU",
      "80 GB SSD",
      "4 TB Transfer",
      "Premium Support"
    ],
    duration: "1 Month",
    category: "premium"
  },
  {
    id: "digital-ocean-limit-10",
    name: "DigitalOcean Limit 10 PayPal",
    logo: "/src/img/digitalocean.svg",
    description: "Premium Digital Ocean VPS with increased limits",
    price: 150000,
    stock: 3,
    features: [
      "2 GB RAM",
      "2 vCPU",
      "50 GB SSD",
      "2 TB Transfer",
      "10 Droplet Limit",
      "PayPal Payment Method"
    ],
    duration: "2 Months",
    category: "premium"
  },
  // ...produk lain tetap sama
  {
    id: "aws-free", 
    name: "AWS Free Tier",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description: "Amazon Web Services free tier VPS",
    price: 75000,
    stock: 8,
    features: [
      "1 GB RAM",
      "1 vCPU",
      "30 GB SSD",
      "15 GB Transfer/month",
      "Free Setup"
    ],
    duration: "1 Month",
    category: "free-tier"
  },
  {
    id: "google-cloud-free",
    name: "Google Cloud Free Tier", 
    logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    description: "Google Cloud Platform free tier VPS",
    price: 80000,
    stock: 12,
    features: [
      "0.6 GB RAM",
      "1 vCPU",
      "30 GB SSD",
      "1 GB Transfer/day",
      "Free Setup"
    ],
    duration: "1 Month",
    category: "free-tier"
  },
  {
    id: "azure-free",
    name: "Azure Free Tier",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    description: "Microsoft Azure free tier VPS",
    price: 70000,
    stock: 10,
    features: [
      "1 GB RAM",
      "1 vCPU",
      "25 GB SSD",
      "1 TB Transfer",
      "Free Setup"
    ],
    duration: "1 Month",
    category: "free-tier"
  },
  {
    id: "linode-free",
    name: "Linode Free Tier",
    logo: "https://www.vectorlogo.zone/logos/linode/linode-icon.svg",
    description: "Linode free tier VPS",
    price: 65000,
    stock: 10,
    features: [
      "1 GB RAM",
      "1 vCPU",
      "20 GB SSD",
      "1 TB Transfer",
      "Free Setup"
    ],
    duration: "1 Month",
    category: "free-tier"
  },
  {
    id: "ai-voe-free",
    name: "gemini VEO 9 mounths free tier",
    logo: "/src/img/google-gemini-icon.svg",
    description: "AI-optimized Video with 9 months validity",
    price: 120000,
    stock: 5,
    features: [
      "2 GB RAM",
      "2 vCPU",
      "40 GB SSD",
      "Unlimited Transfer",
      "AI Acceleration"
    ],
    duration: "9 Months",
    category: "ai-optimized"
  },
  {
    id: "alibaba-ft-3month",
    name: "Alibaba FT VPS",
    logo: "/src/img/alibaba-color.svg",
    description: "Alibaba Cloud free tier VPS with extended period",
    price: 90000,
    stock: 10,
    features: [
      "1 GB RAM",
      "1 vCPU",
      "40 GB SSD",
      "1 TB Transfer",
      "Free Setup"
    ],
    duration: "3 Months",
    category: "free-tier"
  },
  {
    id: "aws-premium",
    name: "AWS Premium VPS",
    description: "High-performance AWS VPS for demanding applications",
    price: 200000,
    stock: 0,
    features: [
      "4 GB RAM",
      "2 vCPU",
      "80 GB SSD",
      "3 TB Transfer",
      "Premium Support"
    ],
    isPreOrder: false,
    duration: "1 Month",
    category: "premium"
  },
  {
    id: "google-cloud-premium",
    name: "Google Cloud Premium",
    description: "Enhanced Google Cloud VPS with premium features",
    price: 180000,
    stock: 0,
    features: [
      "4 GB RAM",
      "2 vCPU",
      "60 GB SSD",
      "2 TB Transfer",
      "Premium Support"
    ],
    isPreOrder: false,
    duration: "1 Month",
    category: "premium"
  },
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "free-tier", label: "Free Tier" },
  { value: "premium", label: "Premium (Coming soon)" },
  { value: "ai-optimized", label: "AI Optimized (Coming soon)" },
];

const sortOptions = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
  { value: "stock-desc", label: "Availability" }
];

export const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("price-asc");
  const [filteredProducts, setFilteredProducts] = React.useState(products);
  
  // Apply filters and sorting
  React.useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (selectedCategory !== "all") {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "stock-desc":
        result.sort((a, b) => {
          // Sort by availability (in stock first, then pre-order)
          if (a.stock > 0 && b.stock === 0) return -1;
          if (a.stock === 0 && b.stock > 0) return 1;
          return b.stock - a.stock;
        });
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="space-y-10">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Produk Kami</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Jelajahi berbagai layanan cloud VPS/RDP dan server dedicated kami yang dirancang untuk memenuhi kebutuhan spesifik Anda.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-content2/50 backdrop-blur-sm p-4 rounded-xl border border-white/10"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onValueChange={setSearchQuery}
            startContent={<Icon icon="lucide:search" className="text-foreground/50" />}
            className="md:w-1/3"
            variant="bordered"
            size="sm"
          />
          
          <div className="flex flex-1 gap-4">
            <Select
              label="Category"
              placeholder="Select category"
              selectedKeys={[selectedCategory]}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex-1"
              size="sm"
              variant="bordered"
            >
              {categories.map((category) => (
                <SelectItem key={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </Select>
            
            <Select
              label="Sort by"
              placeholder="Sort by"
              selectedKeys={[sortBy]}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1"
              size="sm"
              variant="bordered"
            >
              {sortOptions.map((option) => (
                <SelectItem key={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        
        {(searchQuery || selectedCategory !== "all") && (
          <div className="mt-4 flex items-center gap-2">
            <div className="text-sm text-foreground/70">Filters:</div>
            <div className="flex flex-wrap gap-2">
              {searchQuery && (
                <Chip 
                  onClose={() => setSearchQuery("")} 
                  variant="flat" 
                  color="primary"
                  size="sm"
                >
                  Search: {searchQuery}
                </Chip>
              )}
              
              {selectedCategory !== "all" && (
                <Chip 
                  onClose={() => setSelectedCategory("all")} 
                  variant="flat" 
                  color="secondary"
                  size="sm"
                >
                  Category: {categories.find(c => c.value === selectedCategory)?.label}
                </Chip>
              )}
            </div>
            
            <Button 
              size="sm" 
              variant="light" 
              onPress={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="ml-auto"
            >
              Clear All
            </Button>
          </div>
        )}
      </motion.div>
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16"
        >
          <Icon icon="lucide:search-x" className="w-16 h-16 mx-auto text-foreground/30 mb-4" />
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-foreground/70">
            Try adjusting your search or filter criteria
          </p>
          <Button 
            color="primary" 
            variant="flat" 
            className="mt-4"
            onPress={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
          >
            Reset Filters
          </Button>
        </motion.div>
      )}
      
      <Divider className="my-8" />
      
      <section className="bg-content2/30 backdrop-blur-sm rounded-xl border border-white/5 p-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Need a Custom Solution?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Don't see what you're looking for? We offer custom VPS configurations tailored to your specific needs.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button 
            color="primary" 
            size="lg"
            endContent={<Icon icon="lucide:message-square" />}
          >
            Contact Sales
          </Button>
          
          <Button 
            variant="flat" 
            size="lg"
            endContent={<Icon icon="lucide:phone" />}
          >
            Schedule a Call
          </Button>
        </div>
      </section>
    </div>
  );
};
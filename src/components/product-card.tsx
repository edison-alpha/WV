import React from 'react';
import { Card, CardBody, Button, Badge, Tooltip, useDisclosure } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { PaymentModal } from './payment-modal';

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  features: string[];
  isPreOrder?: boolean;
  duration?: string;
  logo?: string; // Add logo prop
}

export const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  description,
  price,
  stock,
  features,
  isPreOrder = false,
  duration,
  logo // Destructure logo prop
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-content2/50 backdrop-blur-sm border border-white/10 overflow-visible">
          <CardBody className="p-5 overflow-visible">
            <div className="absolute -top-3 -right-3 z-10">
              {isPreOrder ? (
                <Badge color="warning" variant="flat" className="px-2 py-1">Pre Order</Badge>
              ) : stock < 5 ? (
                <Badge color="danger" variant="flat" className="px-2 py-1">Low Stock: {stock}</Badge>
              ) : (
                <Badge color="success" variant="flat" className="px-2 py-1">In Stock: {stock}</Badge>
              )}
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center mb-4">
                {logo && (
                  <img 
                    src={logo} 
                    alt={`${name} logo`}
                    className="h-8 w-8 mr-2"
                  />
                )}
                <h3 className="text-lg font-semibold">{name}</h3>
              </div>
              
              <div className="space-y-1">
                <p className="text-foreground/70 text-sm">{description}</p>
                {duration && (
                  <div className="flex items-center gap-1 mt-1">
                    <Icon icon="lucide:clock" className="w-3.5 h-3.5 text-foreground/70" />
                    <span className="text-xs text-foreground/70">{duration}</span>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium">Features:</div>
                <ul className="space-y-1">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Icon icon="lucide:check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between mt-2">
                <div className="text-xl font-bold text-primary">
                  Rp {price.toLocaleString()}
                </div>
                <Tooltip content="Order Now">
                  <Button 
                    color="primary" 
                    variant="flat" 
                    onPress={onOpen}
                    endContent={<Icon icon="lucide:arrow-right" />}
                  >
                    Order Now
                  </Button>
                </Tooltip>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
      
      <PaymentModal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        product={{
          id,
          name,
          price
        }}
      />
    </>
  );
};
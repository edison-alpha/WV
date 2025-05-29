import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardBody, Button, Input, Avatar } from '@heroui/react';
import { Icon } from '@iconify/react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

export const ChatSupport: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      sender: 'support',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setMessage('');

    // Simulate support response after a delay
    setTimeout(() => {
      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for your message. Our team will get back to you shortly.',
        sender: 'support',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, supportMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Scroll to bottom when messages change
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:right-8 z-50 w-full max-w-sm"
          >
            <Card className="bg-content1/90 backdrop-blur-md border border-white/10 shadow-xl">
              <CardBody className="p-0">
                <div className="bg-primary p-3 rounded-t-medium flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar 
                      src="https://img.heroui.chat/image/avatar?w=40&h=40&u=support" 
                      className="w-8 h-8"
                      name="Support"
                    />
                    <div>
                      <p className="font-medium text-white">Live Support</p>
                      <p className="text-xs text-white/80">Online | Typically replies in minutes</p>
                    </div>
                  </div>
                  <Button 
                    isIconOnly 
                    variant="light" 
                    size="sm" 
                    onPress={toggleChat}
                    className="text-white"
                  >
                    <Icon icon="lucide:x" className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] p-3 rounded-lg ${
                          msg.sender === 'user' 
                            ? 'bg-primary text-white rounded-tr-none' 
                            : 'bg-content3 text-foreground rounded-tl-none'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p className="text-xs mt-1 opacity-70">
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                
                <div className="p-3 border-t border-white/10">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onValueChange={setMessage}
                      onKeyPress={handleKeyPress}
                      variant="bordered"
                      className="flex-grow"
                      size="sm"
                      endContent={
                        <Button 
                          isIconOnly 
                          color="primary" 
                          variant="flat" 
                          size="sm" 
                          onPress={handleSendMessage}
                          className="mr-1"
                        >
                          <Icon icon="lucide:send" className="w-4 h-4" />
                        </Button>
                      }
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-4 right-4 sm:right-8 z-50"
      >
        <Button
          isIconOnly
          color="primary"
          size="lg"
          className="w-14 h-14 rounded-full shadow-lg"
          onPress={toggleChat}
        >
          <Icon 
            icon={isOpen ? "lucide:x" : "lucide:message-circle"} 
            className="w-6 h-6" 
          />
        </Button>
      </motion.div>
    </>
  );
};
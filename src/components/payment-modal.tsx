import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Tabs,
  Tab,
  Card,
  CardBody,
  Input,
  Textarea
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

interface PaymentModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  product: {
    id: string;
    name: string;
    price: number;
  };
}

type StepType = "payment" | "validation" | "success";

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onOpenChange,
  product
}) => {
  const [selected, setSelected] = React.useState<string>("qris");
  const [step, setStep] = React.useState<StepType>("payment");
  const [receiptNumber, setReceiptNumber] = React.useState<string>("");
  const [isValidating, setIsValidating] = React.useState<boolean>(false);
  const [feedback, setFeedback] = React.useState<string>("");
  const [invoice, setInvoice] = React.useState<string>("");

  // Generate invoice for QRIS only
  React.useEffect(() => {
    if (selected === "qris") {
      setInvoice("INV-" + Math.floor(Math.random() * 1000000));
    } else {
      setInvoice("");
    }
  }, [selected, isOpen]);

  // Reset state when modal closed
  React.useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep("payment");
        setReceiptNumber("");
        setFeedback("");
        setIsValidating(false);
      }, 300);
    }
  }, [isOpen]);

  // Reset state after success close
  const handleSuccessClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep("payment");
      setReceiptNumber("");
      setFeedback("");
      setIsValidating(false);
    }, 300);
  };

  // Validation handler for all payment methods
  const handleValidation = () => {
    if (!receiptNumber) return;
    setIsValidating(true);
    
    // Simulate API call with single loading state
    setTimeout(() => {
      setIsValidating(false);
      setStep("success");
    }, 1500); // Reduced to 1.5 seconds for better UX
  };

  // Handle tab change
  const handleTabChange = (key: React.Key) => {
    setSelected(String(key));
    setReceiptNumber("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      size="lg"
      scrollBehavior="inside"
      classNames={{
        base: "bg-content1/90 backdrop-blur-md border border-white/10",
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 border-b border-white/10">
              {step === "payment" && "Payment Details"}
              {step === "validation" && "Validate Transaction"}
              {step === "success" && "Payment Success"}
            </ModalHeader>
            <ModalBody className="py-6">
              <AnimatePresence mode="wait">
                {step === "payment" && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="space-y-6">
                      <div className="bg-content2/50 p-4 rounded-medium border border-white/5">
                        <div className="flex justify-between items-center">
                          <span className="text-foreground/70">Product:</span>
                          <span className="font-medium">{product.name}</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-foreground/70">Price:</span>
                          <span className="font-bold text-primary">Rp {product.price.toLocaleString()}</span>
                        </div>
                        {selected === "qris" && (
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-foreground/70">Invoice:</span>
                            <span className="font-mono">{invoice}</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Select Payment Method</h3>
                        <Tabs
                          aria-label="Payment Options"
                          selectedKey={selected}
                          onSelectionChange={handleTabChange}
                          variant="bordered"
                          color="primary"
                          classNames={{
                            tabList: "bg-content2/50 p-1 border border-white/10",
                            cursor: "bg-content3",
                            tab: "data-[selected=true]:text-primary"
                          }}
                        >
                          <Tab
                            key="qris"
                            title={
                              <div className="flex items-center gap-2">
                                <Icon icon="lucide:qr-code" />
                                <span>QRIS</span>
                              </div>
                            }
                          >
                            <Card className="mt-4 bg-content2/50 border border-white/10">
                              <CardBody className="flex flex-col items-center gap-4 p-6">
                                <div className="bg-white p-4 rounded-medium">
                                  <img
                                    src="src/img/qr.png"
                                    alt="QRIS Code"
                                    className="w-48 h-48 object-cover"
                                  />
                                </div>
                                <div className="text-center">
                                  <p className="text-sm text-foreground/70 mb-2">Scan this QR code with your mobile banking app</p>
                                  <p className="font-medium">Amount: <span className="text-primary">Rp {product.price.toLocaleString()}</span></p>
                                  <p className="text-xs text-foreground/50 mt-2">Invoice: <span className="font-mono">{invoice}</span></p>
                                </div>
                              </CardBody>
                            </Card>
                          </Tab>
                          <Tab
                            key="transfer"
                            title={
                              <div className="flex items-center gap-2">
                                <Icon icon="lucide:credit-card" />
                                <span>Bank Transfer</span>
                              </div>
                            }
                          >
                            <Card className="mt-4 bg-content2/50 border border-white/10">
                              <CardBody className="p-6">
                                <div className="space-y-4">
                                  <div className="bg-content3/50 p-4 rounded-medium">
                                    <h4 className="font-medium mb-2">Bank BCA</h4>
                                    <div className="flex justify-between items-center">
                                      <span className="text-foreground/70">Account Number:</span>
                                      <span className="font-medium">1234567890</span>
                                    </div>
                                    <div className="flex justify-between items-center mt-1">
                                      <span className="text-foreground/70">Account Name:</span>
                                      <span className="font-medium">PT Cloud VPS Indonesia</span>
                                    </div>
                                  </div>
                                  <div className="bg-content3/50 p-4 rounded-medium">
                                    <h4 className="font-medium mb-2">Bank Mandiri</h4>
                                    <div className="flex justify-between items-center">
                                      <span className="text-foreground/70">Account Number:</span>
                                      <span className="font-medium">0987654321</span>
                                    </div>
                                    <div className="flex justify-between items-center mt-1">
                                      <span className="text-foreground/70">Account Name:</span>
                                      <span className="font-medium">PT Cloud VPS Indonesia</span>
                                    </div>
                                  </div>
                                  <div className="text-center mt-2">
                                    <p className="text-sm text-foreground/70">Please transfer the exact amount</p>
                                    <p className="font-medium">Amount: <span className="text-primary">Rp {product.price.toLocaleString()}</span></p>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </Tab>
                          <Tab
                            key="crypto"
                            title={
                              <div className="flex items-center gap-2">
                                <Icon icon="simple-icons:binance" />
                                <span>Crypto (Binance Pay)</span>
                              </div>
                            }
                          >
                            <Card className="mt-4 bg-content2/50 border border-white/10">
                              <CardBody className="flex flex-col items-center gap-4 p-6">
                                <div className="bg-white p-4 rounded-medium">
                                  <img
                                    src="src/img/binancepay.png"
                                    alt="Binance Pay QR"
                                    className="w-48 h-48 object-cover"
                                  />
                                </div>
                                <div className="text-center">
                                  <p className="text-sm text-foreground/70 mb-2">Scan this QR code with your Binance app</p>
                                  <p className="font-medium">Amount: <span className="text-primary">Rp {product.price.toLocaleString()}</span></p>
                                  <p className="text-xs text-foreground/50 mt-2">Payment will be processed after confirmation.</p>
                                </div>
                              </CardBody>
                            </Card>
                          </Tab>
                        </Tabs>
                      </div>
                    </div>
                  </motion.div>
                )}
                {step === "validation" && (
                  <motion.div
                    key="validation"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="space-y-6">
                      <div className="bg-content2/50 p-4 rounded-medium border border-white/5">
                        <div className="flex justify-between items-center">
                          <span className="text-foreground/70">Product:</span>
                          <span className="font-medium">{product.name}</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-foreground/70">Price:</span>
                          <span className="font-bold text-primary">Rp {product.price.toLocaleString()}</span>
                        </div>
                        {selected === "qris" && (
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-foreground/70">Invoice:</span>
                            <span className="font-mono">{invoice}</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Transaction Validation</h3>
                        <p className="text-sm text-foreground/70">
                          Please enter your receipt number or transaction ID to validate your payment.
                        </p>
                        <Input
                          label="Receipt Number / Transaction ID"
                          placeholder="Enter your receipt number"
                          value={receiptNumber}
                          onValueChange={setReceiptNumber}
                          variant="bordered"
                          color="primary"
                          className="max-w-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                {step === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col items-center gap-6 py-8">
                      <Icon icon="mdi:check-circle" className="text-green-500" width={64} height={64} />
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
                        <p className="text-foreground/70 mb-4">Thank you for your payment. Your transaction has been validated.</p>
                        <p className="text-foreground/80 font-medium mb-2">We really appreciate your feedback.</p>
                        <Textarea
                          placeholder="Please leave your feedback here..."
                          value={feedback}
                          onValueChange={setFeedback}
                          minRows={2}
                          maxRows={4}
                          className="mb-2"
                        />
                        <Button color="primary" onPress={handleSuccessClose} className="mt-2 w-full">
                          Close
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </ModalBody>
            {step !== "success" && (
              <ModalFooter className="border-t border-white/10">
                {step === "payment" ? (
                  <Button
                    color="primary"
                    onPress={() => setStep("validation")}
                    className="w-full sm:w-auto"
                  >
                    Continue to Validation
                  </Button>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <Button
                      variant="flat"
                      onPress={() => setStep("payment")}
                      className="w-full sm:w-auto"
                      disabled={isValidating}
                    >
                      Back to Payment
                    </Button>
                    <Button
                      color="primary"
                      onPress={handleValidation}
                      isLoading={isValidating}
                      className="w-full sm:w-auto"
                      disabled={!receiptNumber || isValidating}
                    >
                      {isValidating ? "Validating Payment..." : "Validate Transaction"}
                    </Button>
                  </div>
                )}
              </ModalFooter>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
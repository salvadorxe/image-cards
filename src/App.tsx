import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import ImageBox from "./components/ImageBox";
import Modal from "./components/Modal";
import { imageData, ImageData } from "./ImageData";

function App() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const getCardVariants = (id: number) => ({
    initial: { opacity: 1 },
    exit: { y: -10, opacity: 0 },
  });

  const cardTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3,
  };

  return (
    <>
      <div className="image-row">
        {imageData.map((image) => (
          <motion.div
            key={image.id}
            layout
            layoutId={`image-container-${image.id}`}
            variants={getCardVariants(image.id)}
            initial="initial"
            exit="exit"
            transition={cardTransition}
            whileHover={{
              rotate: image.rotation,
              scale: 1.05,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            onClick={() => setSelectedImage(image)}
            style={{
              cursor: "pointer",
              borderRadius: "1.5rem",
            }}
          >
            <ImageBox
              alt={image.alt}
              rotation={image.hovrotate}
              src={image.src}
            />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedImage && (
          <Modal
            key={selectedImage.id} // Add a key to help with proper re-mounting
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;

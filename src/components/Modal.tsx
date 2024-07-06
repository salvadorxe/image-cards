import { motion } from "framer-motion";
import { ImageData } from "../ImageData";
import ImageBox from "./ImageBox";

interface ModalProps {
  image: ImageData;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const contentVariants = {
    hidden: image.id === 2 ? { y: -10, opacity: 0 } : { opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        layoutId={`image-container-${image.id}`}
        variants={contentVariants}
        style={{
          width: "30%",
          height: "55%",
          background: "white",
          borderRadius: "10px",
          overflow: "hidden",
          padding: "1.05rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div layoutId={`image-box-${image.id}`}>
          <ImageBox alt={image.alt} rotation={0} src={image.src} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginTop: "1rem", textAlign: "center" }}
        >
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;

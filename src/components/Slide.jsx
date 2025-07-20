import { motion } from 'framer-motion';
import emoji3 from "public/assets/emoji3.png"
import emoji1 from "public/assets/emoji1.png"

export default function Slide({ data, onNext, index }) {

  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{data.title}</h2>
      <p>{data.text}</p>
      <button onClick={onNext}>Próximo 💖</button>
    </motion.div>
  );
}

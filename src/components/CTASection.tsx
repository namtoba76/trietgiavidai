import { motion } from "framer-motion";
import ctaImg from "@/assets/cta-athens.jpg";

const CTASection = () => {
  return (
    <section id="conclusion" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaImg} alt="Trường phái Athens" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6"
        >
          TRIẾT HỌC{" "}
          <br className="hidden sm:block" />
          ĐỊNH HÌNH TƯƠNG LAI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-dark-text/80 font-serif-body leading-relaxed"
        >
          Từ những câu hỏi cổ xưa đến tư duy hiện đại,
          <br />
          triết học tiếp tục soi sáng con đường phía trước
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;

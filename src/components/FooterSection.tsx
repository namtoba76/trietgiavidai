import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-dark-section">
      {/* Quote section */}
      <div className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-warm-gold font-body mb-8 block">
              Châm Ngôn Triết Học
            </span>

            <Quote className="w-12 h-12 text-warm-gold/30 mx-auto mb-6" />

            <blockquote className="font-serif-body text-2xl sm:text-3xl md:text-4xl text-dark-text italic leading-relaxed mb-6">
              Tôi chỉ biết một điều,
              <br className="hidden sm:block" />
              đó là tôi không biết gì cả.
            </blockquote>

            <p className="font-display text-warm-gold font-semibold text-lg mb-1">Socrates</p>
            <p className="text-dark-text/40 text-sm font-body mb-10">469–399 TCN</p>

            <div className="w-16 h-[2px] bg-warm-gold/30 mx-auto mb-10" />

            <p className="text-dark-text/50 font-body text-sm leading-relaxed max-w-2xl mx-auto">
              Triết học không chỉ là tri thức, mà là hành trình suy nghĩ về thế giới
              và chính bản thân chúng ta.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm-gold/10 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-1">
          <p className="text-dark-text/30 text-xs font-body">© 2025 Philosophy Project</p>
          <p className="text-dark-text/30 text-xs font-body">MLN122 - MC1814</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

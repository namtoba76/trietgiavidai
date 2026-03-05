import { motion } from "framer-motion";
import { philosophyQuotes } from "@/data/philosophers";
import { Quote } from "lucide-react";

const QuotesSection = () => {
  return (
    <section id="thoughts" className="py-20 bg-dark-section">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-warm-gold font-body">Tư tưởng cốt lõi</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark-text mt-2 mb-4">
            Những Tư Tưởng Triết Học Vĩ Đại
          </h2>
          <p className="text-dark-text/60 font-body max-w-3xl mx-auto">
            Các trường phái tư tưởng đã thay đổi cách nhân loại nhìn nhận về thế giới, đạo đức và ý nghĩa cuộc sống
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophyQuotes.map((q, i) => (
            <motion.div
              key={q.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-card rounded-xl p-6 border border-warm-gold/10 hover:border-warm-gold/30 transition-all"
            >
              <Quote className="w-8 h-8 text-warm-gold/40 mb-4" />
              <blockquote className="font-serif-body text-lg text-dark-text italic mb-4 leading-relaxed">
                "{q.quote}"
              </blockquote>
              <p className="text-dark-text/60 text-sm font-body mb-4 leading-relaxed">
                {q.explanation}
              </p>
              <div className="border-t border-warm-gold/10 pt-3">
                <p className="font-display text-sm font-semibold text-warm-gold">{q.author}</p>
                <p className="text-xs text-dark-text/40 font-body">{q.school}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;

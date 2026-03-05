import { useRef } from "react";
import { motion } from "framer-motion";
import { philosophers } from "@/data/philosophers";

const TimelineSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="philosophers" className="py-20 bg-dark-section">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold text-center mb-12 text-dark-text"
        >
          Dòng thời gian triết học
        </motion.h2>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2"
        >
          {philosophers.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex-shrink-0 w-40 text-center group cursor-pointer"
            >
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-warm-gold/40 group-hover:border-warm-gold transition-all mb-3 bg-dark-card">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-sm font-semibold text-dark-text mb-1">{p.name}</h3>
              <p className="text-xs text-warm-gold font-body">{p.years}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-4 font-body">
          Kéo ngang hoặc vuốt để khám phá · Nhấn vào triết gia để xem thông tin
        </p>
      </div>
    </section>
  );
};

export default TimelineSection;

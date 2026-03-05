import { motion } from "framer-motion";
import { philosophers, type Philosopher } from "@/data/philosophers";

interface EraConfig {
  id: string;
  title: string;
  subtitle: string;
  era: Philosopher["era"];
}

const eras: EraConfig[] = [
  { id: "ancient", title: "Triết Học Cổ Đại", subtitle: "Thế kỷ 6 TCN – Thế kỷ 4 TCN", era: "ancient" },
  { id: "modern", title: "Triết Học Cận Đại", subtitle: "Thế kỷ 17 – Thế kỷ 19", era: "modern" },
  { id: "contemporary", title: "Triết Học Hiện Đại", subtitle: "Thế kỷ 20 – Nay", era: "contemporary" },
];

const PhilosopherCard = ({ p, i }: { p: Philosopher; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1 }}
    className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group border border-border"
  >
    <div className="h-52 overflow-hidden bg-secondary flex items-center justify-center">
      <img
        src={p.image}
        alt={p.name}
        className="w-40 h-40 object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-5">
      <h4 className="font-display text-lg font-bold text-foreground mb-1">{p.name}</h4>
      <p className="text-sm text-primary font-body mb-3">{p.years}</p>
      <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.description}</p>
    </div>
  </motion.div>
);

const PhilosophersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Triết Học Và Vai Trò Của Các Triết Gia Trong Lịch Sử
          </h2>
          <p className="text-muted-foreground font-body max-w-3xl mx-auto">
            Triết học không chỉ là môn học về tư duy mà còn là nền tảng định hình xã hội, khoa học và văn hóa nhân loại qua các thời đại
          </p>
        </motion.div>

        {eras.map((era) => {
          const eraPhilosophers = philosophers.filter((p) => p.era === era.era);
          return (
            <div key={era.id} id={era.id} className="mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <span className="text-xs uppercase tracking-widest text-primary font-body">Giai đoạn</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-1">{era.title}</h3>
                <p className="text-muted-foreground font-body text-sm mt-1">{era.subtitle}</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {eraPhilosophers.map((p, i) => (
                  <PhilosopherCard key={p.name} p={p} i={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PhilosophersSection;

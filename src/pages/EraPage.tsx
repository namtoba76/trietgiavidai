import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { philosophers, eraInfo } from "@/data/philosophers";
import Navbar from "@/components/Navbar";

type EraKey = "ancient" | "modern" | "contemporary";

const EraPage = () => {
  const { era } = useParams<{ era: string }>();
  const eraKey = era as EraKey;
  const info = eraInfo[eraKey];
  const eraPhilosophers = philosophers.filter((p) => p.era === eraKey);

  if (!info) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground font-display text-2xl">Không tìm thấy thời kỳ này.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Header */}
      <section className="pt-28 pb-16 bg-dark-section">
        <div className="max-w-5xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-warm-gold hover:text-warm-gold/80 transition-colors mb-8 font-body text-sm">
            <ArrowLeft className="w-4 h-4" />
            Quay lại trang chủ
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs uppercase tracking-widest text-warm-gold font-body">Giai đoạn</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-dark-text mt-2 mb-4">{info.title}</h1>
            <p className="text-warm-gold font-body text-lg mb-6">{info.subtitle}</p>
            <p className="text-dark-text/70 font-body leading-relaxed max-w-3xl">{info.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Philosopher Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {eraPhilosophers.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/philosopher/${p.id}`}
                  className="block bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group border border-border hover:border-primary/30"
                >
                  <div className="h-56 flex items-center justify-center bg-secondary">
                    <div className="w-36 h-36 rounded-full overflow-hidden border-3 border-primary/30 group-hover:border-primary transition-all group-hover:scale-105 duration-500">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
                    <p className="text-sm text-primary font-body mb-2">{p.years}</p>
                    <p className="text-sm text-muted-foreground font-body">{p.country}</p>
                    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body">
                      {p.school.split("/")[0].trim()}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EraPage;

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, BookOpen, Lightbulb, Quote, GraduationCap, History, Globe, Flame, AlertTriangle, Compass } from "lucide-react";
import { philosophers } from "@/data/philosophers";
import Navbar from "@/components/Navbar";

const PhilosopherDetail = () => {
  const { id } = useParams<{ id: string }>();
  const philosopher = philosophers.find((p) => p.id === id);

  if (!philosopher) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground font-display text-2xl">Không tìm thấy triết gia này.</p>
      </div>
    );
  }

  const eraPath = `/era/${philosopher.era}`;

  const sections = [
    { icon: History, title: "Tiểu sử", content: philosopher.biography },
    { icon: Globe, title: "Bối cảnh lịch sử", content: philosopher.historicalContext },
    { icon: Compass, title: "Phương pháp luận", content: philosopher.methodology },
    { icon: Flame, title: "Ảnh hưởng", content: philosopher.influence },
    { icon: Globe, title: "Di sản", content: philosopher.legacy },
    { icon: AlertTriangle, title: "Tranh cãi & Phê phán", content: philosopher.controversies },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-dark-section">
        <div className="max-w-5xl mx-auto px-4">
          <Link to={eraPath} className="inline-flex items-center gap-2 text-warm-gold hover:text-warm-gold/80 transition-colors mb-8 font-body text-sm">
            <ArrowLeft className="w-4 h-4" />
            Quay lại danh sách
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-warm-gold/40 shadow-2xl">
                <img src={philosopher.image} alt={philosopher.name} className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center md:text-left">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-dark-text mb-2">{philosopher.name}</h1>
              <p className="text-warm-gold font-body text-xl mb-4">{philosopher.years}</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-warm-gold/10 text-warm-gold text-sm font-body border border-warm-gold/20">
                  <MapPin className="w-3.5 h-3.5" /> {philosopher.country}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-warm-gold/10 text-warm-gold text-sm font-body border border-warm-gold/20">
                  <GraduationCap className="w-3.5 h-3.5" /> {philosopher.school}
                </span>
              </div>
              <p className="text-dark-text/70 font-body leading-relaxed max-w-2xl">{philosopher.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-12 bg-parchment">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <Quote className="w-10 h-10 text-primary/40 mx-auto mb-4" />
            <blockquote className="font-serif-body text-2xl sm:text-3xl text-foreground italic leading-relaxed mb-4">
              "{philosopher.famousQuote}"
            </blockquote>
            <p className="text-primary font-display font-semibold">— {philosopher.name}</p>
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <History className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Tiểu sử</h2>
            </div>
            <p className="text-foreground/80 font-body leading-[1.9] text-base">{philosopher.biography}</p>
          </motion.div>
        </div>
      </section>

      {/* Works & Thoughts */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 border border-border shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"><BookOpen className="w-5 h-5 text-primary" /></div>
              <h2 className="font-display text-2xl font-bold text-foreground">Tác phẩm nổi bật</h2>
            </div>
            <ul className="space-y-4">
              {philosopher.works.map((work, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="leading-relaxed">{work}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 border border-border shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"><Lightbulb className="w-5 h-5 text-primary" /></div>
              <h2 className="font-display text-2xl font-bold text-foreground">Tư tưởng triết học chính</h2>
            </div>
            <ul className="space-y-4">
              {philosopher.mainThoughts.map((thought, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-semibold mt-0.5">{i + 1}</span>
                  <span className="leading-relaxed">{thought}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Extended sections */}
      {[
        { icon: Globe, title: "Bối cảnh lịch sử", content: philosopher.historicalContext },
        { icon: Compass, title: "Phương pháp luận", content: philosopher.methodology },
        { icon: Flame, title: "Ảnh hưởng & Tầm ảnh hưởng", content: philosopher.influence },
        { icon: Globe, title: "Di sản để lại", content: philosopher.legacy },
        { icon: AlertTriangle, title: "Tranh cãi & Phê phán", content: philosopher.controversies },
      ].map((section, i) => (
        <section key={section.title} className={i % 2 === 0 ? "py-16" : "py-16 bg-secondary/30"}>
          <div className="max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">{section.title}</h2>
              </div>
              <p className="text-foreground/80 font-body leading-[1.9] text-base">{section.content}</p>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default PhilosopherDetail;

import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin, GraduationCap, ArrowRight } from "lucide-react";
import { philosophers, type Philosopher, eraInfo } from "@/data/philosophers";

interface EraConfig {
  id: string;
  title: string;
  subtitle: string;
  era: Philosopher["era"];
  accentClass: string;
}

const eras: EraConfig[] = [
{
  id: "ancient",
  title: "Triết Học Cổ Đại",
  subtitle: "Thế kỷ 6 TCN – Thế kỷ 4 TCN",
  era: "ancient",
  accentClass: "from-amber-500/20 to-yellow-600/20"
},
{
  id: "modern",
  title: "Triết Học Cận Đại",
  subtitle: "Thế kỷ 17 – Thế kỷ 19",
  era: "modern",
  accentClass: "from-blue-500/20 to-indigo-600/20"
},
{
  id: "contemporary",
  title: "Triết Học Hiện Đại",
  subtitle: "Thế kỷ 19 – Nay",
  era: "contemporary",
  accentClass: "from-rose-500/20 to-purple-600/20"
}];


const PhilosopherCard = ({ p }: {p: Philosopher;}) =>
<Link
  to={`/philosopher/${p.id}`}
  className="flex-shrink-0 w-[280px] sm:w-[320px] bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border border-border hover:border-primary/40 cursor-pointer">
  
    {/* Image area */}
    <div className="h-52 overflow-hidden bg-secondary flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      <div className="w-36 h-36 rounded-full overflow-hidden border-3 border-primary/30 group-hover:border-primary transition-all duration-500 group-hover:scale-110 shadow-xl relative z-10">
        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
      </div>
    </div>

    {/* Info area */}
    <div className="p-6">
      <h4 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
        {p.name}
      </h4>
      <p className="text-sm text-primary font-body mb-3 font-semibold">{p.years}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-body">
          <MapPin className="w-3 h-3" />
          {p.country.split("(")[0].trim()}
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary text-muted-foreground text-xs font-body">
          <GraduationCap className="w-3 h-3" />
          {p.school.split("/")[0].trim()}
        </span>
      </div>

      <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-3 mb-4">
        {p.description}
      </p>

      <div className="flex items-center gap-1 text-primary text-sm font-body font-semibold group-hover:gap-2 transition-all">
        Xem chi tiết
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </Link>;


const EraSection = ({ era }: {era: EraConfig;}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const eraPhilosophers = philosophers.filter((p) => p.era === era.era);
  const info = eraInfo[era.era];

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth"
    });
  };

  return (
    <div className="mb-20 last:mb-0">
      {/* Era Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-body font-semibold">
            Giai đoạn
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-1">
            {era.title}
          </h3>
          <p className="text-muted-foreground font-body text-sm mt-1 max-w-2xl">
            {era.subtitle} — {info.description.slice(0, 120)}...
          </p>
        </div>

        {/* Scroll controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center shadow-sm"
            aria-label="Kéo sang trái">
            
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center shadow-sm"
            aria-label="Kéo sang phải">
            
            <ChevronRight className="w-5 h-5" />
          </button>
          <Link
            to={`/era/${era.id}`}
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
            
            Xem tất cả
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>

      {/* Scrollable cards */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 scroll-smooth">
          
          {eraPhilosophers.map((p, i) =>
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}>
            
              <PhilosopherCard p={p} />
            </motion.div>
          )}
        </div>
      </div>

      {/* Era stats */}
      <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground font-body">
        <span>{eraPhilosophers.length} triết gia</span>
        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
        <span>
</span>
      </div>
    </div>);
};

const PhilosophersSection = () => {
  return (
    <section id="philosophers" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Các Triết Gia Vĩ Đại Qua Các Thời Kỳ
          </h2>
          <p className="text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Khám phá hành trình tư tưởng của nhân loại từ thời cổ đại đến hiện đại — mỗi triết gia là một ngọn đuốc soi sáng con đường tri thức
          </p>
        </motion.div>

        {eras.map((era) =>
        <EraSection key={era.id} era={era} />
        )}
      </div>
    </section>);

};

export default PhilosophersSection;
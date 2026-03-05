import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-library.jpg";

const HeroSection = () => {
  const scrollTo = () => {
    document.querySelector("#philosophers")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Thư viện cổ điển" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-body mb-6 border border-primary/30">
            Giáo Dục • Triết Học • Lịch Sử
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6"
        >
          NHỮNG TRIẾT GIA{" "}
          <br className="hidden sm:block" />
          VĨ ĐẠI LỊCH SỬ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl text-dark-text/80 font-serif-body max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Khám phá hành trình tư tưởng của những bậc thầy triết học đã định hình nền văn minh nhân loại,
          <br />
          từ thời cổ đại Hy Lạp đến kỷ nguyên hiện đại
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          onClick={scrollTo}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-lg font-semibold rounded-full hover:brightness-110 transition-all shadow-lg hover:shadow-xl"
        >
          <BookOpen className="w-5 h-5" />
          KHÁM PHÁ NGAY
          <ArrowUpRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;

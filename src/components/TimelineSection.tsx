import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import thalesImg from "@/assets/thales.png";
import pythagorasImg from "@/assets/pythagoras.png";
import heraclitusImg from "@/assets/heraclitus.png";
import parmenidesImg from "@/assets/parmenides.png";
import socratesImg from "@/assets/socrates.png";
import platoImg from "@/assets/plato.png";
import aristotleImg from "@/assets/aristotle.png";
import confuciusImg from "@/assets/confucius.png";
import augustineImg from "@/assets/augustine.png";
import aquinasImg from "@/assets/aquinas.png";
import descartesImg from "@/assets/descartes.png";
import lockeImg from "@/assets/locke.png";
import humeImg from "@/assets/hume.png";
import kantImg from "@/assets/kant.png";
import nietzscheImg from "@/assets/nietzsche.png";
import marxImg from "@/assets/marx.png";
import sartreImg from "@/assets/sartre.png";
import foucaultImg from "@/assets/foucault.png";

interface TimelinePhilosopher {
  id: string;
  name: string;
  years: string;
  image: string;
  era: "ancient" | "medieval" | "modern" | "contemporary";
}

const eraLabels: Record<string, { label: string; color: string }> = {
  ancient: { label: "Cổ đại", color: "hsl(var(--warm-gold))" },
  medieval: { label: "Trung cổ", color: "hsl(25, 60%, 50%)" },
  modern: { label: "Cận đại", color: "hsl(210, 50%, 55%)" },
  contemporary: { label: "Hiện đại", color: "hsl(340, 50%, 55%)" },
};

const timelinePhilosophers: TimelinePhilosopher[] = [
  { id: "thales", name: "Thales", years: "624–546 TCN", image: thalesImg, era: "ancient" },
  { id: "pythagoras", name: "Pythagoras", years: "570–495 TCN", image: pythagorasImg, era: "ancient" },
  { id: "heraclitus", name: "Heraclitus", years: "535–475 TCN", image: heraclitusImg, era: "ancient" },
  { id: "parmenides", name: "Parmenides", years: "515–450 TCN", image: parmenidesImg, era: "ancient" },
  { id: "confucius", name: "Khổng Tử", years: "551–479 TCN", image: confuciusImg, era: "ancient" },
  { id: "socrates", name: "Socrates", years: "470–399 TCN", image: socratesImg, era: "ancient" },
  { id: "plato", name: "Plato", years: "428–348 TCN", image: platoImg, era: "ancient" },
  { id: "aristotle", name: "Aristotle", years: "384–322 TCN", image: aristotleImg, era: "ancient" },
  { id: "augustine", name: "Augustine", years: "354–430", image: augustineImg, era: "medieval" },
  { id: "aquinas", name: "Thomas Aquinas", years: "1225–1274", image: aquinasImg, era: "medieval" },
  { id: "descartes", name: "René Descartes", years: "1596–1650", image: descartesImg, era: "modern" },
  { id: "locke", name: "John Locke", years: "1632–1704", image: lockeImg, era: "modern" },
  { id: "hume", name: "David Hume", years: "1711–1776", image: humeImg, era: "modern" },
  { id: "kant", name: "Immanuel Kant", years: "1724–1804", image: kantImg, era: "modern" },
  { id: "marx", name: "Karl Marx", years: "1818–1883", image: marxImg, era: "contemporary" },
  { id: "nietzsche", name: "Friedrich Nietzsche", years: "1844–1900", image: nietzscheImg, era: "contemporary" },
  { id: "sartre", name: "Jean-Paul Sartre", years: "1905–1980", image: sartreImg, era: "contemporary" },
  { id: "foucault", name: "Michel Foucault", years: "1926–1984", image: foucaultImg, era: "contemporary" },
];

const TimelineSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  // Group philosophers by era for rendering era labels
  let currentEra = "";

  return (
    <section id="timeline" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Dòng Thời Gian Triết Học
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Hành trình tư tưởng nhân loại từ thời cổ đại đến hiện đại
          </p>
        </motion.div>

        {/* Era legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(eraLabels).map(([key, { label, color }]) => (
            <div key={key} className="flex items-center gap-2 text-sm font-body">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

        {/* Timeline container with arrows */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border bg-card/95 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all ${
              canScrollLeft
                ? "opacity-100 hover:bg-primary hover:text-primary-foreground hover:scale-110"
                : "opacity-30 cursor-not-allowed"
            }`}
            disabled={!canScrollLeft}
            aria-label="Cuộn sang trái"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border bg-card/95 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all ${
              canScrollRight
                ? "opacity-100 hover:bg-primary hover:text-primary-foreground hover:scale-110"
                : "opacity-30 cursor-not-allowed"
            }`}
            disabled={!canScrollRight}
            aria-label="Cuộn sang phải"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Fade edges */}
          <div className="absolute left-10 sm:left-12 top-0 bottom-0 w-8 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
          <div className="absolute right-10 sm:right-12 top-0 bottom-0 w-8 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

          {/* Scrollable area */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth mx-10 sm:mx-14"
          >
            <div className="relative py-8" style={{ minWidth: `${timelinePhilosophers.length * 160}px` }}>
              {/* Horizontal line */}
              <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-border" />
              
              {/* Era color segments on the line */}
              <div className="absolute left-0 right-0 top-1/2 h-[2px]">
                {(() => {
                  const segments: { start: number; end: number; color: string }[] = [];
                  let segStart = 0;
                  let prevEra = timelinePhilosophers[0]?.era;
                  timelinePhilosophers.forEach((p, i) => {
                    if (p.era !== prevEra) {
                      segments.push({
                        start: segStart,
                        end: i,
                        color: eraLabels[prevEra]?.color || "transparent",
                      });
                      segStart = i;
                      prevEra = p.era;
                    }
                  });
                  segments.push({
                    start: segStart,
                    end: timelinePhilosophers.length,
                    color: eraLabels[prevEra]?.color || "transparent",
                  });
                  const total = timelinePhilosophers.length;
                  return segments.map((seg, idx) => (
                    <div
                      key={idx}
                      className="absolute top-0 h-full"
                      style={{
                        left: `${(seg.start / total) * 100}%`,
                        width: `${((seg.end - seg.start) / total) * 100}%`,
                        backgroundColor: seg.color,
                        opacity: 0.5,
                      }}
                    />
                  ));
                })()}
              </div>

              {/* Philosophers */}
              <div className="flex">
                {timelinePhilosophers.map((p, i) => {
                  const showEraLabel = p.era !== currentEra;
                  if (showEraLabel) currentEra = p.era;
                  const eraColor = eraLabels[p.era]?.color || "hsl(var(--primary))";

                  return (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex-shrink-0 w-[140px] sm:w-[160px] flex flex-col items-center relative"
                    >
                      {/* Era label */}
                      {showEraLabel && (
                        <div
                          className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.15em] font-body font-bold whitespace-nowrap px-2 py-0.5 rounded-full"
                          style={{ color: eraColor, backgroundColor: `${eraColor}15` }}
                        >
                          {eraLabels[p.era]?.label}
                        </div>
                      )}

                      {/* Avatar */}
                      <Link
                        to={`/philosopher/${p.id}`}
                        className="group flex flex-col items-center"
                      >
                        <div
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-[3px] bg-background shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:scale-105"
                          style={{ borderColor: eraColor }}
                        >
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Dot on timeline */}
                        <div
                          className="w-3 h-3 rounded-full border-2 border-card mt-2 transition-transform group-hover:scale-150"
                          style={{ backgroundColor: eraColor }}
                        />

                        {/* Name & years */}
                        <h3 className="font-display text-xs sm:text-sm font-bold text-foreground mt-2 text-center leading-tight group-hover:text-primary transition-colors">
                          {p.name}
                        </h3>
                        <p
                          className="text-[10px] sm:text-xs font-body mt-0.5 text-center"
                          style={{ color: eraColor }}
                        >
                          {p.years}
                        </p>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

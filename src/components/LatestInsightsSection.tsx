import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { Badge } from "@/components/ui/badge";

const LatestInsightsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-body mb-4 border border-primary/20">
            Bài Viết Mới
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Góc Nhìn Mới Nhất
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg leading-relaxed">
            Khám phá những bài viết chuyên sâu về triết học, lịch sử tư tưởng và các vấn đề đạo đức muôn thuở.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/article/${article.id}`} className="block">
                <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground border-0">
                      <Tag className="w-3 h-3 mr-1" />
                      {article.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-muted-foreground text-sm font-body mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span>{article.relatedPhilosopher}</span>
                    </div>

                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-primary font-body text-sm font-medium group-hover:gap-3 transition-all">
                      Đọc thêm
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsightsSection;

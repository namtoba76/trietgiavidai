import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import ctaImg from "@/assets/cta-athens.jpg";
import { BookOpen, Lightbulb, Users, Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const conclusions = [
  {
    icon: BookOpen,
    title: "Nền tảng tri thức nhân loại",
    content:
      "Triết học không chỉ là những lý thuyết trừu tượng — nó là nền tảng của mọi ngành khoa học, luật pháp, đạo đức và chính trị mà chúng ta biết ngày nay. Từ logic hình thức của Aristotle đến phương pháp hoài nghi của Descartes, triết học đã cung cấp công cụ tư duy cho toàn bộ nền văn minh phương Tây và phương Đông.",
  },
  {
    icon: Lightbulb,
    title: "Soi sáng ý nghĩa cuộc sống",
    content:
      "Qua hàng nghìn năm, các triết gia đã đặt ra những câu hỏi cốt lõi nhất: Chúng ta là ai? Cuộc sống có ý nghĩa gì? Thế nào là sống đúng đắn? Từ Socrates với \"cuộc sống không được xem xét thì không đáng sống\" đến Sartre với \"tồn tại có trước bản chất\", triết học giúp con người tìm thấy mục đích và hướng đi trong một thế giới đầy bất định.",
  },
  {
    icon: Users,
    title: "Định hình xã hội và đạo đức",
    content:
      "Những tư tưởng triết học đã trực tiếp định hình cách xã hội vận hành. Khổng Tử xây dựng nền tảng đạo đức cho hàng tỷ người Á Đông. Kant đặt ra mệnh lệnh tuyệt đối làm chuẩn mực đạo đức phổ quát. Marx phân tích cấu trúc giai cấp và thay đổi diện mạo chính trị toàn cầu. Foucault phơi bày mối quan hệ giữa quyền lực và tri thức trong xã hội hiện đại.",
  },
  {
    icon: Globe,
    title: "Triết học trong thế giới hiện đại",
    content:
      "Trong kỷ nguyên trí tuệ nhân tạo, biến đổi khí hậu và toàn cầu hóa, triết học trở nên quan trọng hơn bao giờ hết. Những câu hỏi về đạo đức công nghệ, quyền riêng tư, công bằng xã hội và ý nghĩa của con người trong thời đại máy móc — tất cả đều cần được soi chiếu qua lăng kính triết học. Tư duy phản biện và đối thoại lý tính vẫn là công cụ mạnh mẽ nhất để giải quyết những thách thức của thời đại.",
  },
];

const ConclusionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero banner */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={ctaImg} alt="Trường phái Athens" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-[0.3em] text-warm-gold font-body mb-4 block"
            >
              Lời kết
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6"
            >
              Triết Học —{" "}
              <br className="hidden sm:block" />
              Ngọn Đuốc Soi Sáng Nhân Loại
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-parchment/80 font-serif-body leading-relaxed max-w-3xl mx-auto"
            >
              Từ những câu hỏi đầu tiên của Thales về bản chất vạn vật,
              đến những suy tư hiện đại về tự do và quyền lực — triết học
              luôn là hành trình bất tận của lý trí con người.
            </motion.p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-20 bg-dark-section">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark-text mb-4">
                Vì Sao Triết Học Quan Trọng?
              </h2>
              <p className="text-dark-text/60 font-body max-w-2xl mx-auto leading-relaxed">
                Triết học không nằm trong quá khứ — nó sống trong mỗi câu hỏi chúng ta đặt ra,
                mỗi quyết định chúng ta đưa ra, và mỗi giá trị chúng ta lựa chọn để theo đuổi.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {conclusions.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="bg-dark-card rounded-xl p-8 border border-warm-gold/10 hover:border-warm-gold/30 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-warm-gold/10 flex items-center justify-center group-hover:bg-warm-gold/20 transition-colors">
                      <item.icon className="w-6 h-6 text-warm-gold" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-dark-text">{item.title}</h3>
                  </div>
                  <p className="text-dark-text/70 font-body leading-[1.85] text-[15px]">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing quote */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-[2px] bg-warm-gold/40 mx-auto mb-8" />
              <blockquote className="font-serif-body text-2xl sm:text-3xl text-foreground italic leading-relaxed mb-6">
                "Cuộc sống không được xem xét
                <br className="hidden sm:block" />
                thì không đáng sống."
              </blockquote>
              <p className="font-display text-warm-gold font-semibold text-lg mb-1">Socrates</p>
              <p className="text-muted-foreground text-sm font-body">469–399 TCN</p>
              <div className="w-16 h-[2px] bg-warm-gold/40 mx-auto mt-8 mb-12" />

              <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto mb-10">
                Hành trình khám phá triết học không có điểm kết thúc. Mỗi câu trả lời lại mở ra
                những câu hỏi mới, mỗi tư tưởng lại thắp sáng thêm một góc nhìn về thế giới.
                Hãy tiếp tục đặt câu hỏi, tiếp tục suy tư — bởi đó chính là bản chất
                cao quý nhất của con người.
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-warm-gold hover:text-warm-gold/80 font-body transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Quay lại trang chủ
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConclusionPage;

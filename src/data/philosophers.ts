import thalesImg from "@/assets/thales.png";
import confuciusImg from "@/assets/confucius.png";
import socratesImg from "@/assets/socrates.png";
import platoImg from "@/assets/plato.png";
import aristotleImg from "@/assets/aristotle.png";
import descartesImg from "@/assets/descartes.png";
import kantImg from "@/assets/kant.png";
import hegelImg from "@/assets/hegel.png";
import marxImg from "@/assets/marx.png";
import nietzscheImg from "@/assets/nietzsche.png";
import sartreImg from "@/assets/sartre.png";
import foucaultImg from "@/assets/foucault.png";

export interface Philosopher {
  name: string;
  years: string;
  image: string;
  description: string;
  era: "ancient" | "modern" | "contemporary";
}

export const philosophers: Philosopher[] = [
  { name: "Thales", years: "624–546 TCN", image: thalesImg, description: "Một trong những triết gia đầu tiên của Hy Lạp cổ đại, người đặt nền móng cho triết học tự nhiên.", era: "ancient" },
  { name: "Khổng Tử (Confucius)", years: "551–479 TCN", image: confuciusImg, description: "Triết gia Trung Quốc vĩ đại, người sáng lập Nho giáo với tư tưởng đạo đức và nhân nghĩa.", era: "ancient" },
  { name: "Socrates", years: "469–399 TCN", image: socratesImg, description: "Cha đẻ của triết học phương Tây, nổi tiếng với phương pháp đối thoại Socratic.", era: "ancient" },
  { name: "Plato", years: "427–347 TCN", image: platoImg, description: "Học trò của Socrates, người đề xuất thuyết Thế giới ý niệm và sáng lập học viện Academy.", era: "ancient" },
  { name: "Aristotle", years: "384–322 TCN", image: aristotleImg, description: "Người đặt nền móng cho logic học, khoa học tự nhiên và đạo đức học.", era: "ancient" },
  { name: "René Descartes", years: "1596–1650", image: descartesImg, description: 'Cha đẻ của triết học hiện đại với câu nói "Tôi tư duy nên tôi tồn tại".', era: "modern" },
  { name: "Immanuel Kant", years: "1724–1804", image: kantImg, description: 'Triết gia lớn nhất thời kỳ Khai sáng, tác giả của "Phê phán lý tính thuần túy".', era: "modern" },
  { name: "G.W.F. Hegel", years: "1770–1831", image: hegelImg, description: "Triết gia nổi tiếng với phép biện chứng thesis–antithesis–synthesis.", era: "modern" },
  { name: "Karl Marx", years: "1818–1883", image: marxImg, description: "Cha đẻ của chủ nghĩa Marx với lý thuyết đấu tranh giai cấp và phê phán tư bản.", era: "modern" },
  { name: "Friedrich Nietzsche", years: "1844–1900", image: nietzscheImg, description: 'Nổi tiếng với tư tưởng "Thượng đế đã chết" và khái niệm Siêu nhân (Übermensch).', era: "modern" },
  { name: "Jean-Paul Sartre", years: "1905–1980", image: sartreImg, description: 'Đại diện tiêu biểu của chủ nghĩa hiện sinh. "Tồn tại có trước bản chất."', era: "contemporary" },
  { name: "Michel Foucault", years: "1926–1984", image: foucaultImg, description: "Triết gia phân tích mối quan hệ giữa quyền lực, tri thức và xã hội hiện đại.", era: "contemporary" },
];

export interface PhilosophyQuote {
  quote: string;
  explanation: string;
  author: string;
  school: string;
}

export const philosophyQuotes: PhilosophyQuote[] = [
  { quote: "Tôi chỉ biết một điều, đó là tôi không biết gì cả.", explanation: "Phương pháp đối thoại nhằm tìm kiếm chân lý thông qua việc đặt câu hỏi liên tục, thừa nhận giới hạn của tri thức cá nhân.", author: "Socrates", school: "Phương pháp Socratic" },
  { quote: "Tôi tư duy, nên tôi tồn tại.", explanation: "Hoài nghi có phương pháp — nghi ngờ mọi thứ để tìm ra nền tảng chắc chắn duy nhất cho tri thức: chính sự tư duy.", author: "René Descartes", school: "Chủ nghĩa duy lý" },
  { quote: "Thượng đế đã chết. Và chính chúng ta đã giết ông ta.", explanation: "Phê phán sự sụp đổ của các giá trị truyền thống và kêu gọi con người tự tạo ra ý nghĩa cho cuộc sống.", author: "Friedrich Nietzsche", school: "Chủ nghĩa hư vô / Ý chí quyền lực" },
  { quote: "Tồn tại có trước bản chất.", explanation: "Con người không có bản chất cố định khi sinh ra — chúng ta tự định nghĩa mình qua hành động và lựa chọn.", author: "Jean-Paul Sartre", school: "Chủ nghĩa hiện sinh" },
  { quote: "Lịch sử của mọi xã hội là lịch sử đấu tranh giai cấp.", explanation: "Kinh tế và quan hệ sản xuất là nền tảng quyết định cấu trúc xã hội, chính trị và tư tưởng.", author: "Karl Marx", school: "Chủ nghĩa duy vật lịch sử" },
  { quote: "Hãy dám biết! Hãy có can đảm sử dụng lý trí của chính mình.", explanation: "Phân biệt giữa hiện tượng và vật tự nó, xây dựng đạo đức dựa trên mệnh lệnh tuyệt đối phổ quát.", author: "Immanuel Kant", school: "Triết học phê phán" },
];

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
  id: string;
  name: string;
  years: string;
  image: string;
  description: string;
  era: "ancient" | "modern" | "contemporary";
  country: string;
  school: string;
  works: string[];
  mainThoughts: string[];
  famousQuote: string;
}

export const philosophers: Philosopher[] = [
  {
    id: "thales",
    name: "Thales",
    years: "624–546 TCN",
    image: thalesImg,
    description: "Một trong những triết gia đầu tiên của Hy Lạp cổ đại, người đặt nền móng cho triết học tự nhiên.",
    era: "ancient",
    country: "Hy Lạp cổ đại (Miletus)",
    school: "Trường phái Miletus / Triết học tự nhiên",
    works: [
      "Không có tác phẩm viết nào còn tồn tại",
      "Các lý thuyết được ghi chép bởi Aristotle và Diogenes Laërtius",
    ],
    mainThoughts: [
      "Nước là nguyên tố cơ bản (arché) của vạn vật",
      "Mọi thứ đều có linh hồn (hylozoism)",
      "Dự đoán nhật thực năm 585 TCN — kết hợp triết học với khoa học",
      "Đặt nền móng cho tư duy lý tính thay vì thần thoại",
    ],
    famousQuote: "Nước là khởi nguồn của vạn vật.",
  },
  {
    id: "confucius",
    name: "Khổng Tử (Confucius)",
    years: "551–479 TCN",
    image: confuciusImg,
    description: "Triết gia Trung Quốc vĩ đại, người sáng lập Nho giáo với tư tưởng đạo đức và nhân nghĩa.",
    era: "ancient",
    country: "Trung Quốc (Nước Lỗ)",
    school: "Nho giáo (Confucianism)",
    works: [
      "Luận Ngữ (Analerta)",
      "Ngũ Kinh (Kinh Thi, Kinh Thư, Kinh Lễ, Kinh Dịch, Kinh Xuân Thu)",
    ],
    mainThoughts: [
      "Nhân (仁) — lòng nhân ái, tình yêu thương con người",
      "Lễ (禮) — nghi thức, phép tắc xã hội",
      "Chính danh — mỗi người phải làm đúng vai trò của mình",
      "Tu thân, tề gia, trị quốc, bình thiên hạ",
    ],
    famousQuote: "Kỷ sở bất dục, vật thi ư nhân — Điều mình không muốn, chớ làm cho người khác.",
  },
  {
    id: "socrates",
    name: "Socrates",
    years: "469–399 TCN",
    image: socratesImg,
    description: "Cha đẻ của triết học phương Tây, nổi tiếng với phương pháp đối thoại Socratic.",
    era: "ancient",
    country: "Hy Lạp cổ đại (Athens)",
    school: "Triết học Socratic",
    works: [
      "Không để lại tác phẩm viết nào",
      "Tư tưởng được ghi chép qua Plato và Xenophon",
    ],
    mainThoughts: [
      "Phương pháp Socratic — tìm chân lý qua đối thoại và đặt câu hỏi",
      "Tri thức là đức hạnh — người hiểu biết sẽ hành động đúng",
      "Tự nhận thức bản thân (Gnōthi seauton — Hãy biết chính mình)",
      "Cuộc sống không được xem xét thì không đáng sống",
    ],
    famousQuote: "Tôi chỉ biết một điều, đó là tôi không biết gì cả.",
  },
  {
    id: "plato",
    name: "Plato",
    years: "427–347 TCN",
    image: platoImg,
    description: "Học trò của Socrates, người đề xuất thuyết Thế giới ý niệm và sáng lập học viện Academy.",
    era: "ancient",
    country: "Hy Lạp cổ đại (Athens)",
    school: "Chủ nghĩa duy tâm / Platonism",
    works: [
      "Cộng hòa (Republic)",
      "Bữa tiệc (Symposium)",
      "Phaedo",
      "Timaeus",
      "Biện hộ cho Socrates (Apology)",
    ],
    mainThoughts: [
      "Thuyết Ý niệm (Theory of Forms) — thế giới vật chất chỉ là bản sao của thế giới ý niệm hoàn hảo",
      "Ẩn dụ Hang động — con người bị giam trong bóng tối của nhận thức sai lệch",
      "Nhà nước lý tưởng do triết gia cai trị (Philosopher King)",
      "Linh hồn bất tử và luân hồi",
    ],
    famousQuote: "Sự thiếu hiểu biết — gốc rễ và thân cây của mọi điều ác.",
  },
  {
    id: "aristotle",
    name: "Aristotle",
    years: "384–322 TCN",
    image: aristotleImg,
    description: "Người đặt nền móng cho logic học, khoa học tự nhiên và đạo đức học.",
    era: "ancient",
    country: "Hy Lạp cổ đại (Stagira)",
    school: "Peripateticism / Triết học Aristotle",
    works: [
      "Nicomachean Ethics",
      "Politics",
      "Metaphysics",
      "Poetics",
      "Organon (bộ sách logic)",
    ],
    mainThoughts: [
      "Logic hình thức — tam đoạn luận (syllogism)",
      "Đạo đức trung dung (Golden Mean) — đức hạnh nằm giữa hai thái cực",
      "Bốn nguyên nhân (vật chất, hình thức, tác động, mục đích)",
      "Con người là động vật chính trị (Zoon Politikon)",
    ],
    famousQuote: "Chúng ta là những gì chúng ta làm lặp đi lặp lại. Sự xuất sắc không phải là hành động mà là thói quen.",
  },
  {
    id: "descartes",
    name: "René Descartes",
    years: "1596–1650",
    image: descartesImg,
    description: 'Cha đẻ của triết học hiện đại với câu nói "Tôi tư duy nên tôi tồn tại".',
    era: "modern",
    country: "Pháp",
    school: "Chủ nghĩa duy lý (Rationalism)",
    works: [
      "Discourse on the Method (Luận về phương pháp)",
      "Meditations on First Philosophy",
      "Principles of Philosophy",
    ],
    mainThoughts: [
      "Cogito, ergo sum — Tôi tư duy, nên tôi tồn tại",
      "Hoài nghi có phương pháp (Methodic Doubt)",
      "Nhị nguyên luận — tâm trí và thể xác là hai thực thể riêng biệt",
      "Toán học là nền tảng của tri thức chắc chắn",
    ],
    famousQuote: "Tôi tư duy, nên tôi tồn tại.",
  },
  {
    id: "kant",
    name: "Immanuel Kant",
    years: "1724–1804",
    image: kantImg,
    description: 'Triết gia lớn nhất thời kỳ Khai sáng, tác giả của "Phê phán lý tính thuần túy".',
    era: "modern",
    country: "Phổ (Đức ngày nay)",
    school: "Triết học phê phán / Chủ nghĩa duy tâm siêu nghiệm",
    works: [
      "Critique of Pure Reason (Phê phán lý tính thuần túy)",
      "Critique of Practical Reason",
      "Critique of Judgment",
      "Groundwork of the Metaphysics of Morals",
    ],
    mainThoughts: [
      "Mệnh lệnh tuyệt đối (Categorical Imperative) — hành động theo nguyên tắc phổ quát",
      "Phân biệt hiện tượng (phenomenon) và vật tự nó (noumenon)",
      "Tri thức tiên nghiệm tổng hợp (synthetic a priori)",
      "Khai sáng là thoát khỏi sự non nớt tự gây ra",
    ],
    famousQuote: "Hãy dám biết! Hãy có can đảm sử dụng lý trí của chính mình.",
  },
  {
    id: "hegel",
    name: "G.W.F. Hegel",
    years: "1770–1831",
    image: hegelImg,
    description: "Triết gia nổi tiếng với phép biện chứng thesis–antithesis–synthesis.",
    era: "modern",
    country: "Đức",
    school: "Chủ nghĩa duy tâm tuyệt đối / Biện chứng Hegel",
    works: [
      "Phenomenology of Spirit (Hiện tượng học tinh thần)",
      "Science of Logic",
      "Elements of the Philosophy of Right",
      "Lectures on the Philosophy of History",
    ],
    mainThoughts: [
      "Phép biện chứng: Thesis → Antithesis → Synthesis",
      "Tinh thần tuyệt đối (Absolute Spirit) — lịch sử là quá trình tự nhận thức của tinh thần",
      "Lịch sử có tính tất yếu và mục đích",
      "Tự do là nhận thức về tất yếu",
    ],
    famousQuote: "Cái thực là cái hợp lý, và cái hợp lý là cái thực.",
  },
  {
    id: "marx",
    name: "Karl Marx",
    years: "1818–1883",
    image: marxImg,
    description: "Cha đẻ của chủ nghĩa Marx với lý thuyết đấu tranh giai cấp và phê phán tư bản.",
    era: "contemporary",
    country: "Phổ (Đức ngày nay)",
    school: "Chủ nghĩa duy vật lịch sử / Chủ nghĩa Marx",
    works: [
      "Das Kapital (Tư bản luận)",
      "The Communist Manifesto (Tuyên ngôn Cộng sản)",
      "Economic and Philosophic Manuscripts of 1844",
      "The German Ideology",
    ],
    mainThoughts: [
      "Đấu tranh giai cấp là động lực của lịch sử",
      "Chủ nghĩa duy vật lịch sử — kinh tế quyết định thượng tầng kiến trúc",
      "Sự tha hóa lao động (Alienation) trong xã hội tư bản",
      "Giá trị thặng dư — nguồn gốc của bóc lột",
    ],
    famousQuote: "Lịch sử của mọi xã hội là lịch sử đấu tranh giai cấp.",
  },
  {
    id: "nietzsche",
    name: "Friedrich Nietzsche",
    years: "1844–1900",
    image: nietzscheImg,
    description: 'Nổi tiếng với tư tưởng "Thượng đế đã chết" và khái niệm Siêu nhân (Übermensch).',
    era: "contemporary",
    country: "Phổ (Đức ngày nay)",
    school: "Chủ nghĩa hư vô / Chủ nghĩa hiện sinh tiên phong",
    works: [
      "Thus Spoke Zarathustra (Zarathustra đã nói như thế)",
      "Beyond Good and Evil",
      "The Gay Science",
      "On the Genealogy of Morality",
    ],
    mainThoughts: [
      '"Thượng đế đã chết" — sự sụp đổ của giá trị truyền thống',
      "Übermensch (Siêu nhân) — con người vượt qua giới hạn đạo đức thông thường",
      "Ý chí quyền lực (Will to Power) — động lực cơ bản của con người",
      "Sự trở lại vĩnh cửu (Eternal Recurrence)",
    ],
    famousQuote: "Thượng đế đã chết. Và chính chúng ta đã giết ông ta.",
  },
  {
    id: "sartre",
    name: "Jean-Paul Sartre",
    years: "1905–1980",
    image: sartreImg,
    description: 'Đại diện tiêu biểu của chủ nghĩa hiện sinh. "Tồn tại có trước bản chất."',
    era: "contemporary",
    country: "Pháp",
    school: "Chủ nghĩa hiện sinh (Existentialism)",
    works: [
      "Being and Nothingness (Tồn tại và hư vô)",
      "Nausea (Buồn nôn)",
      "No Exit (Kín cửa)",
      "Existentialism is a Humanism",
    ],
    mainThoughts: [
      "Tồn tại có trước bản chất — con người tự định nghĩa mình qua hành động",
      "Tự do tuyệt đối và trách nhiệm cá nhân",
      "Bad faith (Sự tự lừa dối) — phủ nhận tự do của chính mình",
      '"Địa ngục là người khác" — mâu thuẫn trong quan hệ giữa người với người',
    ],
    famousQuote: "Tồn tại có trước bản chất.",
  },
  {
    id: "foucault",
    name: "Michel Foucault",
    years: "1926–1984",
    image: foucaultImg,
    description: "Triết gia phân tích mối quan hệ giữa quyền lực, tri thức và xã hội hiện đại.",
    era: "contemporary",
    country: "Pháp",
    school: "Hậu cấu trúc luận / Phê phán xã hội",
    works: [
      "Discipline and Punish (Kỷ luật và trừng phạt)",
      "The History of Sexuality",
      "Madness and Civilization",
      "The Order of Things",
    ],
    mainThoughts: [
      "Quyền lực và tri thức luôn đan xen — ai kiểm soát tri thức, kiểm soát quyền lực",
      "Panopticon — mô hình giám sát trong xã hội hiện đại",
      "Khảo cổ học tri thức — phân tích cách tri thức được kiến tạo qua các thời đại",
      "Sinh-quyền lực (Biopower) — nhà nước kiểm soát thân thể và dân số",
    ],
    famousQuote: "Ở đâu có quyền lực, ở đó có sự phản kháng.",
  },
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

export const eraInfo = {
  ancient: {
    title: "Triết Học Cổ Đại",
    subtitle: "Thế kỷ 6 TCN – Thế kỷ 4 TCN",
    description: "Giai đoạn khởi đầu của triết học phương Tây và phương Đông, nơi con người lần đầu tiên đặt câu hỏi về bản chất của vũ trụ, đạo đức và sự tồn tại bằng lý trí thay vì thần thoại. Từ Hy Lạp cổ đại đến Trung Quốc, các triết gia đã đặt nền móng cho mọi trường phái tư tưởng sau này.",
  },
  modern: {
    title: "Triết Học Cận Đại",
    subtitle: "Thế kỷ 17 – Thế kỷ 19",
    description: "Thời kỳ Khai sáng và cách mạng tư tưởng, khi lý trí con người được đề cao hơn bao giờ hết. Các triết gia cận đại đã xây dựng những hệ thống triết học đồ sộ, từ chủ nghĩa duy lý đến phép biện chứng, định hình lại cách nhân loại hiểu về tri thức, đạo đức và lịch sử.",
  },
  contemporary: {
    title: "Triết Học Hiện Đại",
    subtitle: "Thế kỷ 19 – Nay",
    description: "Kỷ nguyên của sự phản tư và giải cấu trúc, khi triết học đối mặt với những thách thức của thế giới công nghiệp hóa, chiến tranh và toàn cầu hóa. Từ chủ nghĩa hiện sinh đến hậu cấu trúc, các triết gia hiện đại đặt câu hỏi sâu sắc về tự do, quyền lực và ý nghĩa cuộc sống.",
  },
};

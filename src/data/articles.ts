import articleSocratic from "@/assets/article-socratic.jpg";
import articleRationalism from "@/assets/article-rationalism.jpg";
import articleExistentialism from "@/assets/article-existentialism.jpg";
import articleConfucianism from "@/assets/article-confucianism.jpg";

export interface Article {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  date: string;
  relatedPhilosopher: string;
  content: string[];
}

export const articles: Article[] = [
  {
    id: "phuong-phap-socratic",
    title: "Phương Pháp Socratic: Nghệ Thuật Đặt Câu Hỏi Để Tìm Chân Lý",
    category: "Tư tưởng",
    image: articleSocratic,
    excerpt: "Phương pháp Socratic không chỉ là một kỹ thuật đối thoại — nó là một triết lý sống, một cách tiếp cận tri thức đã thay đổi toàn bộ nền văn minh phương Tây.",
    date: "15 tháng 2, 2026",
    relatedPhilosopher: "Socrates",
    content: [
      "Trong lịch sử triết học phương Tây, ít có phương pháp nào có sức ảnh hưởng sâu rộng như phương pháp Socratic. Được đặt theo tên của Socrates — triết gia Hy Lạp cổ đại sống vào thế kỷ thứ 5 TCN — phương pháp này đã định hình cách con người tư duy, tranh luận và tìm kiếm chân lý suốt hơn hai nghìn năm qua.",
      "Socrates không bao giờ tự nhận mình là người thông thái. Thay vào đó, ông nổi tiếng với câu nói: 'Tôi chỉ biết một điều, đó là tôi không biết gì cả.' Đây không phải là sự khiêm tốn giả tạo, mà là nền tảng của toàn bộ phương pháp triết học của ông. Bằng cách thừa nhận sự thiếu hiểu biết của mình, Socrates đã mở ra không gian cho sự khám phá và đối thoại chân thành.",
      "Phương pháp Socratic hoạt động thông qua chuỗi câu hỏi được thiết kế cẩn thận. Thay vì giảng dạy trực tiếp, Socrates sẽ hỏi đối phương những câu hỏi dẫn dắt, buộc họ phải tự suy nghĩ và đi đến kết luận. Quá trình này thường bắt đầu bằng việc yêu cầu định nghĩa một khái niệm — chẳng hạn 'Công lý là gì?' hoặc 'Đức hạnh là gì?' — rồi dần dần chỉ ra những mâu thuẫn trong câu trả lời ban đầu.",
      "Điều đáng chú ý là phương pháp này không nhằm mục đích hạ nhục đối phương hay chứng minh họ sai. Mục tiêu thực sự là giúp cả hai bên — người hỏi và người trả lời — tiến gần hơn đến chân lý. Socrates tin rằng tri thức đã tồn tại sẵn trong mỗi người, và nhiệm vụ của triết gia là giúp người khác 'sinh ra' tri thức đó, giống như một bà đỡ giúp đứa trẻ chào đời. Ông gọi phương pháp này là 'maieutics' — thuật đỡ đẻ tri thức.",
      "Trong bối cảnh hiện đại, phương pháp Socratic vẫn giữ nguyên giá trị. Nó được áp dụng rộng rãi trong giáo dục pháp luật, y khoa, và khoa học. Các trường luật hàng đầu như Harvard sử dụng phương pháp Socratic để đào tạo sinh viên tư duy phản biện. Trong trị liệu tâm lý, liệu pháp nhận thức-hành vi (CBT) cũng vay mượn nguyên tắc đặt câu hỏi của Socrates để giúp bệnh nhân nhận ra và thách thức các suy nghĩ tiêu cực.",
      "Bài học lớn nhất từ Socrates có lẽ là: sự khiêm tốn trí tuệ là điều kiện tiên quyết cho mọi tri thức đích thực. Trong một thế giới tràn ngập thông tin và quan điểm, việc dừng lại để đặt câu hỏi — thay vì vội vàng đưa ra câu trả lời — có lẽ chính là điều chúng ta cần nhất."
    ],
  },
  {
    id: "chu-nghia-duy-ly",
    title: "Chủ Nghĩa Duy Lý: Khi Lý Trí Là Nguồn Gốc Của Mọi Tri Thức",
    category: "Lịch sử",
    image: articleRationalism,
    excerpt: "Từ Descartes đến Leibniz, chủ nghĩa duy lý đã khẳng định rằng lý trí — chứ không phải kinh nghiệm — là con đường dẫn đến tri thức chắc chắn.",
    date: "28 tháng 1, 2026",
    relatedPhilosopher: "René Descartes",
    content: [
      "Chủ nghĩa duy lý (Rationalism) là một trong những trường phái triết học quan trọng nhất của thời kỳ cận đại, với niềm tin cốt lõi rằng lý trí con người — chứ không phải kinh nghiệm giác quan — là nguồn gốc đáng tin cậy nhất của tri thức. Trường phái này đã tạo nên một cuộc cách mạng trong cách nhân loại hiểu về bản chất của nhận thức và sự thật.",
      "René Descartes, được mệnh danh là 'cha đẻ của triết học hiện đại', là người đặt nền móng vững chắc nhất cho chủ nghĩa duy lý. Phương pháp hoài nghi có hệ thống của ông — nghi ngờ tất cả mọi thứ cho đến khi tìm được điều không thể nghi ngờ — đã dẫn đến một trong những mệnh đề nổi tiếng nhất trong lịch sử triết học: 'Cogito, ergo sum' — Tôi tư duy, nên tôi tồn tại.",
      "Descartes lập luận rằng mọi thông tin từ giác quan đều có thể sai lệch — mắt có thể bị lừa, tai có thể nghe nhầm — nhưng chính hành động nghi ngờ đã chứng minh sự tồn tại của chủ thể đang nghi ngờ. Từ điểm khởi đầu chắc chắn này, ông xây dựng một hệ thống triết học hoàn chỉnh, bao gồm cả nhị nguyên luận — quan điểm cho rằng tâm trí và thể xác là hai thực thể hoàn toàn khác nhau.",
      "Baruch Spinoza, một triết gia người Hà Lan gốc Do Thái, đã đưa chủ nghĩa duy lý theo một hướng táo bạo hơn. Trong tác phẩm 'Ethics', Spinoza trình bày triết học của mình theo hình thức hình học — với tiên đề, định lý và chứng minh — giống như Euclid viết sách toán. Ông lập luận rằng Chúa và Tự nhiên là một (Deus sive Natura), và mọi thứ trong vũ trụ đều là biểu hiện tất yếu của một thực thể duy nhất.",
      "Gottfried Wilhelm Leibniz, thiên tài người Đức, đã hoàn thiện chủ nghĩa duy lý với thuyết đơn tử (monad). Ông cho rằng vũ trụ được cấu thành từ vô số đơn vị tinh thần không thể phân chia gọi là 'monad', và thế giới chúng ta đang sống là 'thế giới tốt nhất trong tất cả các thế giới khả dĩ'. Leibniz cũng là người đồng phát minh ra phép tính vi phân — minh chứng rõ ràng cho niềm tin rằng lý trí có thể khám phá những chân lý sâu xa nhất.",
      "Di sản của chủ nghĩa duy lý không chỉ giới hạn trong triết học. Nó đã ảnh hưởng sâu sắc đến khoa học hiện đại, toán học và cả trí tuệ nhân tạo. Ý tưởng rằng thế giới có thể được hiểu thông qua suy luận logic và mô hình toán học — thay vì chỉ dựa vào quan sát — vẫn là nền tảng của phương pháp khoa học ngày nay."
    ],
  },
  {
    id: "chu-nghia-hien-sinh",
    title: "Chủ Nghĩa Hiện Sinh: Tự Do, Trách Nhiệm Và Nỗi Lo Âu Của Con Người",
    category: "Đạo đức",
    image: articleExistentialism,
    excerpt: "Từ Kierkegaard đến Sartre, chủ nghĩa hiện sinh đã đặt con người — với tự do và trách nhiệm tuyệt đối — vào trung tâm của triết học.",
    date: "5 tháng 3, 2026",
    relatedPhilosopher: "Jean-Paul Sartre",
    content: [
      "Chủ nghĩa hiện sinh (Existentialism) không phải là một hệ thống triết học đóng kín, mà là một phong trào tư tưởng rộng lớn, thống nhất bởi một câu hỏi trung tâm: Con người là gì, và làm thế nào để sống một cuộc đời có ý nghĩa trong một vũ trụ dường như vô nghĩa? Ra đời từ thế kỷ 19 và phát triển mạnh mẽ sau hai cuộc Thế chiến, chủ nghĩa hiện sinh đã trở thành một trong những trào lưu triết học có ảnh hưởng nhất của thế kỷ 20.",
      "Søren Kierkegaard, triết gia Đan Mạch sống ở thế kỷ 19, thường được coi là 'cha đẻ của chủ nghĩa hiện sinh'. Ông phản đối hệ thống triết học trừu tượng của Hegel, cho rằng triết học phải bắt đầu từ cá nhân cụ thể — với những lo âu, đau khổ và lựa chọn thực sự. Kierkegaard mô tả 'bước nhảy đức tin' (leap of faith) — khoảnh khắc khi con người phải đưa ra quyết định mà không có sự đảm bảo nào từ lý trí hay logic.",
      "Friedrich Nietzsche, dù không tự nhận mình là người hiện sinh, đã đặt nền móng quan trọng cho phong trào này. Tuyên bố 'Thượng đế đã chết' của ông không phải là lời khẳng định vô thần đơn thuần, mà là nhận định rằng các giá trị truyền thống — tôn giáo, đạo đức, ý nghĩa — đã mất đi sức mạnh trong thế giới hiện đại. Nietzsche thách thức con người phải tự tạo ra giá trị của mình thông qua khái niệm Übermensch — Siêu nhân.",
      "Jean-Paul Sartre, nhân vật trung tâm của chủ nghĩa hiện sinh thế kỷ 20, đã hệ thống hóa tư tưởng hiện sinh trong tác phẩm khổng lồ 'Tồn tại và hư vô' (1943). Mệnh đề cốt lõi của Sartre — 'Tồn tại có trước bản chất' — có nghĩa là con người không có một 'bản chất' hay 'mục đích' được định sẵn. Chúng ta tồn tại trước, rồi tự định nghĩa mình qua hành động và lựa chọn. Điều này dẫn đến một tự do tuyệt đối — nhưng cũng là một gánh nặng khổng lồ.",
      "Simone de Beauvoir, bạn đời và đồng minh trí tuệ của Sartre, đã mở rộng chủ nghĩa hiện sinh sang lĩnh vực giới tính và bình đẳng. Trong 'Giới tính thứ hai' (1949), bà viết: 'Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ' — một ứng dụng trực tiếp của nguyên tắc 'tồn tại có trước bản chất' vào vấn đề giới. Tác phẩm này đã trở thành nền tảng của phong trào nữ quyền hiện đại.",
      "Albert Camus, dù từ chối nhãn hiệu 'hiện sinh', đã đóng góp một góc nhìn độc đáo qua triết học phi lý (absurdism). Trong 'Huyền thoại Sisyphus', Camus so sánh con người với Sisyphus — bị kết án lăn tảng đá lên đồi rồi nhìn nó lăn xuống, mãi mãi. Nhưng thay vì tuyệt vọng, Camus kết luận: 'Chúng ta phải hình dung Sisyphus hạnh phúc.' Ý nghĩa không nằm trong kết quả, mà trong chính hành động sống.",
      "Di sản của chủ nghĩa hiện sinh vẫn sống động trong thế giới hiện đại. Từ tâm lý trị liệu hiện sinh đến văn học, điện ảnh và nghệ thuật đương đại, những câu hỏi mà Kierkegaard, Nietzsche, Sartre và Camus đặt ra vẫn còn nguyên sức mạnh. Trong một thế giới ngày càng phức tạp và bất định, lời kêu gọi của chủ nghĩa hiện sinh — hãy can đảm đối mặt với tự do, chấp nhận trách nhiệm và tự tạo ra ý nghĩa — có lẽ cấp thiết hơn bao giờ hết."
    ],
  },
  {
    id: "nho-giao-va-dao-duc",
    title: "Nho Giáo: Đạo Đức, Nhân Nghĩa Và Trật Tự Xã Hội Phương Đông",
    category: "Đạo đức",
    image: articleConfucianism,
    excerpt: "Với hơn 2.500 năm lịch sử, Nho giáo của Khổng Tử đã định hình nền văn minh Đông Á và vẫn ảnh hưởng sâu sắc đến xã hội ngày nay.",
    date: "10 tháng 2, 2026",
    relatedPhilosopher: "Khổng Tử (Confucius)",
    content: [
      "Nho giáo (Confucianism) không chỉ là một trường phái triết học — nó là một hệ thống đạo đức, chính trị và xã hội đã chi phối nền văn minh Đông Á suốt hơn hai thiên niên kỷ. Được sáng lập bởi Khổng Tử (551–479 TCN) trong thời kỳ Xuân Thu loạn lạc của Trung Quốc, Nho giáo đã phát triển từ lời dạy của một thầy giáo khiêm nhường thành quốc giáo của nhiều đế chế hùng mạnh.",
      "Khái niệm trung tâm của Nho giáo là Nhân (仁) — lòng nhân ái, tình yêu thương giữa con người với con người. Khổng Tử định nghĩa Nhân không phải là một cảm xúc mơ hồ, mà là một nguyên tắc hành động cụ thể, được thể hiện qua câu nói nổi tiếng: 'Kỷ sở bất dục, vật thi ư nhân' — Điều mình không muốn, chớ làm cho người khác. Đây chính là phiên bản phương Đông của Quy tắc Vàng (Golden Rule) mà nhiều nền văn minh đều chia sẻ.",
      "Bên cạnh Nhân, Lễ (禮) là trụ cột thứ hai của Nho giáo. Lễ không chỉ là nghi thức hay phép tắc bề ngoài, mà là toàn bộ hệ thống quy phạm xã hội giúp duy trì trật tự và hài hòa. Khổng Tử tin rằng khi mỗi người thực hiện đúng vai trò của mình — vua ra vua, tôi ra tôi, cha ra cha, con ra con — xã hội sẽ tự nhiên ổn định. Đây là học thuyết Chính danh (正名) — sự tương ứng giữa danh phận và thực tế.",
      "Tư tưởng 'Tu thân, tề gia, trị quốc, bình thiên hạ' là lộ trình tu dưỡng mà Khổng Tử vạch ra cho mỗi cá nhân. Theo đó, mọi thay đổi xã hội phải bắt đầu từ sự hoàn thiện bản thân. Một người không thể quản lý gia đình nếu chưa tu dưỡng đạo đức cá nhân, không thể trị quốc nếu gia đình không hòa thuận, và không thể mang lại hòa bình cho thiên hạ nếu quốc gia không ổn định.",
      "Ảnh hưởng của Nho giáo không giới hạn ở Trung Quốc. Nó đã lan tỏa sang Nhật Bản, Hàn Quốc, Việt Nam và toàn bộ khu vực Đông Á, định hình hệ thống giáo dục, cấu trúc gia đình, đạo đức kinh doanh và quan hệ xã hội. Tại Việt Nam, Nho giáo ảnh hưởng sâu sắc đến truyền thống hiếu học, tôn sư trọng đạo và hệ thống khoa cử kéo dài hàng thế kỷ.",
      "Trong thế giới hiện đại, Nho giáo đang trải qua một cuộc phục hưng thú vị. Nhiều học giả cho rằng các giá trị Nho giáo — như sự hài hòa xã hội, trách nhiệm cộng đồng, tôn trọng giáo dục và đạo đức cá nhân — có thể bổ sung cho tư tưởng phương Tây và giúp giải quyết nhiều thách thức của xã hội đương đại, từ khủng hoảng đạo đức đến sự phân cực chính trị."
    ],
  },
];

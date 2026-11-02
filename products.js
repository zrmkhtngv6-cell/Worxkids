// ============================================================
//  WORX Kids store settings and product list
//  Edit this file to add products, change prices or update
//  payment details. Both the English and Arabic pages use it.
// ============================================================

const STORE = {
  // WhatsApp number that receives orders (international format, digits only)
  whatsapp: '201117776589',
  // Bank account customers transfer to with InstaPay. Leave accountNumber empty to send the details on WhatsApp instead.
  bank: 'EBank',
  accountName: 'WORX',
  accountNumber: '2020302314501016',
  // Optional InstaPay payment link (starts with https://ipn.eg/...). Leave empty if you don't have one.
  instapayLink: '',
  // Delivery fees in EGP: 0 = free, null = confirmed on WhatsApp
  deliveryCairo: 0,
  deliveryOutsideCairo: null,
};

// Shop sections, in the order they appear. Each section has a picture in assets/img/products/.
//   menu: true also puts the section in the menu under the logo
//   furniture: true also lists it under "Ready-made kids' furniture" in the Kids' Rooms area
const SECTIONS = [
  { id: 'shelves', img: 'bookshelf.svg', menu: true, furniture: true, name: { en: 'Shelves & Bookcases', ar: 'رفوف ومكتبات' } },
  { id: 'beds', img: 'house-bed.svg', menu: true, furniture: true, name: { en: "Kids' Beds", ar: 'سراير أطفال' } },
  { id: 'wardrobes', img: 'wardrobe.svg', menu: true, furniture: true, name: { en: 'Wardrobes', ar: 'دواليب' } },
  { id: 'kitchens', img: 'play-kitchen.svg', menu: true, name: { en: 'Play Kitchens', ar: 'مطابخ لعب' } },
  { id: 'climbing', img: 'climbing-triangle.svg', menu: true, name: { en: 'Climbing Sets', ar: 'ألعاب التسلق' } },
  { id: 'arches', img: 'climbing-arch.svg', name: { en: 'Climbing Arches & Rockers', ar: 'أقواس تسلق وهزازات' } },
  { id: 'dollhouses', img: 'dollhouse.svg', name: { en: 'Dollhouses', ar: 'بيوت دمى' } },
  { id: 'shops', img: 'market-stall.svg', name: { en: 'Play Shops & Market Stalls', ar: 'محلات وأكشاك لعب' } },
  { id: 'baby', img: 'baby-toys.svg', name: { en: 'Baby & Toddler Wooden Toys', ar: 'ألعاب خشبية للرضع والأطفال الصغار' } },
  { id: 'tents', img: 'teepee.svg', name: { en: 'Play Tents', ar: 'خيام لعب' } },
  { id: 'easels', img: 'easel.svg', name: { en: 'Easels & Art', ar: 'حوامل رسم وفنون' } },
  { id: 'tables', img: 'table-chairs.svg', name: { en: "Kids' Tables & Chairs", ar: 'طاولات وكراسي أطفال' } },
];

// One entry per product.
//   id     short unique name (letters and dashes), never change it once orders exist
//   section  id of the section it belongs to (see SECTIONS)
//   price  in EGP, e.g. 4500. Use null to show "Price on request" (no add-to-cart button)
//   oldPrice  optional, shown crossed out next to the price for a sale
//   badge  optional label on the photo, e.g. { en: 'New', ar: 'جديد' }
//   images photos in assets/img/products/ (square photos look best). The first is the main photo,
//          the second shows when hovering, and all of them appear in the product details.
//   desc   short text for the product card
//   long   optional longer text for the product details window
//   details optional bullet points (size, material...) for the product details window
const PRODUCTS = [
  {
    id: 'fish-shelf', section: 'shelves', price: 1500,
    images: ['fish-shelf.jpg', 'fish-shelf-wall.jpg', 'fish-shelf-size.jpg'],
    badge: { en: 'New', ar: 'جديد' },
    name: { en: 'Fish Shelf', ar: 'رف السمكة' },
    desc: {
      en: 'A playful wooden fish that holds books, toys and baby essentials. Stand it on the floor or hang it on the wall.',
      ar: 'سمكة خشبية مرحة تحمل الكتب والألعاب وأغراض الرضيع. ضعها واقفة على الأرض أو علّقها على الحائط.',
    },
    long: {
      en: "Bring a little ocean magic into your child's room. The Fish Shelf is made from natural wood, sanded smooth and shaped like a friendly fish: a pointed head, curved half-moon shelves for ribs and a tail that keeps it steady. Stand it up as a mini bookcase for picture books and favourite toys, or hang it on the wall above the crib for baby essentials. Storage and decoration in one, it suits any nursery or playroom.",
      ar: 'أضف لمسة من سحر البحر إلى غرفة طفلك. رف السمكة مصنوع من الخشب الطبيعي بسطح ناعم، ومصمم على شكل سمكة لطيفة: رأس مدبب، ورفوف نصف دائرية كأنها الضلوع، وذيل يثبته بأمان. ضعه واقفاً كمكتبة صغيرة لكتب القصص والألعاب المفضلة، أو علّقه على الحائط فوق سرير الطفل لأغراض الرضيع. يجمع بين التخزين والديكور ويناسب أي غرفة أطفال أو غرفة لعب.',
    },
    details: {
      en: ['Size (standing): 65 cm tall × 24.5 cm wide', 'Natural wood with a smooth, sanded finish', '4 curved shelves for books, toys and little treasures', 'Use it standing on the floor or mounted on the wall', 'Free delivery in Cairo'],
      ar: ['المقاس (واقف): ارتفاع 65 سم × عرض 24.5 سم', 'خشب طبيعي بتشطيب ناعم', '4 رفوف منحنية للكتب والألعاب والأشياء الصغيرة', 'يُستخدم واقفاً على الأرض أو معلقاً على الحائط', 'توصيل مجاني داخل القاهرة'],
    },
  },
  {
    id: 'house-of-books', section: 'shelves', price: 2000,
    images: ['house-of-books.jpg', 'house-of-books-room.jpg', 'house-of-books-size.jpg'],
    badge: { en: 'New', ar: 'جديد' },
    name: { en: 'House of Books', ar: 'بيت الكتب' },
    desc: {
      en: "A little wooden house for your child's favourite books. Covers face forward so they can pick their own story, and the handle makes it easy to carry around.",
      ar: 'بيت خشبي صغير لكتب طفلك المفضلة. الكتب تظهر بأغلفتها للأمام ليختار قصته بنفسه، والمقبض يجعل نقله سهلاً.',
    },
    long: {
      en: "Make story time a habit with the House of Books. Shaped like a little house with window cut-outs and a playful scalloped edge, it keeps picture books facing forward so even the smallest readers can see the covers and choose their own story. Two compartments hold books at the front and toys or more books at the back, and the wooden handle on top makes it easy to carry from the bedroom to the living room. Made from natural pine with rounded, child-safe edges, it sits on the floor right at your child's height.",
      ar: 'اجعل وقت القصة عادة يومية مع بيت الكتب. مصمم على شكل بيت صغير بنوافذ مفرغة وحافة متموجة مرحة، ويحفظ كتب الصور بأغلفتها للأمام ليرى حتى أصغر القراء الأغلفة ويختاروا قصتهم بأنفسهم. يحتوي على قسمين: الكتب في الأمام والألعاب أو مزيد من الكتب في الخلف، والمقبض الخشبي في الأعلى يسهّل نقله من غرفة النوم إلى غرفة المعيشة. مصنوع من خشب الصنوبر الطبيعي بحواف دائرية آمنة للأطفال، ويوضع على الأرض بارتفاع طفلك تماماً.',
    },
    details: {
      en: ['Size: 31.5 cm wide × 19.7 cm deep × 29.3 cm tall', 'Natural pine wood with rounded, child-safe edges', 'Two compartments for books and small toys', 'Front-facing books at your child\'s height', 'Wooden carry handle', 'Free delivery in Cairo'],
      ar: ['المقاس: عرض 31.5 سم × عمق 19.7 سم × ارتفاع 29.3 سم', 'خشب صنوبر طبيعي بحواف دائرية آمنة للأطفال', 'قسمان للكتب والألعاب الصغيرة', 'الكتب بواجهة أمامية بارتفاع طفلك', 'مقبض خشبي للحمل', 'توصيل مجاني داخل القاهرة'],
    },
  },
  {
    id: 'wave-shelf', section: 'shelves', price: 1000,
    images: ['wave-shelf.jpg', 'wave-shelf-room.jpg', 'wave-shelf-size.jpg'],
    badge: { en: 'New', ar: 'جديد' },
    name: { en: 'Wave Shelf', ar: 'رف الموجة' },
    desc: {
      en: 'A wall shelf with a playful wave edge that shows off books with their covers facing out. Hang it low so little hands can reach.',
      ar: 'رف حائط بحافة متموجة مرحة يعرض الكتب بأغلفتها للأمام. علّقه منخفضاً لتصل إليه الأيدي الصغيرة.',
    },
    long: {
      en: "Turn your child's wall into a little library. The Wave Shelf holds picture books with their covers facing out, so children can spot their favourite story and pick it themselves, while the gentle wave along the front rail keeps books in place and adds a playful touch. Hang it low for toddlers to reach, or line up two or three for a full reading wall. It's just as lovely for displaying small toys, figures and treasures. Made from natural wood with smooth, rounded corners.",
      ar: 'حوّل حائط غرفة طفلك إلى مكتبة صغيرة. رف الموجة يحمل كتب الصور بأغلفتها للأمام، ليرى الأطفال قصتهم المفضلة ويختاروها بأنفسهم، بينما تحافظ الموجة الهادئة على الحافة الأمامية على ثبات الكتب وتضيف لمسة مرحة. علّقه منخفضاً ليصل إليه الصغار، أو ضع رفين أو ثلاثة بجانب بعض لحائط قراءة كامل. ويناسب أيضاً لعرض الألعاب الصغيرة والمجسمات والكنوز الصغيرة. مصنوع من الخشب الطبيعي بزوايا ناعمة ودائرية.',
    },
    details: {
      en: ['Price is for one shelf', 'Size: 41 cm long × 8 cm deep × 10 cm tall', 'Wave-edged front rail (5 cm) keeps books in place', 'Front-facing display for books, toys and figures', 'Wall-mounted: hang it at your child\'s height', 'Natural wood with smooth, rounded corners', 'Free delivery in Cairo'],
      ar: ['السعر لرف واحد', 'المقاس: طول 41 سم × عمق 8 سم × ارتفاع 10 سم', 'حافة أمامية متموجة (5 سم) تحافظ على ثبات الكتب', 'عرض أمامي للكتب والألعاب والمجسمات', 'يُعلّق على الحائط بارتفاع طفلك', 'خشب طبيعي بزوايا ناعمة ودائرية', 'توصيل مجاني داخل القاهرة'],
    },
  },
  {
    id: 'textile-bookshelf', section: 'shelves', price: 2500,
    images: ['textile-bookshelf.jpg', 'textile-bookshelf-room.jpg', 'textile-bookshelf-size.jpg'],
    badge: { en: 'New', ar: 'جديد' },
    name: { en: 'Textile Book Shelves', ar: 'رفوف الكتب القماشية' },
    desc: {
      en: 'A tall book display with soft fabric slings that keep every cover in view, so little readers can see all their books and choose their own.',
      ar: 'مكتبة عرض طويلة بجيوب قماشية ناعمة تُظهر غلاف كل كتاب، ليرى الصغار كل كتبهم ويختاروا بأنفسهم.',
    },
    long: {
      en: "Give your child's books a home they can't wait to explore. The Textile Book Shelves have tiered slings of soft, cream-coloured fabric stretched across a natural wood frame, so every book faces forward and every cover is easy to see. The lower slings sit right at a toddler's reach, the fabric is gentle on book corners and little fingers, and the angled frame stands steady on the floor. It holds a whole collection of picture books in a small space, perfect for a bedroom, playroom or reading corner.",
      ar: 'امنح كتب طفلك مكاناً يتشوق لاكتشافه. رفوف الكتب القماشية فيها جيوب متدرجة من القماش الناعم بلون كريمي مشدودة على إطار من الخشب الطبيعي، فيظهر كل كتاب بواجهته ويسهل رؤية كل غلاف. الجيوب السفلية في متناول الأطفال الصغار، والقماش لطيف على أطراف الكتب والأصابع الصغيرة، والإطار المائل ثابت على الأرض. تتسع لمجموعة كاملة من كتب الصور في مساحة صغيرة، ومثالية لغرفة النوم أو غرفة اللعب أو ركن القراءة.',
    },
    details: {
      en: ['Size: 53 cm wide × 30 cm deep × 79 cm tall', 'Tiered fabric slings keep every cover facing forward', 'Soft cream fabric, gentle on books and little fingers', 'Natural wood frame with a steady, angled stand', 'Holds a whole book collection in a small space', 'Free delivery in Cairo'],
      ar: ['المقاس: عرض 53 سم × عمق 30 سم × ارتفاع 79 سم', 'جيوب قماشية متدرجة تُظهر كل غلاف للأمام', 'قماش كريمي ناعم لطيف على الكتب والأصابع الصغيرة', 'إطار من الخشب الطبيعي بقاعدة مائلة ثابتة', 'تتسع لمجموعة كتب كاملة في مساحة صغيرة', 'توصيل مجاني داخل القاهرة'],
    },
  },
  {
    id: 'safari-car-bed', section: 'beds', price: 12000,
    images: ['safari-car-bed.jpg', 'safari-car-bed-room.jpg', 'safari-car-bed-size.jpg'],
    badge: { en: 'New', ar: 'جديد' },
    name: { en: 'Safari Car Bed', ar: 'سرير سيارة السفاري' },
    desc: {
      en: 'A wooden safari car bed for little explorers. Low to the floor with high sides, so they can climb in by themselves and sleep safely.',
      ar: 'سرير خشبي على شكل سيارة سفاري للمستكشفين الصغار. قريب من الأرض بجوانب عالية، ليصعدوا بأنفسهم وينامون بأمان.',
    },
    long: {
      en: "Bedtime becomes an adventure in the Safari Car Bed. Built like an off-road explorer's car, with big round wheels, window cut-outs, a front grille and headlights, it turns the move to a big-kid bed into something your child can't wait for. It sits low to the floor so toddlers can climb in and out on their own, and the high sides keep them safely tucked in through the night. Made from smooth natural wood, it fits a standard 80 × 190 cm mattress and has room for years of bedtime stories, pretend safaris and sweet dreams.",
      ar: 'يصبح وقت النوم مغامرة مع سرير سيارة السفاري. مصمم مثل سيارة المستكشفين في البرية، بعجلات كبيرة دائرية ونوافذ مفرغة وشبكة أمامية ومصابيح، ليجعل الانتقال إلى سرير الكبار شيئاً ينتظره طفلك بشوق. السرير قريب من الأرض ليصعد الصغار وينزلوا بأنفسهم، والجوانب العالية تحافظ عليهم بأمان طوال الليل. مصنوع من الخشب الطبيعي الناعم، ويناسب مرتبة قياسية 80 × 190 سم، ويتسع لسنوات من حكايات قبل النوم ورحلات السفاري الخيالية والأحلام الجميلة.',
    },
    details: {
      en: ['Size: 207 cm long × 94 cm wide × 52 cm tall', 'Fits an 80 × 190 cm mattress (mattress not included)', 'Low to the floor, so toddlers can climb in by themselves', '35 cm high sides keep little ones safely in bed', 'Car details: wheels, windows, grille and headlights', 'Natural wood with smooth edges', 'Free delivery in Cairo'],
      ar: ['المقاس: طول 207 سم × عرض 94 سم × ارتفاع 52 سم', 'يناسب مرتبة 80 × 190 سم (المرتبة غير مشمولة)', 'قريب من الأرض ليصعد الصغار بأنفسهم', 'جوانب بارتفاع 35 سم تحافظ على الطفل بأمان في السرير', 'تفاصيل السيارة: عجلات ونوافذ وشبكة أمامية ومصابيح', 'خشب طبيعي بحواف ناعمة', 'توصيل مجاني داخل القاهرة'],
    },
  },
  {
    id: 'cozy-house-bed', section: 'beds', price: 10000,
    images: ['cozy-house-bed.jpg', 'cozy-house-bed-pink.jpg', 'cozy-house-bed-green.jpg', 'cozy-house-bed-size.jpg'],
    badge: { en: 'New', ar: 'جديد' },
    name: { en: 'Cozy House Bed', ar: 'سرير البيت الدافئ' },
    desc: {
      en: 'A Montessori-style floor bed with a house-shaped roof and safety rails all around. Low enough for little ones to climb in and out on their own.',
      ar: 'سرير أرضي بأسلوب مونتيسوري بسقف على شكل بيت وسور حماية من كل الجهات. منخفض ليصعد الصغار وينزلوا بأنفسهم.',
    },
    long: {
      en: "Give your child a little house of their own. The Cozy House Bed sits low to the floor in the Montessori style, so toddlers can climb in and out by themselves, while rails on every side keep them safe through the night. A front opening makes getting in easy, and the house-shaped roof frame is perfect for bunting, fairy lights or a soft canopy, so you can make it truly theirs. Made from natural pine with a slatted base, it is a bed your child can grow with from toddler years well into childhood.",
      ar: 'امنح طفلك بيتاً صغيراً خاصاً به. سرير البيت الدافئ قريب من الأرض على طريقة مونتيسوري، ليصعد الصغار وينزلوا بأنفسهم، بينما يحافظ السور من كل الجهات على أمانهم طوال الليل. فتحة أمامية تسهّل الدخول، وإطار السقف على شكل بيت مثالي لتعليق الزينة أو الإضاءة أو قماش الناموسية، لتجعله خاصاً بطفلك تماماً. مصنوع من خشب الصنوبر الطبيعي بقاعدة من الشرائح الخشبية، سرير يكبر معه طفلك من سنوات الطفولة الأولى وما بعدها.',
    },
    details: {
      en: ['Size: 195 cm long × 98 cm wide × 146 cm tall', 'Fits a 90 × 190 cm mattress (mattress not included)', 'Low Montessori floor bed with a slatted base', 'Safety rails on all sides, with an opening to climb in and out', 'House-shaped roof frame, ready for bunting, lights or a canopy', 'Natural pine wood', 'Free delivery in Cairo'],
      ar: ['المقاس: طول 195 سم × عرض 98 سم × ارتفاع 146 سم', 'يناسب مرتبة 90 × 190 سم (المرتبة غير مشمولة)', 'سرير أرضي منخفض بأسلوب مونتيسوري بقاعدة من الشرائح الخشبية', 'سور حماية من كل الجهات مع فتحة للصعود والنزول', 'إطار سقف على شكل بيت جاهز للزينة أو الإضاءة أو الناموسية', 'خشب صنوبر طبيعي', 'توصيل مجاني داخل القاهرة'],
    },
  },
  {
    id: 'dreamland-floor-bed', section: 'beds', price: 10000,
    images: ['dreamland-floor-bed.jpg', 'dreamland-floor-bed-room.jpg', 'dreamland-floor-bed-size.jpg'],
    badge: { en: 'New', ar: 'جديد' },
    name: { en: 'Dreamland Floor Bed', ar: 'سرير أرض الأحلام' },
    desc: {
      en: 'A big, low Montessori floor bed with safety rails all around. Roomy enough for siblings, sleepovers or a parent at bedtime.',
      ar: 'سرير أرضي كبير ومنخفض بأسلوب مونتيسوري بسور حماية من كل الجهات. واسع للإخوة أو للضيوف أو لأحد الوالدين وقت النوم.',
    },
    long: {
      en: "The Dreamland Floor Bed gives little ones plenty of room to sleep, play and grow. It sits just above the floor in the Montessori style, so children can climb in and out by themselves, while rails on every side keep them safely tucked in. An opening at the front makes getting in easy. At almost a metre and a half wide, it's spacious enough for two siblings to share, for sleepovers, or for a parent to lie down for bedtime stories. Made from natural pine, it brings a calm, warm feel to any kids' room.",
      ar: 'سرير أرض الأحلام يمنح الصغار مساحة واسعة للنوم واللعب والنمو. يرتفع قليلاً عن الأرض على طريقة مونتيسوري، ليصعد الأطفال وينزلوا بأنفسهم، بينما يحافظ السور من كل الجهات على أمانهم. فتحة في الأمام تسهّل الدخول. بعرض يقارب متراً ونصف، يتسع لأخوين معاً أو للضيوف أو لأحد الوالدين وقت حكايات قبل النوم. مصنوع من خشب الصنوبر الطبيعي، ويضيف إحساساً هادئاً ودافئاً لأي غرفة أطفال.',
    },
    details: {
      en: ['Size: 197 cm long × 146 cm wide × 50 cm tall', 'Fits a 140 × 190 cm mattress (mattress not included)', 'Low Montessori floor bed, just 8 cm off the floor', 'Safety rails on all sides, with an opening to climb in and out', 'Roomy enough for siblings or a parent at bedtime', 'Natural pine wood', 'Free delivery in Cairo'],
      ar: ['المقاس: طول 197 سم × عرض 146 سم × ارتفاع 50 سم', 'يناسب مرتبة 140 × 190 سم (المرتبة غير مشمولة)', 'سرير أرضي منخفض بأسلوب مونتيسوري، يرتفع 8 سم فقط عن الأرض', 'سور حماية من كل الجهات مع فتحة للصعود والنزول', 'واسع للإخوة أو لأحد الوالدين وقت النوم', 'خشب صنوبر طبيعي', 'توصيل مجاني داخل القاهرة'],
    },
  },
  {
    id: 'little-nest-cot', section: 'beds', price: 8000,
    images: ['little-nest-cot.jpg', 'little-nest-cot-room.jpg', 'little-nest-cot-size.jpg'],
    badge: { en: 'New', ar: 'جديد' },
    name: { en: 'Little Nest Cot', ar: 'سرير العش الصغير' },
    desc: {
      en: 'A warm wooden baby cot with rounded rails and two big storage drawers underneath, keeping everything your baby needs close at hand.',
      ar: 'سرير خشبي دافئ للرضيع بقضبان دائرية ودرجين كبيرين للتخزين أسفله، ليبقى كل ما يحتاجه طفلك في متناول يدك.',
    },
    long: {
      en: "Welcome your baby home to the Little Nest Cot. Its solid wooden end panels and smooth, rounded rails create a calm, cosy space for sleep, and you can see your little one clearly from every side. Underneath, two deep drawers glide out to hold nappies, blankets, sheets and tiny clothes, so the nursery stays tidy and everything you need is right where you are. With its warm honey-toned wood and clean, simple lines, it fits beautifully into any nursery.",
      ar: 'استقبل طفلك في البيت مع سرير العش الصغير. ألواحه الخشبية الصلبة على الجانبين وقضبانه الدائرية الناعمة تصنع مساحة هادئة ودافئة للنوم، وتستطيع رؤية طفلك بوضوح من كل الجهات. وفي الأسفل درجان عميقان ينزلقان بسهولة لحفظ الحفاضات والبطانيات والملايات والملابس الصغيرة، لتبقى غرفة الطفل مرتبة وكل ما تحتاجه بجانبك. بلون الخشب العسلي الدافئ وخطوطه البسيطة الأنيقة، يناسب أي غرفة أطفال.',
    },
    details: {
      en: ['Size: 140 cm long × 70 cm wide × 85 cm tall', 'Two large storage drawers underneath (30 cm high)', 'Smooth, rounded rails with clear views of your baby', 'Solid wooden end panels', 'Warm honey-toned natural wood', 'Mattress not included', 'Free delivery in Cairo'],
      ar: ['المقاس: طول 140 سم × عرض 70 سم × ارتفاع 85 سم', 'درجان كبيران للتخزين أسفل السرير (ارتفاع 30 سم)', 'قضبان دائرية ناعمة تتيح رؤية طفلك بوضوح', 'ألواح خشبية صلبة على الجانبين', 'خشب طبيعي بلون عسلي دافئ', 'المرتبة غير مشمولة', 'توصيل مجاني داخل القاهرة'],
    },
  },
  {
    id: 'rainbow-arch-cot', section: 'beds', price: 7000,
    images: ['rainbow-arch-cot.jpg', 'rainbow-arch-cot-room.jpg', 'rainbow-arch-cot-size.jpg'],
    badge: { en: 'New', ar: 'جديد' },
    name: { en: 'Rainbow Arch Cot', ar: 'سرير قوس قزح' },
    desc: {
      en: 'A dreamy wooden baby cot with soft rainbow-arched ends and rounded spindles all around, for peaceful nights in a beautiful nursery.',
      ar: 'سرير خشبي حالم للرضيع بأطراف مقوسة كقوس قزح وقضبان دائرية من كل الجهات، لليالٍ هادئة في غرفة طفل جميلة.',
    },
    long: {
      en: "Let your baby drift off under a little wooden rainbow. The Rainbow Arch Cot has gently curved, arch-shaped ends and smooth, rounded spindles on every side, so air flows freely and you can always see your little one. The tall ends give the nursery a soft, dreamy look, while the sturdy frame and steady legs keep everything safe and secure. Made from natural pine with a warm, honey-toned finish, it's a timeless piece that makes any nursery feel calm and cosy.",
      ar: 'دع طفلك ينام تحت قوس قزح خشبي صغير. سرير قوس قزح بأطراف مقوسة بانحناء ناعم وقضبان دائرية ملساء من كل الجهات، ليتدفق الهواء بحرية وتستطيع رؤية طفلك دائماً. الأطراف العالية تمنح غرفة الطفل مظهراً ناعماً وحالماً، بينما يحافظ الإطار المتين والأرجل الثابتة على الأمان. مصنوع من خشب الصنوبر الطبيعي بلون عسلي دافئ، قطعة كلاسيكية تجعل أي غرفة أطفال هادئة ودافئة.',
    },
    details: {
      en: ['Size: 140 cm long × 70 cm wide × 110 cm tall', 'Side rails 85 cm high', 'Rainbow-arched ends with rounded spindles', 'Open spindles all around for airflow and clear views', 'Natural pine wood with a warm honey finish', 'Mattress not included', 'Free delivery in Cairo'],
      ar: ['المقاس: طول 140 سم × عرض 70 سم × ارتفاع 110 سم', 'ارتفاع الجوانب 85 سم', 'أطراف مقوسة كقوس قزح بقضبان دائرية', 'قضبان مفتوحة من كل الجهات لتهوية جيدة ورؤية واضحة', 'خشب صنوبر طبيعي بلون عسلي دافئ', 'المرتبة غير مشمولة', 'توصيل مجاني داخل القاهرة'],
    },
  },
];

// Kids' rooms WORX has designed and built, shown in the "Rooms we've designed" gallery.
// Put the photos in assets/img/rooms/ and add one entry per room, for example:
//   { images: ['nursery-1.jpg', 'nursery-2.jpg'], title: { en: 'Nursery in New Cairo', ar: 'غرفة رضيع في التجمع' } },
// While the list is empty, the gallery says photos are coming soon.
const ROOMS = [
];

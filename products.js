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
];

// Kids' rooms WORX has designed and built, shown in the "Rooms we've designed" gallery.
// Put the photos in assets/img/rooms/ and add one entry per room, for example:
//   { images: ['nursery-1.jpg', 'nursery-2.jpg'], title: { en: 'Nursery in New Cairo', ar: 'غرفة رضيع في التجمع' } },
// While the list is empty, the gallery says photos are coming soon.
const ROOMS = [
];

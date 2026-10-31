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

// Category ids are used by the filters and menu in index.html
const CATEGORIES = {
  climbing: { en: 'Climbing & Active', ar: 'تسلق وحركة' },
  pretend: { en: 'Pretend Play', ar: 'لعب تخيلي' },
  baby: { en: 'Baby & Toddler', ar: 'رضع وأطفال صغار' },
  furniture: { en: 'Play Furniture', ar: 'أثاث لعب' },
  room: { en: "Kids' Rooms", ar: 'غرف الأطفال' },
};

// One entry per product.
//   id     short unique name (letters and dashes), never change it once orders exist
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
    id: 'fish-shelf', cat: 'room', price: 1500,
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
    id: 'climbing-triangle', cat: 'climbing', price: null, images: ['climbing-triangle.svg'],
    name: { en: 'Climbing Triangle & Ramp', ar: 'مثلث تسلق مع منحدر' },
    desc: { en: 'A foldable wooden climbing triangle with a two-sided ramp to climb up and slide down.', ar: 'مثلث تسلق خشبي قابل للطي مع منحدر بوجهين للتسلق والتزحلق.' },
  },
  {
    id: 'climbing-arch', cat: 'climbing', price: null, images: ['climbing-arch.svg'],
    name: { en: 'Climbing Arch & Rocker', ar: 'قوس تسلق وهزاز' },
    desc: { en: 'Climb over it as an arch, or flip it into a rocker. Add a soft cushion for reading time.', ar: 'استخدمه كقوس للتسلق أو اقلبه ليصبح هزازاً. أضف وسادة ناعمة لوقت القراءة.' },
  },
  {
    id: 'ball-pit', cat: 'climbing', price: null, images: ['ball-pit.svg'],
    name: { en: 'Soft Play & Ball Pit Set', ar: 'طقم سوفت بلاي وحمام كرات' },
    desc: { en: 'Foam blocks, a ramp and a ball pit for safe climbing and tumbling at home.', ar: 'مكعبات إسفنجية ومنحدر وحمام كرات للتسلق والتدحرج بأمان في البيت.' },
  },
  {
    id: 'play-kitchen', cat: 'pretend', price: null, images: ['play-kitchen.svg'],
    name: { en: 'Wooden Play Kitchen', ar: 'مطبخ لعب خشبي' },
    desc: { en: 'Oven, sink, hob and plenty of storage for little chefs. Available in different colours.', ar: 'فرن وحوض وموقد ومساحات تخزين كثيرة للطهاة الصغار. متوفر بألوان مختلفة.' },
  },
  {
    id: 'dollhouse', cat: 'pretend', price: null, images: ['dollhouse.svg'],
    name: { en: 'Wooden Dollhouse', ar: 'بيت دمى خشبي' },
    desc: { en: 'A three-storey dollhouse with open rooms and mini furniture to arrange.', ar: 'بيت دمى من ثلاثة طوابق بغرف مفتوحة وأثاث صغير لترتيبه.' },
  },
  {
    id: 'market-stall', cat: 'pretend', price: null, images: ['market-stall.svg'],
    name: { en: 'Play Market Stall', ar: 'كشك سوق للعب' },
    desc: { en: 'A little shop with an awning and crates, ready for play food and pretend shopping.', ar: 'محل صغير بمظلة وصناديق، جاهز لطعام اللعب والتسوق التخيلي.' },
  },
  {
    id: 'activity-cube', cat: 'baby', price: null, images: ['activity-cube.svg'],
    name: { en: 'Wooden Activity Cube', ar: 'مكعب أنشطة خشبي' },
    desc: { en: 'Xylophone roof, shape sorter, bead maze and doors to open: lots to do on every side.', ar: 'سقف إكسيليفون، فرز أشكال، متاهة خرز وأبواب تُفتح: أنشطة كثيرة على كل جانب.' },
  },
  {
    id: 'push-walker', cat: 'baby', price: null, images: ['push-walker.svg'],
    name: { en: 'Push Walker & Activity Board', ar: 'مشاية دفع ولوحة أنشطة' },
    desc: { en: 'A steady wooden walker for first steps, with an activity board for sitting play.', ar: 'مشاية خشبية ثابتة للخطوات الأولى، مع لوحة أنشطة للعب أثناء الجلوس.' },
  },
  {
    id: 'play-tent', cat: 'baby', price: null, images: ['teepee.svg'],
    name: { en: 'Play Tent with Floor Mat', ar: 'خيمة لعب مع مفرش أرضي' },
    desc: { en: 'A cosy cotton tent with a soft mat, perfect for quiet time and hide-and-seek.', ar: 'خيمة قطنية مريحة مع مفرش ناعم، مثالية لوقت الهدوء والاستغماية.' },
  },
  {
    id: 'art-easel', cat: 'furniture', price: null, images: ['easel.svg'],
    name: { en: 'Double-Sided Art Easel', ar: 'حامل رسم بوجهين' },
    desc: { en: 'Chalkboard on one side and whiteboard on the other, with a paper roll on top.', ar: 'سبورة طباشير من جهة وسبورة بيضاء من الجهة الأخرى، مع لفة ورق في الأعلى.' },
  },
  {
    id: 'play-table', cat: 'furniture', price: null, images: ['train-table.svg'],
    badge: { en: 'Custom sizes', ar: 'مقاسات حسب الطلب' },
    name: { en: 'Play Table with Drawers', ar: 'طاولة لعب بأدراج' },
    desc: { en: 'A big play table for trains, blocks and puzzles, with storage drawers underneath.', ar: 'طاولة لعب كبيرة للقطارات والمكعبات والألغاز، مع أدراج تخزين أسفلها.' },
  },
  {
    id: 'table-chairs', cat: 'furniture', price: null, images: ['table-chairs.svg'],
    name: { en: "Kids' Table & Chairs", ar: 'طاولة وكراسي أطفال' },
    desc: { en: 'A sturdy table and two chairs at just the right height for drawing, snacks and play.', ar: 'طاولة متينة وكرسيان بالارتفاع المناسب للرسم والوجبات الخفيفة واللعب.' },
  },
  {
    id: 'house-bed', cat: 'room', price: null, images: ['house-bed.svg'],
    badge: { en: 'Custom sizes', ar: 'مقاسات حسب الطلب' },
    name: { en: 'House Floor Bed', ar: 'سرير أرضي على شكل بيت' },
    desc: { en: 'A house-shaped bed frame low to the floor, so little ones can climb in and out safely.', ar: 'إطار سرير على شكل بيت قريب من الأرض، ليصعد الصغار وينزلوا بأمان.' },
  },
  {
    id: 'bookshelf', cat: 'room', price: null, images: ['bookshelf.svg'],
    badge: { en: 'Custom sizes', ar: 'مقاسات حسب الطلب' },
    name: { en: 'Front-Facing Bookshelf', ar: 'مكتبة بواجهة أمامية' },
    desc: { en: 'Books face out so children can see the covers and pick their own story.', ar: 'الكتب تظهر بأغلفتها للأمام ليرى الأطفال الأغلفة ويختاروا قصتهم بأنفسهم.' },
  },
];

// ============================================================
//  WORX Kids store settings and product list
//  Edit this file to add products, change prices or update
//  payment details. Both the English and Arabic pages use it.
// ============================================================

const STORE = {
  // WhatsApp number that receives orders (international format, digits only)
  whatsapp: '201117776589',
  // Your InstaPay address (e.g. 'worxkids@instapay'). Leave empty to send it on WhatsApp instead.
  instapay: '',
  // Optional InstaPay payment link (starts with https://ipn.eg/...). Leave empty if you don't have one.
  instapayLink: '',
  // Delivery fee in EGP. Set to null if it depends on the area and you'll confirm it on WhatsApp.
  deliveryFee: null,
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
//   img    photo in assets/img/products/ (square photos look best)
const PRODUCTS = [
  {
    id: 'climbing-triangle', cat: 'climbing', price: null, img: 'climbing-triangle.svg',
    name: { en: 'Climbing Triangle & Ramp', ar: 'مثلث تسلق مع منحدر' },
    desc: { en: 'A foldable wooden climbing triangle with a two-sided ramp to climb up and slide down.', ar: 'مثلث تسلق خشبي قابل للطي مع منحدر بوجهين للتسلق والتزحلق.' },
  },
  {
    id: 'climbing-arch', cat: 'climbing', price: null, img: 'climbing-arch.svg',
    name: { en: 'Climbing Arch & Rocker', ar: 'قوس تسلق وهزاز' },
    desc: { en: 'Climb over it as an arch, or flip it into a rocker. Add a soft cushion for reading time.', ar: 'استخدمه كقوس للتسلق أو اقلبه ليصبح هزازاً. أضف وسادة ناعمة لوقت القراءة.' },
  },
  {
    id: 'ball-pit', cat: 'climbing', price: null, img: 'ball-pit.svg',
    name: { en: 'Soft Play & Ball Pit Set', ar: 'طقم سوفت بلاي وحمام كرات' },
    desc: { en: 'Foam blocks, a ramp and a ball pit for safe climbing and tumbling at home.', ar: 'مكعبات إسفنجية ومنحدر وحمام كرات للتسلق والتدحرج بأمان في البيت.' },
  },
  {
    id: 'play-kitchen', cat: 'pretend', price: null, img: 'play-kitchen.svg',
    name: { en: 'Wooden Play Kitchen', ar: 'مطبخ لعب خشبي' },
    desc: { en: 'Oven, sink, hob and plenty of storage for little chefs. Available in different colours.', ar: 'فرن وحوض وموقد ومساحات تخزين كثيرة للطهاة الصغار. متوفر بألوان مختلفة.' },
  },
  {
    id: 'dollhouse', cat: 'pretend', price: null, img: 'dollhouse.svg',
    name: { en: 'Wooden Dollhouse', ar: 'بيت دمى خشبي' },
    desc: { en: 'A three-storey dollhouse with open rooms and mini furniture to arrange.', ar: 'بيت دمى من ثلاثة طوابق بغرف مفتوحة وأثاث صغير لترتيبه.' },
  },
  {
    id: 'market-stall', cat: 'pretend', price: null, img: 'market-stall.svg',
    name: { en: 'Play Market Stall', ar: 'كشك سوق للعب' },
    desc: { en: 'A little shop with an awning and crates, ready for play food and pretend shopping.', ar: 'محل صغير بمظلة وصناديق، جاهز لطعام اللعب والتسوق التخيلي.' },
  },
  {
    id: 'activity-cube', cat: 'baby', price: null, img: 'activity-cube.svg',
    name: { en: 'Wooden Activity Cube', ar: 'مكعب أنشطة خشبي' },
    desc: { en: 'Xylophone roof, shape sorter, bead maze and doors to open: lots to do on every side.', ar: 'سقف إكسيليفون، فرز أشكال، متاهة خرز وأبواب تُفتح: أنشطة كثيرة على كل جانب.' },
  },
  {
    id: 'push-walker', cat: 'baby', price: null, img: 'push-walker.svg',
    name: { en: 'Push Walker & Activity Board', ar: 'مشاية دفع ولوحة أنشطة' },
    desc: { en: 'A steady wooden walker for first steps, with an activity board for sitting play.', ar: 'مشاية خشبية ثابتة للخطوات الأولى، مع لوحة أنشطة للعب أثناء الجلوس.' },
  },
  {
    id: 'play-tent', cat: 'baby', price: null, img: 'teepee.svg',
    name: { en: 'Play Tent with Floor Mat', ar: 'خيمة لعب مع مفرش أرضي' },
    desc: { en: 'A cosy cotton tent with a soft mat, perfect for quiet time and hide-and-seek.', ar: 'خيمة قطنية مريحة مع مفرش ناعم، مثالية لوقت الهدوء والاستغماية.' },
  },
  {
    id: 'art-easel', cat: 'furniture', price: null, img: 'easel.svg',
    name: { en: 'Double-Sided Art Easel', ar: 'حامل رسم بوجهين' },
    desc: { en: 'Chalkboard on one side and whiteboard on the other, with a paper roll on top.', ar: 'سبورة طباشير من جهة وسبورة بيضاء من الجهة الأخرى، مع لفة ورق في الأعلى.' },
  },
  {
    id: 'play-table', cat: 'furniture', price: null, img: 'train-table.svg',
    badge: { en: 'Custom sizes', ar: 'مقاسات حسب الطلب' },
    name: { en: 'Play Table with Drawers', ar: 'طاولة لعب بأدراج' },
    desc: { en: 'A big play table for trains, blocks and puzzles, with storage drawers underneath.', ar: 'طاولة لعب كبيرة للقطارات والمكعبات والألغاز، مع أدراج تخزين أسفلها.' },
  },
  {
    id: 'table-chairs', cat: 'furniture', price: null, img: 'table-chairs.svg',
    name: { en: "Kids' Table & Chairs", ar: 'طاولة وكراسي أطفال' },
    desc: { en: 'A sturdy table and two chairs at just the right height for drawing, snacks and play.', ar: 'طاولة متينة وكرسيان بالارتفاع المناسب للرسم والوجبات الخفيفة واللعب.' },
  },
  {
    id: 'house-bed', cat: 'room', price: null, img: 'house-bed.svg',
    badge: { en: 'Custom sizes', ar: 'مقاسات حسب الطلب' },
    name: { en: 'House Floor Bed', ar: 'سرير أرضي على شكل بيت' },
    desc: { en: 'A house-shaped bed frame low to the floor, so little ones can climb in and out safely.', ar: 'إطار سرير على شكل بيت قريب من الأرض، ليصعد الصغار وينزلوا بأمان.' },
  },
  {
    id: 'bookshelf', cat: 'room', price: null, img: 'bookshelf.svg',
    badge: { en: 'Custom sizes', ar: 'مقاسات حسب الطلب' },
    name: { en: 'Front-Facing Bookshelf', ar: 'مكتبة بواجهة أمامية' },
    desc: { en: 'Books face out so children can see the covers and pick their own story.', ar: 'الكتب تظهر بأغلفتها للأمام ليرى الأطفال الأغلفة ويختاروا قصتهم بأنفسهم.' },
  },
];

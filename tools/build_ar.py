#!/usr/bin/env python3
"""Build ar.html (Arabic, right-to-left) from index.html.

Each pair below is (English text in index.html, Arabic replacement). Every
occurrence is replaced, so a label used in several places (a category name in
the menu, filters and product cards) needs only one pair.
The script stops with an error if any English text is missing, so a change
to index.html can't silently leave part of the Arabic page untranslated.

    python3 tools/build_ar.py
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

PAIRS = [
    # <head>
    ('<html lang="en">', '<html lang="ar" dir="rtl">'),
    ("<title>WORX Kids | Wooden Toys, Kids' Furniture &amp; Play Areas — New Cairo</title>",
     '<title>WORX Kids | ألعاب خشبية وأثاث وأماكن لعب للأطفال — القاهرة الجديدة</title>'),
    ('''content="WORX Kids — wooden climbing sets, play kitchens, dollhouses, kids' furniture and custom play areas in New Cairo. Order on WhatsApp."''',
     'content="WORX Kids — ألعاب تسلق خشبية، مطابخ لعب، بيوت دمى، أثاث أطفال وأماكن لعب حسب الطلب في القاهرة الجديدة. اطلب عبر واتساب."'),
    ('''content="WORX Kids | Wooden Toys, Kids' Furniture & Play Areas"''', 'content="WORX Kids | ألعاب خشبية وأثاث وأماكن لعب للأطفال"'),
    ('''content="Climbing sets, play kitchens, dollhouses, kids' furniture and custom play areas by WORX."''',
     'content="ألعاب تسلق، مطابخ لعب، بيوت دمى، أثاث أطفال وأماكن لعب حسب الطلب من WORX."'),

    # Top bar & header
    ("<span class=\"topbar__label\">Free quote on custom kids' rooms &amp; play areas</span><span class=\"topbar__short\">Free quote</span>",
     '<span class="topbar__label">عرض سعر مجاني لغرف الأطفال وأماكن اللعب حسب الطلب</span><span class="topbar__short">عرض سعر مجاني</span>'),
    ('aria-label="WORX Kids — home"', 'aria-label="WORX Kids — الرئيسية"'),
    ('Play furniture &amp; play areas by the <strong>WORX</strong> workshop', 'أثاث وأماكن لعب من ورشة <strong>WORX</strong>'),
    ('<a href="ar.html" class="lang-switch" lang="ar" hreflang="ar">عربي</a>',
     '<a href="index.html" class="lang-switch" lang="en" hreflang="en">English</a>'),
    ('header__cta">Free Quote</a>', 'header__cta">عرض سعر مجاني</a>'),
    ('aria-label="Categories"', 'aria-label="الأقسام"'),
    ('>Shop all<', '>كل المنتجات<'),

    # Category names (menu, tiles, filters, product cards)
    ('>Climbing &amp; Active<', '>تسلق وحركة<'),
    ('>Pretend Play<', '>لعب تخيلي<'),
    ('>Baby &amp; Toddler<', '>رضع وأطفال صغار<'),
    ('>Play Furniture<', '>أثاث لعب<'),
    (">Kids' Rooms<", '>غرف الأطفال<'),
    ('>Custom Play Areas<', '>أماكن لعب حسب الطلب<'),
    ('>Contact<', '>تواصل معنا<'),

    # Hero
    ('<p class="eyebrow">WORX Kids · New Cairo</p>', '<p class="eyebrow">WORX Kids · القاهرة الجديدة</p>'),
    ('<h1>Made for play, <em>built to last.</em></h1>', '<h1>مصنوعة للعب، <em>ومتينة لتدوم.</em></h1>'),
    ("Wooden climbing sets, play kitchens, dollhouses and kids' furniture, plus custom kids' rooms and play areas designed around your space.",
     'ألعاب تسلق خشبية، مطابخ لعب، بيوت دمى وأثاث أطفال، بالإضافة إلى غرف أطفال وأماكن لعب حسب الطلب مصممة لمساحتك.'),
    ('>Shop products</a>', '>تسوق المنتجات</a>'),
    ('>Custom rooms &amp; play areas</a>', '>غرف وأماكن لعب حسب الطلب</a>'),
    ('<li>Order on WhatsApp</li>', '<li>اطلب عبر واتساب</li>'),
    ('<li>Showroom in Park Mall</li>', '<li>معرض في بارك مول</li>'),
    ('<li>Free quote on custom work</li>', '<li>عرض سعر مجاني للأعمال حسب الطلب</li>'),
    ('alt="Wooden climbing triangle with ramp"', 'alt="مثلث تسلق خشبي مع منحدر"'),
    ('alt="Wooden play kitchen"', 'alt="مطبخ لعب خشبي"'),
    ('alt="Wooden dollhouse"', 'alt="بيت دمى خشبي"'),

    # Categories section
    ('<p class="eyebrow">Shop by category</p>', '<p class="eyebrow">تسوق حسب القسم</p>'),
    ('<h2>Something for every stage</h2>', '<h2>شيء لكل مرحلة</h2>'),

    # Shop
    ('<p class="eyebrow">Our products</p>', '<p class="eyebrow">منتجاتنا</p>'),
    ('<h2>Wooden toys &amp; play furniture</h2>', '<h2>ألعاب خشبية وأثاث لعب</h2>'),
    ("Choose a product and send us a message on WhatsApp. We'll reply with the price, colours and delivery details.",
     'اختر المنتج وأرسل لنا رسالة على واتساب، وسنرد عليك بالسعر والألوان وتفاصيل التوصيل.'),
    ('aria-label="Filter products"', 'aria-label="تصفية المنتجات"'),
    ('aria-pressed="true">All</button>', 'aria-pressed="true">الكل</button>'),
    ('>Price on request<', '>السعر عند الطلب<'),
    ('>Order on WhatsApp<', '>اطلب عبر واتساب<'),
    ('>Custom sizes<', '>مقاسات حسب الطلب<'),

    # Products
    ('<h3>Climbing Triangle &amp; Ramp</h3>', '<h3>مثلث تسلق مع منحدر</h3>'),
    ('A foldable wooden climbing triangle with a two-sided ramp to climb up and slide down.',
     'مثلث تسلق خشبي قابل للطي مع منحدر بوجهين للتسلق والتزحلق.'),
    ('<h3>Climbing Arch &amp; Rocker</h3>', '<h3>قوس تسلق وهزاز</h3>'),
    ('Climb over it as an arch, or flip it into a rocker. Add a soft cushion for reading time.',
     'استخدمه كقوس للتسلق أو اقلبه ليصبح هزازاً. أضف وسادة ناعمة لوقت القراءة.'),
    ('<h3>Soft Play &amp; Ball Pit Set</h3>', '<h3>طقم سوفت بلاي وحمام كرات</h3>'),
    ('Foam blocks, a ramp and a ball pit for safe climbing and tumbling at home.',
     'مكعبات إسفنجية ومنحدر وحمام كرات للتسلق والتدحرج بأمان في البيت.'),
    ('<h3>Wooden Play Kitchen</h3>', '<h3>مطبخ لعب خشبي</h3>'),
    ('Oven, sink, hob and plenty of storage for little chefs. Available in different colours.',
     'فرن وحوض وموقد ومساحات تخزين كثيرة للطهاة الصغار. متوفر بألوان مختلفة.'),
    ('<h3>Wooden Dollhouse</h3>', '<h3>بيت دمى خشبي</h3>'),
    ('A three-storey dollhouse with open rooms and mini furniture to arrange.',
     'بيت دمى من ثلاثة طوابق بغرف مفتوحة وأثاث صغير لترتيبه.'),
    ('<h3>Play Market Stall</h3>', '<h3>كشك سوق للعب</h3>'),
    ('A little shop with an awning and crates, ready for play food and pretend shopping.',
     'محل صغير بمظلة وصناديق، جاهز لطعام اللعب والتسوق التخيلي.'),
    ('<h3>Wooden Activity Cube</h3>', '<h3>مكعب أنشطة خشبي</h3>'),
    ('Xylophone roof, shape sorter, bead maze and doors to open: lots to do on every side.',
     'سقف إكسيليفون، فرز أشكال، متاهة خرز وأبواب تُفتح: أنشطة كثيرة على كل جانب.'),
    ('<h3>Push Walker &amp; Activity Board</h3>', '<h3>مشاية دفع ولوحة أنشطة</h3>'),
    ('A steady wooden walker for first steps, with an activity board for sitting play.',
     'مشاية خشبية ثابتة للخطوات الأولى، مع لوحة أنشطة للعب أثناء الجلوس.'),
    ('<h3>Play Tent with Floor Mat</h3>', '<h3>خيمة لعب مع مفرش أرضي</h3>'),
    ('A cosy cotton tent with a soft mat, perfect for quiet time and hide-and-seek.',
     'خيمة قطنية مريحة مع مفرش ناعم، مثالية لوقت الهدوء والاستغماية.'),
    ('<h3>Double-Sided Art Easel</h3>', '<h3>حامل رسم بوجهين</h3>'),
    ('Chalkboard on one side and whiteboard on the other, with a paper roll on top.',
     'سبورة طباشير من جهة وسبورة بيضاء من الجهة الأخرى، مع لفة ورق في الأعلى.'),
    ('<h3>Play Table with Drawers</h3>', '<h3>طاولة لعب بأدراج</h3>'),
    ('A big play table for trains, blocks and puzzles, with storage drawers underneath.',
     'طاولة لعب كبيرة للقطارات والمكعبات والألغاز، مع أدراج تخزين أسفلها.'),
    ("<h3>Kids' Table &amp; Chairs</h3>", '<h3>طاولة وكراسي أطفال</h3>'),
    ('A sturdy table and two chairs at just the right height for drawing, snacks and play.',
     'طاولة متينة وكرسيان بالارتفاع المناسب للرسم والوجبات الخفيفة واللعب.'),
    ('<h3>House Floor Bed</h3>', '<h3>سرير أرضي على شكل بيت</h3>'),
    ('A house-shaped bed frame low to the floor, so little ones can climb in and out safely.',
     'إطار سرير على شكل بيت قريب من الأرض، ليصعد الصغار وينزلوا بأمان.'),
    ('<h3>Front-Facing Bookshelf</h3>', '<h3>مكتبة بواجهة أمامية</h3>'),
    ('Books face out so children can see the covers and pick their own story.',
     'الكتب تظهر بأغلفتها للأمام ليرى الأطفال الأغلفة ويختاروا قصتهم بأنفسهم.'),

    # Custom
    ('<p class="eyebrow">Made to measure</p>', '<p class="eyebrow">حسب المقاس</p>'),
    ("<h2>Custom kids' rooms &amp; play areas</h2>", '<h2>غرف أطفال وأماكن لعب حسب الطلب</h2>'),
    ('The WORX team that builds custom kitchens and dressing rooms designs and builds complete spaces for kids, made to fit your room.',
     'فريق WORX الذي يصنع المطابخ وغرف الملابس حسب الطلب يصمم وينفذ مساحات كاملة للأطفال، مصنوعة لتناسب غرفتك.'),
    ("<h3>Kids' rooms</h3>", '<h3>غرف الأطفال</h3>'),
    ('A complete room planned around your child and your space.', 'غرفة كاملة مخططة حول طفلك ومساحتك.'),
    ('<li>Beds, bunk beds and loft beds with slides or desks below</li>', '<li>سراير، سراير دورين وسراير علوية بزحليقة أو مكتب أسفلها</li>'),
    ('<li>Wardrobes with low rails and adjustable shelves</li>', '<li>دواليب بشماعات منخفضة ورفوف قابلة للتعديل</li>'),
    ('<li>Study desks, toy storage and reading corners</li>', '<li>مكاتب مذاكرة، تخزين ألعاب وأركان قراءة</li>'),
    (">Plan a kids' room</a>", '>خطط غرفة طفلك</a>'),
    ('<h3>Play areas</h3>', '<h3>أماكن اللعب</h3>'),
    ('From a playroom at home to a full indoor play zone for your business.', 'من غرفة لعب في البيت إلى منطقة لعب داخلية كاملة لمشروعك.'),
    ('<li>Climbing walls, rope nets and play towers with slides</li>', '<li>حوائط تسلق، شبكات حبال وأبراج لعب بزحاليق</li>'),
    ('<li>Soft play zones and ball pits for little ones</li>', '<li>مناطق سوفت بلاي وحمامات كرات للصغار</li>'),
    ('<li>Sensory and activity walls</li>', '<li>حوائط حسية وأنشطة</li>'),
    ('>Plan a play area</a>', '>خطط مكان لعب</a>'),
    ('aria-label="Where we build play areas"', 'aria-label="أين ننفذ أماكن اللعب"'),
    ('<li>Homes &amp; villas</li>', '<li>بيوت وفيلات</li>'),
    ('<li>Nurseries &amp; schools</li>', '<li>حضانات ومدارس</li>'),
    ('<li>Clubs &amp; compounds</li>', '<li>نوادي وكمبوندات</li>'),
    ('<li>Restaurants &amp; cafés</li>', '<li>مطاعم وكافيهات</li>'),
    ('<li>Clinics &amp; waiting rooms</li>', '<li>عيادات وصالات انتظار</li>'),
    ('<li>Malls &amp; showrooms</li>', '<li>مولات ومعارض</li>'),

    # Safety
    ('<p class="eyebrow">Safety first</p>', '<p class="eyebrow">الأمان أولاً</p>'),
    ('<h2>Built for climbing, jumping and everything in between</h2>', '<h2>مصنوع للتسلق والقفز وكل ما بينهما</h2>'),
    ("Kids don't just use furniture, they test it. So we design every piece with safety in mind from the first sketch.",
     'الأطفال لا يستخدمون الأثاث فقط، بل يختبرونه. لذلك نصمم كل قطعة مع مراعاة الأمان من أول رسمة.'),
    ('<strong>Rounded edges &amp; corners</strong><span>No sharp corners at head height. Everything is sanded smooth.</span>',
     '<strong>حواف وزوايا دائرية</strong><span>لا زوايا حادة في مستوى الرأس، وكل الأسطح ناعمة.</span>'),
    ('<strong>Child-safe finishes</strong><span>Low-odour, child-friendly paints and finishes.</span>',
     '<strong>تشطيبات آمنة للأطفال</strong><span>دهانات وتشطيبات مناسبة للأطفال وقليلة الرائحة.</span>'),
    ("<strong>Fixed to the wall</strong><span>Wardrobes, shelves and towers are anchored so they can't tip over.</span>",
     '<strong>تثبيت في الحائط</strong><span>الدواليب والرفوف والأبراج مثبتة حتى لا تنقلب.</span>'),
    ('<strong>Soft landings</strong><span>Padded flooring and cushioned zones under climbing and play areas.</span>',
     '<strong>هبوط ناعم</strong><span>أرضيات مبطنة ومناطق إسفنجية تحت أماكن التسلق واللعب.</span>'),

    # Process
    ('<p class="eyebrow">How it works</p>', '<p class="eyebrow">خطوات العمل</p>'),
    ('<h2>Custom projects in four steps</h2>', '<h2>المشاريع حسب الطلب في أربع خطوات</h2>'),
    ('<h3>Chat &amp; measure</h3><p>Tell us about your space and your kids. We visit to take measurements.</p>',
     '<h3>تواصل وقياس</h3><p>أخبرنا عن مساحتك وأطفالك، ونزورك لأخذ المقاسات.</p>'),
    ('<h3>Design</h3><p>We design the room or play area and agree on colours, materials and price.</p>',
     '<h3>التصميم</h3><p>نصمم الغرفة أو مكان اللعب ونتفق على الألوان والخامات والسعر.</p>'),
    ('<h3>Build</h3><p>Our craftsmen build every piece in the WORX workshop.</p>',
     '<h3>التصنيع</h3><p>حرفيونا يصنعون كل قطعة في ورشة WORX.</p>'),
    ("<h3>Install &amp; play</h3><p>We deliver, install and secure everything. Then it's time to play!</p>",
     '<h3>التركيب واللعب</h3><p>نوصّل ونركّب ونثبّت كل شيء. ثم يبدأ وقت اللعب!</p>'),

    # FAQ
    ('<p class="eyebrow">FAQ</p>', '<p class="eyebrow">الأسئلة الشائعة</p>'),
    ('<h2>Questions parents ask</h2>', '<h2>أسئلة يطرحها الآباء</h2>'),
    ('<summary>How do I order a product?</summary><p>Tap "Order on WhatsApp" under the product. A message opens with the product name, and we reply with the price, colours and delivery details.</p>',
     '<summary>كيف أطلب منتجاً؟</summary><p>اضغط "اطلب عبر واتساب" تحت المنتج. ستفتح رسالة باسم المنتج، وسنرد عليك بالسعر والألوان وتفاصيل التوصيل.</p>'),
    ("<summary>Can I see the products before buying?</summary><p>Yes. You're welcome to visit our showroom in Park Mall, New Cairo. Message us first to check what's on display.</p>",
     '<summary>هل يمكنني رؤية المنتجات قبل الشراء؟</summary><p>نعم. يسعدنا زيارتك لمعرضنا في بارك مول، القاهرة الجديدة. راسلنا أولاً لنخبرك بالمعروض.</p>'),
    ("<summary>Can you make a product in a different size or colour?</summary><p>Often, yes. Tell us what you need and we'll let you know what's possible.</p>",
     '<summary>هل يمكن تنفيذ منتج بمقاس أو لون مختلف؟</summary><p>غالباً نعم. أخبرنا بما تحتاجه وسنخبرك بالممكن.</p>'),
    ("<summary>Do you build play areas for businesses?</summary><p>Yes. We design and build play areas for nurseries, schools, clubs, restaurants, clinics and more. Send us your space and we'll suggest a plan.</p>",
     '<summary>هل تنفذون أماكن لعب للأماكن التجارية؟</summary><p>نعم. نصمم وننفذ أماكن لعب للحضانات والمدارس والنوادي والمطاعم والعيادات وغيرها. أرسل لنا تفاصيل المساحة وسنقترح عليك خطة.</p>'),
    ("<summary>How long does a custom project take?</summary><p>It depends on the size of the project. We'll give you a clear timeline together with your quote.</p>",
     '<summary>كم يستغرق المشروع حسب الطلب؟</summary><p>يعتمد على حجم المشروع. سنعطيك جدولاً زمنياً واضحاً مع عرض السعر.</p>'),

    # Contact
    ('<p class="eyebrow">Contact</p>', '<p class="eyebrow">تواصل معنا</p>'),
    ("<h2>Let's build something fun</h2>", '<h2>لنصنع شيئاً ممتعاً معاً</h2>'),
    ("Ask about a product, or tell us about your child's room or play area idea, and we'll get back to you with a free quote. You're also welcome to visit our showroom.",
     'اسأل عن منتج، أو أخبرنا عن غرفة طفلك أو فكرة مكان اللعب، وسنرد عليك بعرض سعر مجاني. ويسعدنا أيضاً زيارتك لمعرضنا.'),
    ('<dt>Showroom</dt><dd>G 32 AB Park Mall, 90th St, New Cairo</dd>',
     '<dt>المعرض</dt><dd>G 32 AB بارك مول، شارع التسعين، القاهرة الجديدة</dd>'),
    ('<dt>Phone</dt>', '<dt>الهاتف</dt>'),
    ('<dt>Hours</dt><dd>All week: 12pm – 11:45pm</dd>', '<dt>المواعيد</dt><dd>طوال الأسبوع: ١٢ ظهراً – ١١:٤٥ مساءً</dd>'),
    ('aria-label="WORX on Facebook"', 'aria-label="WORX على فيسبوك"'),
    ('aria-label="WORX on Instagram"', 'aria-label="WORX على إنستجرام"'),
    ('<h3>Send us a message</h3>', '<h3>أرسل لنا رسالة</h3>'),
    ('<label>Name<input', '<label>الاسم<input'),
    ('<label>Phone<input', '<label>الهاتف<input'),
    ('<label>What would you like?', '<label>ماذا تحتاج؟'),
    ('<option>A product from the shop</option>', '<option>منتج من المتجر</option>'),
    ("<option>Kids' room furniture</option>", '<option>أثاث غرفة أطفال</option>'),
    ('<option>Home playroom</option>', '<option>غرفة لعب منزلية</option>'),
    ('<option>Play area for a business</option>', '<option>مكان لعب لمشروع تجاري</option>'),
    ('<option>Something else</option>', '<option>شيء آخر</option>'),
    ("<label>Child's age (optional)<input name=\"age\" placeholder=\"e.g. 4 and 7\">",
     '<label>عمر الطفل (اختياري)<input name="age" placeholder="مثلاً ٤ و٧ سنوات">'),
    ("<label>Message<textarea name=\"message\" rows=\"4\" placeholder=\"Tell us what you're looking for\">",
     '<label>الرسالة<textarea name="message" rows="4" placeholder="أخبرنا بما تبحث عنه">'),
    ('>Send via WhatsApp</button>', '>أرسل عبر واتساب</button>'),
    ('Opens WhatsApp with your message ready to send to +20 111 777 6589.',
     'يفتح واتساب ورسالتك جاهزة للإرسال إلى <span dir="ltr">+20 111 777 6589</span>.'),
    ('title="WORX showroom location — Park Mall, New Cairo"', 'title="موقع معرض WORX — بارك مول، القاهرة الجديدة"'),
    ('>Get directions</a>', '>الاتجاهات</a>'),

    # Footer
    ('aria-label="WORX Kids — back to top"', 'aria-label="WORX Kids — العودة للأعلى"'),
    ('<p>Looking for kitchens or dressing rooms? Visit <a href="https://worxegypt.com/">WORX Kitchen &amp; Dressing</a>.</p>',
     '<p>تبحث عن مطابخ أو غرف ملابس؟ زر <a href="https://worxegypt.com/ar.html">WORX للمطابخ وغرف الملابس</a>.</p>'),
    ('WORX Kids — All rights reserved.', 'WORX Kids — جميع الحقوق محفوظة.'),
    ('aria-label="Chat with WORX Kids on WhatsApp"', 'aria-label="تحدث مع WORX Kids على واتساب"'),
]


def main():
    html = (ROOT / 'index.html').read_text(encoding='utf-8')
    missing = [en for en, _ in PAIRS if en not in html]
    if missing:
        raise SystemExit('English text not found in index.html (update tools/build_ar.py):\n  ' + '\n  '.join(missing))
    for en, ar in PAIRS:
        html = html.replace(en, ar)
    (ROOT / 'ar.html').write_text(html, encoding='utf-8')
    print(f'Wrote ar.html ({len(PAIRS)} translations)')


if __name__ == '__main__':
    main()

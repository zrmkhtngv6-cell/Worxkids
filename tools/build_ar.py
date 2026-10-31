#!/usr/bin/env python3
"""Build ar.html (Arabic, right-to-left) from index.html.

Each pair below is (English text in index.html, Arabic replacement).
The script stops with an error if any English text is missing, so a change
to index.html can't silently leave part of the Arabic page untranslated.

    python3 tools/build_ar.py
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

PAIRS = [
    # <head>
    ('<html lang="en">', '<html lang="ar" dir="rtl">'),
    ("<title>WORX Kids | Kids' Furniture &amp; Play Areas — New Cairo</title>",
     '<title>WORX Kids | أثاث وأماكن لعب للأطفال — القاهرة الجديدة</title>'),
    ('''content="WORX Kids — custom kids' furniture and play areas, designed and built in New Cairo. Bunk beds, wardrobes, study desks, playrooms and soft play. Free quote."''',
     'content="WORX Kids — أثاث أطفال وأماكن لعب حسب الطلب، تصميم وتنفيذ في القاهرة الجديدة. سراير دورين، دواليب، مكاتب مذاكرة، غرف لعب وسوفت بلاي. عرض سعر مجاني."'),
    ('''content="WORX Kids | Kids' Furniture & Play Areas"''', 'content="WORX Kids | أثاث وأماكن لعب للأطفال"'),
    ('''content="Rooms they'll love. Play they'll remember. Custom kids' furniture and play areas by WORX."''',
     'content="غرف يحبونها، ولعب لا يُنسى. أثاث وأماكن لعب للأطفال حسب الطلب من WORX."'),

    # Top bar & header
    ('<span class="topbar__label">Call for a free quote today</span><span class="topbar__short">Free quote</span>',
     '<span class="topbar__label">اتصل الآن لعرض سعر مجاني</span><span class="topbar__short">عرض سعر مجاني</span>'),
    ('aria-label="WORX Kids — home"', 'aria-label="WORX Kids — الرئيسية"'),
    ('aria-label="Main"', 'aria-label="القائمة الرئيسية"'),
    ('<a href="#furniture">Furniture</a>', '<a href="#furniture">الأثاث</a>'),
    ('<a href="#play">Play Areas</a>', '<a href="#play">أماكن اللعب</a>'),
    ('<a href="#safety">Safety</a>', '<a href="#safety">الأمان</a>'),
    ('<a href="#process">How it works</a>', '<a href="#process">خطوات العمل</a>'),
    ('<a href="#faq">FAQ</a>', '<a href="#faq">الأسئلة</a>'),
    ('class="btn btn--coral">Free Quote</a>', 'class="btn btn--coral">عرض سعر مجاني</a>'),
    ('<a href="ar.html" class="lang-switch" lang="ar" hreflang="ar">عربي</a>',
     '<a href="index.html" class="lang-switch" lang="en" hreflang="en">English</a>'),
    ('aria-label="Open menu"', 'aria-label="فتح القائمة"'),

    # Hero
    ("<p class=\"eyebrow\">Kids' furniture · Play areas · New Cairo</p>",
     '<p class="eyebrow">أثاث أطفال · أماكن لعب · القاهرة الجديدة</p>'),
    ("<h1>Rooms they'll love. <em>Play they'll remember.</em></h1>",
     '<h1>غرف يحبونها. <em>ولعب لا يُنسى.</em></h1>'),
    ("Custom kids' rooms and play spaces, designed and built by WORX. Every piece is made to fit your space, sized for little ones and built to last through the big ones.",
     'غرف أطفال وأماكن لعب حسب الطلب، من تصميم وتنفيذ WORX. كل قطعة مصنوعة لتناسب مساحتك، بمقاس الصغار ومتينة لتكبر معهم.'),
    ('>Get a free quote</a>', '>احصل على عرض سعر مجاني</a>'),
    ('>See what we make</a>', '>شاهد ما نصنعه</a>'),
    ('''aria-label="Illustration of a kids' loft bed with a slide, storage cubes and toy balls"''',
     'aria-label="رسم لسرير أطفال علوي بزحليقة وصناديق تخزين وكرات"'),

    # Two worlds
    ('<p class="eyebrow eyebrow--sky">What we do</p>', '<p class="eyebrow eyebrow--sky">ماذا نقدم</p>'),
    ('<h2>Two worlds, one workshop</h2>', '<h2>عالمان، وورشة واحدة</h2>'),
    ('The same WORX team that builds custom kitchens and dressing rooms now makes spaces just for kids, with the same care and craftsmanship.',
     'نفس فريق WORX الذي يصنع المطابخ وغرف الملابس حسب الطلب، يصنع الآن مساحات خاصة للأطفال بنفس الاهتمام والإتقان.'),
    ("<h3>Kids' furniture</h3>", '<h3>أثاث الأطفال</h3>'),
    ("Beds, bunk beds, wardrobes, desks and clever storage, made to measure for your child's room.",
     'سراير، سراير دورين، دواليب، مكاتب وحلول تخزين ذكية، بمقاسات غرفة طفلك.'),
    ('Explore furniture →', 'اكتشف الأثاث ←'),
    ('<h3>Play areas</h3>', '<h3>أماكن اللعب</h3>'),
    ('Playrooms, soft play, climbing walls and slides for homes, nurseries, clubs and businesses.',
     'غرف لعب، سوفت بلاي، حوائط تسلق وزحاليق للبيوت والحضانات والنوادي والأماكن التجارية.'),
    ('Explore play areas →', 'اكتشف أماكن اللعب ←'),

    # Furniture
    ("<p class=\"eyebrow\">Kids' furniture</p>", '<p class="eyebrow">أثاث الأطفال</p>'),
    ('<h2>Made to measure, made for kids</h2>', '<h2>حسب المقاس، ومصمم للأطفال</h2>'),
    ("Every piece is designed around your room and your child, from a baby's first wardrobe to a teen's study corner.",
     'كل قطعة مصممة حول غرفتك وطفلك، من أول دولاب للرضيع إلى ركن المذاكرة للمراهق.'),
    ('<h3>Beds &amp; bunk beds</h3>', '<h3>سراير وسراير دورين</h3>'),
    ('Single beds, bunk beds for siblings, and trundle beds for sleepovers, with built-in drawers underneath.',
     'سراير فردية، سراير دورين للإخوة، وسراير بسرير منزلق للضيوف، مع أدراج مدمجة أسفلها.'),
    ('<h3>Loft beds with a twist</h3>', '<h3>سراير علوية مميزة</h3>'),
    ('Raised beds with a slide, climbing ladder, hideaway den or desk below. Bedtime becomes the best part of the day.',
     'سراير مرتفعة بزحليقة أو سلم تسلق أو ركن مخبأ أو مكتب أسفلها. وقت النوم يصبح أجمل وقت في اليوم.'),
    ('<h3>Wardrobes &amp; dressers</h3>', '<h3>دواليب وتسريحات</h3>'),
    ('Low rails they can reach today and shelves that adjust as they grow, with fun handles and colours.',
     'شماعات منخفضة يصلون إليها اليوم ورفوف قابلة للتعديل كلما كبروا، بمقابض وألوان مبهجة.'),
    ('<h3>Study desks</h3>', '<h3>مكاتب مذاكرة</h3>'),
    ('Desks and shelving for homework and hobbies, sized for kids and adjustable for the years ahead.',
     'مكاتب ورفوف للمذاكرة والهوايات، بمقاس الأطفال وقابلة للتعديل للسنوات القادمة.'),
    ('<h3>Toy storage</h3>', '<h3>تخزين الألعاب</h3>'),
    ('Cubes, benches, bins and wall shelves that make tidying up easy and keep floors clear for play.',
     'مكعبات ومقاعد وصناديق ورفوف حائط تجعل الترتيب سهلاً وتترك الأرض حرة للعب.'),
    ('<h3>Montessori &amp; reading nooks</h3>', '<h3>مونتيسوري وأركان القراءة</h3>'),
    ('Floor beds, low open shelves, book ledges and cosy corners that let little ones explore on their own.',
     'سراير أرضية، رفوف مفتوحة منخفضة، أرفف كتب وأركان مريحة تتيح للصغار الاستكشاف بأنفسهم.'),

    # Play areas
    ('<p class="eyebrow eyebrow--mint">Play areas</p>', '<p class="eyebrow eyebrow--mint">أماكن اللعب</p>'),
    ('<h2>Places to climb, slide and imagine</h2>', '<h2>أماكن للتسلق والتزحلق والخيال</h2>'),
    ('From a corner of the living room to a full indoor playground, we design play areas that are exciting for kids and easy for grown-ups.',
     'من ركن في غرفة المعيشة إلى ملعب داخلي كامل، نصمم أماكن لعب ممتعة للأطفال وسهلة للكبار.'),
    ('<h3>Home playrooms</h3>', '<h3>غرف لعب منزلية</h3>'),
    ('Turn a spare room, roof or garden into a dedicated play space, with storage built in.',
     'حوّل غرفة إضافية أو سطحاً أو حديقة إلى مساحة لعب مخصصة، مع تخزين مدمج.'),
    ('<h3>Climbing walls</h3>', '<h3>حوائط تسلق</h3>'),
    ('Indoor climbing walls, rope nets and monkey bars, with padded flooring underneath.',
     'حوائط تسلق داخلية، شبكات حبال وعقلة، مع أرضيات مبطنة أسفلها.'),
    ('<h3>Play towers &amp; slides</h3>', '<h3>أبراج لعب وزحاليق</h3>'),
    ('Multi-level towers with slides, tunnels and hideouts, built to fit your space.',
     'أبراج متعددة المستويات بزحاليق وأنفاق ومخابئ، مصممة لتناسب مساحتك.'),
    ('<h3>Soft play</h3>', '<h3>سوفت بلاي</h3>'),
    ('Padded zones, foam shapes and ball pits for babies and toddlers.',
     'مناطق مبطنة، أشكال إسفنجية وحمامات كرات للرضع والصغار.'),
    ('<h3>Sensory &amp; activity walls</h3>', '<h3>حوائط حسية وأنشطة</h3>'),
    ('Chalkboards, busy boards, mirrors and textures that keep curious hands busy.',
     'سبورات طباشير، لوحات أنشطة، مرايا وملامس مختلفة تُشغل الأيدي الفضولية.'),
    ('<h3>Commercial play areas</h3>', '<h3>أماكن لعب تجارية</h3>'),
    ("Kids' corners and play zones for businesses, designed for heavy daily use and easy cleaning.",
     'أركان ومناطق لعب للأطفال في الأماكن التجارية، مصممة للاستخدام اليومي المكثف وسهلة التنظيف.'),
    ('aria-label="Where we build play areas"', 'aria-label="أين ننفذ أماكن اللعب"'),
    ('<li>🏡 Homes &amp; villas</li>', '<li>🏡 بيوت وفيلات</li>'),
    ('<li>🎒 Nurseries &amp; schools</li>', '<li>🎒 حضانات ومدارس</li>'),
    ('<li>⚽ Clubs &amp; compounds</li>', '<li>⚽ نوادي وكمبوندات</li>'),
    ('<li>🍕 Restaurants &amp; cafés</li>', '<li>🍕 مطاعم وكافيهات</li>'),
    ('<li>🩺 Clinics &amp; waiting rooms</li>', '<li>🩺 عيادات وصالات انتظار</li>'),
    ('<li>🛍️ Malls &amp; showrooms</li>', '<li>🛍️ مولات ومعارض</li>'),

    # Safety
    ('<p class="eyebrow eyebrow--mint">Safety first</p>', '<p class="eyebrow eyebrow--mint">الأمان أولاً</p>'),
    ('<h2>Built for climbing, jumping and everything in between</h2>', '<h2>مصنوع للتسلق والقفز وكل ما بينهما</h2>'),
    ("Kids don't just use furniture, they test it. So we design every piece with safety in mind from the first sketch.",
     'الأطفال لا يستخدمون الأثاث فقط، بل يختبرونه. لذلك نصمم كل قطعة مع مراعاة الأمان من أول رسمة.'),
    ('<strong>Rounded edges &amp; corners</strong><span>No sharp corners at head height. Everything is sanded smooth.</span>',
     '<strong>حواف وزوايا دائرية</strong><span>لا زوايا حادة في مستوى الرأس، وكل الأسطح ناعمة.</span>'),
    ('<strong>Child-safe finishes</strong><span>Low-odour, child-friendly paints and finishes.</span>',
     '<strong>تشطيبات آمنة للأطفال</strong><span>دهانات وتشطيبات مناسبة للأطفال وقليلة الرائحة.</span>'),
    ("<strong>Fixed to the wall</strong><span>Wardrobes, shelves and towers are anchored so they can't tip over.</span>",
     '<strong>تثبيت في الحائط</strong><span>الدواليب والرفوف والأبراج مثبتة حتى لا تنقلب.</span>'),
    ('<strong>Finger-friendly hardware</strong><span>Soft-close drawers and hinges, and guard rails on every raised bed.</span>',
     '<strong>إكسسوارات آمنة للأصابع</strong><span>أدراج ومفصلات هادئة الغلق، وسور حماية لكل سرير مرتفع.</span>'),
    ('<strong>Soft landings</strong><span>Padded flooring and cushioned zones under climbing and play areas.</span>',
     '<strong>هبوط ناعم</strong><span>أرضيات مبطنة ومناطق إسفنجية تحت أماكن التسلق واللعب.</span>'),

    # Process
    ('<p class="eyebrow eyebrow--sky">How it works</p>', '<p class="eyebrow eyebrow--sky">خطوات العمل</p>'),
    ('<h2>From idea to playtime in four steps</h2>', '<h2>من الفكرة إلى وقت اللعب في أربع خطوات</h2>'),
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
    ("<summary>What ages do you design for?</summary><p>From babies to teens. We'll plan the room for your child's age now, and we can design pieces that adapt as they grow.</p>",
     '<summary>لأي الأعمار تصممون؟</summary><p>من الرضع إلى المراهقين. نخطط الغرفة لعمر طفلك الآن، ويمكننا تصميم قطع تتكيف معه كلما كبر.</p>'),
    ('<summary>Can the furniture grow with my child?</summary><p>Yes. Adjustable shelves and rails, desks that change height, and beds that convert are all options. Just tell us what you need.</p>',
     '<summary>هل يمكن أن يكبر الأثاث مع طفلي؟</summary><p>نعم. رفوف وشماعات قابلة للتعديل، مكاتب يتغير ارتفاعها، وسراير قابلة للتحويل، كلها خيارات متاحة. فقط أخبرنا بما تحتاجه.</p>'),
    ("<summary>Do you build play areas for businesses?</summary><p>Yes. We design and build play areas for nurseries, schools, clubs, restaurants, clinics and more. Send us your space and we'll suggest a plan.</p>",
     '<summary>هل تنفذون أماكن لعب للأماكن التجارية؟</summary><p>نعم. نصمم وننفذ أماكن لعب للحضانات والمدارس والنوادي والمطاعم والعيادات وغيرها. أرسل لنا تفاصيل المساحة وسنقترح عليك خطة.</p>'),
    ("<summary>How long does a project take?</summary><p>It depends on the size of the project. We'll give you a clear timeline together with your quote.</p>",
     '<summary>كم يستغرق تنفيذ المشروع؟</summary><p>يعتمد على حجم المشروع. سنعطيك جدولاً زمنياً واضحاً مع عرض السعر.</p>'),
    ("<summary>Is the quote really free?</summary><p>Yes. Contact us by phone or WhatsApp and we'll prepare a free quote for your project.</p>",
     '<summary>هل عرض السعر مجاني فعلاً؟</summary><p>نعم. تواصل معنا بالهاتف أو واتساب وسنجهز لك عرض سعر مجاني لمشروعك.</p>'),

    # Contact
    ('<p class="eyebrow">Contact</p>', '<p class="eyebrow">تواصل معنا</p>'),
    ("<h2>Let's build something fun</h2>", '<h2>لنصنع شيئاً ممتعاً معاً</h2>'),
    ("Tell us about your child's room or your play area idea, and we'll get back to you with a free quote. You're also welcome to visit our showroom.",
     'أخبرنا عن غرفة طفلك أو فكرة مكان اللعب، وسنرد عليك بعرض سعر مجاني. ويسعدنا أيضاً زيارتك لمعرضنا.'),
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
    ("<option>Kids' room furniture</option>", '<option>أثاث غرفة أطفال</option>'),
    ('<option>Home playroom</option>', '<option>غرفة لعب منزلية</option>'),
    ('<option>Play area for a business</option>', '<option>مكان لعب لمشروع تجاري</option>'),
    ('<option>Something else</option>', '<option>شيء آخر</option>'),
    ("<label>Child's age (optional)<input name=\"age\" placeholder=\"e.g. 4 and 7\">",
     '<label>عمر الطفل (اختياري)<input name="age" placeholder="مثلاً ٤ و٧ سنوات">'),
    ('<label>Message<textarea name="message" rows="4" placeholder="Tell us about your space and ideas">',
     '<label>الرسالة<textarea name="message" rows="4" placeholder="أخبرنا عن مساحتك وأفكارك">'),
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

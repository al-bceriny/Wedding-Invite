import { useState } from "react";
import { CalendarDays, Clock3, Heart, MapPin, Users, Flower2 } from "lucide-react";

export default function WeddingInvitePortfolioPage() {
  const groom = "عدنان بسيريني";
  const bride = "مها غزيل";
  const eventDate = "الأحد 03 / 05 / 2026";
  const eventTime = "يُحدد لاحقاً";
  const venue = "إدلب المدينة";

  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no">("yes");
  const [companions, setCompanions] = useState("1");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          guest_name: guestName.trim() || "ضيف كريم",
          attendance,
          companions: Number(companions),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "حدث خطأ أثناء إرسال التأكيد");
        return;
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("تعذر الاتصال بالخادم");
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f6f0e8_0%,#fbf7f1_50%,#f5eee6_100%)] text-slate-800"
      style={{ fontFamily: '"Noto Naskh Arabic", "Amiri", serif' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');
      `}</style>

      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(177,143,87,0.18)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-rose-100/50 blur-3xl" />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <section className="relative w-full max-w-3xl overflow-hidden rounded-[40px] border border-[#dcc9a7] bg-[linear-gradient(180deg,rgba(255,251,245,0.97)_0%,rgba(255,247,237,0.99)_100%)] shadow-[0_30px_80px_rgba(114,84,45,0.14)]">
          <div className="absolute inset-0 rounded-[40px] border-[10px] border-white/40" />

          <div className="pointer-events-none absolute right-0 top-0 translate-x-8 -translate-y-6 opacity-35">
            <div className="relative h-72 w-72 text-[#8fa4ca]">
              <Flower2 className="absolute right-10 top-2 h-20 w-20" />
              <Flower2 className="absolute right-0 top-20 h-24 w-24" />
              <Flower2 className="absolute right-16 top-36 h-16 w-16" />
              <div className="absolute right-16 top-12 h-52 w-px bg-[#8fa4ca]" />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 -translate-x-8 translate-y-10 opacity-35">
            <div className="relative h-72 w-72 text-[#8fa4ca]">
              <Flower2 className="absolute bottom-28 left-2 h-24 w-24" />
              <Flower2 className="absolute bottom-10 left-14 h-20 w-20" />
              <Flower2 className="absolute bottom-0 left-28 h-16 w-16" />
              <div className="absolute bottom-6 left-20 h-52 w-px bg-[#8fa4ca]" />
            </div>
          </div>

          <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <p className="text-xs tracking-[0.35em] text-[#a1845d] uppercase sm:text-sm">
              wedding invitation
            </p>

            <p className="mt-7 text-lg leading-9 text-[#7f6f60] sm:text-xl">
              وَمِنْ آيَاتِهِ الدالة على رحمته وعنايته بعباده وحكمته العظيمة وعلمه المحيط، أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا تناسبكم وتناسبونهن، وتشاكلكم وتشاكلونهن، لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً بما رتب على الزواج من الأسباب الجالبة للمودة والرحمة.
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-10 text-[#7f6f60] sm:text-xl">
              يُسعد السيد محمد علي بسيريني
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-10 text-[#7f6f60] sm:text-xl">
              أن يدعوكم لحفل زفاف ولده على ابنة 
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-10 text-[#7f6f60] sm:text-xl">
              السيد عبد اللطيف غزيل
            </p>

            <div className="mt-8 space-y-5">
              <h1 className="text-4xl font-bold tracking-[0.04em] text-[#7f96b8] sm:text-5xl lg:text-6xl">
                {groom}
              </h1>

              <div className="flex items-center justify-center gap-3 text-[#b89b70]">
                <div className="h-px w-12 bg-[#d9c8aa]" />
                <Heart className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
                <div className="h-px w-12 bg-[#d9c8aa]" />
              </div>

              <h2 className="text-4xl font-bold tracking-[0.04em] text-[#7f96b8] sm:text-5xl lg:text-6xl">
                {bride}
              </h2>
            </div>

            <div className="mx-auto mt-10 max-w-xl rounded-[28px] border border-[#e8dbc3] bg-white/75 px-5 py-6 shadow-[0_10px_25px_rgba(90,62,27,0.05)] backdrop-blur-sm sm:px-8 sm:py-7">
              <div className="space-y-5 text-[#5f5347]">
                <div className="flex items-center justify-center gap-2 text-base sm:text-lg">
                  <CalendarDays className="h-4 w-4 text-[#a1845d]" />
                  <span>{eventDate}</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-base sm:text-lg">
                  <Clock3 className="h-4 w-4 text-[#a1845d]" />
                  <span>{eventTime}</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-base sm:text-lg">
                  <MapPin className="h-4 w-4 text-[#a1845d]" />
                  <span>{venue}</span>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-9 text-[#7f6f60] sm:text-lg">
              حضوركم يسعدنا ويزيد هذه المناسبة جمالاً، ونأمل أن تشاركونا فرحتنا ودعواتكم الطيبة.
            </p>

            <div className="mt-10">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="rounded-full bg-[#8f6d3d] px-8 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(143,109,61,0.25)] transition hover:-translate-y-0.5 hover:bg-[#7d5f34]"
              >
                تأكيد الحضور
              </button>
            </div>
          </div>
        </section>
      </main>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#3c2f22]/30 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[32px] border border-[#eadcbc] bg-[#fffdf9] p-5 shadow-[0_25px_90px_rgba(60,47,34,0.18)] sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-[#9c8a76]">RSVP</p>
                <h3 className="mt-1 text-2xl font-bold text-[#55483d]">تأكيد الحضور</h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setSubmitted(false);
                }}
                className="rounded-2xl bg-[#f6efe5] px-3 py-2 text-sm font-medium text-[#7c6953] transition hover:bg-[#efe4d4]"
              >
                إغلاق
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#665748]">الاسم</label>
                  <input
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="اكتب اسمك الكريم"
                    className="w-full rounded-2xl border border-[#e6d8bf] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b99966]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#665748]">الحضور</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttendance("yes")}
                      className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                        attendance === "yes"
                          ? "bg-[#8f6d3d] text-white"
                          : "bg-[#f6efe5] text-[#6d5b47] hover:bg-[#efe4d4]"
                      }`}
                    >
                      سأحضر
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttendance("no")}
                      className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                        attendance === "no"
                          ? "bg-[#8f6d3d] text-white"
                          : "bg-[#f6efe5] text-[#6d5b47] hover:bg-[#efe4d4]"
                      }`}
                    >
                      أعتذر
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#665748]">عدد الأشخاص</label>
                  <select
                    value={companions}
                    onChange={(e) => setCompanions(e.target.value)}
                    className="w-full rounded-2xl border border-[#e6d8bf] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b99966]"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#8f6d3d] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#7d5f34]"
                >
                  <Users className="h-4 w-4" />
                  إرسال التأكيد
                </button>
              </form>
            ) : (
              <div className="mt-6 rounded-3xl bg-[#fcf7ef] p-5 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                  <Heart className="h-6 w-6 text-[#b58d5b]" />
                </div>
                <h4 className="mt-4 text-xl font-bold text-[#55483d]">شكراً لك</h4>
                <p className="mt-2 text-sm leading-7 text-[#76685a]">
                  تم إرسال تأكيد الحضور بنجاح، نشكركم على الرد ونتطلع لمشاركتكم فرحتنا.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
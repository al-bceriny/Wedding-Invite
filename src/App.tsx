import { useState } from "react";
import {
  CalendarDays,
  Clock3,
  Heart,
  MapPin,
  Users,
  Flower2,
  Sparkles,
} from "lucide-react";

export default function WeddingInvitePortfolioPage() {
  const groom = "الشاب عدنان";
  const bride = "الآنسة مها";
  const eventDate = "الأحد 03 / 05 / 2026";
  const eventTime = "يُحدد لاحقاً";

  const menVenue = {
    label: "موقع الرجال",
    text: "إدلب المدينة - صالة الرجال",
    mapUrl: "https://maps.app.goo.gl/PVsVDZeZ47BdLg4p8",
  };

  const womenVenue = {
    label: "موقع النساء",
    text: "سيتم تحديد موقع النساء لاحقاً",
    mapUrl: "",
  };

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
      className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#fbf6ee_0%,#f2e6d7_36%,#ead8c1_100%)] text-slate-800"
      style={{ fontFamily: '"Noto Naskh Arabic", "Amiri", serif' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');
      `}</style>

      <div className="pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(rgba(175,139,84,0.18)_1px,transparent_1px)] bg-size-[18px_18px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(255,255,255,0.65)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-20 right-0 h-[30rem] w-[30rem] rounded-full bg-amber-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-0 h-[28rem] w-[28rem] rounded-full bg-rose-100/60 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-3xl" />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <section className="relative w-full max-w-5xl overflow-hidden rounded-[48px] border border-[#d8be94] bg-[linear-gradient(180deg,rgba(255,253,249,0.97)_0%,rgba(255,247,236,0.98)_100%)] shadow-[0_40px_110px_rgba(98,68,34,0.20)]">
          <div className="absolute inset-[10px] rounded-[40px] border border-[#f2e2c4]/90" />
          <div className="absolute inset-[22px] rounded-[32px] border border-[#ddc59d]/55" />
          <div className="absolute inset-0 rounded-[48px] bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_28%,transparent_72%,rgba(210,173,109,0.10))]" />

          <div className="pointer-events-none absolute right-0 top-0 translate-x-10 -translate-y-10 opacity-45">
            <div className="relative h-96 w-96 text-[#96a8c8]">
              <Flower2 className="absolute right-16 top-8 h-24 w-24" />
              <Flower2 className="absolute right-1 top-28 h-32 w-32" />
              <Flower2 className="absolute right-24 top-56 h-18 w-18" />
              <Flower2 className="absolute right-10 top-72 h-14 w-14" />
              <div className="absolute right-[5.5rem] top-10 h-72 w-px bg-gradient-to-b from-[#96a8c8] to-transparent" />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 -translate-x-12 translate-y-12 opacity-45">
            <div className="relative h-96 w-96 text-[#96a8c8]">
              <Flower2 className="absolute bottom-32 left-2 h-32 w-32" />
              <Flower2 className="absolute bottom-12 left-20 h-24 w-24" />
              <Flower2 className="absolute bottom-2 left-40 h-16 w-16" />
              <Flower2 className="absolute bottom-28 left-44 h-14 w-14" />
              <div className="absolute bottom-10 left-[6rem] h-72 w-px bg-gradient-to-t from-[#96a8c8] to-transparent" />
            </div>
          </div>

          <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-24 lg:py-24">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#e9d5b3] bg-white/85 shadow-[0_14px_35px_rgba(130,94,46,0.12)] backdrop-blur-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#f1dfc0] bg-[linear-gradient(180deg,#fbf6ec_0%,#efdfc0_100%)] text-[#b58b50] shadow-inner">
                <Sparkles className="h-7 w-7" />
              </div>
            </div>

            <div className="mt-7 space-y-3">
              <p className="text-[11px] tracking-[0.5em] text-[#a68659] uppercase sm:text-xs">
                wedding invitation
              </p>
              <div className="mx-auto flex items-center justify-center gap-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#d5b686]" />
                <div className="h-2 w-2 rounded-full bg-[#ccab76]" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#d5b686]" />
              </div>
            </div>

            <div className="mx-auto mt-9 max-w-3xl rounded-[30px] border border-[#ead6b6] bg-white/60 px-5 py-6 shadow-[0_14px_34px_rgba(90,62,27,0.06)] backdrop-blur-sm sm:px-8 sm:py-7">
              <p className="text-base leading-10 text-[#756658] sm:text-lg lg:text-[1.2rem]">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
              </p>
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-10 text-[#7a6858] sm:text-xl lg:text-[1.46rem]">
              يسرّ السيد محمد علي بسيريني والسيد عبد اللطيف غزيل أن يدعوَاكُم لحفل زفاف ولديهما
            </p>

            <div className="mt-12 space-y-6">
              <h1 className="text-5xl font-bold tracking-[0.1em] text-[#7891b2] drop-shadow-[0_5px_15px_rgba(120,145,178,0.18)] sm:text-6xl lg:text-[5.2rem]">
                {groom}
              </h1>

              <div className="flex items-center justify-center gap-4 text-[#c09b63]">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#dec7a0]" />
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ead8bc] bg-white/90 shadow-[0_8px_18px_rgba(138,104,57,0.10)]">
                  <Sparkles className="h-5 w-5 fill-current" />
                </div>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#dec7a0]" />
              </div>

              <h2 className="text-5xl font-bold tracking-[0.1em] text-[#7891b2] drop-shadow-[0_5px_15px_rgba(120,145,178,0.18)] sm:text-6xl lg:text-[5.2rem]">
                {bride}
              </h2>
            </div>

            <div className="mx-auto mt-14 max-w-4xl rounded-[34px] border border-[#ead6b2] bg-white/82 px-6 py-7 shadow-[0_22px_48px_rgba(88,60,29,0.10)] backdrop-blur-sm sm:px-8 sm:py-8">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-[24px] bg-[linear-gradient(180deg,#fdf9f3_0%,#f7efe2_100%)] px-4 py-5 shadow-inner xl:col-span-2">
                  <CalendarDays className="mx-auto h-5 w-5 text-[#a98653]" />
                  <p className="mt-3 text-sm text-[#9c8566]">التاريخ</p>
                  <p className="mt-2 text-base font-semibold text-[#5d5145] sm:text-lg">{eventDate}</p>
                </div>

                <div className="rounded-[24px] bg-[linear-gradient(180deg,#fdf9f3_0%,#f7efe2_100%)] px-4 py-5 shadow-inner xl:col-span-2">
                  <Clock3 className="mx-auto h-5 w-5 text-[#a98653]" />
                  <p className="mt-3 text-sm text-[#9c8566]">الوقت</p>
                  <p className="mt-2 text-base font-semibold text-[#5d5145] sm:text-lg">{eventTime}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <a
                  href={menVenue.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[26px] border border-[#ead7b6] bg-[linear-gradient(180deg,#fffdfa_0%,#fcf7ef_100%)] px-5 py-5 text-right transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(88,60,29,0.10)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-[#9c8566]">{menVenue.label}</p>
                      <p className="mt-2 text-base font-semibold leading-8 text-[#5d5145]">{menVenue.text}</p>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e5d0ac] bg-white text-[#a98653] shadow-sm transition group-hover:scale-105 group-hover:border-[#d8b27a]">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-[#8b755b]">اضغط لفتح العنوان على خرائط Google</p>
                </a>

                <div className="rounded-[26px] border border-[#ead7b6] bg-[linear-gradient(180deg,#fffdfa_0%,#fcf7ef_100%)] px-5 py-5 text-right">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-[#9c8566]">{womenVenue.label}</p>
                      <p className="mt-2 text-base font-semibold leading-8 text-[#5d5145]">{womenVenue.text}</p>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#ead7b6] bg-[#f8f1e7] text-[#b39a76] shadow-sm">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-[#8b755b]">سيتم إضافة رابط الخرائط فور تحديد الموقع</p>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-base leading-9 text-[#7e6f60] sm:text-lg lg:text-[1.12rem]">
              حضوركم يسعدنا ويزيد هذه المناسبة جمالاً، ونأمل أن تشاركونا فرحتنا ودعواتكم الطيبة.
            </p>

            <div className="mt-12">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="group rounded-full border border-[#a77f46] bg-[linear-gradient(180deg,#b18a51_0%,#8c6733_100%)] px-12 py-4 text-base font-semibold text-white shadow-[0_20px_40px_rgba(137,103,51,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_rgba(137,103,51,0.35)]"
              >
                <span className="flex items-center justify-center gap-2">
                  <Heart className="h-4 w-4 transition group-hover:scale-110" />
                  تأكيد الحضور
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2f2419]/35 px-4 py-6 backdrop-blur-md">
          <div className="w-full max-w-md rounded-[36px] border border-[#e7d5b7] bg-[linear-gradient(180deg,#fffdfa_0%,#fbf5ed_100%)] p-5 shadow-[0_30px_100px_rgba(60,47,34,0.22)] sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm tracking-[0.2em] text-[#a28c74] uppercase">RSVP</p>
                <h3 className="mt-1 text-3xl font-bold text-[#55483d]">تأكيد الحضور</h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setSubmitted(false);
                }}
                className="rounded-full bg-[#f3ebdf] px-4 py-2 text-sm font-medium text-[#7c6953] transition hover:bg-[#eadfce]"
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
                    className="w-full rounded-[22px] border border-[#e6d8bf] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#b99966] focus:ring-2 focus:ring-[#e8d3ae]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#665748]">الحضور</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttendance("yes")}
                      className={`rounded-[22px] px-4 py-3 text-sm font-semibold transition ${
                        attendance === "yes"
                          ? "bg-[linear-gradient(180deg,#b18a51_0%,#8c6733_100%)] text-white shadow-md"
                          : "bg-[#f6efe5] text-[#6d5b47] hover:bg-[#efe4d4]"
                      }`}
                    >
                      سأحضر
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttendance("no")}
                      className={`rounded-[22px] px-4 py-3 text-sm font-semibold transition ${
                        attendance === "no"
                          ? "bg-[linear-gradient(180deg,#b18a51_0%,#8c6733_100%)] text-white shadow-md"
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
                    className="w-full rounded-[22px] border border-[#e6d8bf] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#b99966] focus:ring-2 focus:ring-[#e8d3ae]"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-[22px] bg-[linear-gradient(180deg,#b18a51_0%,#8c6733_100%)] px-4 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(137,103,51,0.25)] transition hover:brightness-105"
                >
                  <Users className="h-4 w-4" />
                  إرسال التأكيد
                </button>
              </form>
            ) : (
              <div className="mt-6 rounded-[28px] bg-[#fcf7ef] p-6 text-center shadow-inner">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#ead8bc] bg-white shadow-sm">
                  <Heart className="h-7 w-7 text-[#b58d5b]" />
                </div>
                <h4 className="mt-4 text-2xl font-bold text-[#55483d]">شكراً لك</h4>
                <p className="mt-3 text-sm leading-8 text-[#76685a] sm:text-base">
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

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
  const groom = "عدنان بسيريني";
  const bride = "مها غزيل";
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
      className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f4ede3_0%,#f8f2ea_35%,#efe4d6_100%)] text-slate-800"
      style={{ fontFamily: '"Noto Naskh Arabic", "Amiri", serif' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');
      `}</style>

      <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(rgba(177,143,87,0.18)_1px,transparent_1px)] bg-size-[18px_18px]" />
      <div className="pointer-events-none absolute -top-16 right-0 h-[28rem] w-[28rem] rounded-full bg-amber-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-[26rem] w-[26rem] rounded-full bg-rose-100/60 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <section className="relative w-full max-w-4xl overflow-hidden rounded-[44px] border border-[#d9c19a] bg-[linear-gradient(180deg,rgba(255,252,247,0.96)_0%,rgba(255,248,239,0.99)_100%)] shadow-[0_35px_100px_rgba(96,67,34,0.18)]">
          <div className="absolute inset-[14px] rounded-[34px] border border-[#ecd9bc]/90" />
          <div className="absolute inset-0 rounded-[44px] bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_30%,transparent_70%,rgba(215,186,134,0.08))]" />

          <div className="pointer-events-none absolute right-0 top-0 translate-x-10 -translate-y-8 opacity-40">
            <div className="relative h-80 w-80 text-[#97a8c8]">
              <Flower2 className="absolute right-12 top-4 h-24 w-24" />
              <Flower2 className="absolute right-0 top-24 h-28 w-28" />
              <Flower2 className="absolute right-20 top-44 h-16 w-16" />
              <div className="absolute right-[4.75rem] top-12 h-60 w-px bg-gradient-to-b from-[#97a8c8] to-transparent" />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 -translate-x-10 translate-y-10 opacity-40">
            <div className="relative h-80 w-80 text-[#97a8c8]">
              <Flower2 className="absolute bottom-28 left-1 h-28 w-28" />
              <Flower2 className="absolute bottom-10 left-16 h-24 w-24" />
              <Flower2 className="absolute bottom-0 left-32 h-16 w-16" />
              <div className="absolute bottom-8 left-[5.25rem] h-60 w-px bg-gradient-to-t from-[#97a8c8] to-transparent" />
            </div>
          </div>

          <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-20 lg:py-20">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#e6d3b4] bg-white/80 shadow-[0_10px_25px_rgba(125,89,46,0.10)] backdrop-blur-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(180deg,#f8f2e7_0%,#f0e2c9_100%)] text-[#b38a52] shadow-inner">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-[11px] tracking-[0.45em] text-[#a5885c] uppercase sm:text-xs">
                wedding invitation
              </p>
              <div className="mx-auto h-px w-28 bg-gradient-to-r from-transparent via-[#d4b88a] to-transparent" />
            </div>

            <div className="mx-auto mt-8 max-w-3xl rounded-[28px] border border-[#ead8bc] bg-white/55 px-5 py-6 shadow-[0_12px_30px_rgba(90,62,27,0.05)] backdrop-blur-sm sm:px-8">
              <p className="text-base leading-10 text-[#756658] sm:text-lg lg:text-[1.2rem]">
                وَمِنْ آيَاتِهِ الدالة على رحمته وعنايته بعباده وحكمته العظيمة وعلمه المحيط، أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا تناسبكم وتناسبونهن، وتشاكلكم وتشاكلونهن، لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً بما رتب على الزواج من الأسباب الجالبة للمودة والرحمة.
              </p>
            </div>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-10 text-[#7d6b59] sm:text-xl lg:text-[1.28rem]">
              يُسعد السيد محمد علي بسيريني أن يدعوكم لحفل زفاف ولده على ابنة السيد عبد اللطيف غزيل
            </p>

            <div className="mt-10 space-y-6">
              <h1 className="text-5xl font-bold tracking-[0.08em] text-[#7d95b6] drop-shadow-[0_4px_12px_rgba(125,149,182,0.15)] sm:text-6xl lg:text-7xl">
                {groom}
              </h1>

              <div className="flex items-center justify-center gap-4 text-[#bd9a67]">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d9c29c]" />
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ead8bc] bg-white/85 shadow-sm">
                  <Heart className="h-5 w-5 fill-current" />
                </div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d9c29c]" />
              </div>

              <h2 className="text-5xl font-bold tracking-[0.08em] text-[#7d95b6] drop-shadow-[0_4px_12px_rgba(125,149,182,0.15)] sm:text-6xl lg:text-7xl">
                {bride}
              </h2>
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-[30px] border border-[#ead7b6] bg-white/80 px-6 py-7 shadow-[0_18px_40px_rgba(88,60,29,0.08)] backdrop-blur-sm sm:px-8 sm:py-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-3">
                <div className="rounded-[22px] bg-[#fcf7ef] px-4 py-5 shadow-inner lg:col-span-2">
                  <CalendarDays className="mx-auto h-5 w-5 text-[#a98653]" />
                  <p className="mt-3 text-sm text-[#9c8566]">التاريخ</p>
                  <p className="mt-2 text-base font-semibold text-[#5d5145] sm:text-lg">{eventDate}</p>
                </div>

                <div className="rounded-[22px] bg-[#fcf7ef] px-4 py-5 shadow-inner lg:col-span-2">
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
                  className="group rounded-[24px] border border-[#ead7b6] bg-[linear-gradient(180deg,#fffdfa_0%,#fcf7ef_100%)] px-5 py-5 text-right transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(88,60,29,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-[#9c8566]">{menVenue.label}</p>
                      <p className="mt-2 text-base font-semibold leading-8 text-[#5d5145]">{menVenue.text}</p>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e5d0ac] bg-white text-[#a98653] shadow-sm transition group-hover:scale-105">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-[#8b755b]">اضغط لفتح العنوان على خرائط Google</p>
                </a>

                <div
                  className="rounded-[24px] border border-[#ead7b6] bg-[linear-gradient(180deg,#fffdfa_0%,#fcf7ef_100%)] px-5 py-5 text-right"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-[#9c8566]">{womenVenue.label}</p>
                      <p className="mt-2 text-base font-semibold leading-8 text-[#5d5145]">{womenVenue.text}</p>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ead7b6] bg-[#f8f1e7] text-[#b39a76] shadow-sm">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-[#8b755b]">سيتم إضافة رابط الخرائط فور تحديد الموقع</p>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-9 max-w-2xl text-base leading-9 text-[#7e6f60] sm:text-lg lg:text-[1.1rem]">
              حضوركم يسعدنا ويزيد هذه المناسبة جمالاً، ونأمل أن تشاركونا فرحتنا ودعواتكم الطيبة.
            </p>

            <div className="mt-11">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="group rounded-full border border-[#a77f46] bg-[linear-gradient(180deg,#a9834c_0%,#8d6733_100%)] px-10 py-4 text-base font-semibold text-white shadow-[0_18px_35px_rgba(137,103,51,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(137,103,51,0.34)]"
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
                          ? "bg-[linear-gradient(180deg,#a9834c_0%,#8d6733_100%)] text-white shadow-md"
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
                          ? "bg-[linear-gradient(180deg,#a9834c_0%,#8d6733_100%)] text-white shadow-md"
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
                  className="flex w-full items-center justify-center gap-2 rounded-[22px] bg-[linear-gradient(180deg,#a9834c_0%,#8d6733_100%)] px-4 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(137,103,51,0.25)] transition hover:brightness-105"
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

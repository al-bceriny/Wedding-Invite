import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();

    const guest_name =
      typeof body.guest_name === "string" ? body.guest_name.trim() : "";
    const attendance =
      body.attendance === "yes" || body.attendance === "no"
        ? body.attendance
        : null;
    const companions =
      typeof body.companions === "number"
        ? body.companions
        : Number(body.companions ?? 1);

    if (!guest_name) {
      return new Response(JSON.stringify({ error: "الاسم مطلوب" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!attendance) {
      return new Response(JSON.stringify({ error: "حالة الحضور غير صحيحة" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!Number.isInteger(companions) || companions < 1 || companions > 10) {
      return new Response(JSON.stringify({ error: "عدد الأشخاص غير صحيح" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabase.from("rsvps").insert([
      {
        guest_name,
        attendance,
        companions,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);

      return new Response(JSON.stringify({ error: "فشل حفظ البيانات" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API error:", error);

    return new Response(JSON.stringify({ error: "خطأ غير متوقع" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Please make A POST request" });
  }
  const contactData = JSON.parse(req.body);

  const { error } = await supabase.from("contact").insert([contactData]);
  if (error)
    res.status(500).json({
      success: false,
      message: "Could not send your Message .Please try again",
    });
  res.status(200).json({
    success: true,
    message: "Thanks for your message! we will be in touch soon:)",
  });
}

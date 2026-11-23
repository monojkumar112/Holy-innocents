import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { turnstile_token, form_loaded_at, website, ...formData } = body;

    // 1. Honeypot check
    if (website) {
      return NextResponse.json({ message: "OK" }, { status: 200 });
    }

    // 2. Time check (minimum 3 seconds)
    if (form_loaded_at && Date.now() - Number(form_loaded_at) < 3000) {
      return NextResponse.json({ message: "OK" }, { status: 200 });
    }

    // 3. Turnstile token presence check
    if (!turnstile_token) {
      return NextResponse.json(
        { message: "Turnstile token is required." },
        { status: 400 }
      );
    }

    // 4. Verify Turnstile token with Cloudflare
    const secretKey = process.env.TURNSTILE_SECRET_KEY || "";
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: turnstile_token,
        }),
      }
    );

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return NextResponse.json(
        { message: "Turnstile verification failed." },
        { status: 400 }
      );
    }

    // 5. Forward to Laravel endpoint
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    const laravelRes = await fetch(`${baseUrl}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const laravelData = await laravelRes.json();
    return NextResponse.json(laravelData, { status: laravelRes.status });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

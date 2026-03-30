// Vercel Serverless Function: contact form -> Resend
//
// Vercel dashboard'tan environment variable ekle:
// - RESEND_API_KEY (re_...)
// - RESEND_FROM (ör: "Barış Can Yonel <info@bariscanyonel.com>")
// - RESEND_TO (ör: takasan97@gmail.com)

function escapeHtml(input) {
  return String(input ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RESEND_FROM = process.env.RESEND_FROM || 'Barış Can Yonel <info@bariscanyonel.com>';
    const RESEND_TO = process.env.RESEND_TO || 'takasan97@gmail.com';

    if (!RESEND_API_KEY) {
      return res.status(500).json({ error: 'RESEND_API_KEY eksik' });
    }

    // Vercel genelde JSON parse eder; yine de güvenli olsun diye fallback var.
    const body = req.body && typeof req.body === 'object' ? req.body : {};

    const name = escapeHtml(body.name);
    const email = escapeHtml(body.email);
    const subject = escapeHtml(body.subject || body._subject || 'İletişim Formu');
    const message = escapeHtml(body.message || body.msg || '');

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;">
        <h2 style="margin:0 0 10px;">${subject}</h2>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0;">
        <p><strong>Mesaj:</strong></p>
        <p style="white-space:pre-wrap;margin:0;">${message}</p>
      </div>
    `;

    const text = `Konu: ${subject}\nAd: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`;

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [RESEND_TO],
        subject,
        html,
        text,
        reply_to: email || undefined,
      }),
    });

    const data = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      return res.status(resp.status).json({ error: data?.message || 'Resend hata verdi' });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (err) {
    return res.status(500).json({ error: err?.message || 'Server error' });
  }
};


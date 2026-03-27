# Özgünlük, Güncellik ve E-E-A-T Uyum Rehberi

Bu belge, sitenizin **özgünlük**, **güncellik** ve **E-E-A-T** (Deneyim, Uzmanlık, Otorite, Güvenilirlik) kriterlerine uyumunu özetler ve iyileştirme önerileri sunar.

---

## Mevcut Durum Özeti

| Kriter | Durum | Açıklama |
|--------|--------|----------|
| **Özgünlük** | ⚠️ Kısmen uygun | İçerikler genel rehber dili taşıyor; kişisel deneyim ve proje örnekleri artırılabilir. |
| **Güncellik** | ✅ Uygun | Blog yazılarında `datePublished` / `dateModified`, yazar ve okuma süresi var. Düzenli yeni yazı eklenirse güçlenir. |
| **E-E-A-T** | ⚠️ Kısmen uygun | Yazar, iletişim ve Schema mevcut; deneyim vurgusu ve teknik detay bloglarda artırılabilir. |

---

## 1. Özgünlük (Asla kopyala-yapıştır yapmayın)

**Şu an:**
- Blog metinleri genel bilgilendirici; doğrudan kopya içerik yok.
- Hakkımızda bölümü kişisel (perakende deneyimi, 5+ yıl, Tokat odaklı).

**Öneriler:**
- Her blog yazısına **en az 1–2 paragraf** kendi deneyiminizden örnek ekleyin: “Polat Mermer projesinde …”, “Yonel Oto’da katalog sayfasını şu yöntemle çözdük” gibi.
- İstatistik, müşteri sonucu veya teknik detay (hangi teknoloji, neden seçildi) özgünlüğü ve güveni artırır.
- Başka siteden alıntı yaparsanız **kaynak gösterin** ve kendi yorumunuzu ekleyin.

---

## 2. Güncellik (Blog ile sitenizi güncel tutun)

**Şu an:**
- Blog yazılarında `datePublished` ve `dateModified` (Schema) kullanılıyor.
- Yayın tarihleri 2025 Ocak; `dateModified` 2026-02-10 ile güncellik sinyali veriliyor.

**Öneriler:**
- **Düzenli aralıklarla** yeni blog yazısı ekleyin (ayda 1–2 makale hedefi).
- Yaptığınız işlerle ilgili **teknik detay** paylaşın: “Next.js ile nasıl hız aldık”, “SEO’da şu değişikliği yaptık, sonuç şu oldu” gibi.
- Eski yazıları güncellediğinizde `dateModified` ve mümkünse metinde “Şubat 2026’da güncellendi” notu ekleyin.

---

## 3. E-E-A-T (Deneyim, Uzmanlık, Otorite, Güvenilirlik)

**Deneyim (Experience)**  
- **Var:** Hakkımızda’da 5+ yıl, perakende 3 yıl, referans projeler (Polat Mermer, Yonel Oto, Balsan Papel, Tokat Sigorta) sayılıyor.  
- **Eksik:** Blog yazılarında “bu projede şunu yaşadım / şöyle çözdük” gibi somut deneyim az.  
- **Öneri:** Her yazıda 1–2 cümle “projelerimde gördüğüm …” veya “müşterilerimizde şu sonucu aldık” ekleyin.

**Uzmanlık (Expertise)**  
- **Var:** Teknolojiler (React, Next.js, Node.js, TypeScript, Tailwind, MySQL, MongoDB), hizmet listesi, beceri çubukları.  
- **Eksik:** Blogda derin teknik anlatım (kod örneği, mimari, performans adımları) az.  
- **Öneri:** En az 1–2 yazıyı “nasıl yaptık / hangi araçları kullandık” odaklı teknik içerikle zenginleştirin.

**Otorite (Authoritativeness)**  
- **Var:** Yazar adı (Barış Can Yonel), Schema’da `author` ve `publisher`, meta author.  
- **Eksik:** Yazarın tek bir “Hakkında / Kimdir” sayfası veya blog yazı sonunda kısa yazar kutusu yok.  
- **Öneri:** Blog detay sayfalarında yazar kutusu: “Barış Can Yonel, Tokat’ta web tasarım ve e-ticaret projeleri yapıyor. 5+ yıl deneyim.” + site linki.

**Güvenilirlik (Trustworthiness)**  
- **Var:** Açık iletişim (telefon, e-posta, 7/24 destek), konum (Tokat), Schema’da `address` ve `telephone`.  
- **Öneri:** İletişim formu kullanıyorsanız “Gizlilik” / “KVKK” kısa metni ve linki ekleyin; güveni pekiştirir.

---

## 4. Yapısal (Zaten Uygun Olanlar)

- Ana sayfada **LocalBusiness + Person** Schema.
- Blog yazılarında **Article** Schema, `author`, `datePublished`, `dateModified`.
- Meta **author** tüm blog sayfalarında.
- İletişim ve konum bilgisi tutarlı.

---

## 5. Hızlı Yapılabilecek İyileştirmeler

1. **Blog yazılarına deneyim cümlesi:** Örn. “Tokat’taki referans projelerimde (Polat Mermer, Yonel Oto) bu faydaları bire bir gördüm.”
2. **Yazar kutusu:** Blog detay sayfalarında meta satırının altında 1–2 cümlelik yazar tanımı.
3. **Schema’da author URL:** Article içinde `"author": {"@type": "Person", "name": "...", "url": "https://www.bariscanyonel.com/#about"}` eklenebilir.
4. **Güncellik notu:** Önemli güncellemelerde yazı sonuna “Son güncelleme: …” ekleyin.

Bu rehberi dönem dönem gözden geçirip yeni yazı ve güncellemelerde bu kurallara uyduğunuzda, özgünlük ve E-E-A-T puanı zamanla güçlenecektir.

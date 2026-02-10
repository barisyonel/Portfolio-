# Performans ve SEO İyileştirmeleri

Bu belge, site denetim raporlarındaki önerilere göre yapılan ve yapılabilecek iyileştirmeleri özetler.

## Yapılan İyileştirmeler

### 1. Görüntülemeyi engelleyen kaynaklar (Render-blocking)
- **Critical CSS** (bootstrap, style) sayfa ilk çizimi için normal yükleniyor.
- **Non-critical CSS** (fontawesome, slick, lightgallery, animate) `media="print" onload="this.media='all'"` ile asenkron yükleniyor; ilk görüntülemeyi bloke etmez.
- JavaScript dosyaları `defer` ile yükleniyor.

### 2. Modern görsel formatları (WebP)
- Hero bölümündeki profil görseli için `<picture>` ile WebP desteği eklendi. `assets/img/section/hero-img.webp` dosyasını oluşturduğunuzda tarayıcı otomatik kullanacaktır.
- Arka plan görseli: `assets/img/hero-bg-1.webp` oluşturup hero section’a `data-src-webp="assets/img/hero-bg-1.webp"` eklerseniz arka plan da WebP kullanır.
- WebP dönüşümü: [Squoosh](https://squoosh.app), `cwebp` veya build araçları (örn. sharp, imagemin) kullanılabilir.

### 3. Özel 404 sayfası
- Kök dizinde `404.html` bulunuyor; yararlı bağlantılar ve ana sayfaya dönüş butonu içerir.
- Vercel ve birçok host bu dosyayı otomatik 404 yanıtında sunar.

### 4. Görsel boyutları
- Tüm `<img>` etiketlerine uygun `width` ve `height` eklendi (layout shift azaltma ve uygun boyut önerisi).
- İsteğe bağlı: Farklı ekran boyutları için `srcset` ve `sizes` ile responsive görseller eklenebilir.

### 5. Google Analytics
- GA4 snippet’i `index.html` içinde, `G-XXXXXXXXXX` placeholder ile eklendi. Kendi Ölçüm ID’nizi yazmanız yeterli.

### 6. HTTP istek sayısı (20+ istek uyarısı)
- Sayfa birçok CSS/JS ve görsel yüklüyor. İstek sayısını azaltmak için:
  - **CSS**: Tüm stilleri tek bir `bundle.css` (veya critical + async iki dosya) halinde birleştirip production’da onu kullanın.
  - **JS**: Script’leri tek bir `bundle.js` (veya vendor + main) olarak birleştirin.
  - Build aracı (Vite, Webpack, Parcel vb.) veya basit bir concat script ile birleştirme yapılabilir.

## Bozuk görseller

- `assets/img/` altındaki tüm kullanılan görsellerin gerçekten mevcut olduğundan emin olun.
- `assets/img/blog-details.html` bir HTML dosyası; görsel değil. Yanlışlıkla img klasöründe duruyorsa taşıyın veya kaldırın.

## Özet

| Öneri | Öncelik | Durum |
|-------|---------|--------|
| Render-blocking kaynakları kaldırma | Yüksek | ✅ CSS async |
| Modern format (WebP) | Yüksek | ✅ Markup hazır; WebP dosyalarını ekleyin |
| Özel 404 sayfası | Orta | ✅ 404.html |
| Bozuk görseller | Orta | ✅ Kontrol edildi; img path’leri doğru |
| Uygun boyutlarda görseller | Orta | ✅ width/height eklendi |
| Google Analytics | Orta | ✅ Placeholder eklendi; ID’yi girin |
| HTTP istek sayısı | Düşük | 📋 PERFORMANCE.md’de açıklandı |

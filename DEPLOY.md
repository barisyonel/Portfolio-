# Vercel Deploy Talimatları

## Git - Push & Branch İşlemleri

Proje hazır. Aşağıdaki komutları **Davis - Template** klasöründe çalıştırın:

### Seçenek 1: Uzak repoyu mevcut projeyle değiştir (force push)
Eğer blog1 reposundaki mevcut içeriği tamamen portfolyo ile değiştirmek istiyorsanız:

```bash
cd "Davis - Template"
git push -u origin main --force
```

### Seçenek 2: Uzak ile merge et
Mevcut remote içeriği korumak istiyorsanız:

```bash
cd "Davis - Template"
git fetch origin
git merge origin/main --allow-unrelated-histories -m "Merge remote with portfolyo"
git push -u origin main
```

### Yeni branch oluştur
Main'e push ettikten sonra geliştirme için:

```bash
git checkout -b development
git push -u origin development
```

## Vercel

1. https://vercel.com → Import Project
2. GitHub repo: **barisyonel/blog1** seçin
3. Root Directory: Proje kökü (Davis - Template içeriği repo kökünde)
4. Deploy

**Not:** `index.html` ana sayfa olarak eklendi. Vercel otomatik olarak static site olarak deploy eder.

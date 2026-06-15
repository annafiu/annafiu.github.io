# assets/img — panduan penempatan foto

Taruh semua foto di folder ini sesuai struktur berikut:

## Foto utama

| File                   | Dipakai di        | Ukuran ideal   |
|------------------------|-------------------|----------------|
| `profile.jpg`          | Home page         | 400×400px min  |
| `about.jpg`            | About page        | 1600×600px min |
| `contact.jpg`          | Contact page      | 900×600px min  |

## Foto project works

Setiap project punya folder sendiri di `works/`:

```
assets/img/works/
├── randugede-house/
│   ├── hero.jpg          ← foto utama (16:9)
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   └── ...
├── forma-studio-fit-out/
├── micro-housing-study/
├── villa-prambanan/
├── warung-kopi-interior/
└── green-cluster-housing/
```

Setelah menambahkan foto ke folder works, edit bagian gallery
di file `works/[nama-project]/index.html` — uncomment tag `<img>`
yang sudah disiapkan di sana.

## Tips
- Format: `.jpg` atau `.webp` (lebih ringan)
- Kompres dulu: https://squoosh.app
- Nama file huruf kecil, pakai dash (bukan spasi)

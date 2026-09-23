// Data soal — pelan-pelan kita tambah nanti
const daftarSoal = [
  { angka: 1, emoji: '🍎', pertanyaan: 'Ada berapa apel?', jawaban: 1 },
  { angka: 2, emoji: '🍌🍌', pertanyaan: 'Ada berapa pisang?', jawaban: 2 },
  { angka: 3, emoji: '🌟🌟🌟', pertanyaan: 'Ada berapa bintang?', jawaban: 3 },
  { angka: 4, emoji: '🌸🌸🌸🌸', pertanyaan: 'Ada berapa bunga?', jawaban: 4 },
  { angka: 5, emoji: '🐱🐱🐱🐱🐱', pertanyaan: 'Ada berapa kucing?', jawaban: 5 },
  { angka: 2, emoji: '🐶🐶', pertanyaan: 'Ada berapa anjing?', jawaban: 2 },
  { angka: 3, emoji: '🍊🍊🍊', pertanyaan: 'Ada berapa jeruk?', jawaban: 3 },
  { angka: 4, emoji: '🦋🦋🦋🦋', pertanyaan: 'Ada berapa kupu-kupu?', jawaban: 4 },
  { angka: 5, emoji: '🎈🎈🎈🎈🎈', pertanyaan: 'Ada berapa balon?', jawaban: 5 },
  { angka: 1, emoji: '🌙', pertanyaan: 'Ada berapa bulan?', jawaban: 1 }
]

let nomorSoalSekarang = 0
let sudahMenjawab = false

// Ambil elemen halaman
const elSoal = document.getElementById('soal-angka')
const elGambar = document.getElementById('gambar-benda')
const elPesan = document.getElementById('pesan')
const elTombolLanjut = document.getElementById('tombol-lanjut')
const semuaTombolJawab = document.querySelectorAll('.tombol-jawaban')

// Tampilkan soal
function tampilkanSoal() {
  sudahMenjawab = false
  elTombolLanjut.classList.remove('tampil')
  elPesan.textContent = ''

  // Kembalikan warna tombol
  semuaTombolJawab.forEach(btn => {
    btn.classList.remove('benar', 'salah')
  })

  const soal = daftarSoal[nomorSoalSekarang]
  elSoal.textContent = soal.pertanyaan
  elGambar.textContent = soal.emoji
}

// Cek jawaban
semuaTombolJawab.forEach(tombol => {
  tombol.addEventListener('click', () => {
    if (sudahMenjawab) return
    sudahMenjawab = true

    const nomorDiklik = parseInt(tombol.dataset.nomor)
    const soal = daftarSoal[nomorSoalSekarang]

    if (nomorDiklik === soal.jawaban) {
      tombol.classList.add('benar')
      elPesan.textContent = '✅ Benar sekali! Hebat! 🎉'
      elPesan.style.color = '#2E7D32'
    } else {
      tombol.classList.add('salah')
      elPesan.textContent = '😊 Belum tepat, coba perhatikan lagi ya!'
      elPesan.style.color = '#C62828'
    }

    elTombolLanjut.classList.add('tampil')
  })
})

// Tombol lanjut
elTombolLanjut.addEventListener('click', () => {
  nomorSoalSekarang++
  if (nomorSoalSekarang >= daftarSoal.length) {
    nomorSoalSekarang = 0 // Ulang dari awal nanti
    alert('🎉 Selesai! Kamu hebat sekali! Ayo main lagi!')
  }
  tampilkanSoal()
})

// Mulai pertama kali
tampilkanSoal()

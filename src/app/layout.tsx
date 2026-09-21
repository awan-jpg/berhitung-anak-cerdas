export const metadata = {
  title: 'Belajar Berhitung — Cerdas Anak Indonesia',
  description: 'Aplikasi belajar berhitung yang menyenangkan'
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

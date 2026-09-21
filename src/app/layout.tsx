import type { ReactNode } from 'react';

export const metadata = {
  title: 'Belajar Berhitung — Cerdas Anak Indonesia',
  description: 'Aplikasi belajar berhitung yang menyenangkan'
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

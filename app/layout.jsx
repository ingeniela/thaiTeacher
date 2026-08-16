export const metadata = {
  title: 'Flashcards Tailandes Pro',
  description: 'Interactive Thai flashcards with Learn, Test, and Match study modes.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Voice Hub — Synchronia Labs",
  description: "Voix → Texte → IA → Voix (demo/pro).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "system-ui, Arial, sans-serif", background: "#f8fafc" }}>
        {children}
      </body>
    </html>
  );
}

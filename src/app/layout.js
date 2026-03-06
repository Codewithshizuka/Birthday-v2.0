import "./globals.css";

export const metadata = {
  title: "Eid Mubarak, My Love!",
  description: "An animated Eid Mubarak surprise with loving messages, memories, and a heartfelt letter for your special partner."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Search page UI",
  description: "Search page UI for Job Board",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

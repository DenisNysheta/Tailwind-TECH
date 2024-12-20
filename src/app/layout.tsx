import type { Metadata } from "next";
import "@/style/style.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-OpenSans mx-auto fullHd:w-[1920px]"
      >
        {children}
      </body>
    </html>
  );
}

import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Iftekhar Ahmad - Software Engineer",
  description: "Portfolio of Iftekhar Ahmad, Software Engineer specializing in scalable web application",
  generator: "v0.app",
  icons: {
    icon: "/software-engineer-headshot.png",
    shortcut: "/software-engineer-headshot.png",
    apple: "/software-engineer-headshot.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${poppins.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
{/*         <Analytics /> */}
      </body>
    </html>
  )
}

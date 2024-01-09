import { Inter } from "next/font/google"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import { ThemeContextProvider } from "@/context/ThemeContext"
import ThemeProvider from "@/providers/ThemeProvider"
// import NextNProgress from "nextjs-progressbar"

import "./globals.scss"

import AuthProvider from "@/context/AuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PBlog",
  description: "Personal Blog",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  {/* <NextNProgress color="#DC143C" /> */}
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

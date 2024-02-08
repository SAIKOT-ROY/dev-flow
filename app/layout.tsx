import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import React from 'react'
import { Metadata } from 'next'
import { Inter, Space_Grotesk } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-inter"
})
const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-spaceGrotesk"
})

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A community driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developer around the world. Explore topics in web development, mobile app development, algorithms, data structure, and more.",
  icons: {
    icon: "/public/assets/images/site-logo.svg"
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500"
        }
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${space_Grotesk.variable}`}>
          <p className='h1-bold'>This is a text</p>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
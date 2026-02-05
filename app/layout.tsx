import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Header } from "@/components/header"
import { Toaster } from "@/components/ui/sonner"
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Streamline Labs - Custom Web Apps & Automations',
  description: 'We turn manual processes into powerful web apps — fast. Dashboards, automations, and tools that save you time and headaches.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0088ff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  )
}

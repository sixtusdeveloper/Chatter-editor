import './globals.css';
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import Provider from './Provider';
// import { dark } from '@clerk/themes';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Chatter Editor",
  description: "A dynamic and innovative platform designed to cater to the needs of traditional bookworms and modern content creators alike.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
    appearance={{
      // baseTheme: dark,
      variables: { 
        colorPrimary: "#3371FF", fontSize: '14px' ,
      },
      elements: {
        button: {
            padding: '10px 2px', 
          },
          formFieldInput: {
            borderRadius: '6px !important',  
            borderColor: '#333 !important',   
            padding: '10px !important',       
            backgroundColor: '#ffffff !important',
            color: '#333 !important',        
          },
      },

     
    }}
    >
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  )
}

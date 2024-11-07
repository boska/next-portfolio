import type { Metadata } from "next";
import { Fira_Code, Fira_Sans } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from './components/ThemeProviderWrapper';

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"],
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-fira-sans",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Yang Lee | Senior iOS Developer",
  description: "Senior iOS Developer with a decade of experience, crafting elegant mobile solutions from Prague. Specialized in SwiftUI, React Native, and cross-platform development.",
  keywords: [
    'iOS Developer',
    'Swift',
    'SwiftUI',
    'React Native',
    'Mobile Development',
    'Software Engineer',
    'Prague',
    'Yang Lee',
    'Frontend Developer',
    'Full Stack Developer'
  ],
  creator: 'Yang Lee',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaCode.variable} ${firaSans.variable} font-sans antialiased`}>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
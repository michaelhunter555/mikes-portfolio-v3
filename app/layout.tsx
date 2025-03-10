import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/Header/MainNavigation";
import QueryClientWrapper from "@/components/shared/QueryClient/QueryClientProvider";
import { GlobalStyles } from "@/styles/Globalstyles";
import AppTheme from "@/styles/ThemeProvider";

import { Content, PageContainer } from "../components/Footer/FooterStyles";
import { AuthProvider } from "../context/authProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softly Wearing Engineer",
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
        style={{ margin: 0, padding: 0 }}
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <QueryClientWrapper>
          <AuthProvider>
            <AppTheme>
              <GlobalStyles />
              <PageContainer>
                <Header />
                <Content>{children}</Content>
              </PageContainer>
            </AppTheme>
          </AuthProvider>
        </QueryClientWrapper>
      </body>
    </html>
  );
}

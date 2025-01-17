import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solution",
  description: "Connected Workspace for everyone",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/solution.png",
        href: "/solution.png",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/dark-solution.png",
        href: "/dark-solution.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="solution-theme-2"
        >
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

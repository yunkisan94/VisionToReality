import { ThemeProvider } from "./ThemeProvider";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

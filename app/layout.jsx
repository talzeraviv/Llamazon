import "./globals.css";
import AuthProvider from "./context/AuthProvider";
import ReduxProvider from "./context/ReduxProvider";
import Header from "./components/Header";

export const metadata = {
  title: "Llamazon",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AuthProvider>
            <Header />
            <main className="bg-gray-100 max-w-screen-2xl mx-auto">
              {children}
            </main>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

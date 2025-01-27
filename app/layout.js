import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navigation from "../components/Navigation";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <AntdRegistry>{children}</AntdRegistry>
        <footer style={{ textAlign: 'center', padding: '20px', background: '#f0f0f0' }}>
          © 2024 WhatsApp Clone. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

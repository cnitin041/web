import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nitin Choudhary | Full Stack AI Engineer',
  description:
    'Full Stack AI Engineer building production-grade Generative AI systems, GPU-optimized inference pipelines, and scalable applications.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function updateTheme() {
                  var hour = new Date().getHours();
                  var theme = hour >= 6 && hour < 18 ? 'light' : 'dark';
                  if (document.documentElement.getAttribute('data-theme') !== theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                }
                updateTheme();
                window.setInterval(updateTheme, 60000);
                window.addEventListener('focus', updateTheme);
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

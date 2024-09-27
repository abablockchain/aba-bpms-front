"use client";
export default function RootLayout({
  children, // will be a page or nested layout
}) {
  return (
    <html>
      <body
        style={{
          // backgroundColor: 'white',
          maxHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}

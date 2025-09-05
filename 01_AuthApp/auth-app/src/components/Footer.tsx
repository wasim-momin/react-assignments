// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-[#272757] text-gray-300 text-center py-4 mt-auto">
      <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
}
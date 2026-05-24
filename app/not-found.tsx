import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
        <span className="font-display font-bold text-2xl text-accent">404</span>
      </div>
      <h1 className="font-display font-bold text-3xl text-text mb-3">
        Page not found
      </h1>
      <p className="text-muted text-base mb-10 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-text text-sm font-medium hover:border-accent/40 hover:bg-surface transition-all group"
      >
        <ArrowLeft
          size={15}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to Home
      </Link>
    </main>
  );
}

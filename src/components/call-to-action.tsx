import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Structure Your Ideas the Developer Way
          </h2>
          <p className="mt-4">
            Quick, offline-ready, and made for developers. Notes that match your
            workflow
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div
              key={1}
              className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
            >
              <Button asChild size="lg" className="rounded-xl px-5 text-base">
                <Link href="/dashboard">
                  <span className="text-nowrap"> Get Started </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

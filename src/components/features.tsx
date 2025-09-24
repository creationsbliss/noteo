import { Settings2, Sparkles, Zap } from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Features() {
  return (
    <section className="bg-zinc-50 py-8 md:py-16 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Designed for Coders, by Coders
          </h2>
          <p className="mt-4">
            Smart, flexible, and powerful — everything you need to build your
            second brain
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          <Card className="group bg-background">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Zap className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Quick Notes</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                From thought to note in seconds with fast input, smooth keyboard
                navigation, and effortless flow
              </p>
            </CardContent>
          </Card>

          <Card className="group bg-background">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Settings2 className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Developer Friendly</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                From Markdown and snippets to CLI tricks and versioning.
                It&apos;s the workflow you know
              </p>
            </CardContent>
          </Card>

          <Card className="group bg-background">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Powered By AI</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Elements to functionality, you have complete control to create a
                unique experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);

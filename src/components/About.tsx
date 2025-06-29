// "use client";

import Image from "next/image";
import Title from "./ui/Title";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const About = () => {
  return (
    <TooltipProvider delayDuration={0} skipDelayDuration={0}>
      <div className="mb-6">
        <Title title="About" />

        <div className="text-zinc-600 dark:text-zinc-500">
          Hey! I&apos;m Manab, a 2026 B.Tech IT graduate and full-stack developer. I
          build seamless Web‑apps and websites that deliver real value. From
          designing intuitive interfaces to building scalable back‑ends, I&apos;m
          passionate about delivering impactful digital experiences that people ❤️.
          <br />
          You can find me on{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://x.com/this_manab"
                className="group relative inline-flex overflow-hidden font-bold dark:text-zinc-400"
                target="_blank"
                rel="noopener"
              >
                <span className="relative bg-muted mx-2 py-1 px-2 rounded-full">
                  x.com (twitter)
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent className="animate-in rounded-full">
              <div className="flex items-center space-x-2">
                <Image
                  src="/avatar.png"
                  alt="@this_manab"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>@this_manab</span>
              </div>
            </TooltipContent>
          </Tooltip>{" "}
          for my tech updates.
        </div>
      </div>
    </TooltipProvider>
  );
};

export default About;

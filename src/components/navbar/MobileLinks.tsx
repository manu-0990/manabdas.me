"use client";

import { useRouter } from "next/navigation";
import { Links } from "@/constants";

const MobileLinks = () => {
  const router = useRouter();

  return (
    <div className="flex w-full flex-row items-center space-x-2">
      <button
        onClick={() => router.push(Links[0].link)}
        className="relative rounded-lg p-1 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-900 sm:px-4 sm:py-2"
      >
        {Links[0]?.name}
      </button>
      <button
        onClick={() => router.push(Links[1].link)}
        className="relative rounded-lg p-1 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-900 sm:px-4 sm:py-2"
      >
        {Links[1]?.name}
      </button>
    </div>
  );
};

export default MobileLinks;

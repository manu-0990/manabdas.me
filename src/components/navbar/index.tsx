import { Links } from "@/constants";

import MobileLinks from "./MobileLinks";
import NavLinks from "./NavLinks";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="max-w-2xl sticky-nav mx-auto my-0 flex w-full items-center justify-between bg-white/60 py-8 dark:bg-zinc-900 md:mb-10 md:mt-4">
      <Theme />
      <div className="hidden rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10 sm:block">
        <NavLinks links={Links} />
      </div>
      <div className="block sm:hidden">
        <MobileLinks />
      </div>
    </nav>
  );
};

export default Navbar;

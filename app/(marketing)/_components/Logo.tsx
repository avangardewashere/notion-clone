import Image from "next/image";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden  md:flex items-center  gap-x-2">
      <Image
        className="dark:hidden"
        height={40}
        src="/solution.png"
        width={40}
        alt="solution-logo"
      />
      <Image
        className="hidden dark:block"
        height={40}
        src="/solution.png"
        style={{ filter: "invert(100%) brightness(150%)" }}
        width={40}
        alt="solution-logo"
      />
      <p className={cn("font-semibold", font.className)}>Solution</p>
    </div>
  );
};

export default Logo;

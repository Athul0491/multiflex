import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="flex h-[10vh] w-full items-center justify-between ">
      <h1 className="text-[24px] font-extrabold tracking-tighter">Multiflex</h1>
      <div className="flex gap-x-5">
        <Link href={"/what-we-do"} className="text-base font-semibold">
          What we do
        </Link>
        <Link href={"/who-we-are"} className="text-base font-semibold">
          Who are we
        </Link>
      </div>
      <div>
        <Button variant={"link"} className="text-base">
          Contact
        </Button>
      </div>
    </nav>
  );
}

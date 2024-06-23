import Image from "next/image";
import { Button } from "~/components/ui/button";
import heroImg from "../images/hero-image.jpg";

export default function HomePage() {
  return (
    <>
      <section>
        <main className="relative flex h-[calc(100vh-70px)] items-center ">
          <div className="">
            <div className="">
              <h1 className="text-balance text-[70px] font-extrabold leading-[109%] tracking-tighter">
                Crafting premium Modular Furniture
              </h1>
              <p className="w-[70%] text-lg font-light">
                we blend tradition and innovation to transform spaces with
                precision-crafted modular designs
              </p>
            </div>
            <div className="mt-10">
              <Button>Discover More</Button>
            </div>
          </div>
          <div className="h-[calc(100%-10px)] w-[1000px] bg-black drop-shadow-[24px_24px_rgba(0,0,0,1)]">
            <Image
              src={heroImg}
              alt="heroimage"
              className=" h-full object-cover"
            />
          </div>
        </main>
        <div className="absolute inset-0 -z-20 bg-[url(/lines.svg)] bg-top opacity-50"></div>
      </section>
    </>
  );
}

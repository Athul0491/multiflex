import Image from "next/image";
import { Button } from "~/components/ui/button";
import heroImg from "../images/hero-image.jpg";
import { title } from "process";
import { FeatureTitle } from "~/components/features/title";
import { Hospitability, Offices, Parametric, Residencies, Transformable } from "~/components/features/card";

export default function HomePage() {
  const features = [
    { title: "Residencies", card: Residencies },
    { title: "Offices", card: Offices },
    { title: "Hospitability", card: Hospitability },
    { title: "Transformable", card: Transformable },
    { title: "Parametric", card: Parametric }
  ]
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
      <section>
        {/* Features */}
        <div className="flex w-full p-10 items-start">
        <div className="w-full py-[50vh]">
          <ul>
            {features.map((feature) => (
              <li key={feature.title}>
                <FeatureTitle title={feature.title}>{feature.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sticky top-10 flex h-screen items-center">
          <div className="relative aspect-square w-full rounded-2xl bg-gray-300 h-[400px]">
            {features.map((feature) => (
              <feature.card key={feature.title} title={feature.title} />
            ))}
          </div>
        </div>
        </div>
        <div className="h-screen">More room to scroll</div>
      </section>
    </>
  );
}

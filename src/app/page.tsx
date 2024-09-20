import Accordion from "@/components/Accordion";
import Header from "@/components/Header";
import Verification from "@/components/Verification";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="bg-[#F8F9F9] gap-[48px] h-[92vh] flex flex-col items-center p-[40px_24px_24px_24px]">
          <Verification />
          <Accordion />
      </section>
    </main>
  );
}

import { Logo } from "@/components/atoms/Logo/Logo";
import { FaChevronDown } from "react-icons/fa6";
import { Animation } from '@/features/animations';
import { Typography } from "@/components/molecules/Typography/Typography";
import { TypographyVariant } from "@/components/molecules/Typography/Typography.types";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen min-w-screen">
      <main className="min-h-screen min-w-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
        <div className="flex flex-col gap-8 row-start-2 items-center justify-items-center">
          <Logo title="Charl de Waal" subtitle="Film Maker & Developer" />
          <a href="#films" className="cursor-pointer text-2xl animate-bounce" ><Animation animation={'Fade'} delay={4000}><FaChevronDown /></Animation></a>
        </div>
      </main>
      <main id='films' className="min-h-screen min-w-screen grid grid-rows-[20px_1fr_20px]" >
        <div className="flex flex-col gap-8 row-start-2 justify-items-center items-center">
          <Typography text="Films" variant={TypographyVariant.Title} testId="films-title" />
        </div>
      </main>
    </div>
  );
}

import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className=" text-blue-300 font-barlow">sawadikappppp</h1>
      <h1 className=" text-blue-300 ">sawadikappppp</h1>
      <Button variant="destructive">punten gan</Button>
    </div>
  );
}

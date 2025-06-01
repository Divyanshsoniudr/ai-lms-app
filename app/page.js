import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h3>I Love Youtube </h3>
      <Button variant="outline">Love you</Button>
      <UserButton/>
    </div>
  );
}

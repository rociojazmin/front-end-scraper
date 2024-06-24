import Image from "next/image";
import Link from "next/link"
import RootLayout from "./layout";
import Card from "@/components/card";

export default function Grid() {
  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">
          Welcome to Next.js!
        </h1>
        <Card />
        <p className="mt-4 text-xl">
          Get started by editing <code>src/app/page.tsx</code>
        </p>
      </div>
    </RootLayout>
  );
}

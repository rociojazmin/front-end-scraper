// components/Card.tsx
import Link from "next/link"
import Image from "next/image"

export default function Card() {
  const items = [
    {
      href: "#",
      imgSrc: "https://www.ideahogar.com.ar/5833-medium_default/horno-longvie-gas-grafito-reloj-digital-h6900g.jpg",
      imgAlt: "Product 1",
      title: "Elegant Workspace",
      description: "Cozy and modern office setup with natural lighting."
    },
    {
      href: "#",
      imgSrc: "https://www.ideahogar.com.ar/5833-medium_default/horno-longvie-gas-grafito-reloj-digital-h6900g.jpg",
      imgAlt: "Product 2",
      title: "Cozy Living Room",
      description: "Warm and inviting space for relaxation and entertainment."
    },
    {
      href: "#",
      imgSrc: "https://www.ideahogar.com.ar/5833-medium_default/horno-longvie-gas-grafito-reloj-digital-h6900g.jpg",
      imgAlt: "Product 3",
      title: "Minimalist Bedroom",
      description: "Serene and calming space for a good night's sleep."
    },
    {
      href: "#",
      imgSrc: "https://www.ideahogar.com.ar/5833-medium_default/horno-longvie-gas-grafito-reloj-digital-h6900g.jpg",
      imgAlt: "Product 4",
      title: "Rustic Kitchen",
      description: "Warm and inviting space for cooking and gathering."
    },
    {
      href: "#",
      imgSrc: "https://www.ideahogar.com.ar/5833-medium_default/horno-longvie-gas-grafito-reloj-digital-h6900g.jpg",
      imgAlt: "Product 5",
      title: "Outdoor Oasis",
      description: "Peaceful and serene backyard space for relaxation."
    },
    {
      href: "#",
      imgSrc: "https://www.ideahogar.com.ar/5833-medium_default/horno-longvie-gas-grafito-reloj-digital-h6900g.jpg",
      imgAlt: "Product 6",
      title: "Modern Bathroom",
      description: "Sleek and stylish space for a relaxing retreat."
    }
  ];

  return (
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
      {items.map((item, index) => (
        <div key={index} className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
          <Link href={item.href} className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View</span>
          </Link>
          <Image src={item.imgSrc} alt={item.imgAlt} width={500} height={400} className="object-cover w-full h-64" />
          <div className="p-4 bg-background">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

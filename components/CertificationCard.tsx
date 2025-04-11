import Image from "next/image";

const certifications = [
  "/keysystem-10.png",
  "/keysystem-10.png",
  "/keysystem-11.png",
  "/keysystem-12.png",
  "/keysystem-13.png",
  "/keysystem-14.png",
  "/keysystem-15.png",
  "/keysystem-16.png",
  "/keysystem-17.png",
  "/keysystem-18.png",
  "/keysystem-19.png",
  "/keysystem-20.png",
  "/keysystem-21.png",
  "/keysystem-22.png",
  "/keysystem-23.png",
  "/keysystem-24.png",
  "/keysystem-25.png",
  "/keysystem-26.png",
];

export default function Certifications() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center p-8 bg-white rounded-xl border border-gray-200 shadow-lg max-w-7xl mx-auto">
        {certifications.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Certification ${index + 1}`}
            width={100}
            height={100}
            className="object-contain hover:grayscale transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}

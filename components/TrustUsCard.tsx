import Image from "next/image";

const certifications = [
  "/keysystem-28.png",
  "/keysystem-30.png",
  "/keysystem-31.png",
  "/keysystem-32.png",
  "/keysystem-33.png",
  "/keysystem-34.png",
  "/keysystem-35.png",
  "/keysystem-36.png",
  "/keysystem-37.png",
  "/keysystem-07.png",
  "/keysystem-06.png",
];

export default function TrustUs() {
  return (
    <section className="">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center p-8 rounded-xl shadow-lg max-w-7xl mx-auto">
        {certifications.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Certification ${index + 1}`}
            width={130}
            height={130}
            className="object-contain hover:grayscale transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}

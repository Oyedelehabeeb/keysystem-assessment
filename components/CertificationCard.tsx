import Image from "next/image";

const certifications = [
  "/cert1.png",
  "/cert2.png",
  "/cert3.png",
  "/cert4.png",
  "/cert5.png",
  "/cert6.png",
  "/cert7.png",
  "/cert8.png",
  "/cert9.png",
  "/cert10.png",
  "/cert11.png",
  "/cert12.png",
  "/cert13.png",
  "/cert14.png",
  "/cert15.png",
  "/cert16.png",
  "/cert17.png",
  "/cert18.png",
];

export default function Certifications() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {certifications.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Certification ${index + 1}`}
            width={100}
            height={100}
            className="object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}

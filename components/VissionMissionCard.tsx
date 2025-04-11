import Image from "next/image";

export default function VisionMission() {
  return (
    <section className="max-w-7xl mx-auto py-4 px-7 grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
      {/* Vision */}
      <div className="border border-white/10 p-8 rounded-xl bg-gradient-to-tr from-30% from-stone-950 to-indigo-800">
        <div className="flex justify-center mb-6">
          <Image
            src="/keysystem-08.png"
            alt="Vision"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">Our Vision</h3>
        <p className="text-white/70">
          To be the trusted partner for businesses seeking to leverage
          technology to improve decision-making, unlock new opportunities, and
          achieve transformative growth.
        </p>
      </div>

      {/* Mission */}
      <div className="border border-white/10 p-8 rounded-xl bg-gradient-to-tr from-30% from-stone-950 to-indigo-800">
        <div className="flex justify-center mt-[-10px]">
          <Image
            src="/keysystem-09.png"
            alt="Mission"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">Our Mission</h3>
        <p className="text-white/70">
          We bridge the gap between technology and business, delivering
          customized ICT solutions that drive efficiency, growth, and
          competitive advantage.
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function StrategicConsultation() {
  return (
    <section className="py-16 space-y-10">
      {/* Top Content */}
      <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-zinc-950 to-slate-900">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Strategic Consultation
          </h2>
          <p className="text-white/80 flex flex-col gap-2">
            <span>We kick off with a strategic consultation to</span>
            <span>understand your brand, goals, and audience.</span>
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/keysystem-38.png"
            alt="puzzle"
            width={200}
            height={200}
          />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-[#0E0F1A] to-[#15162A] p-4 rounded-xl space-y-3">
          <h3 className="text-xl font-bold text-white">Collaboration</h3>
          <p className="text-white/80 text-sm">
            At KeySystem, we collaborate closely to ensure the end result meets
            your expectations and makes you happy.
          </p>

          <div className="flex justify-end">
            <Image
              src="/keysystem-38.png"
              alt="Collaboration Handshake"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-zinc-950 to-slate-900 p-4 rounded-xl space-y-3">
          <h3 className="text-xl font-bold text-white">Delivery</h3>
          <p className="text-white/80 text-sm">
            Our delivery rate is 100%; our clients deserve nothing less.
          </p>

          <div className="flex justify-end">
            <Image
              src="/keysystem-39.png"
              alt="Collaboration Handshake"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

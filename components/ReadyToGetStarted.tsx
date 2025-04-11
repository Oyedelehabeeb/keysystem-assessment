export default function ReadyToGetStarted() {
  return (
    <section className="relative bg-gradient-to-r from-[#0E0F1A] to-[#15162A] rounded-xl p-8 overflow-hidden">
      {/* Gradient Circle Design */}
      <div className="absolute right-0 top-0 h-full w-1/2">
        <div className="bg-gradient-to-r from-transparent to-[#1C2BEE] opacity-20 h-full w-full rounded-full"></div>
      </div>

      <div className="relative z-10 space-y-6 max-w-xl">
        <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>

        <p className="text-sm text-white/70">Shoot us a Mail</p>

        <p className="text-white/80">
          Join numerous corporations, organizations, and businesses as they
          scale their teams, tap into new market opportunities and build
          innovative products with{" "}
          <span className="font-semibold">KeySystem Technology</span>
        </p>

        <p className="text-white/80">
          Join thousands of students who are ready to learn new skills or take
          their career to the next level by enrolling in one of our training
          programs today.
        </p>

        <button className="bg-gradient-to-r from-[#1C2BEE] to-[#3A52FF] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
          Send Us a Mail Now
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          Feel The Slow Jam Vibes 🎧
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Late nights. Smooth beats. Pure emotions.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:opacity-80 transition">
          Explore Jams
        </button>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8">Featured Jams</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Midnight Love</h3>
            <p className="text-gray-400 text-sm mt-2">
              Smooth R&B vibes for the night.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">City Lights</h3>
            <p className="text-gray-400 text-sm mt-2">
              Late night drive energy.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Slow Motion</h3>
            <p className="text-gray-400 text-sm mt-2">
              Feel every beat, every emotion.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
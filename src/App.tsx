import AppleOne from "./components/hero/apple-one";

export default function App() {
  return (
    <div className="min-h-full bg-[#fbfbfd]">
      <AppleOne />
      {/* Hero Section */}
      <section className="px-6 py-24 sm:py-32 text-center">
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
          AWTFS
        </h1>
        <p className="text-xl sm:text-2xl text-[#86868b] font-medium tracking-tight mb-8">
          Apple Web Template Font & Space
        </p>
        <p className="max-w-2xl mx-auto text-[#1d1d1f] text-lg leading-relaxed mb-12">
          A carefully crafted starter template that brings Apple's iconic design language to your web projects.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/yourusername/awtfs"
            className="bg-[#0071e3] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0077ED] transition-colors"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="text-[#0071e3] px-8 py-3 font-medium hover:text-[#0077ED] transition-colors"
          >
            Learn more →
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] text-center mb-16 tracking-tight">
            Designed for developers.<br />Built with precision.
          </h2>

          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">SF Pro Display</h3>
              <p className="text-[#86868b] leading-relaxed">
                Perfect for headlines and prominent text elements, bringing Apple's signature look to your headings.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">SF Pro Text</h3>
              <p className="text-[#86868b] leading-relaxed">
                Optimized for maximum legibility in body content, ensuring your text is always crystal clear.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="#" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="ADBAR Interior Design" width={140} height={40} />
          </Link>
          <nav className="hidden items-center gap-8 text-sm sm:flex">
            <a href="#about" className="hover:text-zinc-700 dark:hover:text-zinc-300">About</a>
            <a href="#services" className="hover:text-zinc-700 dark:hover:text-zinc-300">Services</a>
            <a href="#portfolio" className="hover:text-zinc-700 dark:hover:text-zinc-300">Portfolio</a>
            <a href="#contact" className="hover:text-zinc-700 dark:hover:text-zinc-300">Contact</a>
            <a href="#contact" className="rounded-full bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200">Book a Consultation</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-20">
            <Image
              src="https://v0-adbar.vercel.app/elegant-luxury-interior-design-materials-wood-ston.jpg"
              alt="Background"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Blending Luxury with Nature
              </h1>
              <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
                Nature-friendly, scientifically integrated interior design solutions tailored for Ethiopia. Creating spaces where elegance meets sustainability.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#portfolio" className="rounded-full bg-zinc-900 px-5 py-2.5 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200">View Our Work</a>
                <a href="#contact" className="rounded-full border border-zinc-300 px-5 py-2.5 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">Book a Consultation</a>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://v0-adbar.vercel.app/luxury-modern-interior-design-living-room-with-nat.jpg"
                alt="Luxury interior design project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What Makes Us Unique</h2>
          <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
            We blend traditional craftsmanship with modern sustainability principles.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Eco-friendly Materials", desc: "Sustainable sourcing from nature" },
              { title: "Scientific Design", desc: "Functional & innovative solutions" },
              { title: "Client-Focused", desc: "Tailored to your vision" },
              { title: "Local Expertise", desc: "Addis Ababa & Adama specialists" },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <div className="mb-4 h-10 w-10 rounded-md bg-zinc-100 dark:bg-zinc-900" />
                <h3 className="text-lg font-medium">{f.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section id="portfolio" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">Transforming spaces into timeless masterpieces</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Modern Villa", tag: "Residential", src: "https://v0-adbar.vercel.app/luxury-residential-living-room-with-natural-light-.jpg" },
              { title: "Executive Office", tag: "Commercial", src: "https://v0-adbar.vercel.app/contemporary-office-interior-with-wooden-elements-.jpg" },
              { title: "Boutique Hotel", tag: "Hospitality", src: "https://v0-adbar.vercel.app/boutique-hotel-lobby-with-elegant-furniture-chande.jpg" },
              { title: "Eco Residence", tag: "Residential", src: "https://v0-adbar.vercel.app/sustainable-home-interior-with-plants-natural-mate.jpg" },
              { title: "Fine Dining", tag: "Hospitality", src: "https://v0-adbar.vercel.app/modern-restaurant-interior-design-ambient-lighting.jpg" },
              { title: "Private Retreat", tag: "Residential", src: "https://v0-adbar.vercel.app/minimalist-bedroom-with-natural-materials-wood-acc.jpg" },
            ].map((p) => (
              <article key={p.title} className="group overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={p.src} alt={p.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <span className="text-xs text-zinc-500">{p.tag}</span>
                  <h3 className="mt-1 text-lg font-medium">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Services + Stats */}
        <section id="services" className="relative">
          <div className="absolute inset-0 -z-10 opacity-10">
            <Image
              src="https://v0-adbar.vercel.app/natural-wood-grain-texture-sustainable-materials-p.jpg"
              alt="Background texture"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">Comprehensive design solutions from concept to completion</p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Residential Interior Design",
                "Commercial & Office Design",
                "Hospitality Design",
                "Space Planning & Optimization",
                "Sustainable Design Solutions",
                "3D Visualization & Concepts",
                "Renovation & Remodeling",
                "Furniture & Material Selection",
              ].map((s) => (
                <div key={s} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                  <div className="mb-4 h-10 w-10 rounded-md bg-zinc-100 dark:bg-zinc-900" />
                  <h3 className="text-base font-medium">{s}</h3>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 rounded-2xl border border-zinc-200 p-6 text-center dark:border-zinc-800 sm:gap-8">
              <div>
                <div className="text-3xl font-semibold">10+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-semibold">150+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-semibold">98%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Our Philosophy</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-zinc-700 dark:text-zinc-300">
            <p>
              At ADBAR Interior Design, we believe that exceptional spaces emerge when luxury meets nature. Our mission is to create functional, luxurious, and nature-friendly interiors that reflect Ethiopia's rich heritage while embracing sustainable innovation.
            </p>
            <p>
              Through scientific integration of ergonomics, natural lighting, and acoustics, we craft environments that enhance wellbeing while honoring our commitment to sustainability.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let's Create Something Beautiful</h2>
            <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Ready to transform your space? Get in touch with our team for a consultation.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-wide text-zinc-500">Phone</div>
                  <div className="text-lg">+251986367678</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-zinc-500">Location</div>
                  <div className="text-lg">Adama, Addis Ababa</div>
                </div>
                <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="https://v0-adbar.vercel.app/elegant-luxury-interior-design-materials-wood-ston.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="block text-sm text-zinc-600 dark:text-zinc-400">Name</label>
                    <input className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900" placeholder="Your name" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm text-zinc-600 dark:text-zinc-400">Phone</label>
                    <input className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900" placeholder="Your phone" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm text-zinc-600 dark:text-zinc-400">Email</label>
                  <input type="email" className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900" placeholder="you@example.com" />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm text-zinc-600 dark:text-zinc-400">Project Type</label>
                  <select className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Hospitality</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm text-zinc-600 dark:text-zinc-400">Message</label>
                  <textarea rows={4} className="w-full resize-none rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900" placeholder="Tell us about your project" />
                </div>
                <button type="button" className="rounded-full bg-zinc-900 px-5 py-2.5 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-12 dark:border-zinc-800">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-4">
          <div className="space-y-3">
            <Image src="/images/logo.png" alt="ADBAR Interior Design" width={160} height={48} />
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Creating luxurious, sustainable interiors that blend elegance with nature.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-200">About</a></li>
              <li><a href="#services" className="hover:text-zinc-900 dark:hover:text-zinc-200">Services</a></li>
              <li><a href="#portfolio" className="hover:text-zinc-900 dark:hover:text-zinc-200">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Our Commitment</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>✓ Sustainability</li>
              <li>✓ Innovation</li>
              <li>✓ Client Satisfaction</li>
              <li>✓ Quality Craftsmanship</li>
            </ul>
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            <div>© 2025 ADBAR Interior Design. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

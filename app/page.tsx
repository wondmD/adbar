"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      items.forEach((el, i) => {
        el.style.setProperty("--delay", `${i * 50}ms`);
        io.observe(el);
      });
      return () => io.disconnect();
    } else {
      items.forEach((el, i) => {
        el.style.setProperty("--delay", `${i * 50}ms`);
        requestAnimationFrame(() => el.classList.add("in"));
      });
    }
  }, []);
  return (
    <div className="min-h-screen font-sans bg-white text-zinc-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="#" className="flex items-center gap-3" aria-label="Adbar Home">
            <Image src="/images/logo.png" alt="Adbar logo" width={120} height={36} className="h-10 w-auto" />
            <span className="text-xl font-semibold tracking-wide">Adbar</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm sm:flex">
            <a href="#about" className="hover:text-zinc-700">About</a>
            <a href="#services" className="hover:text-zinc-700">Services</a>
            <a href="#portfolio" className="hover:text-zinc-700">Portfolio</a>
            <a href="#contact" className="hover:text-zinc-700">Contact</a>
            <a href="#contact" className="rounded-full bg-zinc-900 px-5 py-2 text-white transition-transform hover:scale-[1.02] hover:bg-zinc-800">Book a Consultation</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/images/bg-materials.jpg"
              alt="Background"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          {/* Decorative arches overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-10 bg-repeat bg-[length:320px_320px] opacity-30 mix-blend-multiply bg-pan-slow"
            style={{ backgroundImage: "url(/images/arches.svg)" }}
          />
          {/* Accent radial glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 z-10 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(183,146,72,0.18),transparent_70%)]" />
          <div className="pointer-events-none absolute -right-20 bottom-10 z-10 h-56 w-56 rounded-full bg-[radial-gradient(closest-side,rgba(27,27,27,0.12),transparent_70%)]" />
          <div className="relative z-20 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div className="space-y-6">
              <h1 className="reveal text-4xl font-semibold tracking-tight sm:text-5xl">
                Blending Luxury with Nature
              </h1>
              <p className="reveal max-w-xl text-lg text-zinc-600">
                Nature-friendly, scientifically integrated interior design solutions tailored for Ethiopia. Creating spaces where elegance meets sustainability.
              </p>
              <div className="reveal flex flex-wrap gap-4">
                <a href="#portfolio" className="rounded-full bg-zinc-900 px-5 py-2.5 text-white transition-transform hover:scale-[1.02] hover:bg-zinc-800">View Our Work</a>
                <a href="#contact" className="rounded-full border border-zinc-300 px-5 py-2.5 transition-colors hover:bg-zinc-50">Book a Consultation</a>
              </div>
            </div>
              <div className="reveal relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
              {/* Blurred cover image */}
              <Image
                 src="/images/hero-living-room.jpg"
                alt="Luxury interior design project"
                fill
                className="object-cover blur-sm scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Overlay logo with tagline */}
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <Image
                  src="/images/logo_with_tagline.png"
                  alt="ADBAR Logo with Tagline"
                  width={360}
                  height={140}
                  className="drop-shadow-xl opacity-95"
                />
              </div>
          </div>
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section id="about" className="relative isolate overflow-hidden">
          {/* Arches pattern background */}
          <div
            className="absolute inset-0 z-0 bg-repeat bg-[length:300px_300px] opacity-25 mix-blend-multiply bg-pan-slow"
            style={{ backgroundImage: "url(/images/arches.svg)" }}
          />
          {/* Soft vignette for readability */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(120%_80%_at_50%_0%,white,transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <h2 className="reveal text-3xl font-semibold tracking-tight sm:text-4xl">What Makes Us Unique</h2>
            <p className="reveal mt-3 max-w-2xl text-zinc-600">
              We blend traditional craftsmanship with modern sustainability principles.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Eco-friendly Materials", desc: "Sustainable sourcing from nature", icon: "🌿" },
                { title: "Scientific Design", desc: "Functional & innovative solutions", icon: "🧪" },
                { title: "Client-Focused", desc: "Tailored to your vision", icon: "🤝" },
                { title: "Local Expertise", desc: "Addis Ababa & Adama specialists", icon: "📍" },
              ].map((f) => (
                <div key={f.title} className="reveal rounded-xl border border-zinc-200 bg-white/70 p-6 shadow-sm transition-transform backdrop-blur-sm hover:translate-y-[-2px] hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-zinc-100 text-xl">{f.icon}</div>
                  <h3 className="text-lg font-medium">{f.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="portfolio" className="relative isolate overflow-hidden">
          {/* Lines pattern */}
          <div
            className="absolute inset-0 z-0 bg-repeat bg-[length:360px_360px] opacity-20 bg-pan-slow"
            style={{ backgroundImage: "url(/images/lines.svg)" }}
          />
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <h2 className="reveal text-3xl font-semibold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="reveal mt-3 max-w-2xl text-zinc-600">Transforming spaces into timeless masterpieces</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
            { title: "Modern Villa", tag: "Residential", src: "/images/proj-modern-villa.jpeg" },
            { title: "Executive Office", tag: "Commercial", src: "/images/proj-executive-office.webp" },
            { title: "Boutique Hotel", tag: "Hospitality", src: "/images/proj-boutique-hotel.jpg" },
            { title: "Eco Residence", tag: "Residential", src: "/images/proj-eco-residence.jpeg" },
            { title: "Fine Dining", tag: "Hospitality", src: "/images/proj-fine-dining.jpeg" },
            { title: "Private Retreat", tag: "Residential", src: "/images/proj-preivate-retreate.avif" },
          ].map((p) => (
              <article key={p.title} className="reveal group overflow-hidden rounded-2xl border border-zinc-200 transition-transform hover:translate-y-[-2px] hover:shadow-lg">
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
          </div>
        </section>

        {/* Services + Stats */}
        <section id="services" className="relative isolate overflow-hidden">
          {/* Dots pattern */}
          <div
            className="absolute inset-0 z-0 bg-repeat bg-[length:220px_220px] opacity-25 bg-pan-slow"
            style={{ backgroundImage: "url(/images/dots.svg)" }}
          />
          <div className="pointer-events-none absolute left-0 top-0 z-0 h-40 w-40 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(183,146,72,0.14),transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <h2 className="reveal text-3xl font-semibold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="reveal mt-3 max-w-2xl text-zinc-600">Comprehensive design solutions from concept to completion</p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Residential Interior Design", icon: "🏠" },
                { title: "Commercial & Office Design", icon: "🏢" },
                { title: "Hospitality Design", icon: "🛎️" },
                { title: "Space Planning & Optimization", icon: "📐" },
                { title: "Sustainable Design Solutions", icon: "🌿" },
                { title: "3D Visualization & Concepts", icon: "🧊" },
                { title: "Renovation & Remodeling", icon: "🛠️" },
                { title: "Furniture & Material Selection", icon: "🪑" },
              ].map((s) => (
                <div key={s.title} className="reveal rounded-xl border border-zinc-200 p-6 transition-transform hover:translate-y-[-2px] hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-zinc-100 text-xl">{s.icon}</div>
                  <h3 className="text-base font-medium">{s.title}</h3>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 rounded-2xl border border-zinc-200 p-6 text-center sm:gap-8">
              <div>
                <div className="text-3xl font-semibold">10+</div>
                <div className="text-sm text-zinc-600">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-semibold">150+</div>
                <div className="text-sm text-zinc-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-semibold">98%</div>
                <div className="text-sm text-zinc-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="relative isolate overflow-hidden">
          {/* Soft radial background */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(27,27,27,0.1),transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <h2 className="reveal text-3xl font-semibold tracking-tight sm:text-4xl">Our Philosophy</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-zinc-700">
            <p>
              At ADBAR Interior Design, we believe that exceptional spaces emerge when luxury meets nature. Our mission is to create functional, luxurious, and nature-friendly interiors that reflect Ethiopia's rich heritage while embracing sustainable innovation.
            </p>
            <p>
              Through scientific integration of ergonomics, natural lighting, and acoustics, we craft environments that enhance wellbeing while honoring our commitment to sustainability.
            </p>
          </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative isolate border-t border-zinc-200 bg-zinc-50 overflow-hidden">
          {/* Waves background */}
          <div
            className="absolute inset-0 z-0 bg-repeat-x bg-[length:800px_480px] opacity-25 bg-pan-slow"
            style={{ backgroundImage: "url(/images/waves.svg)" }}
          />
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <h2 className="reveal text-3xl font-semibold tracking-tight sm:text-4xl">Let's Create Something Beautiful</h2>
            <p className="reveal mt-3 max-w-2xl text-zinc-600">
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
                    src="/images/hero-living-room.jpg"
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
                    <label className="block text-sm text-zinc-600">Name</label>
                    <input className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-zinc-500" placeholder="Your name" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm text-zinc-600">Phone</label>
                    <input className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-zinc-500" placeholder="Your phone" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm text-zinc-600">Email</label>
                  <input type="email" className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-zinc-500" placeholder="you@example.com" />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm text-zinc-600">Project Type</label>
                  <select className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-zinc-500">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Hospitality</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm text-zinc-600">Message</label>
                  <textarea rows={4} className="w-full resize-none rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-zinc-500" placeholder="Tell us about your project" />
                </div>
                <button
                  type="button"
                  suppressHydrationWarning
                  className="rounded-full bg-zinc-900 px-5 py-2.5 text-white hover:bg-zinc-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative isolate border-t border-zinc-200 py-12 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-repeat bg-[length:280px_280px] opacity-20"
          style={{ backgroundImage: "url(/images/arches.svg)" }}
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-4">
          <div className="space-y-3">
            <Image src="/images/logo.png" alt="ADBAR Interior Design" width={160} height={48} />
            <p className="text-sm text-zinc-600">Creating luxurious, sustainable interiors that blend elegance with nature.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li><a href="#about" className="hover:text-zinc-900">About</a></li>
              <li><a href="#services" className="hover:text-zinc-900">Services</a></li>
              <li><a href="#portfolio" className="hover:text-zinc-900">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-zinc-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Our Commitment</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>✓ Sustainability</li>
              <li>✓ Innovation</li>
              <li>✓ Client Satisfaction</li>
              <li>✓ Quality Craftsmanship</li>
            </ul>
          </div>
          <div className="text-sm text-zinc-600">
            <div>© 2025 ADBAR Interior Design. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

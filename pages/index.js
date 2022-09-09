export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center p-24 min-h-screen bg-white">
        {/* Themes: blue, purple, teal */}
        <div data-theme="blue" className="mx-auto max-w-6xl">
          <h2 className="sr-only">Featured case study</h2>
          <section className="font-sans text-black">
            <div className="lg:flex lg:items-center [ ] fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right">
              <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div className="h-full">
                  <article className="h-full">
                    <div className="h-full">
                      <img
                        className="object-cover h-full"
                        src="https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW"
                        width="733"
                        height="412"
                        alt='""'
                        typeof="foaf:Image"
                      />
                    </div>
                  </article>
                </div>
              </div>
              <div className="p-6 bg-grey">
                <div className="leading-relaxed">
                  <h2 className="text-4xl font-bold leading-tight">
                    CXcon: Experience Transformation
                  </h2>
                  <p className="mt-4">
                    Our second CXcon in October was dedicated to experience
                    transformation. The free one-day virtual event&nbsp;brought
                    together 230+ heads of digital, thought leaders, and UX
                    practitioners to discuss all aspects of experience design..
                  </p>
                  <p className="mt-4">
                    In a jam-packed day filled with keynote sessions, panels,
                    and virtual networking we explored topics including design
                    leadership, UX ethics, designing for emotion and innovation
                    at scale.
                  </p>
                  <p>
                    <a
                      className="mt-4 button button--secondary"
                      href="https://inviqa.com/cxcon-experience-transformation"
                    >
                      Explore this event
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

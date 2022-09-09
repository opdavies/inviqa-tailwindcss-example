function Button({ text, ...props }) {
  return (
    <a
      className="inline-block py-2 px-5 mt-4 text-lg font-bold border-2 transition-colors duration-200 ease-in-out hover:bg-white focus:bg-white bg-secondary border-secondary text-tertiary hover:border-quinary hover:text-quinary focus:border-quinary focus:text-quinary"
      href="#0"
    >
      {text}
    </a>
  );
}

export default function ImageAndText({
  buttonText,
  children,
  imageUrl,
  title,
  ...props
}) {
  return (
    <>
      <div data-theme="teal" className="mx-auto max-w-6xl">
        {/* Themes: blue, purple, teal */}
        <h2 className="sr-only">Featured case study</h2>
        <section className="font-sans text-black">
          <div className="lg:flex lg:items-center fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right">
            <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
              <div className="h-full">
                <article className="h-full">
                  <div className="h-full">
                    <img
                      className="object-cover h-full w-full"
                      src={imageUrl}
                      width="733"
                      height="412"
                      alt='""'
                      typeof="foaf:Image"
                    />
                  </div>
                </article>
              </div>
            </div>

            <div className="p-6 bg-grey dark:bg-[#222222]">
              <div className="leading-relaxed dark:text-white">
                <h2 className="text-4xl font-bold leading-tight">{title}</h2>
                <div className="mt-4 markup">{children}</div>
                <p>
                  <Button text="Explore this event" />
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

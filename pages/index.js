import ImageAndText from "../components/ImageAndText";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center p-24 min-h-screen bg-white dark:bg-[#111111]">
        <ImageAndText
          buttonText={"Explore this event"}
          imageUrl={
            "https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW"
          }
          title={"CXcon: Experience Transformation"}
        >
          <p>
            Our second CXcon in October was dedicated to experience
            transformation. The free one-day virtual event&nbsp;brought together
            230+ heads of digital, thought leaders, and UX practitioners to
            discuss all aspects of experience design..
          </p>

          <p>
            In a jam-packed day filled with keynote sessions, panels, and
            virtual networking we explored topics including design leadership,
            UX ethics, designing for emotion and innovation at scale.
          </p>
        </ImageAndText>
      </div>
    </div>
  );
}

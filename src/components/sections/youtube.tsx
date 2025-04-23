
const YoutubeSection = () => {
  return (
    <section id="youtube" className="bg-portfolio-gray-50 dark:bg-portfolio-gray-800 py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="section-title colourful-underline mb-8">YouTube Channel</h2>
        <a
          href="https://www.youtube.com/@athmasviews6926"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 flex rounded-full flex-col items-center group"
        >
          <img
            src="/youtube.jpg"
            alt="Athmas Views YouTube Channel"
            className="shadow-lg border-4 rounded-full border-purple-600 group-hover:scale-105 transition-transform duration-300"
          />
          <span className="mt-4 text-2xl font-semibold text-white group-hover:underline">Visit My Channel</span>
        </a>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
          <div className="aspect-video w-full md:w-1/2 max-w-xl rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/XL28jFIrNwI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video w-full md:w-1/2 max-w-xl rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/kljgopgJavw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;

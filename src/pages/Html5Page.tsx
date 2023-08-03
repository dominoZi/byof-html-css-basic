export const Html5Page = () => {
  return (
    <>
      <section className="max-w-4xl">
        <article>
          <h1>Co to jest HTML5?</h1>
          <p>
            Termin HTML5 jest określenie odnoszącym się do zestawu nowoczesnych
            technologii webowych dostępnych w przeglądarce. Zawiera standard
            HTML i rozbudowane API do obsługi pamięci, multimediów i sprzętu.
          </p>
          <figure>
            <img
              className="mt-10"
              src="https://www.peterkroener.de/uploads/kreise.png"
              alt="Schemat HTML5"
            />
            <figcaption>Schemat HTML5</figcaption>
          </figure>
        </article>
        <article className="mt-10">
          <h2>Materiały dodatkowe i ciekawostki</h2>
          <ul className="list-disc list-inside">
            <li>
              <a
                className="source"
                href="https://developer.mozilla.org/en-US/docs/Web/MathML/Element/math"
                target="_blank"
                rel="noreferer"
              >
                MathML
              </a>
            </li>
            <li>
              <a
                className="source"
                href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate"
                target="_blank"
                rel="noreferer"
              >
                Grafika wektorowa SVG
              </a>
            </li>
            <li>
              <a
                className="source"
                href="https://whatwebcando.today/"
                target="_blank"
                rel="noreferer"
              >
                Co Twoja przeglądark potrafi
              </a>
            </li>
            <li>
              <a
                className="source"
                href="https://caniuse.com/"
                target="_blank"
                rel="noreferer"
              >
                Sprawdzanie dostępności funkcji przeglądarki
              </a>
            </li>
          </ul>
        </article>
        <article className="mt-5">
          <h2>Zadanie</h2>
          <p>Sprawdź dostępność obsługi ambient light w przeglądarkach.</p>
        </article>
      </section>
    </>
  );
};

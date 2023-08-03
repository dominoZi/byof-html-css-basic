import { Tag } from "../components/HtmlTag";

export const MethodicsPage = () => {
  return (
    <section className="max-w-5xl mb-10">
      <h1>Sematyka HTML</h1>
      <article className="mt-8">
        <h2>BEM ([block]__[element]--[modifier])</h2>
        <ul className="list-disc list-inside">
          <li>Block - kontyner dla componentu</li>
          <li>
            Element - element, który znajduje się wewnątrz elementu i nie może
            zostać wykorzystany poza, Przykład: <Tag>.header-logo</Tag> i{" "}
            <Tag>.card-actionButton</Tag>
          </li>
          <li>
            Modyfikator - element, który znajduje się wewnątrz elementu i nie
            może zostać wykorzystany poza. Przykład: <Tag>.header-grey</Tag> i{" "}
            <Tag>.header__logo-dark</Tag>
          </li>
        </ul>
        <br />
        <iframe
          height="480"
          style={{ width: "100%" }}
          title="BEM Accordion"
          src="https://codepen.io/team/css-tricks/embed/EaJEBZ?default-tab=html%2Cresult"
          loading="lazy"
          allowTransparency={true}
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href="https://codepen.io/team/css-tricks/pen/EaJEBZ">
            BEM Accordion
          </a>{" "}
          by CSS-Tricks (
          <a href="https://codepen.io/team/css-tricks">@css-tricks</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <br />

        <h2>
          Atomic CSS - każdy atrybut jest reprezentowany przez klasę{" "}
          <a href="https://tailwindcss.com/docs/installation" target="_blank">
            [Link]
          </a>
        </h2>
        <iframe
          height="480"
          style={{ width: "100%" }}
          title="Tailwind Accordion"
          src="https://codepen.io/davidgrzyb/embed/BajpNve?default-tab=html%2Cresult"
          loading="lazy"
          allowTransparency={true}
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href="https://codepen.io/davidgrzyb/pen/BajpNve">
            Tailwind Accordion
          </a>{" "}
          by David Grzyb (
          <a href="https://codepen.io/davidgrzyb">@davidgrzyb</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <h2>
          SUITCSS{" "}
          <a
            href="https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md"
            target="_blank"
          >
            [Link]
          </a>
        </h2>
      </article>
    </section>
  );
};

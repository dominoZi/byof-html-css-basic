import { Tag } from "../components/HtmlTag";

export const MethodicsPage = () => {
  return (
    <section className="max-w-3xl mb-10">
      <h1>Sematyka HTML</h1>
      <article className="mt-8">
        <h2>BEM (Block__Element-Modifier)</h2>
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
      </article>
      <article className="mt-8">
        <h2>
          SUITCSS{" "}
          <a href="https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md">
            [Link]
          </a>
        </h2>
      </article>
      <article className="mt-8">
        <h2>
          Atomic CSS - każdy atrybut jest reprezentowany przez klasę{" "}
          <a href="https://tailwindcss.com/docs/installation">[Link]</a>
        </h2>
      </article>
    </section>
  );
};

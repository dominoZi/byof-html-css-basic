import { useState } from "react";
import { Switch } from "../components";
import mockup from "../assets/exmaple-layout.png";
import { HtmlTag } from "../components/HtmlTag";

export const HtmlSemanticPage = () => {
  const [bazarekVisible, setBazarekVisible] = useState(false);
  return (
    <>
      <section className="max-w-3xl mb-10">
        <article>
          <h1>Sematyka HTML</h1>
          <p>
            Określa znaczenie poszczególnych elementów HTML ze względu na
            pełnioną funkcję. Zalety wykorzystania poprawnej semantyki:
          </p>
          <ul className="list-disc list-inside my-2">
            <li className="list-item mb-2">
              Łatwiejsze indeksowanie strony przez Google i wysza pozycja w
              wynikach wyszukiwania.
            </li>
            <li className="list-item mb-2">
              Ułatwienie dostępu osobom niewidzącym i niedowidzącym do strony
              internetowej przez Screen Readery.
            </li>
            <li className="list-item">
              Bardziej czytelny kod HTML dla developera i łatwiejsze
              wyszukiwanie elementów
            </li>
          </ul>
          <img
            src="https://static.semrush.com/blog/uploads/media/cc/85/cc85d452a743e27f68d426df35e4da7d/original.png"
            alt="Semantics"
          />
          <div className="my-4">
            <h2>Ćwiczenie</h2>
            <p>Przeanalizuj makietę i określ główne elementy blokowe strony</p>
          </div>
          <div className="my-4">
            <Switch checked={bazarekVisible} onChange={setBazarekVisible} />
            Pokaż makietę
          </div>
          {bazarekVisible && <img src={mockup} alt="Example" />}
        </article>
        <article className="mt-6">
          <h2>Wybrane przykłady komponentów:</h2>
          <p className="text-slate-400">
            Otwórz narzędzi deweloperskie przeglądarki, aby zobaczyć kod 🚀!
          </p>
          <h3 className="mt-10">
            <HtmlTag tagName="addresss" />
          </h3>

          <div className="mt-2">
            <address>
              <a href="mailto:jim@rock.com">jim@rock.com</a>
              <br />
              <a href="tel:+13115552368">(311) 555-2368</a>
            </address>
          </div>
          <h3 className="mt-10">
            <HtmlTag tagName="code" />
          </h3>
          <div className="mt-2">
            <p>
              The{" "}
              <code className="bg-orange-100 border border-orange-200">
                push()
              </code>{" "}
              method adds one or more elements to the end of an array and
              returns the new length of the array.
            </p>
          </div>
          <h3 className="mt-10">
            <HtmlTag tagName="details" />
          </h3>
          <div className="mt-2">
            <details>
              <summary>Details</summary>
              Something small enough to escape casual notice.
            </details>
          </div>
          <h3 className="mt-10">
            <HtmlTag tagName="menu" />
          </h3>
          <div className="mt-2">
            <menu>
              <li>
                <button>Copy</button>
              </li>
              <li>
                <button>Cut</button>
              </li>
              <li>
                <button>Paste</button>
              </li>
            </menu>
          </div>
          <h3 className="mt-10">
            <HtmlTag tagName="picture" />
            <HtmlTag tagName="source" />
          </h3>
          <div className="mt-2">
            <picture>
              <source
                srcSet="https://media.macphun.com/img/uploads/macphun/blog/2063/_1.jpeg?q=75&w=1710&h=906&resize=cover"
                media="(orientation: portrait)"
              />
              <img
                src="https://media.macphun.com/img/uploads/macphun/blog/2063/_1.jpeg?q=75&w=1710&h=906&resize=cover"
                alt=""
              />
            </picture>
          </div>
          <h3 className="mt-10">
            <HtmlTag tagName="fieldset" />
            <HtmlTag tagName="legend" />
          </h3>
          <div className="mt-2">
            <fieldset className="border border-solid border-gray-300 p-3">
              <legend className="text-sm">Choose your favorite monster</legend>

              <input type="radio" id="kraken" name="monster" value="K" />
              <label htmlFor="kraken">Kraken</label>
              <br />

              <input type="radio" id="sasquatch" name="monster" value="S" />
              <label htmlFor="sasquatch">Sasquatch</label>
              <br />

              <input type="radio" id="mothman" name="monster" value="M" />
              <label htmlFor="mothman">Mothman</label>
            </fieldset>
          </div>
        </article>
        <article className="mt-6">
          <h2>Zadanie</h2>
          <ul>
            <li>
              Przejrzy całą listę zanczników{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
                target="_blank"
              >
                [Link]
              </a>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};

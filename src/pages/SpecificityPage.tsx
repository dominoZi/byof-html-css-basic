import Highlight from "react-highlight";
import { HtmlTag, Tag } from "../components/HtmlTag";

export const SpecificityPage = () => {
  return (
    <>
      <section className="max-w-2xl mb-20">
        <h1 className="mb-5">Specyficzność i kombinatory</h1>
        <article>
          <h2>Kombinatory</h2>
          <ul className="list-disc list-inside">
            <li>
              Descendant Selector (<Tag>div p</Tag>).Wybiera wszystkie{" "}
              <Tag>p</Tag> wewnątrz <Tag>div</Tag>.
            </li>
            <li>
              Child Selector (<Tag>div &gt; p</Tag>). Wybiera wszystkie elementy
              <Tag>p</Tag>, które są dziećmi <Tag>div</Tag>
            </li>
            <li>
              Adjacent Sibling Selector (<Tag>div + p</Tag>). Wybiera pierwszy
              element
              <Tag>p</Tag> po elemencie <Tag>div</Tag>
            </li>
            <li>
              General Sibling Selector (<Tag>p ~ ul</Tag>). Wybiera wszystkie
              element <Tag>ul</Tag> poprzedzony elementem <Tag>p</Tag>
            </li>
          </ul>
        </article>
        <article className="mb-10">
          <h2>Specyficzność selectorów</h2>
          <p>
            Specyficzność jest to algorytm określający, który selector CSS jest
            bardziej szczegółowy przez wykorzystanie punktacji. Kombinatory nie
            wpływają na punktację!
          </p>
          <p className="mt-4">Punktacja:</p>
          <ul className="list-disc list-inside">
            <li>
              Uniwersal selector (<Tag>*</Tag>). Punkty: 0
            </li>
            <li>
              Elementy i psuedo-elementy (
              <HtmlTag tagName="div" /> <Tag>::before</Tag>). Punkty: 1
            </li>
            <li>
              Klasy, psuedo-klasy i atrybuty (<Tag>.my-class</Tag>,{" "}
              <Tag>:hover</Tag> i <Tag>"[date-state='selected']"</Tag>). Punkty:
              10
            </li>
            <li>
              ID (<Tag>#myID</Tag>). Punkty: 100
            </li>
            <li>
              Styl zdefiniowany w atrybucie style (inline styles) (
              <Tag>&lt;div style="color: red"&gt;&lt;/div&gt;</Tag>
              ). Punkty: 1000
            </li>
            <li>
              <span className="text-red-600 font-bold">!important</span> Punkty:
              10 000
            </li>
          </ul>
          <h3 className="mt-6">Prezentacja specyficzności przez Chrome</h3>
          <figure>
            <img
              src="https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/McrFhjqHXMznUzXbRuJ6.svg"
              alt="Specyiczność"
            />
          </figure>

          <p>
            {`Najnowsza wersja Chrome pozwala na wyświetlenie specyficzności w
            narzędziach developerskich. Zakładka Elements > Styles`}
          </p>
        </article>
        <article className="mb-10">
          <h2>Przykłady:</h2>
          <ul>
            <li className="mb-4">
              <Tag>a[href="#"]</Tag> = 11 (0-1-1)
            </li>
            <li className="mb-4">
              <Tag>#specialty:hover li.dark</Tag> = 121 (1-2-1)
            </li>
            <li className="mb-4">
              <Tag>li#specialty section.dark</Tag> = 112 (1-1-2)
            </li>
            <li className="mb-4">
              <Tag>a:not(#fakeId#fakeId#fakeID)</Tag> = 301 (301)
            </li>
            <li className="mb-4">
              <Tag>.bodyClass .sectionClass .parentClass [id="myElement"]</Tag>{" "}
              = 40 (0-4-0)
            </li>
            <li className="mb-4">
              <Tag>html body main input</Tag> = 4 (0-0-4)
            </li>
            <li className="mb-4">
              <Tag>.my-button.my-button</Tag> = 20 (0-2-0)
            </li>
            <li className="mb-4">
              <Highlight>{`<p style="color: purple">…</p>`}</Highlight>
              <Highlight>
                {`p[style*="purple"] { color: rebeccapurple !important; }`}
              </Highlight>
            </li>
          </ul>
        </article>
        <article className="mb-10">
          <h2>Przykład wykorzytanie kombinatorów i specyficzności</h2>
          <p className="mb-6">Toggle button bez JavaScript</p>
          {/* https://elly-pirelly.medium.com/create-the-perfect-toggle-switch-with-pure-html-css-no-javascript-necessary-7889adf04b69 */}
          <div className="toggle-checkbox-wrapper">
            <input className="toggle-checkbox" type="checkbox" id="toggle" />
            <label className="slider" htmlFor="toggle">
              <span className="toggle-switch opt1">Look, I'm blue!</span>
              <span className="toggle-switch opt2">Look, I'm brown!</span>
            </label>
          </div>
          <br />
          <Highlight>
            {`
<!-- https://elly-pirelly.medium.com/create-the-perfect-toggle-switch-with-pure-html-css-no-javascript-necessary-7889adf04b69 -->

<div className="toggle-checkbox-wrapper">
  <input className="toggle-checkbox" type="checkbox" id="toggle" />
  <label className="slider" htmlFor="toggle">
    <span className="toggle-switch opt1">Look, I'm blue!</span>
    <span className="toggle-switch opt2">Look, I'm brown!</span>
  </label>
</div>
`}
          </Highlight>
          <Highlight
            children={`.toggle-checkbox-wrapper {
}

.toggle-checkbox {
  display: none;
}

.slider {
  position: relative;
}

/* ellipsis */
.slider::before {
  background: lightblue;
  border-radius: 34px;
  bottom: 0;
  content: "";
  height: 24px;
  margin: auto;
  position: absolute;
  top: 0;
  width: 40px;
}

/* circle */
.slider::after {
  background: navy;
  border-radius: 50%;
  bottom: 0;
  content: "";
  height: 16px;
  left: 4px;
  margin: auto;
  position: absolute;
  top: 0;
  transition: 0.4s;
  width: 16px;
}

.toggle-switch {
  margin-left: 50px;
}

.toggle-switch.opt1 {
  color: navy;
}

.toggle-switch.opt2 {
  color: brown;
  display: none;
}

.toggle-checkbox:checked + .slider::before {
  background-color: lightsalmon;
}

.toggle-checkbox:checked + .slider::after {
  background-color: maroon;
  transform: translateX(16px);
}

.toggle-checkbox:checked ~ .slider > .toggle-switch.opt1 {
  display: none;
}

.toggle-checkbox:checked ~ .slider > .toggle-switch.opt2 {
  display: inline-block;
}`}
          />
        </article>
      </section>
    </>
  );
};

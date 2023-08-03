import { Tag } from "../components/HtmlTag";

export const UnitsPage = () => {
  return (
    <section className="max-w-2xl mb-20">
      <article>
        <h1 className="mb-4">Jednostki</h1>
        <p className="mb-4">Absolute units</p>

        <table className="border-collapse table-auto w-full text-sm">
          <thead className="bg-white dark:bg-slate-100">
            <tr>
              <th className="text-left p-3">Jednostka</th>
              <th className="text-left p-3">Nazwa</th>
              <th className="text-left p-3">Odpowiednik</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b border-slate-100">cm</td>
              <td className="p-3 border-b border-slate-100">centymetr</td>
              <td className="p-3 border-b border-slate-100">1cm = 96px/2.54</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-slate-100">mm</td>
              <td className="p-3 border-b border-slate-100">milimetr</td>
              <td className="p-3 border-b border-slate-100"></td>
            </tr>
            <tr>
              <td className="p-3 border-b border-slate-100">Q</td>
              <td className="p-3 border-b border-slate-100">
                ćwierć milimetra
              </td>
              <td className="p-3 border-b border-slate-100">1Q = 1/40 cm</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-slate-100">in</td>
              <td className="p-3 border-b border-slate-100">cal</td>
              <td className="p-3 border-b border-slate-100">
                1in = 2.54cm = 96px
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b border-slate-100">pc</td>
              <td className="p-3 border-b border-slate-100">picas</td>
              <td className="p-3 border-b border-slate-100">1/6 in</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-slate-100">pt</td>
              <td className="p-3 border-b border-slate-100">punkt</td>
              <td className="p-3 border-b border-slate-100">1/72 in</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-slate-100">px</td>
              <td className="p-3 border-b border-slate-100">pixels</td>
              <td className="p-3 border-b border-slate-100">1/96 in</td>
            </tr>
          </tbody>
        </table>

        <p className="my-4">Relative units</p>

        <table className="border-collapse table-auto w-full text-sm">
          <thead className="bg-white dark:bg-slate-100">
            <tr>
              <th className="text-left p-3">Jednostka</th>
              <th className="text-left p-3">Zalezy od</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b border-slate-100">em</td>
              <td className="p-3 border-b border-slate-100">
                Rozmiar czcionki dziedziczony od rodzica
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b border-slate-100">rem</td>
              <td className="p-3 border-b border-slate-100">
                Rozmiar czcionki dziedziczona najwyzszego elementu strony{" "}
                <Tag>html</Tag>
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b border-slate-100">lh</td>
              <td className="p-3 border-b border-slate-100">
                Wysokość lini dziedziczona od rodzica
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b border-slate-100">rlh</td>
              <td className="p-3 border-b border-slate-100">
                Wysokość lini dziedziczona najwyzszego elementu strony{" "}
                <Tag>html</Tag>
              </td>
            </tr>
          </tbody>
        </table>

        <p className="my-4">Viewport-relative units</p>

        <table className="border-collapse table-auto w-full text-sm">
          <thead className="bg-white dark:bg-slate-100">
            <tr>
              <th className="text-left p-3">Jednostka</th>
              <th className="text-left p-3">Zalezy od</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b border-slate-100">vw</td>
              <td className="p-3 border-b border-slate-100">
                1% z szerokości okna
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b border-slate-100">vh</td>
              <td className="p-3 border-b border-slate-100">
                1% z wysokości okna
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b border-slate-100">vi</td>
              <td className="p-3 border-b border-slate-100">
                1% z root elemetu wzgledem osi writing-mode "inline axis"
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b border-slate-100">vb</td>
              <td className="p-3 border-b border-slate-100">
                1% z root elementu wzgledem "block axis"
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  );
};

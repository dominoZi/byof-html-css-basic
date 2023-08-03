import clsx from "clsx";
import { useState } from "react";
import { Switch } from "../components";
import { SelectableTag } from "../components/HtmlTag";

const writingMode = [
  { className: "horizontal-tb", label: "horizontal-tb" },
  { className: "vertical-rl", label: "vertical-rl" },
  { className: "vertical-lr", label: "vertical-lr" },
];

const config = [
  {
    className: "mt-5",
    label: "margin-top",
  },
  {
    className: "mb-5",
    label: "margin-bottom",
  },
  {
    className: "ml-5",
    label: "margin-left",
  },
  {
    className: "mr-5",
    label: "margin-right",
  },
  {
    className: "pt-5",
    label: "padding-top",
  },
  {
    className: "pb-5",
    label: "padding-bottom",
  },
  {
    className: "pl-5",
    label: "padding-left",
  },
  {
    className: "pr-5",
    label: "padding-right",
  },
  { className: "ms-5", label: "margin-inline-start" },
  { className: "me-5", label: "margin-inline-end" },
  { className: "mbs-5", label: "margin-block-start" },
  { className: "mbe-5", label: "margin-block-end" },
];

export const BoxModelPage = () => {
  const [block, setBlock] = useState(false);
  const [spacings, setSpacings] = useState<string[]>([]);
  const [writing, setWriting] = useState<string | null>(null);
  return (
    <>
      <section className="max-w-4xl mb-20">
        <article>
          <h1>Box model</h1>
          <p>Jak przeglądarka wyświetla znaczniki w postaci pudełek.</p>
          <figure>
            <img
              src="https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/GezxDZXkJgkMevkKg39M.png?auto=format&w=845"
              alt="Box model"
            />
          </figure>
        </article>
        <article className="mb-4">
          <h2>Display: block vs inline</h2>
          <div className="py-4">
            <Switch checked={block} onChange={setBlock} />
            <span className="ml-2">Block</span>
          </div>
          <div className="max-w-sm p-2 border border-dashed">
            <span className={clsx(block ? "block mb-2" : "inline")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <span className={clsx(block ? "block mb-2" : "inline")}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
            <span className={clsx(block ? "block mb-2" : "inline")}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </span>
            <span className={clsx(block ? "block mb-2" : "inline")}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </span>
          </div>
        </article>
        <article>
          <h2>Margins vs Paddings</h2>
          <p className="block my-4">
            Wybierz attrybuty, aby sprawdzić jak one wpłyną na sposób
            wyświetlania niebieskiego blocku.
          </p>
          <div className="flex">
            <div>
              <div className="max-w-md p-2 border border-dashed">
                <div className="mb-2 p-2 border border-slate-200 bg-slate-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div
                  className={clsx(
                    "max-w-[200px] max-h-xs mb-2 p-2 border border-blue-200 bg-blue-100",
                    spacings,
                    writing
                  )}
                >
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="p-2 border border-slate-200 bg-slate-100">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </div>
              </div>
            </div>
            <div className="ml-4">
              Writing modes:
              <p>
                {writingMode.map((x) => {
                  const selected = writing === x.className;
                  return (
                    <SelectableTag
                      key={x.className}
                      className="px-1 m-[4px]"
                      selected={selected}
                      onClick={() => setWriting(x.className)}
                    >
                      {x.label}
                    </SelectableTag>
                  );
                })}
              </p>
              Paddings i margins:
              <p>
                {config.map((x) => {
                  const selected = spacings.includes(x.className);
                  return (
                    <SelectableTag
                      key={x.className}
                      className="px-1 m-[4px]"
                      selected={selected}
                      onClick={() =>
                        setSpacings((prev) => {
                          if (selected)
                            return prev.filter((y) => y !== x.className);
                          return [...prev, x.className];
                        })
                      }
                    >
                      {x.label}
                    </SelectableTag>
                  );
                })}
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

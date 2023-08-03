import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

const MainLink = (props: { to: string; label: string }) => {
  const { to, label } = props;
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "block h-[42px] leading-[42px] hover:bg-slate-50 px-2",
          isActive &&
            "border-r-4 border-yellow-600 bg-yellow-200 hover:bg-yellow-300"
        )
      }
      to={to}
    >
      {label}
    </NavLink>
  );
};

export const Aside = (props: HtmlHTMLAttributes<HTMLElement>) => {
  const { className, ...other } = props;
  return (
    <aside
      className={clsx(
        className,
        "w-[280px] bg-slate-200 min-h-full border-l border-slate-500"
      )}
      {...other}
    >
      <header className="p-2">
        <h1 className="text-[24px]">Podstawy HTML i CSS</h1>
        <p className="text-[14px]">Dominik Zima</p>
      </header>
      <nav className="mt-4">
        <ul>
          <li>
            <span className="text-[0.75rem] p-2">HTML</span>
          </li>
          <li>
            <MainLink to="/html-semantic" label="HTML semantyka znaczników" />
          </li>
          <li>
            <MainLink to="/html5" label="Co to jest HTML 5" />
          </li>
          <li>
            <span className="text-[0.75rem] p-2">CSS</span>
          </li>
          <li>
            <MainLink to="/box-model" label="Box model" />
          </li>
          <li>
            <MainLink to="/units" label="Units" />
          </li>
          <li>
            <MainLink
              to="/specificity-and-combinators"
              label="Specyficzność i kombinatory"
            />
          </li>
          <li>
            <MainLink to="/methodics" label="Wybrane metodyki CSS" />
          </li>
          <li>
            <MainLink to="/last" label="Q&A" />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

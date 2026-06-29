import type { ReactNode } from "react";

type IconTextItemProps = {
  icon: ReactNode;
  text: string;
};

export function IconTextItem({ icon, text }: IconTextItemProps) {
  return (
    <li className="mb-3 grid grid-cols-[38px_1fr] items-center gap-2">
      <span aria-hidden="true">{icon}</span>
      <p className="m-0 text-fluid-copy">{text}</p>
    </li>
  );
}

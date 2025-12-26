import type { ReactNode } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

type TipCalloutProps = {
  title: string;
  children: ReactNode;
};

export function TipCallout({ title, children }: TipCalloutProps) {
  return (
    <div className="flex gap-4 rounded-2xl border border-agent-blue/20 bg-agent-gray px-5 py-4">
      <div className="mt-1 shrink-0 text-agent-blue">
        <InformationCircleIcon className="h-7 w-7" aria-hidden />
      </div>
      <div className="space-y-2">
        <h3 className="font-display text-lg font-semibold text-agent-blue">
          {title}
        </h3>
        <div className="text-base text-slate-600">{children}</div>
      </div>
    </div>
  );
}

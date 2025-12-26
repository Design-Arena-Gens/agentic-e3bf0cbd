type CodeBlockProps = {
  title: string;
  code: string;
};

export function CodeBlock({ title, code }: CodeBlockProps) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-slate-100 shadow-lg shadow-slate-900/30">
      <figcaption className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 px-4 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-agent-teal">
        {title}
        <span className="text-xs font-normal text-slate-400">
          Copy & adapt
        </span>
      </figcaption>
      <pre className="max-h-[420px] overflow-x-auto p-5 text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </figure>
  );
}

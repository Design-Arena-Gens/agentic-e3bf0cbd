const checklistItems = [
  {
    title: "Trace everything",
    detail:
      "Enable verbose logging early so you can replay decisions and spot hallucinations before they ship.",
  },
  {
    title: "Validate tool contracts",
    detail:
      "Write zod or JSON schema validators around tool inputs/outputs to prevent malformed payloads from cascading.",
  },
  {
    title: "Sandbox first",
    detail:
      "Keep destructive permissions off until you are confident in the prompt and failure modes.",
  },
  {
    title: "Escalation hooks",
    detail:
      "Give the agent a way to ask for help or hand results back when blocked — it keeps loops from spiraling.",
  },
];

export function PlaygroundChecklist() {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {checklistItems.map((item) => (
        <li
          key={item.title}
          className="flex flex-col gap-2 rounded-2xl border border-agent-blue/10 bg-white/90 px-5 py-5 shadow-inner shadow-slate-900/5"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-agent-blue/70">
            Checklist
          </span>
          <h4 className="font-display text-xl font-semibold text-slate-900">
            {item.title}
          </h4>
          <p className="text-base text-slate-600">{item.detail}</p>
        </li>
      ))}
    </ul>
  );
}

const flowSteps = [
  {
    id: "plan",
    title: "Plan the mission",
    description:
      "Define the user’s goal, success criteria, and important constraints. Smaller, measurable goals make delegation easier.",
    hint: "Ask: “What outcome proves the agent succeeded?”",
  },
  {
    id: "tools",
    title: "Wire up tools",
    description:
      "Configure data sources, APIs, and any shell access the agent needs. Keep scopes tight and observe logs during the first runs.",
    hint: "Prefer composable functions the agent can call rather than huge toolkits.",
  },
  {
    id: "prompt",
    title: "Author the system prompt",
    description:
      "Translate the mission into instructions. Include domain context, format expectations, and escalation paths when the agent gets stuck.",
    hint: "Structure prompts with sections like Context, Resources, Task, Guardrails.",
  },
  {
    id: "iterate",
    title: "Dry-run & iterate",
    description:
      "Use the sandbox to run trial tasks and inspect traces. Adjust prompt, tools, or guardrails until results are deterministic.",
    hint: "Treat each run as an experiment; change one variable at a time.",
  },
  {
    id: "ship",
    title: "Promote to production",
    description:
      "Lock the version, add monitoring hooks, then promote. Capture learnings for future missions.",
    hint: "Share successful prompts and recipes so teammates can reuse them.",
  },
];

export function AgentFlow() {
  return (
    <ol className="relative grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-5">
      {flowSteps.map((step, index) => (
        <li
          key={step.id}
          className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-agent-teal/70 hover:shadow-lg"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-agent-blue text-lg font-semibold text-white">
              {index + 1}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-agent-blue/70">
              {step.id}
            </span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900">
            {step.title}
          </h3>
          <p className="mt-3 text-base text-slate-600">{step.description}</p>
          <p className="mt-4 rounded-xl bg-agent-gray px-4 py-3 text-sm font-medium text-agent-blue/90">
            Pro tip: {step.hint}
          </p>
        </li>
      ))}
    </ol>
  );
}

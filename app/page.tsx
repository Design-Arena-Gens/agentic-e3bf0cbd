import Link from "next/link";
import { AgentFlow } from "@/components/AgentFlow";
import { CodeBlock } from "@/components/CodeBlock";
import { PlaygroundChecklist } from "@/components/PlaygroundChecklist";
import { SectionCard } from "@/components/SectionCard";
import { TipCallout } from "@/components/TipCallout";
import { discoveryPrompt } from "@/lib/prompts";

const resourceLinks = [
  {
    title: "Orchestrating multi-step agents",
    description:
      "Design patterns for delegating complex tasks to LLM agents with tool use.",
    href: "https://vercel.com/docs/ai/ai-sdk-reference/agents",
  },
  {
    title: "Tracing runs with LangSmith",
    description:
      "Capture decisions, prompts, and tool calls as rich telemetry for debugging.",
    href: "https://docs.langchain.com/docs/langsmith/overview",
  },
  {
    title: "Prompt engineering playbook",
    description:
      "Structure effective prompts with context, objectives, and guardrails.",
    href: "https://www.promptingguide.ai/",
  },
];

export default function Page() {
  return (
    <main className="relative isolate mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 md:px-10 md:pt-20 lg:pt-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-white via-agent-gray/40 to-transparent" />

      <header className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-agent-blue/10 px-4 py-2 text-sm font-semibold text-agent-blue">
            <span className="h-2 w-2 rounded-full bg-agent-teal" />
            Agent Ops Control Room
          </span>
          <h1 className="font-display text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
            Launch agents with clarity, guardrails, and measurable impact.
          </h1>
          <p className="text-lg text-slate-600 md:text-xl">
            This playbook shows you how to spin up autonomous agents in this
            workspace, wire them into your stack, and iterate safely until
            they’re production ready. Follow the path, plug in your domain, and
            ship faster.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#workflow"
              className="inline-flex items-center justify-center rounded-full bg-agent-blue px-6 py-3 text-base font-semibold text-white shadow-lg shadow-agent-blue/30 transition hover:bg-agent-blue/90"
            >
              Build the workflow
            </Link>
            <Link
              href="#prompt"
              className="inline-flex items-center justify-center rounded-full border border-agent-blue/40 px-6 py-3 text-base font-semibold text-agent-blue transition hover:border-agent-blue hover:text-agent-blue/80"
            >
              Grab the prompt template
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-agent-blue/20 bg-gradient-to-br from-white via-agent-gray/60 to-agent-teal/10 p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.2),_transparent_50%)]" />
          <div className="relative space-y-4 text-slate-700">
            <h2 className="font-display text-2xl font-semibold text-agent-blue">
              Agent readiness checklist
            </h2>
            <ul className="space-y-3 text-base">
              <li>▹ Define the mission in user language</li>
              <li>▹ Identify tools + data needed to act</li>
              <li>▹ Draft the system prompt with guardrails</li>
              <li>▹ Dry-run in sandbox and inspect traces</li>
              <li>▹ Instrument success metrics before launch</li>
            </ul>
          </div>
        </div>
      </header>

      <SectionCard eyebrow="Phase One" title="Prep your agent workspace">
        <p>
          Agents thrive when their environment is tidy. Audit the APIs, files,
          and data sources the agent needs. Sketch a responsibility boundary so
          the agent knows when to hand back control. Keep the blast radius small
          by default — you can always expand once results look good.
        </p>
        <TipCallout title="Why sandboxing matters">
          <p>
            Start with read-only access or mocked integrations. Confirm the
            agent understands workflows before granting write permissions or
            shell access.
          </p>
        </TipCallout>
      </SectionCard>

      <div id="workflow" className="space-y-8">
        <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
          The agent workflow you can reuse everywhere
        </h2>
        <AgentFlow />
      </div>

      <SectionCard eyebrow="Phase Two" title="Operate in the playground">
        <p>
          Use the agent playground to rehearse missions. Seed a few real-world
          scenarios and capture logs. As you iterate, keep prompt diffs, tooling
          changes, and observed behaviors in a shared notebook — it becomes the
          knowledge base for future missions.
        </p>
        <PlaygroundChecklist />
      </SectionCard>

      <section id="prompt" className="space-y-6">
        <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
          System prompt template
        </h2>
        <p className="text-lg text-slate-600">
          Drop this template into your agent configuration, then customize the
          mission, guardrails, and output contract. Tight prompts create
          predictable behavior, especially as tool surfaces grow.
        </p>
        <CodeBlock title="system-prompt.ts" code={discoveryPrompt} />
      </section>

      <SectionCard eyebrow="Phase Three" title="Ship with observability">
        <p>
          Once the agent performs reliably, wrap it in monitoring. Emit events
          for each tool call, log prompt versions, and wire an incident channel
          for human review. Production agents should feel as observable as any
          service in your stack.
        </p>
        <TipCallout title="Key signals to watch">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Success rate per mission type — watch for drift as prompts evolve.
            </li>
            <li>
              Tool latency and error codes — slow tools cascade into poor UX.
            </li>
            <li>
              Escalation volume — spikes mean the agent needs more context or a
              tighter scope.
            </li>
          </ul>
        </TipCallout>
      </SectionCard>

      <section className="space-y-6">
        <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
          Deep dives & next steps
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {resourceLinks.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-2 rounded-2xl border border-agent-blue/20 bg-white px-6 py-5 transition hover:-translate-y-1 hover:border-agent-teal/70 hover:shadow-lg"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-agent-blue/60">
                Resource
              </span>
              <h3 className="font-display text-2xl font-semibold text-agent-blue">
                {resource.title}
              </h3>
              <p className="text-base text-slate-600">{resource.description}</p>
              <span className="mt-2 text-sm font-semibold text-agent-teal">
                Open guide ↗
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

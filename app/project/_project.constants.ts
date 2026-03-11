export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  github: string;
  link?: string;
  wip?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ghost-ui",
    name: "ghost-ui",
    tagline: "A minimal, accessible React component library.",
    description:
      "A headless-first component library built for teams that want full control over styling without giving up accessibility. Components are fully keyboard navigable, ARIA compliant, and have zero opinion on how they look.",
    stack: ["React", "TypeScript", "Radix UI", "Tailwind", "Storybook"],
    highlights: [
      "Zero-runtime CSS — all styling via CSS variables and class composition",
      "Full keyboard navigation and ARIA compliance across all interactive components",
      "Storybook-driven development with visual regression testing",
      "Tree-shakeable — bundle only what you use",
    ],
    github: "https://github.com/JayakrishnanMurali/ghost-ui",
    wip: true,
  },
  {
    slug: "perfkit",
    name: "perfkit",
    tagline: "A lightweight Web Vitals monitoring SDK.",
    description:
      "A drop-in SDK for tracking Core Web Vitals and custom performance marks in production. Sends metrics to any analytics backend via a configurable transport layer. Built after spending too much time debugging LCP regressions in production with no good data.",
    stack: ["TypeScript", "Web Vitals API", "PerformanceObserver", "Rollup"],
    highlights: [
      "Tracks LCP, CLS, INP, FCP, and TTFB out of the box",
      "Custom mark and measure support for component-level tracing",
      "Pluggable transport — send to Datadog, PostHog, or your own endpoint",
      "Under 2kb gzipped with no dependencies",
    ],
    github: "https://github.com/JayakrishnanMurali/perfkit",
    wip: true,
  },
  {
    slug: "statekit",
    name: "statekit",
    tagline: "A tiny reactive state library for React.",
    description:
      "A sub-1kb state management library that takes Zustand's core ideas and strips them down further. Built as a learning exercise that became a usable library — stores are plain JS closures, React integration is a single useSyncExternalStore hook.",
    stack: ["TypeScript", "React", "useSyncExternalStore"],
    highlights: [
      "Core store is 40 lines — no magic, just pub/sub",
      "React integration via useSyncExternalStore for concurrent-safe updates",
      "Selector-based subscriptions to prevent unnecessary re-renders",
      "Middleware support for devtools and persistence",
    ],
    github: "https://github.com/JayakrishnanMurali/statekit",
    wip: true,
  },
  {
    slug: "mini-react",
    name: "mini-react",
    tagline: "A virtual DOM and fiber reconciler built from scratch.",
    description:
      "A from-scratch implementation of React's core — virtual DOM diffing, a fiber-based work loop, hooks (useState, useEffect, useRef), and a commit phase that applies DOM mutations. Not a toy: it handles keyed lists, conditional rendering, and component unmounting correctly. Built to deeply understand what React is actually doing.",
    stack: ["TypeScript", "Rollup"],
    highlights: [
      "Fiber-based incremental work loop with interruptible rendering",
      "Reconciler correctly diffs keyed lists and handles component unmounting",
      "Implements useState, useEffect, useRef, and useMemo from first principles",
      "Commit phase separates side effects from render work, matching React's model",
    ],
    github: "https://github.com/JayakrishnanMurali/mini-react",
    wip: true,
  },
  {
    slug: "jsvm",
    name: "jsvm",
    tagline: "A bytecode compiler and stack VM for a subset of JavaScript.",
    description:
      "A compiler pipeline that takes a JavaScript-like language and produces bytecode for a custom stack-based virtual machine. Covers lexing, recursive descent parsing, an AST, a bytecode emitter with backpatching for control flow, and a VM interpreter. The natural follow-up to writing a compiler in C — this time targeting a higher-level runtime.",
    stack: ["C", "TypeScript"],
    highlights: [
      "Full pipeline: source → tokens → AST → bytecode → VM execution",
      "Supports variables, arithmetic, conditionals, while loops, and functions",
      "Backpatching-based jump resolution for control flow",
      "Arena allocator for AST nodes — single free at end of compilation",
    ],
    github: "https://github.com/JayakrishnanMurali/jsvm",
    wip: true,
  },
  {
    slug: "collab",
    name: "collab",
    tagline: "A real-time collaborative editor using CRDTs.",
    description:
      "A browser-based collaborative text editor where multiple users can edit the same document simultaneously with no conflicts. Uses a CRDT (Conflict-free Replicated Data Type) for merge resolution instead of operational transforms — no central authority needed to resolve conflicts.",
    stack: ["TypeScript", "CRDT", "WebSockets", "React", "IndexedDB"],
    highlights: [
      "CRDT-based merge — edits from any client converge to the same document state",
      "Offline-first: edits are queued locally in IndexedDB and synced on reconnect",
      "Presence indicators show live cursor positions of other users",
      "WebSocket server handles peer relay with no conflict resolution logic server-side",
    ],
    github: "https://github.com/JayakrishnanMurali/collab",
    wip: true,
  },
  {
    slug: "codify",
    name: "codify",
    tagline: "Turn code into beautiful shareable images.",
    description:
      "A browser-based tool for creating clean code screenshots. Pick a theme, set the language, adjust padding and window style — export a polished image ready for social or documentation. No sign up, no watermark.",
    stack: ["Next.js", "TypeScript", "Shiki", "html-to-image"],
    highlights: [
      "Syntax highlighting powered by Shiki with 20+ themes",
      "Adjustable padding, background, window chrome, and border radius",
      "One-click PNG export",
      "Fully client-side — nothing leaves your browser",
    ],
    github: "https://github.com/JayakrishnanMurali/codify",
    link: "https://codify.jkayy.in/",
  },
];

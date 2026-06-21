import { Fragment } from 'react'

export const workflowSteps = [
  {
    className: 'workflow-module--start',
    description: 'I review the brief, define the scope, and align the project goals before design or development begins.',
    icon: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    step: '01',
    tag: 'Start',
    title: 'Project Brief',
  },
  {
    className: 'workflow-module--discover',
    description: 'I study the audience, user needs, and key pain points to shape a solution with purpose.',
    icon: (
      <>
        <circle cx="11" cy="11" r="5" />
        <path d="m15 15 4 4" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </>
    ),
    step: '02',
    tag: 'Learn',
    title: 'User Goals',
  },
  {
    className: 'workflow-module--strategy',
    description: 'I turn the goals into a clear roadmap with priorities, structure, and next actions.',
    icon: (
      <>
        <path d="M5 6h14" />
        <path d="M5 12h10" />
        <path d="M5 18h6" />
        <path d="m15 17 2 2 4-5" />
      </>
    ),
    step: '03',
    tag: 'Plan',
    title: 'Clear Roadmap',
  },
  {
    className: 'workflow-module--design',
    description: 'I design clean, intuitive screens focused on usability, accessibility, and visual polish.',
    icon: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="3" />
        <path d="M9 9h6" />
        <path d="M9 13h3" />
        <path d="M15 15.5h.01" />
      </>
    ),
    step: '04',
    tag: 'UI/UX',
    title: 'Clean Interface',
  },
  {
    className: 'workflow-module--build',
    description: 'I develop a responsive, functional product with clean code and smooth interactions.',
    icon: (
      <>
        <path d="m9 8-4 4 4 4" />
        <path d="m15 8 4 4-4 4" />
        <path d="m13 6-2 12" />
      </>
    ),
    step: '05',
    tag: 'Develop',
    title: 'Working Product',
  },
  {
    className: 'workflow-module--review',
    description: 'I test, refine, and improve the experience to catch issues before the final handoff.',
    icon: (
      <>
        <path d="M12 5 5 8v5c0 4 3 6 7 7 4-1 7-3 7-7V8l-7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    step: '06',
    tag: 'Review',
    title: 'Test & Improve',
  },
  {
    className: 'workflow-module--launch',
    description: 'I prepare the final build, deploy it properly, and make sure everything is ready to go live.',
    icon: (
      <>
        <path d="M12 4c3 2 5 5 5 9l-5 7-5-7c0-4 2-7 5-9Z" />
        <circle cx="12" cy="11" r="2" />
        <path d="M8 17 5 20" />
        <path d="m16 17 3 3" />
      </>
    ),
    step: '07',
    tag: 'Launch',
    title: 'Go Live',
  },
]

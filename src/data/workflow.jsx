import { Fragment } from 'react'

export const workflowSteps = [
  {
    className: 'workflow-module--start',
    description: 'I review the brief, define the scope, and align the project goals before design or development begins.',
    icon: (
      <>
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15M14.5 6l6 6-6 6" />
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
        <circle cx="11" cy="11" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="m15.5 15.5 4 4M11 7.5v7M7.5 11h7" />
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
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.5h15M4.5 12h10.5M4.5 18.5h6.5M15.5 17l2.5 2.5 4.5-5.5" />
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
        <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M8.5 9h7M8.5 13h4M15.5 15.8h.5" />
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
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M8.5 8.5 4.5 12l4 4M15.5 8.5l4 3.5-4 4M14 5l-4 14" />
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
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 4.5 4.5 8v5.5c0 4.2 3.2 6.3 7.5 7.5 4.3-1.2 7.5-3.3 7.5-7.5V8l-7.5-3.5ZM8.5 12.5l2.5 2.5 4.5-5.5" />
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
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 3.5c3.2 2 5.2 5.2 5.2 9.5l-5.2 7.5-5.2-7.5c0-4.3 2-7.5 5.2-9.5Z" />
        <circle cx="12" cy="11" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M7.5 17.5 4.5 20.5M16.5 17.5l3 3" />
      </>
    ),
    step: '07',
    tag: 'Launch',
    title: 'Go Live',
  },
]

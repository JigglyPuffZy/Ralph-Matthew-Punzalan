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

export const videoWorkflowSteps = [
  {
    className: 'workflow-module--start',
    description: 'I review the brief, understand the brand message, target audience, and creative vision for the video.',
    icon: (
      <>
        <rect x="4.5" y="5.5" width="15" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M19.5 10l3.5 2-3.5 2z" />
      </>
    ),
    step: '01',
    tag: 'Brief',
    title: 'Creative Vision',
  },
  {
    className: 'workflow-module--discover',
    description: 'I organize raw footage, audio files, and assets into a structured timeline for efficient editing.',
    icon: (
      <>
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M8.5 4.5h-3a1 1 0 0 0-1 1v3M19.5 4.5h-3M15.5 4.5h-7M8.5 19.5h-3a1 1 0 0 1-1-1v-3M19.5 19.5h-3M15.5 19.5h-7M19.5 8.5v3M19.5 15.5v-3" />
        <rect x="17.5" y="3.5" width="3" height="3" rx=".5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <rect x="17.5" y="17.5" width="3" height="3" rx=".5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    step: '02',
    tag: 'Organize',
    title: 'Asset Setup',
  },
  {
    className: 'workflow-module--strategy',
    description: 'I assemble the rough cut, selecting the best takes and arranging clips to tell a compelling story.',
    icon: (
      <>
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5h6v6h-6zM13.5 4.5h6v6h-6zM4.5 13.5h6v6h-6zM13.5 13.5h6v6h-6z" />
      </>
    ),
    step: '03',
    tag: 'Edit',
    title: 'Rough Cut',
  },
  {
    className: 'workflow-module--design',
    description: 'I add transitions, motion graphics, text overlays, and visual effects to enhance the narrative.',
    icon: (
      <>
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15M4.5 12h15" />
        <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5l1.8 1.8M16.5 7.5l-1.8 1.8M7.5 16.5l1.8-1.8M16.5 16.5l-1.8-1.8" />
      </>
    ),
    step: '04',
    tag: 'Graphics',
    title: 'Motion & VFX',
  },
  {
    className: 'workflow-module--build',
    description: 'I balance and enhance audio levels, add music, sound effects, and ensure crystal-clear dialogue.',
    icon: (
      <>
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M5.5 9v6M9.5 7v10M13.5 5v14M17.5 8v8" />
      </>
    ),
    step: '05',
    tag: 'Audio',
    title: 'Sound Design',
  },
  {
    className: 'workflow-module--review',
    description: 'I apply color grading to set the mood, enhance visual consistency, and polish the final look.',
    icon: (
      <>
        <circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15" />
      </>
    ),
    step: '06',
    tag: 'Grade',
    title: 'Color Correction',
  },
  {
    className: 'workflow-module--launch',
    description: 'I export the final video in the required format and resolution, ready for publishing or client delivery.',
    icon: (
      <>
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v10M8.5 11l3.5 3.5 3.5-3.5M4.5 19.5h15" />
      </>
    ),
    step: '07',
    tag: 'Export',
    title: 'Final Delivery',
  },
]

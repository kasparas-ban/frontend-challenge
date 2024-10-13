export const ROUTES = {
  // Home
  home: {
    path: '/',
  },

  // Stacks
  stacks: {
    path: 'stacks',
    stackInfo: {
      path: ':stackId',
    },
  },

  // Stack components
  stackComponents: {
    path: 'stack-components',
    componentInfo: {
      path: ':componentId',
    },
  },
} as const

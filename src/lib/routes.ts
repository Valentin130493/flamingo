export const routes = {
  issues: {
    list: '/issues',
    detail: (id: string) => `/issues/${id}`,
  },
} as const;

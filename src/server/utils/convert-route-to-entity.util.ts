const mapping: Record<string, string> = {
  students: 'student',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

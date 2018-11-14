export default [
  {
    path: '/login',
    component: import('../app/components/auth/login'),
    exact: true,
  },
  {
    path: '/logout',
    component: import('../app/components/auth/logout'),
    exact: true,
  },
];

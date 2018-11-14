export default [
  {
    path: '/user',
    component: import('../app/components/auth/auth'),
    abstract: true,
    routes: [
      {
        path: '/user/dashboard',
        exact: true,
        component: import('../app/components/user/dashboard'),
      },
      {
        path: '/user/profile',
        exact: true,
        component: import('../app/components/user/profile'),
      },
    ],
  },
];

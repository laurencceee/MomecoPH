const Module = () => import('@/components/HelperComponent/PageBodyComponent.vue')

const moduleRoute = {
  path: '/',
  component: Module,
  children: [
    {
      path: '',
      name: '',
      components: ''
    }
  ]
}

export default (router) => {
  router.addRoute(moduleRoute)
}

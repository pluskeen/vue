export default function asyncComponents(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
      // A component to use while the component is loading.
    loading: require('@/components/load.vue').default,
      // A fallback component in case the timeout is exceeded
      // when loading the component.
    error: require('@/components/load.vue').default,
      // Delay before showing the loading component.
      // Default: 200 (milliseconds).
    delay: 200,
      // Time before giving up trying to load the component.
      // Default: Infinity (milliseconds).
    timeout: 10000
  });
  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
        // Transparently pass any props or children
        // to the view component.
      return h(AsyncHandler, data, children);
    }
  });
}
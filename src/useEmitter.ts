import { getCurrentInstance } from 'vue';
/* eslint-disable */
export default function useEmitter(): any {
  const internalInstance = getCurrentInstance();
  const emitter = internalInstance?.appContext.config.globalProperties.emitter;

  return emitter;
}

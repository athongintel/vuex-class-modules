import { ModulePrototype } from "./module-factory";

export function Compute<T extends Object>(
  target: T,
  key: string | symbol,
  descriptor: TypedPropertyDescriptor<(arg?: any) => void>
) {
  const vuexModule = target.constructor as ModulePrototype;
  if (!vuexModule.__computes) {
    vuexModule.__computes = {};
  }
  if (descriptor.value) {
    vuexModule.__computes[key as string] = descriptor.value;
  }
}

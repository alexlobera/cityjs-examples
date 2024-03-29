import { createRuntimeBindings, GetRuntime } from "@leanjs/react";
import { createRuntime } from "@my-org/shared-runtime";

export { createRuntime };

export type Runtime = GetRuntime<typeof createRuntime>;

export const {
  useGetter,
  useSetter,
  useLoading,
  useError,
  useRuntime,
  RuntimeProvider,
} = createRuntimeBindings(createRuntime);

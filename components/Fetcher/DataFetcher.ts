import type { AnyType, Infer } from "myzod";
import myzod from "myzod";

export const BasicResponseSchema = myzod.object({
  error: myzod.boolean(),
  errorMessage: myzod.string(),
});

export default async function DataFetcher(
  path: string,
  init: RequestInit = {}
) {
  const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
  if (typeof endpoint !== "string")
    throw new Error(
      "You should specify the value to NEXT_PUBLIC_API_ENDPOINT environment variable."
    );

  const responseData = await fetch(`${endpoint}/${path}`, init);
  return responseData.json();
}

export function ResponseParser<T extends AnyType>(
  data: unknown,
  error: unknown,
  schema: T
): { data: Infer<T> | null; error: null } | { data: null; error: Error } {
  try {
    if (error) throw error;
    if (data) {
      const typedData = schema.parse(data) as Infer<T>;
      return { data: typedData, error: null };
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      return { data: null, error: e };
    }

    return { data: null, error: new Error(`${e}`) };
  }

  return { data: null, error: null };
}

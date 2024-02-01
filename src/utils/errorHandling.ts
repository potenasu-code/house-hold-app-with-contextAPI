export function isFirestoreError(
  err: unknown
): err is { code: string; message: string } {
  return typeof err === "object" && err !== null && "code" in err;
}

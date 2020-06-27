const range = (length: number) => [...Array(length)].map((_, i) => i);

export const headers = ["a", "bc", "cde", "fghi"];

interface Item {
  a: string;
  bc: string;
  def: string;
  ghij: string;
}
export const items: ReadonlyArray<Item> = range(100).map(() => ({
  a: Math.random().toString(),
  bc: Math.random().toString(),
  def: Math.random().toString(),
  ghij: Math.random().toString(),
}));

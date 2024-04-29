export type Row = {
  id: number;
  title: string;
}

export function createData(from = 0, to = 1000): Row[] {
  return Array.from({ length: to - from }, (_, index) => ({
    id: index + from,
    title: `Row ${index + 1}`
  }));
}
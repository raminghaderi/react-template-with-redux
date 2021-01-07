type PropsType = {
  counter: {
    count: number
  };
}

export default function mapCount({ counter }: PropsType): number {
  return counter.count;
}

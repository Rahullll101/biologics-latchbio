interface MetricCounterProps {
  value: string;
  trigger?: boolean;
}

export default function MetricCounter({ value }: MetricCounterProps) {
  return <span>{value}</span>;
}

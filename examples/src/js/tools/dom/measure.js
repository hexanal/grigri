export default function measure(element, cb) {
  const resizeObserver = new ResizeObserver(entries => {
    const { width, height } = entries[0].contentRect;
    cb({ width, height });
  });
  resizeObserver.observe(element);
  return resizeObserver;
}

export function getMeasurements(element) {
  const { width, height } = element.getBoundingClientRect();
  return { width, height };
}

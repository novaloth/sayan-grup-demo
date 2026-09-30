/** Sayan Grup logosundaki üç parçalı işaret (public/images/logo.svg içindeki kırmızı yollar). */
const paths = [
  "M15.7187 65.6521C15.7187 65.6521 12.9398 57.7373 17.8238 49.4429C17.8238 49.4429 10.147 52.5357 7.21375 59.7617C7.21375 59.7617 10.5961 64.5134 15.7187 65.638V65.6521Z",
  "M4.95416 57.1328C4.95416 57.1328 6.68041 46.6594 22.3289 40.6284C37.9774 34.5974 42.5667 30.4502 40.5317 18.4726C40.5317 18.4726 21.1921 24.7285 9.45924 37.395C-2.27362 50.0615 4.94013 57.1469 4.94013 57.1469L4.95416 57.1328Z",
  "M0.140307 44.5506C0.140307 44.5506 0.898171 34.9067 17.8238 24.7285C34.7494 14.5503 43.1 16.7293 41.4439 0C41.4439 0 -2.77887 12.8914 0.140307 44.5506Z",
];

/** Dekoratif kullanım içindir; boyut className ile, renk fill/stroke ile verilir. */
export default function LogoMark(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 43.2 65.7" preserveAspectRatio="none" strokeWidth={1} aria-hidden {...props}>
      {paths.map((d) => (
        <path key={d} d={d} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

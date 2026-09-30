import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
};

/** Sayan Grup logosu (beyaz yazı, kırmızı işaret). SVG olduğu için next/image optimize etmez. */
export default function Logo({
  width = 174,
  height = 83,
  alt = "Sayan Grup",
  className,
}: LogoProps) {
  return (
    <Image src="/images/logo.svg" alt={alt} width={width} height={height} className={className} />
  );
}

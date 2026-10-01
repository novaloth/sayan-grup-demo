import { Fragment } from "react";

/** Başlık satırlarını aralarına <br /> koyarak yazar (içerikte satırlar dizi olarak tutulur). */
export default function TitleLines({ lines }: { lines: readonly string[] }) {
  return lines.map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));
}

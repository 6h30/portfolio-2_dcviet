import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Ảnh dự án</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo1.gif",
            alt: "1gif",
            href: "",
          },
          {
            src: "/photos/photo2.gif",
            alt: "2gif",
            href: "",
          },
          {
            src: "/photos/photo3.png",
            alt: "3png",
            href: "",
          },
          {
            src: "/photos/photo4.png",
            alt: "4png",
            href: "",
          },
          {
            src: "/photos/photo5.png",
            alt: "5png",
            href: "",
          },
          {
            src: "/photos/photo6.jpg",
            alt: "6jpg",
            href: "",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo1.gif", alt: "1gif" },
          { src: "/photos/photo2.gif", alt: "2gif" },
          { src: "/photos/photo3.png", alt: "3png" },
          { src: "/photos/photo4.png", alt: "4png" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo1.gif", alt: "1gif" },
          { src: "/photos/photo2.gif", alt: "2gif" },
          { src: "/photos/photo3.png", alt: "3png" },
          { src: "/photos/photo4.png", alt: "4png" },
          { src: "/photos/photo5.png", alt: "5png" },
          { src: "/photos/photo6.jpg", alt: "6jpg" },
        ]}
      />
    </section>
  );
}

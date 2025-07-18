// src/lib/generateRandomBlobs.ts
import blobshape from 'blobshape';

export type BlobPath = {
  path: string;
  color: string;
  x: number;
  y: number;
};

export function generateRandomBlobs({
  maxBlobs = 5,
  width = 600,
  height = 400,
}: {
  maxBlobs?: number;
  width?: number;
  height?: number;
} = {}): BlobPath[] {
  const count = Math.floor(Math.random() * maxBlobs) + 1;

  const randomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`;
  };

  return Array.from({ length: count }).map(() => {
    const { path } = blobshape({
      size: 300,
      growth: Math.random() * 10 + 3, // edge/growth control
      edges: Math.floor(Math.random() * 8) + 5,
      seed: null,
    });
    return {
      path,
      color: randomColor(),
      x: Math.random() * (width - 300),
      y: Math.random() * (height - 300),
    };
  });
}

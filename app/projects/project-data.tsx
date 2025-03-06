export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio-genZ app",
    year: 2024,
    description: "Dự án kho portfolio cho gen z-mẫu 1",
    url: "https://www.portfolio-1.site",
  },
  {
    title: "Trình chỉnh sửa portfolio",
    year: 2023,
    description: "Đang phát triển",
    url: "https://opendeeplearning.xyz/",
  },
];

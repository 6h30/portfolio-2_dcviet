import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Thông tin cá nhân
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
  <p>
    Tui là một lập trình viên làm việc tự do, chuyên về phát triển web và ứng dụng.
  </p>
  <p>
    Tôi có kinh nghiệm với các công nghệ như Next.js, Angular, TailwindCSS, Node.js, và nhiều công nghệ khác. 
    Đã từng thực hiện các dự án về e-learning, Ecommerce và tích hợp thanh toán trực tuyến.
  </p>
  <p>
    Bạn có thể xem một số dự án của tôi trên{" "}
    <a href={socialLinks.github} target="_blank">
      GitHub
    </a>{" "}
    hoặc trên portfolio cá nhân.
  </p>
  <p>
    Nếu bạn cần một trang web tối ưu, nhanh chóng và hiện đại, hãy liên hệ với tôi qua{" "}
    <a href="mailto:tranducviet.eng@gmail.com">email</a> hoặc kết nối qua{" "}
    <a href="https://behance.net/dcviet" target="_blank">Behance</a>.
  </p>
  <p>
    Được xây dựng và duy trì bởi{" "}
    <a href="https://www.portfolio-1.site" target="_blank">
      dcviet
    </a>
    .
  </p>
</div>

    </section>
  );
}

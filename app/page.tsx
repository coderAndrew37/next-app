import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <div>
        <h1>
          Hello {session ? session?.user?.name : "User"}
          <span>Welcome to our agency!</span>
        </h1>
        <p>
          We are glad to have you here. Explore our services and products to
          find the perfect solution for your needs. If you have any questions,
          feel free to <Link href="/contact">contact us</Link>. We are here to
          help you!
          <br />
        </p>

        <br />

        <p>
          Our agency specializes in providing high-quality services and products
          tailored to meet the unique needs of our clients. We pride ourselves
          on our attention to detail, commitment to excellence, and ability to
          deliver results that exceed expectations. Whether you are looking for
          web development, digital marketing, or design services, we have the
          expertise and experience to help you succeed.
          <br />
        </p>

        <br />

        <p>
          We are a team of dedicated professionals committed to providing
          top-notch services and products to our clients. Our mission is to
          deliver exceptional value and exceed your expectations. We believe in
          building long-lasting relationships with our clients based on trust,
          integrity, and mutual respect. Our team is passionate about what they
          do and is always ready to go the extra mile to ensure your
          satisfaction. We take pride in our work and strive to deliver the best
          possible results for our clients. Thank you for choosing us as your
          partner.
        </p>
        <br />
        <p>
          We look forward to working with you and helping you achieve your
          goals. If you have any questions or need assistance, please do not
          hesitate to reach out to us. We are here to help you every step of the
          way. Let's embark on this journey together and make great things
          happen!
        </p>
      </div>
    </main>
  );
}

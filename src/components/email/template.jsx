import data from "@/data/config";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

const Template = ({ children, name, preview }) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] bg-[#68B5E1] p-[20px] text-[#FDEFE8]">
            <Section className="mt-[32px]">
              <Img
                src="https://www.bearhack.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.473367c8.webp&w=3840&q=75"
                width="40"
                height="37"
                alt="Vercel"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-white">
              Thank you for applying!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-white">
              Hello <strong>{name}</strong>,
            </Text>
            {children}
            <Text className="text-[#FDEFE8]">
              - {data.name} Team {data.heart}
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[#FDEFE8]">
              Visit{" "}
              <Link href={data.domain} className="text-[#4f7b80]">
                {data.domain}
              </Link>{" "}
              for more information about <strong>{data.name}</strong> and follow
              us on{" "}
              <Link href={data.instagram} className="text-[#4f7b80]">
                Instagram
              </Link>{" "}
              and{" "}
              <Link href={data.linkedin} className="text-[#4f7b80]">
                Linkedin
              </Link>{" "}
              for up to date information and announcements.
            </Text>
            <Text className="text-xs leading-[24px] text-[#666666]">
              This invitation was intended for{" "}
              <span className="text-black">{name}</span>. If you were not
              expecting this email, you can ignore this email. If you are
              concerned about your account&apos;s safety, please contact{" "}
              {data.email} to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Template;

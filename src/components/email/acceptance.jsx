import data from "@/data/config";
import Template from "./template";
import { Button, Link, Section, Text } from "@react-email/components";

const Acceptance = ({ name, position, preview }) => {
  return (
    <Template name={name} preview={preview}>
      <Text className="text-[#FDEFE8]">
        🎉 Congratulations 🎉 You have been accepted into {data.name} as a{" "}
        <strong>{position}</strong>
      </Text>
      <Text className="text-[#FDEFE8]">
        We will be using Discord as our primary communication platform regarding
        announcements, events, workshops, activities, and more!
      </Text>
      <Section className="text-center">
        <Button
          href={data.discord}
          className="rounded bg-[#7289da] px-5 py-3 text-center text-xs font-semibold text-white no-underline"
        >
          Join Discord
        </Button>
      </Section>

      <Text className="text-[#FDEFE8]">
        We look forward to seeing you there!
      </Text>
      <Text className="text-[#FDEFE8]">
        <strong>READ IF YOU ARE UNDER 18</strong> Due to recent changes in UCR
        policy, anyone under 18 years of age will only be allowed on campus
        between 10am-5pm on Saturday. This will be strictly enforced to ensure a
        safe and inclusive environment where we can welcome all students to
        participate in our event. If all of your group mates are unable to demo
        your project in person due to this rule, you will be allowed to submit a
        video to demo your project. Submission details will be disclosed closer
        to the date of the event. Download this Consent and Agreement{" "}
        <Link
          className="text-[#4f7b80]"
          href="https://docs.google.com/document/d/1eW9S3I_y6ak7WnO5zM-kJi9BfagT9YHp7nWQz3L_ZZg/edit?usp=sharing"
          target="_blank"
        >
          form
        </Link>
        You may send your PDF file to this{" "}
        <Link
          className="text-[#4f7b80]"
          href="https://forms.gle/6csV33tZSRPKGVeX8"
          target="_blank"
        >
          link
        </Link>
        OR You may print a physical copy of the document and turn it in during
        check-in. If you have any questions, please send an email to{" "}
        <Link href="mailto:rosehackucr@gmail.com" className="text-[#4f7b80]">
          rosehackucr@gmail.com{" "}
        </Link>
        .
      </Text>
    </Template>
  );
};

export default Acceptance;

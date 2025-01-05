import data from "@/data/config";
import Template from "./template";
import { Button, Section, Text } from "@react-email/components";

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
    </Template>
  );
};

export default Acceptance;

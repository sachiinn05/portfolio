import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { Timeline } from "@/components/common/timeline";
import ExperienceItem from "./ui/ExperienceItem";
import experiences from "@/data/experiences";

const HomeSection3 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] bg-grid-white/[0.1] min-h-screen items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Education</SectionTitle>

        <Timeline
          data={experiences.map((exp, i) => ({
            title: exp.startDate + " - " + (exp.endDate || "Present"),
            content: <ExperienceItem key={`education-${i}`} data={exp} />,
          }))}
        />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection3;

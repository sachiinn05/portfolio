import type { IInsititueItem } from "@/types";
import Column from "@/components/core/Column";

const ExperienceItem = ({ data }: { data: IInsititueItem }) => {
  return (
    <Column classNames="w-full h-full gap-3">
      {/* Top Section */}
      <div>
        <p className="text-lg font-bold leading-snug">{data.institution}</p>
        <p className="text-[var(--textColorLight)] text-base leading-snug">
          {data.degree}
        </p>
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
        <p>
          <span className="font-medium text-[var(--textColorLight)]">
            Location:
          </span>{" "}
          {data.location}
        </p>

        {data.cgpa !== undefined && (
          <p>
            <span className="font-medium text-[var(--textColorLight)]">
              CGPA:
            </span>{" "}
            {data.cgpa}
          </p>
        )}

        {data.percentage !== undefined && (
          <p>
            <span className="font-medium text-[var(--textColorLight)]">
              Percentage:
            </span>{" "}
            {data.percentage}
          </p>
        )}
      </div>
    </Column>
  );
};

export default ExperienceItem;

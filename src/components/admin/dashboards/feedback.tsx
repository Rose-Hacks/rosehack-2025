"use client";
import { STATUSES, TAGS, COLUMNS, DROPDOWN } from "@/data/admin/feedback";
import Table from "./dashboard/dashboard";
import { SearchParams } from "@/types/dashboard";

type props = {
  searchParams: SearchParams;
};

const Feedback = ({ searchParams }: props) => {
  return (
    <div className="flex h-full flex-col gap-3 py-4">
      <Table
        searchParams={searchParams}
        title="Feedback"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Feedback;

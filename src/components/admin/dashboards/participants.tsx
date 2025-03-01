"use client";
import { TAGS, COLUMNS, DROPDOWN } from "@/data/admin/participants";
import { STATUSES } from "@/data/statuses";
import Table from "./dashboard/dashboard";
import { SearchParams } from "@/types/dashboard";

type props = {
  searchParams: SearchParams;
};

const Participants = ({ searchParams }: props) => {
  return (
    <div className="flex h-full flex-col gap-3 py-4">
      <Table
        searchParams={searchParams}
        title="Participants"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Participants;

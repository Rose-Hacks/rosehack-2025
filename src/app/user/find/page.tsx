import ProtectedPage from "@/components/ProtectedPage";
import Find from "@/components/user/find/Find";

interface Restrictions {
  participants: number[];
}

const Page: React.FC = () => {
  const restrictions: Restrictions = {
    participants: [1, 0, -1],
  };

  return (
    <ProtectedPage title="User | Find" restrictions={restrictions}>
      <Find />
    </ProtectedPage>
  );
};

export default Page;
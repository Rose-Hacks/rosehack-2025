import RELEASES from "@/data/releases";
import Fault from "@/utils/error";
import Navigation from "@/components/navigation";
import { headers } from "next/headers";
import { getSession } from "@/utils/auth";
import SignIn from "@/utils/signin";
import { Sidebar } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";

const ProtectedPage = async ({ children, restrictions, title }) => {
  const session = await getSession();
  const header = headers();
  const pathName = header.get("x-url") || "";

  if (!session) {
    return <SignIn callback={pathName} />;
  }

  if (RELEASES[pathName] > new Date()) {
    throw new Fault(
      423,
      "Locked Resource",
      "This resource has not been released",
    );
  }

  if (!session.user.roles && Object.keys(restrictions).length > 0) {
    throw new Fault(403, "Unauthorized", "You do not have any assigned roles");
  }

  const authorized = Object.entries(restrictions).some(([key, values]) =>
    Array.isArray(values)
      ? values.includes(session.user.roles[key])
      : session.user.roles[key] === values,
  );

  if (!authorized && Object.keys(restrictions).length > 0) {
    throw new Fault(403, "Unauthorized", "You do not have access this page");
  }

  const navigation = RegExp(/user\/|admin\//).test(pathName);

  return (
    <>
      <title>{title}</title>
      {navigation && <Navigation />}
      <div className="relative z-0 flex h-screen w-full items-start justify-center overflow-x-hidden bg-hackathon-page">
        <SidebarTrigger className="absolute left-0 h-10 w-10 scale-125 hover:bg-transparent" />

        <div className="h-full w-11/12 py-10 md:py-0">{children}</div>
      </div>
    </>
  );
};

export default ProtectedPage;

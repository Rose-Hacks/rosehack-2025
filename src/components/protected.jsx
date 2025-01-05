import RELEASES from "@/data/releases";
import Fault from "@/utils/error";
import Navigation from "@/components/navigation";
import { headers } from "next/headers";
import { getSession } from "@/utils/auth";
import SignIn from "@/utils/signin";
import Scene from "@/public/assets/FullWindmillScene.svg";
import Image from "next/image";

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
      <Image
        src={Scene}
        alt="Windmill Scene"
        width={250}
        height={250}
        className="fixed bottom-0 -z-50 w-full"
      />
      {navigation && <Navigation />}
      <div className="z-0 flex h-full w-screen items-start justify-center py-12 lg:py-0">
        <div className="h-full w-11/12 text-black">{children}</div>
      </div>
    </>
  );
};

export default ProtectedPage;

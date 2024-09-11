import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Button_admin() {
  const session = await getServerSession();

  return (
    <>
      {/* {session?.user.email !== "diego@gmail.com" ? null : ( */}
        <Link
          href="/user-admin"
        //   className={`${
        //     session?.user.email !== "diego@gmail.com" ? "hidden" : ""
        //   } `}
        >
          <button className={`border p-1`}>User Admin</button>
        </Link>
      {/* )} */}
    </>
  );
}

import Input from "@/components/Input";
import { TextField } from "../../../node_modules/@mui/material/index";
import Link from "../../../node_modules/next/link";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link
            href={"/"}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <p className="">Rootdsdf</p>
          </Link>
      <Input />
      <TextField size="small" variant="outlined"/>
    </>
  );
}

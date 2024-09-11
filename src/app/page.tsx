import Image from "next/image";
import LoginForm from "../components/Login_Custo";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-600">
      <LoginForm />
    </div>
  );
}

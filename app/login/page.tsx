import { useFormState } from "react-dom";

// components
import FormInput from "@/components/core/Input";
import FormButton from "@/components/core/Button";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-10">
      <span className="font-bold text-2xl text-white">로그인</span>
      <form className="flex flex-col gap-3">
        <FormInput 
          name="email"
          type="email"
          required
        />
        <FormInput 
          name="password"
          type="password"
          required
        />
        <FormButton 
          text="로그인"
        />
      </form>
    </div>
  );
}
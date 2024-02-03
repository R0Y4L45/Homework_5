import { useContext, useState } from "react"
import Context from "../../ContextWrapper";
import { useNavigate } from "react-router-dom";

function getstringLen(str) {
  return str.length;
}

export default function LogInCard() {
  const { setAuthorized, setEmail, email } = useContext(Context);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  return (
    <form className="flex flex-col items-center h-screen w-screen sm:w-[700px] sm:h-[310px] shadow-md shadow-zinc-300 justify-center rounded-[13px]">
      <h1 className="text-3xl font-bold item-center pl-6 pb-4 sm:pb-5">LOGIN FORM</h1>
      <div className="flex flex-col w-full sm:px-[140px] px-[20px]">
        <label className="sm:my-2">Email:</label>
        <input
          onChange={i => {
            setIsValid(i.target.checkValidity());
            setEmail(i.target.value.trim())
          }}
          className={`border border-zinc-300 rounded-[6px] p-1 sm:p-2.5 ${getstringLen(email) > 0 ? (isValid ? "bg-green-200" : "bg-red-200") : "border-zinc-300"}`}
          required value={email} type="email"
        />
      </div>
      <button
        onClick={() => {
          if (isValid) {
            setAuthorized(true);
            localStorage.setItem('email', email);
            localStorage.setItem('authorize', true);
            navigate('/mainpage');
          }
        }}
        className={`${isValid ?
          "bg-yellow-500 hover:bg-yellow-700" :
          "bg-[#D7D7D7] pointer-events-none"} my-8 py-[18px] px-10 sm:px-[82px] rounded-[10px] `}
        type="button"
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
}

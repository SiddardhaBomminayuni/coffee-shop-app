import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "./Icons";

export default function PageHeader({ title, action, backTo, className = "" }) {
  const navigate = useNavigate();

  const goBack = () => {
    if (backTo) navigate(backTo);
    else if (window.history.length > 1) navigate(-1);
    else navigate("/home");
  };

  return (
    <header className={`flex h-11 items-center justify-between px-6 ${className}`}>
      <button
        type="button"
        onClick={goBack}
        aria-label="Go back"
        className="flex size-11 items-center justify-center rounded-xl text-ink transition hover:bg-chip"
      >
        <ChevronLeft />
      </button>
      <h1 className="text-base font-semibold text-ink">{title}</h1>
      <div className="flex size-11 items-center justify-center">{action}</div>
    </header>
  );
}

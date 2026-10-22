import { useNavigate } from "react-router-dom";
import onboardingImage from "../assets/images/onboarding.jpg";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <main className="app-shell flex flex-col bg-ink-dark">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[536px] overflow-hidden">
        <img
          src={onboardingImage}
          alt="Cup of coffee surrounded by roasted coffee beans"
          className="absolute top-[-166px] left-1/2 aspect-[468/702] w-[124.8%] max-w-none -translate-x-1/2 object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-[160px] bg-linear-to-b from-ink-dark/0 to-ink-dark" />
      </div>

      <section className="relative z-10 mt-auto px-6 pb-[54px] text-center">
        <h1 className="animate-fade-up mx-auto max-w-[327px] text-[32px] leading-[48px] font-semibold tracking-[0.01em] text-white">
          Fall in Love with Coffee in Blissful Delight!
        </h1>
        <p className="animate-fade-up mx-auto mt-2 max-w-[327px] text-sm leading-[21px] tracking-[0.01em] text-muted [animation-delay:100ms]">
          Welcome to our cozy coffee corner, where every cup is a delightful for you.
        </p>
        <button
          type="button"
          onClick={() => navigate("/home")}
          className="btn-primary animate-fade-up mt-8 [animation-delay:200ms]"
        >
          Get Started
        </button>
      </section>
    </main>
  );
}

import { useNavigate } from "react-router-dom";
import { CallIcon, ChevronLeft, ScooterIcon, TargetIcon } from "../components/Icons";
import mapImage from "../assets/images/map.jpg";
import courierImage from "../assets/images/courier.jpg";

const TOTAL_STEPS = 4;
const COMPLETED_STEPS = 3;

export default function Delivery() {
  const navigate = useNavigate();

  return (
    <main className="app-shell bg-white">
      <div className="relative h-[505px] overflow-hidden bg-[#f2f2f2]">
        <img
          src={mapImage}
          alt="Map showing the courier route to Jl. Kpg Sutoyo"
          className="size-full object-cover object-top"
        />
        <button
          type="button"
          onClick={() => navigate("/order")}
          aria-label="Go back"
          className="absolute top-[68px] left-6 flex size-11 items-center justify-center rounded-xl bg-chip text-ink transition hover:bg-[#e3e3e3]"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          aria-label="Show my location"
          className="absolute top-[68px] right-6 flex size-11 items-center justify-center rounded-xl bg-chip text-ink transition hover:bg-[#e3e3e3]"
        >
          <TargetIcon />
        </button>
      </div>

      <section className="relative z-10 -mt-[15px] rounded-t-3xl bg-white px-6 pt-4 pb-[calc(32px_+_env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,0.04)]">
        <span className="mx-auto block h-[5px] w-[45px] rounded-full bg-line" />

        <h1 className="mt-[15px] text-center text-base leading-6 font-semibold text-ink">10 minutes left</h1>
        <p className="mt-0.5 text-center text-xs leading-[18px] text-muted">
          Delivery to <span className="font-semibold text-ink">Jl. Kpg Sutoyo</span>
        </p>

        <div
          className="mt-[25px] grid grid-cols-4 gap-2.5 px-1.5"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={TOTAL_STEPS}
          aria-valuenow={COMPLETED_STEPS}
          aria-label="Delivery progress"
        >
          {Array.from({ length: TOTAL_STEPS }, (_, index) => (
            <span
              key={index}
              className={`h-1 rounded-full ${index < COMPLETED_STEPS ? "bg-success" : "bg-line"}`}
            />
          ))}
        </div>

        <div className="mt-[13px] flex items-center gap-4 rounded-xl border border-line px-3 py-2.5">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-line text-brown">
            <ScooterIcon size={28} />
          </span>
          <div>
            <h2 className="text-sm leading-[21px] font-semibold text-ink">Delivered your order</h2>
            <p className="mt-1 text-xs leading-[18px] text-muted">
              We will deliver your goods to you in the shortest possible time.
            </p>
          </div>
        </div>

        <div className="mt-[11px] flex items-center gap-4">
          <img src={courierImage} alt="Brooklyn Simmons" className="size-14 rounded-[14px] object-cover" />
          <div className="flex-1">
            <h2 className="text-sm leading-[21px] font-semibold text-ink">Brooklyn Simmons</h2>
            <p className="mt-0.5 text-xs leading-[18px] text-muted">Personal Courier</p>
          </div>
          <button
            type="button"
            aria-label="Call courier"
            className="flex size-11 items-center justify-center rounded-xl border border-line text-ink transition hover:border-brown hover:text-brown"
          >
            <CallIcon />
          </button>
        </div>
      </section>
    </main>
  );
}

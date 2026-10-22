import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import {
  ChevronDown,
  ChevronRight,
  DiscountIcon,
  EditIcon,
  MinusIcon,
  NoteIcon,
  PlusIcon,
  WalletIcon,
} from "../components/Icons";
import { useOrder } from "../context/OrderContext";
import { formatPrice } from "../data/products";

const methods = [
  { id: "deliver", label: "Deliver" },
  { id: "pickup", label: "Pick Up" },
];

const addresses = {
  deliver: {
    heading: "Delivery Address",
    title: "Jl. Kpg Sutoyo",
    line: "Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.",
  },
  pickup: {
    heading: "Pick Up Store",
    title: "Coffee Shop Bilzen",
    line: "Jl. Kpg Sutoyo No. 12, Bilzen, Tanjungbalai.",
  },
};

export default function Order() {
  const navigate = useNavigate();
  const { order, product, subtotal, deliveryFee, deliveryFeeBeforeDiscount, total, setMethod, increase, decrease } =
    useOrder();
  const isDelivery = order.method === "deliver";
  const address = addresses[order.method];

  return (
    <main className="app-shell pb-[190px]">
      <PageHeader title="Order" className="pt-16 box-content" />

      <div className="px-6">
        <div role="tablist" aria-label="Order method" className="mt-6 grid h-[43px] grid-cols-[47.96%_47.96%] rounded-xl bg-chip p-1">
          {methods.map((method) => {
            const active = order.method === method.id;
            return (
              <button
                key={method.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setMethod(method.id)}
                className={`rounded-lg text-base transition ${
                  active ? "bg-brown font-semibold text-white" : "text-ink hover:text-brown"
                }`}
              >
                {method.label}
              </button>
            );
          })}
        </div>

        <h2 className="mt-6 text-base leading-6 font-semibold text-ink">{address.heading}</h2>
        <p className="mt-4 text-sm leading-[21px] font-semibold text-ink">{address.title}</p>
        <p className="mt-0.5 text-xs leading-[18px] text-muted">{address.line}</p>

        <div className="mt-[13.5px] flex gap-2">
          <button
            type="button"
            className="flex h-[26px] items-center gap-1 rounded-2xl border border-muted bg-white px-3 text-xs text-grey transition hover:border-brown hover:text-brown"
          >
            <EditIcon size={14} />
            Edit Address
          </button>
          <button
            type="button"
            className="flex h-[26px] items-center gap-1 rounded-2xl border border-muted bg-white px-3 text-xs text-grey transition hover:border-brown hover:text-brown"
          >
            <NoteIcon size={14} />
            Add Note
          </button>
        </div>

        <hr className="mx-4 mt-[15px] border-line" />

        <div className="mt-4 flex items-center gap-4">
          <img src={product.image} alt={product.name} className="size-[54px] rounded-lg object-cover" />
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-base leading-6 font-semibold text-ink">{product.name}</h3>
            <p className="text-xs leading-[18px] text-muted">
              {product.type}
              {order.size !== "M" && ` · Size ${order.size}`}
            </p>
          </div>
          <div className="flex items-center gap-[18px] max-[359px]:gap-3">
            <button
              type="button"
              onClick={decrease}
              disabled={order.quantity === 1}
              aria-label="Decrease quantity"
              className="flex size-6 items-center justify-center rounded-full border border-brown-light bg-white text-ink transition hover:border-brown disabled:cursor-not-allowed disabled:text-[#aaadb0] disabled:hover:border-brown-light"
            >
              <MinusIcon size={16} />
            </button>
            <span className="w-2 text-center text-sm font-semibold text-ink" aria-live="polite">
              {order.quantity}
            </span>
            <button
              type="button"
              onClick={increase}
              aria-label="Increase quantity"
              className="flex size-6 items-center justify-center rounded-full border border-brown-light bg-white text-ink transition hover:border-brown"
            >
              <PlusIcon size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 h-1 bg-brown-light" />

      <div className="px-6">
        <button
          type="button"
          className="mt-4 flex h-14 w-full items-center gap-4 rounded-2xl border border-[#eaeaea] bg-white px-4 text-left transition hover:border-brown/40"
        >
          <DiscountIcon size={20} className="text-brown" />
          <span className="flex-1 text-sm font-semibold text-ink">1 Discount is Applies</span>
          <ChevronRight size={20} className="text-ink" />
        </button>

        <h2 className="mt-6 text-base leading-6 font-semibold text-ink">Payment Summary</h2>
        <dl className="text-sm leading-[21px] text-ink">
          <div className="mt-4 flex justify-between">
            <dt>Price</dt>
            <dd className="font-semibold">{formatPrice(subtotal)}</dd>
          </div>
          <div className="mt-2 flex justify-between">
            <dt>Delivery Fee</dt>
            <dd className="flex gap-2">
              {isDelivery && <s className="font-normal">{formatPrice(deliveryFeeBeforeDiscount)}</s>}
              <span className="font-semibold">{formatPrice(deliveryFee)}</span>
            </dd>
          </div>
        </dl>
      </div>

      <footer className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-[430px] rounded-t-3xl bg-white px-6 pt-2.5 pb-[calc(46px_+_env(safe-area-inset-bottom))] shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
        <button type="button" className="flex w-full items-center gap-3 py-[0.5px] text-left">
          <WalletIcon className="text-brown" />
          <span className="flex-1">
            <span className="block text-sm leading-[21px] font-semibold text-ink">Cash/Wallet</span>
            <span className="block text-xs leading-[18px] font-semibold text-brown">{formatPrice(total)}</span>
          </span>
          <ChevronDown size={20} className="text-ink" />
        </button>
        <button type="button" onClick={() => navigate("/delivery")} className="btn-primary mt-[10px]">
          Order
        </button>
      </footer>
    </main>
  );
}

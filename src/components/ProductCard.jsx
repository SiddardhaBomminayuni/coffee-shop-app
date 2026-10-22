import { Link, useNavigate } from "react-router-dom";
import { useOrder } from "../context/OrderContext";
import { formatPrice } from "../data/products";
import { PlusIcon, StarIcon } from "./Icons";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { selectProduct } = useOrder();

  const addToOrder = () => {
    selectProduct(product.id);
    navigate("/order");
  };

  return (
    <article className="group rounded-2xl bg-white p-2 pb-3 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)]">
      <Link to={`/coffee/${product.id}`} className="block">
        <div className="relative aspect-[140/128] overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute top-0 right-0 flex h-7 items-center gap-1 rounded-bl-3xl bg-[#111]/30 pr-3 pl-[13px] text-[8px] font-semibold text-white backdrop-blur-md">
            <StarIcon size={12} className="text-star" />
            {product.rating}
          </span>
        </div>
        <h3 className="mt-2 text-base font-semibold text-ink">{product.name}</h3>
        <p className="mt-[3px] text-xs text-muted">{product.type}</p>
      </Link>

      <div className="mt-[7px] flex items-center justify-between">
        <span className="text-lg font-semibold text-ink-dark">{formatPrice(product.price)}</span>
        <button
          type="button"
          onClick={addToOrder}
          aria-label={`Add ${product.name} to order`}
          className="flex size-8 items-center justify-center rounded-lg bg-brown text-white transition hover:bg-[#b56d40] active:scale-95"
        >
          <PlusIcon size={16} />
        </button>
      </div>
    </article>
  );
}

import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { BeanIcon, HeartIcon, MilkIcon, ScooterIcon, StarIcon } from "../components/Icons";
import { useOrder } from "../context/OrderContext";
import { formatPrice, getProduct, sizes } from "../data/products";

const features = [
  { label: "Fast delivery", Icon: ScooterIcon },
  { label: "Quality beans", Icon: BeanIcon },
  { label: "Fresh milk", Icon: MilkIcon },
];

const SHORT_DESCRIPTION_LENGTH = 116;

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favourites, toggleFavourite, selectProduct } = useOrder();
  const [size, setSize] = useState("M");
  const [expanded, setExpanded] = useState(false);

  const product = getProduct(id);
  if (!product) return <Navigate to="/home" replace />;

  const isFavourite = favourites.includes(product.id);
  const description = expanded
    ? product.description
    : `${product.description.slice(0, SHORT_DESCRIPTION_LENGTH).trimEnd()}..`;

  const buyNow = () => {
    selectProduct(product.id, size);
    navigate("/order");
  };

  return (
    <main className="app-shell pb-[140px]">
      <PageHeader
        title="Detail"
        backTo="/home"
        className="pt-[68px] box-content"
        action={
          <button
            type="button"
            onClick={() => toggleFavourite(product.id)}
            aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
            aria-pressed={isFavourite}
            className={`flex size-11 items-center justify-center rounded-xl transition hover:bg-chip ${
              isFavourite ? "text-brown" : "text-ink"
            }`}
          >
            <HeartIcon filled={isFavourite} />
          </button>
        }
      />

      <div className="animate-fade-up px-6">
        <img
          src={product.cover}
          alt={product.name}
          className="mt-6 aspect-[327/202] w-full rounded-2xl object-cover"
        />

        <div className="mt-[17px] flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl leading-[30px] font-semibold text-ink max-[359px]:text-lg">{product.name}</h2>
            <p className="mt-px text-xs leading-[18px] text-muted">{product.serve}</p>
            <p className="mt-3 flex items-center gap-1">
              <StarIcon size={20} className="text-star" />
              <span className="text-base leading-6 font-semibold text-grey-hover">{product.rating}</span>
              <span className="text-xs text-[#808080]">({product.reviews})</span>
            </p>
          </div>
          <ul className="mt-[19px] flex shrink-0 gap-3 max-[359px]:gap-2">
            {features.map(({ label, Icon }) => (
              <li
                key={label}
                title={label}
                className="flex size-11 items-center justify-center rounded-xl bg-[#ededed]/35 text-brown max-[359px]:size-10"
              >
                <Icon size={18} />
                <span className="sr-only">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <hr className="mx-4 mt-[13px] border-line" />

        <h3 className="mt-4 text-base leading-6 font-semibold text-ink">Description</h3>
        <p className="mt-2 text-sm leading-[21px] tracking-[-0.005em] text-muted">
          {description}{" "}
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="font-semibold text-brown hover:underline"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </p>

        <h3 className="mt-6 text-base leading-6 font-semibold text-ink">Size</h3>
        <div role="radiogroup" aria-label="Cup size" className="mt-4 flex gap-4">
          {sizes.map((item) => {
            const active = item === size;
            return (
              <button
                key={item}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setSize(item)}
                className={`h-10 w-24 rounded-xl border max-[359px]:flex-1 text-sm transition ${
                  active
                    ? "border-brown bg-brown-light text-brown"
                    : "border-line bg-white text-ink hover:border-brown/50"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <footer className="fixed inset-x-0 bottom-0 z-20 mx-auto flex w-full max-w-[430px] items-center gap-[34px] rounded-t-2xl bg-white px-6 pt-4 pb-[calc(46px_+_env(safe-area-inset-bottom))]">
        <div className="min-w-[76px]">
          <p className="text-sm leading-[21px] text-muted-dark">Price</p>
          <p className="mt-0.5 text-lg leading-[27px] font-semibold text-brown">{formatPrice(product.price)}</p>
        </div>
        <button type="button" onClick={buyNow} className="btn-primary flex-1">
          Buy Now
        </button>
      </footer>
    </main>
  );
}

import bannerImage from "../assets/images/promo-banner.png";

// Sizes are based on the 327px wide banner from the design and scale with the
// banner width (cqw), so the artwork and the headline stay aligned on any phone.
export default function PromoBanner() {
  return (
    <div className="@container">
      <div className="relative aspect-[327/140] overflow-hidden rounded-[4.9cqw] bg-[#947257]">
        <img src={bannerImage} alt="" className="absolute inset-0 size-full" />

        <span className="absolute top-[9.29%] left-[7.34%] flex h-[18.57%] w-[18.35%] items-center justify-center rounded-[2.45cqw] bg-promo text-[4.28cqw] font-semibold text-white">
          Promo
        </span>

        {/* dark highlight bars sit behind the headline, like in the design */}
        <span className="absolute top-[43.93%] left-[7.34%] h-[19.29%] w-[61.01%] bg-linear-to-r from-grey to-[#111]" />
        <span className="absolute top-[72.14%] left-[7.34%] h-[16.07%] w-[45.57%] bg-linear-to-r from-grey to-[#111]" />
        <h2 className="absolute top-[33.57%] left-[7.65%] text-[9.786cqw] leading-[12.08cqw] font-semibold text-white">
          Buy one get
          <br />
          one FREE
        </h2>
      </div>
    </div>
  );
}

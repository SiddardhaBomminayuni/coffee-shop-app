import { useMemo, useState } from "react";
import BottomNav from "../components/BottomNav";
import CategoryTabs from "../components/CategoryTabs";
import ProductCard from "../components/ProductCard";
import PromoBanner from "../components/PromoBanner";
import { ChevronDown, FilterIcon, SearchIcon } from "../components/Icons";
import { categories, products } from "../data/products";

const locations = ["Bilzen, Tanjungbalai", "Kpg. Sutoyo, Bilzen", "Tanjungbalai City"];

export default function Home() {
  const [category, setCategory] = useState(categories[0]);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState(locations[0]);

  const visibleProducts = useMemo(() => {
    const search = query.trim().toLowerCase();
    return products.filter((item) => {
      const inCategory = category === categories[0] || item.category === category;
      const matches = !search || `${item.name} ${item.type}`.toLowerCase().includes(search);
      return inCategory && matches;
    });
  }, [category, query]);

  return (
    <main className="app-shell pb-[130px]">
      <div className="absolute inset-x-0 top-0 h-[280px] bg-linear-[50deg] from-grey to-[#111]" />

      <header className="relative px-6 pt-[66px]">
        <p className="text-xs leading-[18px] text-muted">Location</p>
        <label className="relative mt-[6px] inline-flex items-center gap-1 text-sm leading-[21px] font-semibold text-[#d8d8d8]">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="cursor-pointer appearance-none bg-transparent pr-5 outline-none"
            aria-label="Select location"
          >
            {locations.map((item) => (
              <option key={item} value={item} className="text-ink">
                {item}
              </option>
            ))}
          </select>
          <ChevronDown size={14} className="pointer-events-none absolute right-0" />
        </label>

        <div className="mt-[22.5px] flex gap-4">
          <label className="flex h-[52px] flex-1 items-center gap-2 rounded-xl bg-grey-hover px-[16.5px] text-white">
            <SearchIcon size={22} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search coffee"
              aria-label="Search coffee"
              className="w-full bg-transparent text-sm text-white placeholder:text-[#a2a2a2]"
            />
          </label>
          <button
            type="button"
            aria-label="Filter"
            className="flex size-[52px] shrink-0 items-center justify-center rounded-xl bg-brown text-white transition hover:bg-[#b56d40]"
          >
            <FilterIcon size={20} />
          </button>
        </div>
      </header>

      <section className="relative mt-[25.5px] px-6">
        <PromoBanner />
      </section>

      <section className="relative mt-[22px]">
        <CategoryTabs categories={categories} active={category} onChange={setCategory} />
      </section>

      <section className="relative mt-[17px] px-6">
        {visibleProducts.length ? (
          <div className="grid grid-cols-2 gap-x-[15px] gap-y-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-muted">No coffee found. Try another search.</p>
        )}
      </section>

      <BottomNav />
    </main>
  );
}

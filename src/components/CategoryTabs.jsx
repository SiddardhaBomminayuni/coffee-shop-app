export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="no-scrollbar mx-6 overflow-x-auto">
      <div role="tablist" className="flex w-max gap-4">
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(category)}
              className={`h-[29px] rounded-md px-2 text-sm transition ${
                isActive ? "bg-brown font-semibold text-white" : "bg-[#ededed]/35 text-grey hover:bg-chip"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

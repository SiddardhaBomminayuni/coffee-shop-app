import { useId } from "react";

// Line icons drawn on a 24x24 grid (1.5px stroke) to match the design's icon set.
function Svg({ size = 24, children, className = "", fill = "none", ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

export const SearchIcon = (props) => (
  <Svg {...props}>
    <circle cx="11.2" cy="11.2" r="8.2" />
    <path d="m17.3 17.4 3.7 3.6" />
  </Svg>
);

export const FilterIcon = (props) => (
  <Svg {...props}>
    <path d="M10.3 16.6H4" />
    <path d="M13 6.9h6.3" />
    <circle cx="6.7" cy="6.9" r="2.6" />
    <circle cx="16.7" cy="16.6" r="2.6" />
  </Svg>
);

export const ChevronDown = (props) => (
  <Svg {...props}>
    <path d="m19 8.5-7 7-7-7" />
  </Svg>
);

export const ChevronLeft = (props) => (
  <Svg {...props}>
    <path d="m15.5 19-7-7 7-7" />
  </Svg>
);

export const ChevronRight = (props) => (
  <Svg {...props}>
    <path d="m8.5 5 7 7-7 7" />
  </Svg>
);

export const PlusIcon = (props) => (
  <Svg {...props}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const MinusIcon = (props) => (
  <Svg {...props}>
    <path d="M5 12h14" />
  </Svg>
);

export const HomeIcon = ({ active, ...props }) =>
  active ? (
    <Svg {...props} stroke="none" fill="currentColor">
      <path d="M9.14 20.77v-3.06c0-.78.64-1.41 1.42-1.41h2.87c.38 0 .74.15 1 .41.27.27.42.63.42 1v3.06c0 .32.12.63.35.86.23.23.54.36.86.36h1.96a3.46 3.46 0 0 0 2.44-1A3.4 3.4 0 0 0 21.48 18.57V9.86c0-.73-.33-1.43-.9-1.9l-6.65-5.28a3.08 3.08 0 0 0-3.92.07L3.51 7.96c-.6.45-.97 1.15-.99 1.9v8.7c0 1.9 1.55 3.44 3.46 3.44h1.92c.68 0 1.23-.54 1.24-1.22Z" />
    </Svg>
  ) : (
    <Svg {...props}>
      <path d="M9.16 20.78v-3.07c0-.78.63-1.42 1.42-1.42h2.86c.37 0 .73.15 1 .42.27.26.42.62.42 1v3.07c0 .32.12.64.35.87.23.23.54.36.87.36h1.95a3.45 3.45 0 0 0 3.47-3.45V9.84c0-.74-.33-1.44-.9-1.91L14.96 2.66a3.1 3.1 0 0 0-3.93.07L4.48 7.93c-.6.45-.96 1.15-.98 1.9v8.73A3.45 3.45 0 0 0 6.96 22h1.92c.68 0 1.23-.54 1.24-1.22Z" />
    </Svg>
  );

export const HeartIcon = ({ filled, ...props }) => (
  <Svg {...props} fill={filled ? "currentColor" : "none"}>
    <path d="M2.87 11.6C1.8 8.25 3.05 4.43 6.56 3.3a5.95 5.95 0 0 1 5.44.9c1.45-1.12 3.56-1.5 5.4-.9 3.52 1.13 4.78 4.95 3.71 8.3C19.44 16.9 12 21 12 21s-7.38-4.03-9.13-9.4Z" />
    {!filled && <path d="M16 6.7c1.07.35 1.82 1.3 1.92 2.42" />}
  </Svg>
);

export const BagIcon = (props) => (
  <Svg {...props}>
    <path d="M16.51 21.5H8.17c-3.07 0-5.42-1.1-4.75-5.57l.78-6.06C4.61 7.64 6.04 6.78 7.3 6.78h10.12c1.27 0 2.62.92 3.1 3.09l.78 6.06c.57 3.96-1.72 5.57-4.79 5.57Z" />
    <path d="M16.65 6.56a4.32 4.32 0 0 0-8.64 0" />
    <path d="M15.3 11.1h-.05M9.47 11.1h-.05" />
  </Svg>
);

export const BellIcon = (props) => (
  <Svg {...props}>
    <path d="M12 17.85c5.64 0 8.25-.72 8.5-3.63 0-2.9-1.82-2.72-1.82-6.28C18.68 5.16 16.04 2 12 2S5.32 5.16 5.32 7.94c0 3.56-1.82 3.37-1.82 6.28.25 2.92 2.86 3.63 8.5 3.63Z" />
    <path d="M14.39 20.86c-1.37 1.51-3.5 1.53-4.88 0" />
  </Svg>
);

export const StarIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path
      fill="currentColor"
      d="m13.1 2.82 2.32 4.64c.16.33.48.56.84.61l5.18.75c.9.13 1.27 1.25.62 1.88l-3.75 3.62c-.26.26-.38.63-.32.99l.88 5.1c.16.9-.78 1.58-1.59 1.16l-4.63-2.4a1.12 1.12 0 0 0-1.04 0l-4.63 2.4c-.81.42-1.75-.27-1.59-1.16l.88-5.1a1.1 1.1 0 0 0-.32-.99L2.2 10.7c-.65-.63-.29-1.75.62-1.88l5.18-.75c.36-.05.68-.28.84-.61l2.32-4.64a1.13 1.13 0 0 1 2.02 0Z"
    />
  </svg>
);

export const EditIcon = (props) => (
  <Svg {...props}>
    <path d="M11.49 2.79H7.75c-3.07 0-5 2.17-5 5.25v8.3c0 3.07 1.92 5.25 5 5.25h8.81c3.08 0 5-2.18 5-5.25v-4.02" />
    <path d="m8.83 10.92 7.46-7.46a2.38 2.38 0 0 1 3.37 0l1.21 1.22a2.38 2.38 0 0 1 0 3.37l-7.49 7.5c-.4.4-.95.63-1.53.63H8.11l.09-3.78c.01-.56.24-1.08.63-1.48Z" />
    <path d="m15.16 4.61 4.56 4.56" />
  </Svg>
);

export const NoteIcon = (props) => (
  <Svg {...props}>
    <path d="M15.71 16.22H8.49M15.71 12.04H8.49M11.25 7.86H8.49" />
    <path d="M15.91 2.75 8.22 2.75c-2.76.02-4.47 1.84-4.47 4.61v9.2c0 2.79 1.73 4.6 4.51 4.6l7.69-.01c2.76-.02 4.48-1.84 4.48-4.6v-9.2c0-2.79-1.73-4.6-4.51-4.6Z" />
  </Svg>
);

export const DiscountIcon = (props) => (
  <Svg {...props}>
    <path d="M4.79 7.06c0-1.25 1.02-2.27 2.27-2.27h1.03c.6 0 1.18-.24 1.6-.66l.72-.72a2.27 2.27 0 0 1 3.21-.01l.73.73c.42.42 1 .66 1.6.66h1.03a2.27 2.27 0 0 1 2.27 2.27v1.03c0 .6.24 1.18.66 1.6l.72.72a2.27 2.27 0 0 1 .01 3.21l-.73.73c-.42.42-.66 1-.66 1.6v1.03a2.27 2.27 0 0 1-2.27 2.27h-1.03c-.6 0-1.18.24-1.6.66l-.72.72a2.27 2.27 0 0 1-3.21.01l-.73-.73a2.27 2.27 0 0 0-1.6-.66H7.06a2.27 2.27 0 0 1-2.27-2.27v-1.03c0-.6-.24-1.18-.66-1.6l-.72-.72a2.27 2.27 0 0 1-.01-3.21l.73-.73c.42-.42.66-1 .66-1.6V7.06Z" />
    <path d="m9.43 14.57 5.14-5.14M14.5 14.5h0M9.5 9.5h0" strokeWidth="2" />
  </Svg>
);

export const WalletIcon = (props) => (
  <Svg {...props}>
    <path d="M21.64 14.4h-4.05a2.69 2.69 0 0 1 0-5.39h4.05" />
    <path d="M18.05 11.64h-.31" />
    <path d="M7.75 3.5h8.65a5.24 5.24 0 0 1 5.24 5.24v7.18a5.24 5.24 0 0 1-5.24 5.24H7.75a5.24 5.24 0 0 1-5.25-5.24V8.74A5.24 5.24 0 0 1 7.75 3.5Z" />
    <path d="M7.04 8.04h5.4" />
  </Svg>
);

export const TargetIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="7.5" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22" />
  </Svg>
);

export const CallIcon = (props) => (
  <Svg {...props}>
    <path d="M14.35 2.5a8.2 8.2 0 0 1 7.24 7.23M14.35 6.04a4.64 4.64 0 0 1 3.67 3.67" />
    <path d="M11.03 12.97c3.99 3.99 4.9-.62 7.44 1.92 2.45 2.45 3.86 2.94.75 6.04-.39.31-2.85 4.06-11.5-4.59-8.66-8.66-4.92-11.12-4.6-11.51 3.11-3.11 3.59-1.69 6.04.76 2.54 2.54-2.06 3.45 1.93 7.38Z" />
  </Svg>
);

export const LocationPin = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path
      fill="currentColor"
      d="M12 2a8 8 0 0 0-8 8c0 4.47 4.88 9.6 6.77 11.42a1.75 1.75 0 0 0 2.46 0C15.12 19.6 20 14.47 20 10a8 8 0 0 0-8-8Zm0 10.75A2.75 2.75 0 1 1 12 7.25a2.75 2.75 0 0 1 0 5.5Z"
    />
  </svg>
);

// filled brand icons used on the detail / delivery screens
export const ScooterIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className={className}>
    <g fill="currentColor">
      <circle cx="8.6" cy="2.1" r="1.75" />
      <path d="M7.3 4.6c.5-.4 1.3-.5 1.9-.1l1 .7c.4.3.6.7.6 1.1v3.4h2.6a.9.9 0 0 1 0 1.8H9.8a1 1 0 0 1-1-1V8L7.4 10.2c-.3.4-.9.5-1.3.2a1 1 0 0 1-.2-1.3l1.4-4.5Z" />
      <path d="M5.2 7.3 3.6 7.6a.8.8 0 0 0 .3 1.6l1.9-.4-.6-1.5Z" />
      <rect x="12.3" y="4.3" width="6.3" height="4.9" rx=".7" />
      <path d="M2.2 12.2c0-.6.5-1.1 1.1-1.1h1.4V8.9h1.9v2.2h5.3c.5 0 .8-.2 1-.6l.6-1.1h2.1l.6 2c2.2.2 3.7 1.7 3.9 3.8H2.2v-3Z" />
      <path
        fillRule="evenodd"
        d="M4.9 14.2a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2Zm0 1.3a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6ZM15.3 14.2a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2Zm0 1.3a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Z"
      />
    </g>
  </svg>
);

export const BeanIcon = ({ size = 20, className = "" }) => {
  const maskId = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className={className}>
      <mask id={maskId}>
        <rect width="20" height="20" fill="#fff" />
        <g stroke="#000" strokeWidth="1" fill="none" strokeLinecap="round">
          <path d="M4.2 3.6c.9 2.4 2.6 3.8 4.2 4.6 1.6.8 2.2 2 2.4 2.8" />
          <path d="M14.4 6.7c-1.4 1.8-.9 3.6-.2 5.3.8 1.8.5 4-1.2 5.8" />
        </g>
      </mask>
      <g fill="currentColor" mask={`url(#${maskId})`}>
        <path d="M10.6 2.7c1.9 1.6 2 4.7.5 7.4-.9 1.6-2.3 2.6-3.9 3.1C4.6 14 2.3 12.6 1.7 9.6 1.1 6.6 2.6 3.1 5.3 1.9c2-.9 3.9-.5 5.3.8Z" />
        <path d="M18.5 12.4c-.2 3.6-2.6 6.3-5.5 6-2.9-.2-5-3.4-4.8-7 .2-3.6 2.6-6.3 5.5-6 2.9.2 5 3.4 4.8 7Z" />
      </g>
    </svg>
  );
};

export const MilkIcon = ({ size = 20, className = "" }) => {
  const maskId = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className={className}>
      <mask id={maskId}>
        <rect width="20" height="20" fill="#fff" />
        <path d="M4 13.2c2.8-.1 3.9-2.3 5.3-2.9 1.2-.5 2-.5 3-1.2" stroke="#000" strokeWidth=".8" fill="none" />
      </mask>
      <g fill="currentColor" mask={`url(#${maskId})`} transform="translate(10 0) scale(1.15 1) translate(-10 0)">
        <rect x="6" y="0.7" width="8" height="1.5" rx=".3" />
        <path d="M6.6 3.2h7l-1.3 2.3H5.2l1.4-2.3Z" />
        <path d="M14.3 3.6l1.9 1.9h-3l1.1-1.9Z" />
        <path d="M4.6 6.3h7.6v12.9H5.4a.8.8 0 0 1-.8-.8V6.3Z" />
        <path d="M13 6.3h3.2v12.1a.8.8 0 0 1-.8.8H13V6.3Z" />
      </g>
    </svg>
  );
};

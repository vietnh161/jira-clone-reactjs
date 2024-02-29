import { useEffect } from "react";

export default function useOnOutsideClick(
  refTarget: React.RefObject<HTMLElement>,
  onOutsideClick: () => void,
  refParent?: React.RefObject<HTMLElement>
) {
  const handleClickOutside = (event: Event) => {
    if (
      refTarget.current &&
      !refTarget.current.contains(event.target as Node)
    ) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    const listeningEl = refParent?.current || document;
    listeningEl.addEventListener("click", handleClickOutside, true);
    return () => {
        listeningEl.removeEventListener("click", handleClickOutside, true);
    };
  });
}

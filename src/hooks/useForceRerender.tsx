import { useEffect, useState } from "react";

export const useForceRerender = () => {
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    if (!rerender) setRerender(true);
  }, []);
};

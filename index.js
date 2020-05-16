import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

function useLoggedState(atom) {
  const currentValue = useRecoilValue(atom);
  const previousValue = usePrevious(currentValue);

  useEffect(() => {
    console.log(
      "%c" + atom.key + " updating",
      "color: green; font-weight: bold"
    );
    console.log("Old value: ", previousValue);
    console.log("New value: ", currentValue);
    console.log("%c--------------------", "color: #555;");
  }, [currentValue]);
}

function useRecoilLogger(...atoms) {
  atoms.forEach((atom) => {
    useLoggedState(atom);
  });
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function RecoilLogger({ atoms = [], enabled = false }) {
  if (enabled) {
    useRecoilLogger(...atoms);
  }
  return null;
}

export default RecoilLogger;

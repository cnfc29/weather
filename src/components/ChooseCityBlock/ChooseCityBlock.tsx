import { useState } from "react";
import Button from "../../ui/Button/Button";
import styles from "./ChooseCityBlock.module.css";

interface ChooseCityBlockProps {
  onChange: (city: string) => void;
}
export default function ChooseCityBlock({
  onChange,
}: ChooseCityBlockProps): JSX.Element {
  const [city, setCity] = useState<string>("Moscow");

  const changeHandler = (city: string) => {
    setCity(city);
    onChange(city);
  };

  return (
    <div className={styles.container}>
      <Button
        onClick={() => changeHandler("Moscow")}
        active={city === "Moscow"}
      >
        Moscow
      </Button>
      <Button
        onClick={() => changeHandler("Saint Petersburg")}
        active={city === "Saint Petersburg"}
      >
        Saint Petersburg
      </Button>
      <Button
        onClick={() => changeHandler("Novosibirsk")}
        active={city === "Novosibirsk"}
      >
        Novosibirsk
      </Button>
      <Button onClick={() => setCity("Minsk")} active={city === "Minsk"}>
        Minsk
      </Button>
      <Button onClick={() => setCity("Dubai")} active={city === "Dubai"}>
        Dubai
      </Button>
      <Button onClick={() => setCity("Tbilisi")} active={city === "Tbilisi"}>
        Tbilisi
      </Button>
    </div>
  );
}

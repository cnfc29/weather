import Button from "../../ui/Button/Button";
import styles from "./ChooseCityBlock.module.css";

interface ChooseCityBlockProps {
  city: string;
  setCity: (city: string) => void;
}
export default function ChooseCityBlock({
  city,
  setCity,
}: ChooseCityBlockProps): JSX.Element {
  return (
    <div className={styles.container}>
      <Button onClick={() => setCity("Moscow")} active={city === "Moscow"}>
        Moscow
      </Button>
      <Button
        onClick={() => setCity("Saint Petersburg")}
        active={city === "Saint Petersburg"}
      >
        Saint Petersburg
      </Button>
      <Button
        onClick={() => setCity("Novosibirsk")}
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
    </div>
  );
}

import { useState } from "react";
import { Button } from "../../ui/Button"; // Использовавние Public API
import styles from "./ChooseCityBlock.module.css";

interface ChooseCityBlockProps {
    // setCity: (city: string) => void; Зачем передавать setCity? Сделай чтобы логика была внутри, а в компонент можно передавать коллбэк
    // Внизу пример, использование компонента не правил, поправь сам.
    // Логику работы компонента как здесь нужно держать внутри компонента и передавать просто "ручки" для удобной работы с ним снаружи компонента
    defaultCity: string;
    onChange?: (city: string) => void;
}
// Пробел
export default function ChooseCityBlock({
    defaultCity,
    onChange,
}: ChooseCityBlockProps): JSX.Element {
    const [city, setCity] = useState<string>(defaultCity);

    const handleCityChange = (city: string): void => {
        setCity(city);
        if (onChange) {
            onChange(city);
        }
    };

    return (
        <div className={styles.container}>
            <Button
                // Для всех строк не помешает мапа
                onClick={() => handleCityChange("Moscow")}
                active={city === "Moscow"}
            >
                Moscow
            </Button>
            <Button
                onClick={() => handleCityChange("Saint Petersburg")}
                active={city === "Saint Petersburg"}
            >
                Saint Petersburg
            </Button>
            <Button
                onClick={() => handleCityChange("Novosibirsk")}
                active={city === "Novosibirsk"}
            >
                Novosibirsk
            </Button>
            <Button
                onClick={() => handleCityChange("Minsk")}
                active={city === "Minsk"}
            >
                Minsk
            </Button>
            <Button
                onClick={() => handleCityChange("Dubai")}
                active={city === "Dubai"}
            >
                Dubai
            </Button>
            <Button
                onClick={() => handleCityChange("Tbilisi")}
                active={city === "Tbilisi"}
            >
                Tbilisi
            </Button>
        </div>
    );
}

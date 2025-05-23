import { characterMap, ConvertCharacterMapType } from "./characterMap";

export function applyY2KEffect(
    text: string,
    options?: {
        map?: ConvertCharacterMapType;
        keepOriginal?: boolean;
        changeChance?: number;
    },
): string {
    const { map = characterMap, keepOriginal = true, changeChance = 0.8 } = options || {};

    return Array.from(text)
        .map(char => {
            const mapEntry = map[char];
            if (!mapEntry) {
                return keepOriginal ? char : "";
            }

            if (Math.random() < changeChance) {
                if (mapEntry.length === 0) {
                    return keepOriginal ? char : "";
                }

                const randomIndex = Math.floor(Math.random() * mapEntry.length);
                return mapEntry[randomIndex];
            } else {
                return char;
            }
        })
        .join("");
}

import { render, screen } from "@testing-library/react";
import CardCharacter from "./CardCharacter";
import { vi } from "vitest";

// Mock de react-i18next para evitar errores con initReactI18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => {
      const translations = {
        "card_characters.name": "Nombre:",
        "card_characters.movie": "Película/Serie:",
        "card_characters.gender": "Género:",
        "card_characters.species": "Especie:",
        "card_characters.link": "Link API:",
        "card_characters.showMore": "Ver más",
        "card_characters.unknownGender": "No descubierto",
        "card_characters.unknownSpecies": "Sin Información",
      };
      return translations[key] || key;
    },
  }),
  initReactI18next: {
    type: "3rdParty",
    init: () => {},
  },
}));

// 📌 Datos de prueba
const mockCharacter = {
  name: "Rick Sanchez",
  image: "rick.png",
  movie: "Rick y Morty",
  gender: "Male",
  species: "Human",
  link: "https://rickpedia.com",
};

describe("CharacterCard Component", () => {
  test("asegurar que el componente renderiza correctamente", () => {
    render(<CardCharacter {...mockCharacter} />);
    screen.debug(); // 🔍 Verificar en la consola el HTML renderizado
  });

  test("muestra el nombre del personaje", () => {
    render(<CardCharacter {...mockCharacter} />);
    expect(screen.getByText(/Nombre:\s*Rick Sanchez/i)).toBeInTheDocument();
  });

  test("muestra la imagen con el src y alt correctos", () => {
    render(<CardCharacter {...mockCharacter} />);
    const image = screen.getByAltText("Rick Sanchez");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "rick.png");
  });

  test("muestra el enlace 'Ver más' con el href correcto", () => {
    render(<CardCharacter {...mockCharacter} />);
    const link = screen.getByText("Ver más");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://rickpedia.com");
  });

  test("muestra la película si se proporciona", () => {
    render(<CardCharacter {...mockCharacter} />);

    // Verificar que el texto de la película está presente dentro de un <p>
    const movieElement = screen
      .getByText("Película/Serie:", { exact: false })
      .closest("p");
    expect(movieElement).toHaveTextContent("Rick y Morty");
  });
});

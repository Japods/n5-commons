import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { vi } from "vitest";

// Mock correcto de react-i18next
vi.mock("react-i18next", () => {
  const actual = vi.importActual("react-i18next"); // Importamos la versión real de react-i18next
  return {
    ...actual,
    useTranslation: () => ({
      t: (key) => {
        const translations = {
          "header.title": "N5 Test Frontend / Jose Daniel Vivas Rosales",
          "header.description":
            "Escoge una Película y explora tus personajes Favoritos!!",
          "header.spanish": "Español",
          "header.english": "Inglés",
        };
        return translations[key] || key;
      },
      i18n: {
        changeLanguage: vi.fn(), // Mockeamos el método changeLanguage
      },
    }),
    initReactI18next: {
      type: "3rdParty",
      init: () => {}, // Evita el error de `initReactI18next`
    },
  };
});

describe("Header Component", () => {
  test("muestra el título y la descripción", () => {
    render(
      <Header
        onSelect={() => {}}
        selectedMovie="rm"
        onSelectLanguage={() => {}}
        selectedLanguage="es"
      />
    );

    expect(
      screen.getByText("N5 Test Frontend / Jose Daniel Vivas Rosales")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Escoge una Película y explora tus personajes Favoritos!!"
      )
    ).toBeInTheDocument();
  });

  test("cambia la película al hacer clic en los botones", () => {
    const onSelectMock = vi.fn();
    render(
      <Header
        onSelect={onSelectMock}
        selectedMovie="rm"
        onSelectLanguage={() => {}}
        selectedLanguage="es"
      />
    );

    const btnHarryPotter = screen.getByText("Harry Potter");
    fireEvent.click(btnHarryPotter);

    expect(onSelectMock).toHaveBeenCalledWith("hp");
  });

  test("cambia el idioma al hacer clic en los botones de idioma", () => {
    const onSelectLanguageMock = vi.fn();
    const { rerender } = render(
      <Header
        onSelect={() => {}}
        selectedMovie="rm"
        onSelectLanguage={onSelectLanguageMock}
        selectedLanguage="es"
      />
    );

    const btnEnglish = screen.getByText("Inglés");
    fireEvent.click(btnEnglish);

    expect(onSelectLanguageMock).toHaveBeenCalledWith("en");

    // Simular el cambio de idioma
    rerender(
      <Header
        onSelect={() => {}}
        selectedMovie="rm"
        onSelectLanguage={onSelectLanguageMock}
        selectedLanguage="en"
      />
    );

    // Verificar que ahora el botón de español se puede seleccionar
    const btnSpanish = screen.getByText("Español");
    fireEvent.click(btnSpanish);
    expect(onSelectLanguageMock).toHaveBeenCalledWith("es");
  });
});

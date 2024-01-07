import { render, screen } from "@testing-library/react";
import Slider from "./index";
import { api, DataProvider } from "../../contexts/DataContext";

const data = {
  focus: [
    {
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-02-28T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Gaming Day",
      description: "Evenement mondial autour du gaming",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Farming Day",
      description: "Evenement mondial autour de la ferme",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
  ],
};
describe("Quand le slider s'affiche", () => {
  it("Scénario 3 :La carte de l'événement de plus récent s'affiche", async () => {
    window.console.error = jest.fn();
    api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Slider />
      </DataProvider>
    );
    await screen.findByText("World Farming Day");
    await screen.findByText("janvier");
    await screen.findByText("Evenement mondial autour de la ferme");
  });
});

describe("Quand le slider s'affiche", () => {
  it("Scénario 3 : puis celle de l'événement un peu moins récent", async () => {
    window.console.error = jest.fn();
    api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Slider />
      </DataProvider>
    );
    await screen.findByText("World economic forum");
    await screen.findByText("février");
    await screen.findByText(
      "Oeuvre à la coopération entre le secteur public et le privé."
    );
  })
})
describe("Quand le slider s'affiche", () => {
  it("Scenari 2 et 3 : puis le troisième événement", async () => {
    window.console.error = jest.fn();
    api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Slider />
      </DataProvider>
    );
    await screen.findByText("World Gaming Day");
    await screen.findByText("mars");
    await screen.findByText(
      "Evenement mondial autour du gaming"
    );
    })
})


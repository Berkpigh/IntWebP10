import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import EventList from "../../containers/Events";
import PeopleCard from "../../components/PeopleCard";
import EventCard from '../../components/EventCard'

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<EventList />);
    await screen.findAllByText('Catégories')
  })
  it("a list a people is displayed", async () => {
    render(
      <PeopleCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        name="test name"
        position="test position"
      />
    );
    const nameElement = screen.getByText(/test name/);
    expect(nameElement).toBeInTheDocument();
  })
  it("a footer is displayed", () => {
    render(
      <EventCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        title="test event"
        label="test label"
        date={new Date("2022-04-01")}
        small
      />
    );
    const cardElement = screen.getByTestId("card-testid");
    expect(cardElement.className.includes("EventCard--small")).toEqual(true);
    });
  it("an event card, with the last event, is displayed", async () => {
    render(
      <EventCard 
        date = {new Date('2022-08-29T20:28:45.744Z')}
      />
    );
    await screen.findByText('août');
/*     const dateElement = screen.getByTestId('card-testid')
    expect(dateElement).toBe('2022-08-29T20:28:45.744Z') */
  })
});

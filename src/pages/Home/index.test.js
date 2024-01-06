import { fireEvent, render, screen } from '@testing-library/react'
import Home from './index'
import EventList from '../../containers/Events'
import PeopleCard from '../../components/PeopleCard'
import EventCard from '../../components/EventCard'

describe('When Form is created', () => {
  it('a list of fields card is displayed', async () => {
    render(<Home />)
    await screen.findByText('Email')
    await screen.findByText('Nom')
    await screen.findByText('Prénom')
    await screen.findByText('Personel / Entreprise')
  })
  
  describe("Scénario 5 : le formulaire de contact rempli, j'appuie sur le bouton 'Envoyer'", () => {
    it("Un message de confirmation s'affiche", async () => {
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
  })
})

describe('When a page is created', () => {
  it('a list of events is displayed', async () => {
    render(<EventList />)
    await screen.findAllByText('Catégories')
  })
  it('a list a people is displayed', async () => {
    render(
      <PeopleCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        name="test name"
        position="test position"
      />
    )
    const nameElement = screen.getByText(/test name/)
    expect(nameElement).toBeInTheDocument()
  })
  it('a footer is displayed', () => {
    render(
      <EventCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        title="test event"
        label="test label"
        date={new Date('2022-04-01')}
        small
      />
    )
    const cardElement = screen.getByTestId('card-testid')
    expect(cardElement.className.includes('EventCard--small')).toEqual(true)
  })
})
describe("Scénario 6 : Quand la page s'affiche, en observant le footer", () => {
  it("Une carte avec le dernier événement et le mois s'afficher à gauche", async () => {
    render(<EventCard date={new Date('2022-08-29T20:28:45.744Z')} />)
    await screen.findByText('août')
    /*     const dateElement = screen.getByTestId('card-testid')
    expect(dateElement).toBe('2022-08-29T20:28:45.744Z') */
  })
})
describe("Scénario 7: Etant sur la barre de navigation, Je clique sur 'Nos services'", () => {
  it("J'arrive en haut de la liste de nos services", async () => {
    render(<Home />)
    fireEvent(
      await screen.getByTestId('testservices'),
      new MouseEvent('click', {
        cancelable: true,
        bubbles: true,
      })
    )
    await screen.findByText(
      'Nous organisons des événements sur mesure partout dans le monde'
    )
  })
})
describe("Scénario 8: Etant sur la barre de navigation, Je clique sur 'Nos réalisations'", () => {
  it("J'arrive en haut de la liste de nos réalisations", async () => {
    render(<Home />)
    fireEvent(
      await screen.getByTestId('testrealisations'),
      new MouseEvent('click', {
        cancelable: true,
        bubbles: true,
      })
    )
    await screen.findByText('Catégories')
  })
})
describe("Scénario 9: Etant sur la barre de navigation, Je clique sur 'Notre équipe'", () => {
  it("J'arrive en haut de la liste des cartes présentant les membres de notre équipe", async () => {
    render(<Home />)
    fireEvent(
      await screen.getByTestId('testequipe'),
      new MouseEvent('click', {
        cancelable: true,
        bubbles: true,
      })
    )
    await screen.findByText(
      'Une équipe d’experts dédiés à l’ogranisation de vos événements'
    )
  })
})
describe("Scénario 10: Etant sur la barre de navigation, Je clique sur 'Contact'", () => {
  it("J'arrive au formulaire de contact", async () => {
    render(<Home />)
    fireEvent(
      await screen.getByTitle('contact'),
      new MouseEvent('click', {
        cancelable: true,
        bubbles: true,
      })
    )
    await screen.findByText('Personel / Entreprise')
  })
})

import PageHeading from "./PageHeading";
import List from "./List";
import Gallery from "./Gallery";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="center">
      <PageHeading />
      <List />
      <Gallery
        fName="Spirited away"
        imghrf="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"
      />
      <Gallery
        fName="As above so Below"
        imghrf="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oJZSajKLJkoTOzSZQN2ZwRnPwHZ.jpg"
      />
      <Gallery
        fName="Journey to the Center of the Earth"
        imghrf="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/myhj05hTAcQL2rhOrMqWxiioo49.jpg"
      />
      <Footer />
    </div>
  );
}

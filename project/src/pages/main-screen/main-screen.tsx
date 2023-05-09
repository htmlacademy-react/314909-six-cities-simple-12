import {Helmet} from 'react-helmet-async';
import SvgUpper from '../../components/svg-upper/svg-upper';
import Header from '../../components/header/header';
import LocationNav from '../../components/location-nav/location-nav';
import Sorting from '../../components/sorting/sorting';
import Card from '../../components/card/card';

type MainScreenProps = {
  roomCardCount: number;
};

export default function MainScreen({roomCardCount}: MainScreenProps): {
  return (
    <body className="page page--gray page--main">
      <SvgUpper/>

      <Helmet>
        <title>Six cities</title>
      </Helmet>
      <Header hasNavigation/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <LocationNav/>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{roomCardCount} places to stay in Amsterdam</b>

              <Sorting/>

              <div className="cities__places-list places__list tabs__content">
                {/* TODO при появлении данных, переделать на map */}
                {/*Array.from({length: props.roomCardCount}).map(() => <RoomCard />)*/}
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}



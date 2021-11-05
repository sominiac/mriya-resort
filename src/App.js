import { Header, FirstFrame, Choose, Information, Allinclusive } from './components';

import logoImage from './assets/images/logo.svg';
import specificationCardImage from './assets/images/1.jpg';
import tabletImage from './assets/images/tablet.png';

function App() {
  return (
    <div className="main-page">
      <Header logoImage={logoImage} />

      <FirstFrame />
      
      <Choose cardImage={specificationCardImage} />

      <Information />

      <Allinclusive mobileSlideImage={specificationCardImage} />

      <section className="tablet">
        <img className="tablet__image" src={tabletImage} alt="#" />

        <div className="logo tablet__logo">
          <img className="logo__image tablet__logo-image" src={logoImage} alt="#" />
        </div>
      </section>

    </div>
  );
}

export default App;
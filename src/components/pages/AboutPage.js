import React from 'react';

const AboutPage = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="about-content">
        <h1>Pokedex app documentation.</h1>

        <h3>Technical choises:</h3>

        <p>In my application I used suggested API (Pokeapi.co) and ReactJS library. I also used Webpack, ES6
        with Babel, Redux, Sass, SCSS and React Router. I started with boilerplate created by Cory House
        (https://github.com/coryhouse/react-slingshot), because I found it easy to set up and well composed. I
        also chose React-Bootstrap components to improve some of layout elements.</p>

        <h3>Architecture:</h3>

        <p>Architecture of Pokedex Application is closely related to Redux principles. I have one store, actions
        and reducers. In “common” directory there is a file, which contains action types to keep it clean. I also
        created a directory named “components”, where you can find all the components used in application.
        In “common” directory there are some elements which are reused in several places, in “pages” you
        can find components representing major pages (handled by routes). There is also an App component
        which is above entire content and bind it together. In “resources” directory I have put all the images
        used in application, whereas in “styles” there are all stylesheets.</p>

        <h3>Application structure:</h3>

        <p>When you open a Pokedex web application you can see a Home Page with search engine. As you
        can see, you can search for pokemons by name (e.g. bulbasaur) or by type (e.g. water). When you try
        to find pokemons by type, there appears a list on the left, where you can pick a specific pokemon and
        see some detail informations about him in a component placed on the right. Beyond the basic
        information about the choosen pokemon you can see an image and the button labeled “Catch”. By
        clicking it you can catch this pokemon. There are some accompanying effects. Firstly, pokemon name
        in the table turn blue to see which pokemones are caught. Secondly, on the right side of header there
        is a circle with number in it. This is a number of pokemons which have been caught. When you decide
        to release pokemon which has been caught, just click “Release” button.</p>

        <p>By clicking “Find Pokemon” on header you can go to the other route, where you can view a list of
        pokemons. There are some navigation buttons to handle data pagination. As well as at the Home
        Page, you can pick a pokemon, view detail information and catch him.</p>

        <h3>Have fun catching your favourite pokemons! &hearts; </h3>
        <p>Anna Mazur</p>
      </div>
    </div>
  );
};

export default AboutPage;

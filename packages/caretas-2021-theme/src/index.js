import Theme from './components';
import { mainCategories } from './components/utility/config';
import { homeHandler } from './handlers/home-handler';
import { mediaHandler } from './handlers/media-handler';
import { postHandler } from './handlers/post-handler';

const caretas2021Theme = {
  name: "caretas-2021-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      mainTitle: 'Caras y Caretas',
      description: 'Noticias políticas, económicas, deportivas, culturales, tecnológicas y de interés general de Uruguay y el mundo.',
      copyright: 'Caras y Caretas - Paraguay 1478 piso 2 - tel. 2903 3188 ',
      menu: [
        {
          name: 'Política',
          link: '/categoria/politica/'
        },
        {
          name: 'Sociedad',
          link: '/categoria/sociedad/'
        },
        {
          name: 'Sindicales',
          link: '/categoria/sindicales/'
        },
        {
          name: 'Internacionales',
          link: '/categoria/internacionales/'
        },
        {
          name: 'Deportes',
          link: '/categoria/deportes/'
        },
        {
          name: 'Economía',
          link: '/categoria/economia-2/'
        },
        {
          name: 'Cultura',
          link: '/categoria/cultura-y-espectaculos/'
        },
        {
          name: 'Empresariales',
          link: '/categoria/empresariales/'
        },
        {
          name: 'Caras y Caretas TV',
          link: '/categoria/caras-y-caretas-tv/'
        },
        {
          name: 'Suscripciones',
          link: '/suscripciones/'
        },
        {
          name: 'Contacto',
          link: '/contacto/'
        },
      ],
      showMegaMenu: false,
      isMobileMenuOpen: false,
      social: [
        {
          id: 'facebook',
          url: 'https://www.facebook.com/CarasyCaretasuy',
        },
        {
          id: 'twitter',
          url: 'https://twitter.com/CarasyCaretasuy',
        },
        {
          id: 'youtube',
          url: 'https://www.youtube.com/channel/UCGc2JWsZwMX9w4BQ3w2ubcA',
        },
        {
          id: 'instagram',
          url: 'https://www.instagram.com/carasycaretasuy',
        },
      ],
      socialShare: [
        {
          id: 'facebook',
          url: 'https://www.facebook.com/sharer/sharer.php?u=',
        },
        {
          id: 'twitter',
          url: 'https://twitter.com/intent/tweet?url=',
        },
        {
          id: 'whatsapp',
          url: 'https://api.whatsapp.com/send?text=',
        },
      ],
      isModalOpen: false,
      modalContent: '',
    }
  },
  actions: {
    theme: {
      beforeSSR: async ({ state, actions }) => {
        await Promise.all(
          Object.values(mainCategories).map(
            category => actions.source.fetch(
              `/category/${category}/`
            )
          )
        );
      },
      showMegaMenu: ({ state }) => catName => {
        state.theme.showMegaMenu = true;
        state.theme.megaMenuCatName = catName;
      },
      hideMegaMenu: ({ state }) => {
        state.theme.showMegaMenu = false;
        state.theme.megaMenuCatName = null;
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      toggleModal: ({ state }) => item => {
        state.theme.modalContent = item;
        state.theme.isModalOpen = !state.theme.isModalOpen;
      },
    }
  },
  libraries: {
    source: {
      handlers: [
        homeHandler,
        mediaHandler,
        postHandler
      ]
    }
  }
};

export default caretas2021Theme;

import React from 'react';
import { Head, connect } from 'frontity';

const Title = ({ state }) => {
    // Obtener datos sobre la URL actual.
    const data = state.source.get(state.router.link);
    // Establecer el título predeterminado.
    let title = state.theme.title;

    if (data.isTaxonomy) {
        // Agrego títulos a las taxonomías, como "Categoría: Naturaleza - Nombre del blog" o "Etiqueta: Japón - Nombre del blog".
        // 1. Obtengo la taxonomía del estado para obtener su término y nombre.
        const { taxonomy, name } = state.source[data.taxonomy][data.id];
        // 2. Primera letra mayúscula del término de taxonomía (de "categoría" a "Categoría").
        const taxonomyCapitalized =
            taxonomy.charAt(0).toUpperCase() + taxonomy.slice(1);
        // 3. Renderizo el título correctamente compuesto.
        title = `${taxonomyCapitalized}: ${name} - ${state.frontity.title}`;
    } else if (data.isAuthor) {
        // Agrego títulos a los autores, como "Autor: Jon Snow - Nombre del blog".
        // 1. Obtengo el autor del estado para obtener su nombre.
        const { name } = state.source.author[data.id];
        // 2. Renderizo el título correctamente compuesto.
        title = `Author: ${name} - ${state.frontity.title}`;
    } else if (data.isPostType) {
        // Agrego títulos a publicaciones y páginas, utilizando el título y terminando con el nombre del blog.
        // 1. Obtengo la publicación del estado y obtengo su título.
        const postTitle = state.source[data.type][data.id].title.rendered;
        // 2. Elimino las etiquetas HTML del título.
        const cleanTitle = postTitle.replace(/<\/?[^>]+(>|$)/g, "");
        // 3. Renderizo el título correcto.
        title = `${cleanTitle} - ${state.frontity.title}`;
    } else if (data.is404) {
        // Añado títulos a 404's.
        title = `404 No Encontrado - ${state.frontity.title}`;
    }

    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
};

export default connect(Title);
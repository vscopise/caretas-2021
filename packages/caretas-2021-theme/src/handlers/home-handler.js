import { fetch } from "frontity";

export const homeHandler = {
    name: "home",
    priority: 10,
    pattern: "/",
    func: async ({ route, state, libraries }) => {
        // 1. fetch the specified page
        const response = await fetch(
            `${state.source.url}/wp-json/wp/v2/home_page/`, {
                method: 'POST',
            }
        );
        
        // 2. Transform to json
        const homeData = await response.json();

        // 3. add data to source
        Object.assign(state.source.data[route], {
            homeData,
            isArchive: true,
            isPostTypeArchive: true,
            isHome: true
        });
    }
};
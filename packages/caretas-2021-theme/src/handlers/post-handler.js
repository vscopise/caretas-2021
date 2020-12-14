export const postHandler = {
    name: 'post',
    priority: 10,
    pattern: '/post/:id',
    func: async ({ params, state, libraries }) => {

        // 1. get post
        const response = await libraries.source.api.get({
            endpoint: `posts/${params.id}`,
        });

        // 2. add post to state
        await libraries.source.populate({ response, state });
    }
}
export const mediaHandler = {
    name: 'media',
    priority: 10,
    pattern: '/media/:id',
    func: async ({ params, state, libraries }) => {

        // 1. get media
        const response = await libraries.source.api.get({
            endpoint: `media/${params.id}`,
        });

        // 2. add media to state
        await libraries.source.populate({ response, state });
    }
}
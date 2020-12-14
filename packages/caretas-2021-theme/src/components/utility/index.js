import { mainCategories } from './config';


export const getPostsFromCategory = ({ post }, categoryId) =>
  Object.keys(post)
    .map(postID => post[postID])
    .filter(({ categories }) => categories.includes(+categoryId))

export const getPostsGroupedByCategory = (state, count = 5) => {
  return Object.keys(mainCategories).reduce((acc, categoryId) => {
    const posts = getPostsFromCategory(state.source, categoryId)
      .sort((a, b) => a.date < b.date ? 1 : -1)
      .slice(0, count)
    const category = state.source.category[categoryId]
    return [{ posts, category }, ...acc]
  }, [])
}
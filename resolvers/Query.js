const movies = async (parent, args, context) => {
  return await context.prisma.movie.findMany()
}

module.exports = {
  movies
}

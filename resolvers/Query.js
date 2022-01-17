const movies = async (parent, args, context) => {
  return await context.prisma.movie.findMany()
}

const movie = async (parent, args, context) => {
  return await context.prisma.movie.findUnique({
    where: {
      id: Number(args.id)
    }
  })
}

module.exports = {
  movies,
  movie
}

const createMovie = async (parent, args, context) => {
  const newMovie = await context.prisma.movie.create({
    data: {
      title: args.title,
      image: args.image,
      description: args.description,
      release_year: Number(args.release_year)
    }
  });

  return newMovie;
}

module.exports = {
  createMovie
}
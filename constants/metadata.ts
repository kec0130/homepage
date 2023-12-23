export const host =
  process.env.NODE_ENV === 'production' ? 'https://chaechae.life' : 'http://localhost:3000';

export const defaultMetadata = {
  title: 'My Blog',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sapiente numquam ipsum',
};

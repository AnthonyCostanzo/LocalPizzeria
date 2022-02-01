import Image from 'next/image';
import Nav from '../components/Nav';

type ImageType = {
  url: string;
  alt: string;
};

const images: ImageType[] = [
  {
    url: 'https://media.istockphoto.com/photos/fresh-homemade-pizza-margherita-picture-id1278998606?b=1&k=20&m=1278998606&s=170667a&w=0&h=BlXvVFfwLwD4ckIF_7sg_mis8ULaqy9sdPgA6grpSo4=',
    alt: 'margerita pizza full pie',
  },
  {
    url: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    alt: 'appealing tasty slice of pepperoni pizza ',
  },
  {
    url: 'https://images.unsplash.com/photo-1537734796389-e1fc293cf856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    alt: 'rolling of fresh dough ',
  },
  {
    url: 'https://media.istockphoto.com/photos/kids-enjoying-pizza-at-a-restaurant-picture-id1308320627?b=1&k=20&m=1308320627&s=170667a&w=0&h=pDx95RUUiVeWnrumo6qDRfK_L-t9eZVzWb-CiOn2aTM=',
    alt: 'a happy family enjoying our delicous pizza',
  },
  {
    url: 'https://media.istockphoto.com/photos/pizza-time-picture-id505663330?b=1&k=20&m=505663330&s=170667a&w=0&h=G-zZwF1lU1VQ8mqgK-lEs_7ooc9xSLF-mZuLiW27Zlk=',
    alt: 'customers digging into a fresh pizza pie',
  },
  {
    url: 'https://media.istockphoto.com/photos/spaghetti-and-meatballs-picture-id155429377?b=1&k=20&m=155429377&s=170667a&w=0&h=TSvEi5sFZ0oYHcHPYBQusbowSblGzBwmavew86Qsong=',
    alt: 'spaghetti and meatballs with red sauce ',
  },
  {
    url: 'https://images.unsplash.com/photo-1537734796389-e1fc293cf856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    alt: 'rolling of fresh dough ',
  },
  {
    url: 'https://media.istockphoto.com/photos/vegetarian-dishes-picture-id1313418058?b=1&k=20&m=1313418058&s=170667a&w=0&h=-BZRud6u510emxg26hpFdOtsPSjOEsB0OCsIue_cdi8=',
    alt: 'a variety of our amazing menu items ',
  },
  {
    url: 'https://media.istockphoto.com/photos/italian-style-panini-picture-id1292147140?b=1&k=20&m=1292147140&s=170667a&w=0&h=8drk9OnxwMIffCCq4n0vbzL-UjH75ai2zwY2tQKqD0Y=',
    alt: 'a delicious cheesy panini ',
  },
];

const Gallery = () => (
  <>
    <Nav />
    <h1 className="text-center text-2xl mt-5">Our Finest Foods</h1>
    <div className="px-2 gap-2 transition-all ease-in sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {images.map((image, i) => (
        <div key={i}>
          <Image src={image.url} alt={image.alt} height={1080} width={1820} />
        </div>
      ))}
    </div>
  </>
);

export default Gallery;

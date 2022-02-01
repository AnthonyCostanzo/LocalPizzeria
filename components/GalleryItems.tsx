import Image from 'next/image';
import { images } from '../utils/data';
const GalleryItems = () => (
  <div className="px-2 gap-2 transition-all ease-in sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
    {images.map((image, i) => (
      <div key={i}>
        <Image src={image.url} alt={image.alt} height={1080} width={1820} />
      </div>
    ))}
  </div>
);

export default GalleryItems;

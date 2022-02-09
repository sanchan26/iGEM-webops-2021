import Lightbox from 'react-lightbox-component';

const GalleryLib = () => (
  <div>
    <Lightbox images={
      [
        {
          src: 'some image url',
          title: 'image title',
          description: 'image description'
        }
      ]
    }/>
  </div>
);

export default {GalleryLib} 
import React from "react";
import  Carousel  from "react-images";

interface imagePopup {
  images: any;
  setIsOpen: any;
  photoIndex: any;
  setPhotoIndex: any;
}

const ImagePopup = ({
  images,
  setIsOpen,
  photoIndex,
  setPhotoIndex,
}: imagePopup) => {
  return (
    <React.Fragment>
      <Carousel
        views={images.map((item) => ({
          source: item,
        }))}
        currentIndex={photoIndex}
        modalProps={{ isFullscreen: true, allowFullscreen: true }}
        // isOpen={isOpen}
        // onClose={() => setIsOpen(false)}
        // onChange={(index) => setPhotoIndex(index)}
      />
    </React.Fragment>
  );
};

export default ImagePopup;

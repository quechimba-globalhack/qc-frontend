import React from "react";

type ItemProps = {
  items: string[];
}

const createItems = (prop: ItemProps) => {
  const images = prop.items.map(item => {
    return <div className="gallery-container__image"><img src={item} alt="product gallery" /></div>
  })
  return images;
};

// type ItemProps = {
//   src: string,
//   time: string,
//   title: string,
//   description: string,
//   price: string,
// }

// type ListProps = {
//   items: ItemProps[];
// }


// const createItems = (prop: ListProps) => {

//   const images = prop.items.map(item => {
//     var background = {
//       backgroundImage: `url(${item.src})`,
//     };

//     return <div style={background} className="gallery-container__image">
//       <div className="description-container">
//         <div className="description-container__top-section">
//           <p>{item.time}</p>
//         </div>
//         <div className="description-container__bottom-section">
//           <p>{item.title}</p>
//           <p>{item.description}</p>
//           <p>{item.price}</p>
//         </div>
//       </div>
//     </div>
//   })
//   return images;
// };

const Gallery = (items: ItemProps) => {
  return (
    <div className="gallery-container">
      {createItems(items)}
    </div>
  );
}

export default Gallery;
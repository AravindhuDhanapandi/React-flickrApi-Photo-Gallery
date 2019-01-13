import React from "react";
import Picture from "./Picture.js";
import NotFound from "./NotFound.js";

const ListPictures = (props) => {
  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {props.listPictures.map((item,index) => {
          let id = item.id;
          let altTitle = item.title;
          let own =item.owner;
          let red= `https://www.flickr.com/photos/${item.owner}/${item.id}`;
          let url = `https://farm${item.farm}.staticflickr.com/${item.server}/${id}_${item.secret}.jpg`;
          return <Picture key={id} title={own} alt={altTitle}  altText={red} src={url}/>; // Don't forget to pass key
        })}
        {(props.listPictures.length < 1 && props.loaded) ? <NotFound /> : null}

      </ul>
    </div>
  );
};

export default ListPictures;

import React from 'react';
import "./gallery.css"

function Gallery({data}) { //destructing the props value.
    return (
        <div className="gallery">

            <div className="row1" >

            {
                data.map(
                    (value)=>{
                        return(
                            <div key={value.id}>
                            <div className="display">
                        <img  src={`https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}_m.jpg`}
                         width="250" height="200"/>
                            </div>
                            </div>
                        )
                    }
                )
            }
            </div>
            
        </div>
    )
}

export default Gallery

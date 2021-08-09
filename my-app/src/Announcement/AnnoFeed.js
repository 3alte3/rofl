import React from "react";
import ItemFeed from "./ItemFeed";

const styles = {
    ul:{
        listStyle: "none",
        margin: 0,
        padding: 0
    }
}

export default  function AnnoFeed(props){
    return (
        <ul style={styles.ul}>
            {
                props.annos.map((anno,index)=>
                {
                    return <ItemFeed anno={anno} key={anno.id} index={index}/>
                })
            }
        </ul>
    )
}
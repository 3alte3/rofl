import {Map, Polygon, YMaps} from "react-yandex-maps";
import React from "react";


export default function Ymapsmy({anno, wid, hei}){
    const mapState = {
        center: anno.center,
        zoom: 14
    };

    const POLYGON_COORDS = [
        anno.cords
    ];
    return(
        <YMaps>
            <Map defaultState={mapState} width={wid} height={hei}>
                <Polygon
                    geometry={POLYGON_COORDS}
                    options={{
                        fillColor: "#cf453c",
                        strokeColor: "#000000",
                        opacity: 0.5,
                        strokeWidth: 5,
                        strokeStyle: "shortdash"
                    }}
                />
            </Map>
        </YMaps>
    )
}


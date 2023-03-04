import React, { FC } from 'react';
import { Page2Props } from 'lib/types/common';
import {
    GoogleMap, useJsApiLoader, GoogleMapsMarkerClusterer, Autocomplete,
} from '@react-google-maps/api';
const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 24.7670077,
    lng: 46.7146454

};
const Page2: FC<Page2Props> = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDI8Qy_2Niq9jfVlZIq3TzfmaRJuLSk-nc",
        libraries: ['places'],
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={5}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
            <Autocomplete>
                <input type='text' width={500} placeholder='Origin' />
            </Autocomplete>
        </>
    ) : <></>
}
export default React.memo(Page2)
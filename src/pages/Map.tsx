/*global kakao*/

import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react'
import React from 'react'

declare global {
    interface Window {
        kakao: any;
    }
}



const Map: React.FC = () => {

    useIonViewDidEnter(() => {
        if (window.kakao) {
            let options = { //지도를 생성할 때 필요한 기본 옵션
                center: new window.kakao.maps.LatLng(37.5030042, 127.0507571), //지도의 중심좌표.
                // center: new window.kakao.maps.LatLng(127.0507571, 37.5030042),
                level: 3//지도의 레벨(확대, 축소 정도)
            };

            let container = document.getElementById('map')

            let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
            if (container) map.relayout()
        }
    })

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>코노</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div id="map" style={mapStyle}></div>
            </IonContent>
        </IonPage>
    )
}


const mapStyle = {
    width: "100%",
    height: "100%"
}

export default Map
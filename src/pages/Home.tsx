import {
    IonButtons, IonCard,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import { Geolocation } from '@capacitor/geolocation';
import React, {useEffect, useState} from "react";

const Home: React.FC = () => {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [store, setStore] = useState({
        latitude: 0,
        longitude: 0,
        name: 'Loja mais próxima',
        address: 'Rua da Loja, 123',
        phone: '(123) 456-7890'
    });

    useEffect(() => {
        // Obter a localização do usuário
        Geolocation.getCurrentPosition().then((position) => {
            // Atualizar a localização da loja mais próxima
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }, []);

return (
    <IonPage>
        <IonHeader translucent={ true }>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Início</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Início</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonContent>
    </IonPage>
);
};

export default Home;
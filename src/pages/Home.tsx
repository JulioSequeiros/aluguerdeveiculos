import {
    IonButton,
    IonButtons, IonCard, IonCol,
    IonContent, IonGrid,
    IonHeader, IonIcon, IonImg,
    IonMenuButton,
    IonPage, IonRow, IonText,
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
            <IonImg src="https://cdn.discordapp.com/attachments/1021814484437835837/1184194027667607622/loja.jpg?ex=658b15a1&is=6578a0a1&hm=b5edc80d1fc2e116eb36cf1206f078e58a882a11c9d5cebbcda58fa66d593a67&" />
            <IonGrid>
            <IonRow>
                <IonCol>
                    <h2>🚩</h2>
                </IonCol>
                <IonCol>
                    <IonButton>
                        <IonIcon slot="icon-only" name="map" />
                        Navegar para a loja mais próxima
                    </IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonText>
                        <h2>Apresentação da empresa</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            tincidunt, neque sit amet fermentum scelerisque, eros urna
                            tristique neque, ac dapibus eros risus sed sapien. Aliquam
                            fermentum, arcu vel luctus scelerisque, leo enim semper
                        </p>
                        <IonRow>
                            <IonCol>
                                <IonImg src="https://example.com/images/black-friday.png" />
                            </IonCol>
                            <IonCol>
                                <IonButton>
                                    <IonIcon slot="icon-only" name="card" />
                                    Saiba mais sobre a Black Friday
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonImg src="https://example.com/images/awards.png" />
                            </IonCol>
                            <IonCol>
                                <IonButton>
                                    <IonIcon slot="icon-only" name="star" />
                                    Veja nossos prêmios
                                </IonButton>
                            </IonCol>
                        </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonImg src="https://example.com/images/cars.png" />
                                </IonCol>
                                <IonCol>
                                    <IonButton routerLink="./Frota">
                                        <IonIcon slot="icon-only" name="car" />
                                        Conheça nossos novos carros
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonText>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
);
};

export default Home;
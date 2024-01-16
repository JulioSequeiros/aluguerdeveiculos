import {
    IonButton,
    IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
    IonContent, IonGrid,
    IonHeader, IonIcon, IonImg,
    IonMenuButton,
    IonPage, IonRow, IonText,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { Geolocation } from '@capacitor/geolocation';
import {
    GoogleMap,
    LoadScript,
    Marker,
} from '@react-google-maps/api';
import { logoIonic } from 'ionicons/icons';
import React, {useEffect, useState} from "react";
import './Home.css';
const Home: React.FC = () => {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [store, setStore] = useState({});

    useEffect(() => {
        Geolocation.getCurrentPosition().then((position) => {
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

            <div>
                <h2>Lojas</h2>
                <LoadScript googleMapsApiKey="AIzaSyAMcfkuNJPDUzehSoFZBQeXIuGL91jfkvk">
                <GoogleMap
                    mapContainerStyle={{
                        width: '100%',
                        height: '300px',
                    }}
                    center={{ lat: latitude || 0, lng: longitude || 0 }}
                    zoom={15}
                >
                    {/*Viana Do Castelo*/}
                    {latitude && longitude && (
                        <Marker position={{ lat: 41.69170549382038, lng: -8.834516997033361 }} />)}
                    {/*Braga*/}
                    {latitude && longitude && (
                        <Marker position={{ lat: 41.54572316918318, lng: -8.427901896581135 }} />)}
                    {/*Porto*/}
                    {latitude && longitude && (
                        <Marker position={{ lat: 41.15665233670994, lng: -8.637226158590055 }} />)}
                </GoogleMap>
            </LoadScript>
            </div>

            <IonGrid>
            <IonRow>
                <IonCol>
                    <IonText>
                        <p>
                            Happy Car Renty é uma empresa de aluguer de automóveis que se dedica a proporcionar uma experiência de aluguer de automóveis agradável e acessível. A empresa oferece uma ampla gama de veículos para atender às necessidades de todos os clientes, incluindo carros económicos, carros de luxo, carros desportivos e veículos
                        </p>
                        <IonRow>
                            <IonCol>
                                <IonIcon name="pin-outline"></IonIcon>
                            </IonCol>
                            <IonCol>
                                <IonButton routerLink="./Lojas" color={"red"}>
                                    <IonIcon slot="icon-only" name="map" />
                                    Navegar para a loja mais próxima
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonIcon name="car-outline"></IonIcon>
                            </IonCol>
                            <IonCol>
                                <IonButton routerLink="./Frota" color={"red"}>
                                    <IonIcon slot="icon-only" name="car" />
                                    Conheça nossos novos carros
                                </IonButton>
                            </IonCol>
                        </IonRow>
                            <IonTitle>Ultimas Noticias</IonTitle>
                                <IonCard>
                                    <IonCardHeader>
                                        <IonIcon name="trophy-outline"></IonIcon>
                                        <IonCardTitle>Vencedores do Premio</IonCardTitle>
                                        <IonCardSubtitle>
                                            <p>10/12/2023</p>
                                            <p>Happy Car Rent foi vencedor de melhor loja de alugamento de carros em Portugal!</p>
                                        </IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonButton className={"sabermais"} fill="clear">Saber Mais</IonButton>
                                </IonCard>
                                    <IonCard>
                                        <IonCardHeader>
                                            <IonIcon name="pricetags-outline"></IonIcon>
                                                <IonCardTitle>Promoção Black Friday</IonCardTitle>
                                                    <IonCardSubtitle>
                                                    <p>20/11/2023</p>
                                                    <p>Aproveite o desconto de Black friday no alugamento de um veiculo a sua escolha!</p>
                                        </IonCardSubtitle>
                                    </IonCardHeader>
                                <IonButton className={"sabermais"} fill="clear">Saber Mais</IonButton>
                            </IonCard>
                        </IonText>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
);
};

export default Home;
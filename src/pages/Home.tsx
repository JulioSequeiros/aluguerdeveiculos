import {
    IonButton,
    IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
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
                    <IonText>
                        <p>
                            Happy Car Renty é uma empresa de aluguer de automóveis que se dedica a proporcionar uma experiência de aluguer de automóveis agradável e acessível. A empresa oferece uma ampla gama de veículos para atender às necessidades de todos os clientes, incluindo carros económicos, carros de luxo, carros desportivos e veículos
                        </p>
                        <IonRow>
                            <IonCol>
                                <IonIcon name="pin-outline"></IonIcon>
                            </IonCol>
                            <IonCol>
                                <IonButton>
                                    <IonIcon slot="icon-only" name="map" />
                                    Navegar para a loja mais próxima
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonIcon name="car-outline"></IonIcon>
                            </IonCol>
                            <IonCol>
                                <IonButton routerLink="./Frota">
                                    <IonIcon slot="icon-only" name="car" />
                                    Conheça nossos novos carros
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonIcon name="trophy-outline"></IonIcon>
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
                                    <IonCard>
                                        <IonCardHeader>
                                            <IonIcon name="pricetags-outline"></IonIcon>
                                            <IonCardTitle>Promoção Black Friday</IonCardTitle>
                                            <IonCardSubtitle>
                                                <p>20/11/2023</p>
                                                <p>Aproveite o desconto de Black friday no alugamento de um veiculo a sua escolha!</p>
                                            </IonCardSubtitle>
                                        </IonCardHeader>
                                        <IonButton fill="clear">Saber Mais</IonButton>
                                    </IonCard>
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
import React from 'react';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
} from "@ionic/react";
import './Lojas.css';
import { Geolocation } from '@capacitor/geolocation';

const Lojas: React.FC = () => {
    const printCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();

        console.log('Current position:', coordinates);
    };
        return (
            <IonPage>
                <IonHeader translucent={true}>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton/>
                        </IonButtons>
                        <IonTitle>Lojas</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Lojas</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Localizações</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonList>
                                <IonItem>
                                    <IonThumbnail slot="start">
                                        <img alt="Silhouette of mountains" src="https://cdn.discordapp.com/attachments/1021814484437835837/1184194027667607622/loja.jpg?ex=658b15a1&is=6578a0a1&hm=b5edc80d1fc2e116eb36cf1206f078e58a882a11c9d5cebbcda58fa66d593a67&" />
                                    </IonThumbnail>
                                    <IonLabel>Viana do Castelo</IonLabel>
                                </IonItem>

                                <IonItem>
                                    <IonThumbnail slot="start">
                                        <img alt="Silhouette of mountains" src="https://cdn.discordapp.com/attachments/1021814484437835837/1184194027667607622/loja.jpg?ex=658b15a1&is=6578a0a1&hm=b5edc80d1fc2e116eb36cf1206f078e58a882a11c9d5cebbcda58fa66d593a67&" />
                                    </IonThumbnail>
                                    <IonLabel>Braga</IonLabel>
                                </IonItem>

                                <IonItem>
                                    <IonThumbnail slot="start">
                                        <img alt="Silhouette of mountains" src="https://cdn.discordapp.com/attachments/1021814484437835837/1184194027667607622/loja.jpg?ex=658b15a1&is=6578a0a1&hm=b5edc80d1fc2e116eb36cf1206f078e58a882a11c9d5cebbcda58fa66d593a67&" />
                                    </IonThumbnail>
                                    <IonLabel>Porto</IonLabel>
                                </IonItem>

                                <IonItem lines="none">
                                    <IonThumbnail slot="start">
                                        <img alt="Silhouette of mountains" src="https://cdn.discordapp.com/attachments/1021814484437835837/1184194027667607622/loja.jpg?ex=658b15a1&is=6578a0a1&hm=b5edc80d1fc2e116eb36cf1206f078e58a882a11c9d5cebbcda58fa66d593a67&" />
                                    </IonThumbnail>
                                    <IonLabel>Lisboa</IonLabel>
                                </IonItem>
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        );
    };


export default Lojas;
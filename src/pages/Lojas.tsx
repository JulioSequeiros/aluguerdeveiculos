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
    IonThumbnail, IonButton,
} from "@ionic/react";
import './Lojas.css';
import { Geolocation } from '@capacitor/geolocation';

const Lojas: React.FC = () => {
    const printCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();

        console.log('Current position:', coordinates);
    };
    const stores = [
        {
            name: 'Viana do Castelo',
            address: 'Rua da Ribeira, 5000-558 Viana do Castelo',
            phoneNumber: '+351 258 802 605',
        },
        {
            name: 'Braga',
            address: 'Rua do Pão de Ló, 4700-062 Braga',
            phoneNumber: '+351 253 275 028',
        },
        {
            name: 'Porto',
            address: 'Rua Santa Catarina, 4000-042 Porto',
            phoneNumber: '+351 222 095 090',
        },
        {
            name: 'Lisboa',
            address: 'Rua do Ouro, 1170-764 Lisboa',
            phoneNumber: '+351 213 100 010',
        },
    ];
    const showModal = (store) => {
        const modal = document.createElement('ion-modal');
        modal.id = 'store-modal';
        const header = document.createElement('ion-header');
        header.textContent = `Informações da Loja: ${store.name}`;
        const content = document.createElement('ion-content');
        const title = document.createElement('ion-title');
        title.textContent = 'Nome: ${store.name}';
        const address = document.createElement('ion-subtitle');
        address.textContent = 'Endereço: ${store.address}';
        const phoneNumber = document.createElement('ion-subtitle');
        phoneNumber.textContent = 'Número de telefone: ${store.phoneNumber}';
        content.appendChild(title);
        content.appendChild(address);
        content.appendChild(phoneNumber);
        modal.appendChild(header);
        modal.appendChild(content);
        document.body.appendChild(modal);

        modal.addEventListener('ion-close', () => {
            modal.remove();
        });
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
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <img alt="Store logo" src="https://example.com/store-logo.png" />
                                        </IonThumbnail>
                                        <IonLabel>{stores.name}</IonLabel>
                                        <IonButton onClick={() => showModal(stores)}>Ver Informações</IonButton>
                                    </IonItem>
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
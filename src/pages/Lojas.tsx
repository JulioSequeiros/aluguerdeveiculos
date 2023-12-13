import React, {ReactNode, useState} from 'react';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonList,
    IonItem,
    IonModal,
    IonTitle,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent, IonToolbar, IonSearchbar, IonButton, IonPage, IonLabel, IonMenuButton, IonGrid, IonRow, IonCol,
} from '@ionic/react';
import './Lojas.css';
interface Store {
    name: string;
    address: string;
    imagem: string;
}

function IonSubtitle(props: { children: ReactNode }) {
    return null;
}

const Lojas: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedStore, setSelectedStore] = useState<Store | null>(null);


    const handleOpenModal = (store: Store) => {
        setSelectedStore(store);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedStore(null);
    };

    const stores = [
        {
            name: "Viana",
            address: "Rua da Loja, 123, Viana do Castelo",
            imagem: "https://www.cm-viana-castelo.pt/wp-content/uploads/2023/07/DJI_0529-scaled.jpg",
        },
        {
            name: "Porto",
            address: "Rua da Loja, 456, Porto",
            imagem: "https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2021/01/porto-portugal-guia.jpg",
        },
        {
            name: "Braga",
            address: "Rua da Loja, 789, Braga",
            imagem: "https://www.bloom-consulting.com/journal/wp-content/uploads/2020/01/braga-4852960_1280.jpg",
        },
        {
            name: "Lisboa",
            address: "Rua da Loja, 1011, Lisboa",
            imagem: "https://revistaazul.voeazul.com.br/wp-content/uploads/2023/03/Lisboa.jpg",
        },
    ];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Lojas</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonList>
                    {stores.map((store, index) => (
                        <IonItem key={index}>
                            <IonGrid fixed={true}>
                                <IonRow>
                                    <IonCol>
                                        <IonTitle>{store.name}</IonTitle>
                                        <p>{store.address}</p>
                                    </IonCol>
                                    <IonCol>
                                        <IonButton onClick={() => handleOpenModal(store)} color={'red'}>Mais informações</IonButton>
                                        <IonButton routerLink="./Frota" color={'red'}>Frota</IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonItem>
                    ))}
                </IonList>

                {selectedStore && (
                    <IonModal isOpen={showModal} onDidDismiss={handleCloseModal}>
                        <IonContent>
                            <IonTitle><h2>{selectedStore.name}</h2></IonTitle>
                            <IonImg src={selectedStore.imagem}></IonImg>
                            <IonLabel>{selectedStore.address}</IonLabel>
                        </IonContent>
                    </IonModal>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Lojas

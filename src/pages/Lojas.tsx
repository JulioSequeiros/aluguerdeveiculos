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
    IonCardContent, IonToolbar, IonSearchbar, IonButton, IonPage,
} from '@ionic/react';

interface Store {
    name: string;
    address: string;
    imagem: string;
}

const generateRandomPrice = () => {
    const randomPrice = (Math.random() * (150 - 50) + 50).toFixed(2);
    return `€${randomPrice}`;
};

function IonSubtitle(props: { children: ReactNode }) {
    return null;
}

const Frota: React.FC = () => {
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
            name: "Loja 1",
            address: "Rua da Loja, 123, Viana do Castelo",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Viana_do_Castelo_Panorama.jpg/1200px-Viana_do_Castelo_Panorama.jpg",
        },
        {
            name: "Loja 2",
            address: "Rua da Loja, 456, Porto",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Porto_Panorama.jpg/1200px-Porto_Panorama.jpg",
        },
        {
            name: "Loja 3",
            address: "Rua da Loja, 789, Braga",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Braga_Panorama.jpg/1200px-Braga_Panorama.jpg",
        },
        {
            name: "Loja 4",
            address: "Rua da Loja, 1011, Lisboa",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Lisboa_Panorama.jpg/1200px-Lisboa_Panorama.jpg",
        },
    ];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonSearchbar />
                    </IonButtons>
                    <IonTitle>Lojas</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonList>
                    {stores.map((store, index) => (
                        <IonItem key={index}>
                            <IonTitle>{store.name}</IonTitle>
                            <IonSubtitle>{store.address}</IonSubtitle>
                            <IonButton onClick={() => handleOpenModal(store)}>Mais informações</IonButton>
                        </IonItem>
                    ))}
                </IonList>

                {selectedStore && (
                    <IonModal isOpen={showModal} onDidDismiss={handleCloseModal}>
                        <IonContent>
                            <IonTitle><h2>{selectedStore.name}</h2></IonTitle>
                            <IonImg src={selectedStore.imagem}></IonImg>
                        </IonContent>
                    </IonModal>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Frota

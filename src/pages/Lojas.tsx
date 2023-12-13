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
    IonCardContent, IonToolbar, IonSearchbar, IonButton, IonPage, IonLabel,
} from '@ionic/react';

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

    const [searchTerm, setSearchTerm] = useState('');
    const handleOpenModal = (store: Store) => {
        setSelectedStore(store);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedStore(null);
    };
    const handleSearchBarInput = (event: any) => {
        setSearchTerm(event.detail.value);
    };
    const stores = [
        {
            name: "Viana do Castelo",
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
    const filteredStores = stores.filter((store) =>
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.imagem.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
                            <IonButton routerLink="./Frota">Frota</IonButton>
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

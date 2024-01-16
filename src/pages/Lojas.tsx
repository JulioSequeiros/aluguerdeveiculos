import React, {ReactNode, useEffect, useState} from 'react';
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
    id: number;
    name: string;
    address: string;
    imagem: string;
    descricao: string;
    email: string;
    telefone: number;
}


const Lojas: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedStore, setSelectedStore] = useState<Store | null>(null);
    const [ Lojas, setLojas ] = useState<Store[]>([])

    useEffect(() => {
        const fetchLojas = async () => {
            try {
                const response = await fetch('http://localhost:3000/lojas');
                const data = await response.json();
                setLojas(data);
            } catch (error) {
                console.error('Erro a buscar as lojas:', error);
            }
        };
        fetchLojas();
    }, []);


    const handleOpenModal = (store: Store) => {
        setSelectedStore(store);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedStore(null);
    };
    const handleExitModal = () => {
        setShowModal(false);
    };


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
                    {Lojas.map((store, index) => (
                        <IonItem key={index}>
                            <IonGrid fixed={true}>
                                <IonRow>
                                    <IonCol>
                                        <IonTitle>{store.name}</IonTitle>
                                        <p>{store.address}</p>
                                    </IonCol>
                                    <IonCol>
                                        <IonButton onClick={() => handleOpenModal(store)} color={'red'}>Mais informações</IonButton>
                                        <IonButton routerLink={`/Frota?loja=${store.id}`} color={'red'}>Frota</IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonItem>
                    ))}
                </IonList>

                {selectedStore && (
                    <IonModal isOpen={showModal} onDidDismiss={handleCloseModal}>
                        <IonContent>
                            <IonRow><IonTitle><h2>{selectedStore.name}</h2></IonTitle></IonRow>
                            <IonRow><IonImg src={selectedStore.imagem}></IonImg></IonRow>
                            <h3>Morada</h3>
                            <IonRow><IonLabel>{selectedStore.address}</IonLabel></IonRow>
                            <h3>Descrição</h3>
                            <IonRow><p>{selectedStore.descricao}</p></IonRow>
                            <IonRow><IonLabel>email: {selectedStore.email}</IonLabel></IonRow>
                            <IonRow><IonLabel>telefone: {selectedStore.telefone}</IonLabel></IonRow>
                            <IonRow><IonButton onClick={handleExitModal} color={'red'}>Sair</IonButton></IonRow>
                        </IonContent>
                    </IonModal>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Lojas

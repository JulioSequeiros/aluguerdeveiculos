import React, {useEffect, useState} from 'react';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonModal,
    IonList,
    IonItem,
    IonLabel,
    IonImg,
    IonGrid,
    IonRow,
    IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonText,
} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Frota.css';

interface Car {
    marca: string;
    modelo: string;
    descricao: string;
    informacao: string;
    precodiario: string;
    imagem: string
    loja : string
    tipo : string
}


const Frota: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const [showModal, setShowModal] = useState(false);
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);
    const [carro, setCarros] = useState<Car[]>([]);
    const { lojaId } = useParams<{ lojaId: string }>();

    useEffect(() => {
        const fetchCarros = async () =>{
            try {
                const response = await fetch('http://localhost:3000/carros')
                const data = await response.json();
                setCarros(data);
            } catch (error) {
                console.error('Erro ao buscar informação', error);
            }
        };
        fetchCarros();
    }, []);


    const handleOpenModal = (carro: Car) => {
        setSelectedCar(carro);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCar(null);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Frota</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name={name} />

                {carro.map((carroItem) => (
                    <IonList key={carroItem.tipo}>
                        <IonTitle>{carroItem.tipo}</IonTitle>
                        <IonItem>
                            <IonCard>
                                <IonImg src={carroItem.imagem}></IonImg>
                                <IonCardHeader>
                                    <IonCardTitle>{carroItem.marca}</IonCardTitle>
                                    <IonCardSubtitle>{carroItem.modelo}</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonButton color={"red"} onClick={() => handleOpenModal(carroItem)}>Mais informações</IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonItem>
                    </IonList>
                ))}

                {selectedCar && (
                    <IonModal isOpen={showModal} onDidDismiss={handleCloseModal}>
                        <IonContent>
                            <IonTitle><h2>{selectedCar.marca}</h2></IonTitle>
                            <IonImg src={selectedCar.imagem}></IonImg>
                            <IonTitle><h3>{selectedCar.modelo}</h3></IonTitle>
                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <IonLabel><p>{selectedCar.informacao}</p></IonLabel>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonLabel><p>{selectedCar.descricao}</p></IonLabel>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonLabel><p>Disponivel na seguinte loja: </p></IonLabel>
                                    </IonCol>
                                </IonRow>
                                    <IonRow>
                                    <IonCol>
                                        <IonButton color={"red"} onClick={handleCloseModal}>Fechar</IonButton>
                                    </IonCol>
                                    <IonCol>
                                        <IonText>Preço P/Dia:</IonText>
                                        <IonButton color={"red"} onClick={handleCloseModal}>Alugar: {selectedCar.precodiario}</IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonContent>
                    </IonModal>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Frota;
import {
    IonButtons,
    IonCol,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonRow,
    IonGrid,
    IonTitle,
    IonToolbar,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonSelect,
    IonSelectOption,
    IonList, IonItem, IonLabel, IonBadge, IonNote, IonButton
} from "@ionic/react";
import {useEffect, useState} from "react";
import {getCarro} from "../Utils/Utils";
import {checkmark} from "ionicons/icons";

interface Carro {
    id: number;
    modelo: string;
    marca: string;
    categoria: string;
}

const Frota: React.FC = () => {

    const [filtro, setFiltro] = useState<string>('');
    const [carrosFiltrados, setCarrosFiltrados] = useState<string[]>([]);

    useEffect(() =>{
        //ler da utils todos os carros
        const todosOsCarros = getCarro(); //Utils

        //Se houver filtro
        if (filtro !== '') {
            if (carrosFiltrados) {
                const carrosFiltrados = todosOsCarros().filter((carro) => carro.categoria === carrosFiltrados);
                setCarrosFiltrados(carrosFiltrados);
                setCarrosFiltrados(true);
            }
        }
    }, [filtro]);

    return (
        <IonPage>
            <IonHeader translucent={ true }>
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
                        <IonTitle size="large">Frota</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonSelect aria-label="Categoria" placeholder="Selecione a Categoria" onIonChange={(ev) => console.log('Current value:', JSON.stringify(ev.detail.value))}>
                    {carrosFiltrados.length > 0 &&
                        carrosFiltrados.map((carro, index) => (
                        <IonSelectOption key={carro.id} value={carro.id}>
                            {carro.categoria}
                        </IonSelectOption>
                    ))}
                </IonSelect>
                <IonGrid fixed={true}>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonCard>
                                    <IonCardHeader>
                                        <IonCardTitle>{carro.modelo}</IonCardTitle>
                                        <IonCardSubtitle>{carro.marca}</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonButton fill="clear">Loja</IonButton>
                                </IonCard>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Frota;
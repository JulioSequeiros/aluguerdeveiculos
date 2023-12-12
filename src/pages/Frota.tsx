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
    IonList, IonItem, IonLabel, IonBadge, IonNote
} from "@ionic/react";
import {useState} from "react";
import {getCarro} from "../Utils/Utils";
import {checkmark} from "ionicons/icons";

interface Carro extends Carro {
    id: number;
    modelo: string;
    marca: string;
    categoria: string[];
}

const Frota: React.FC = () => {

    const [ Badge, setBadge ] = useState(true);
    const [itemSelected, setItemSelected] = useState<Carro| null>(null);

    const inboxItems = getCarro();

    const handleClickCategoria = async (item : Carro) => {
        setItemSelected(item)
    }

    const handleCloseModal = () => {
        setItemSelected(null);
    };

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
                <IonList>
                    { inboxItems.map((item, index,) => {

                        return (
                            <IonItem onClick={() => handleClickCategoria(item)} key={ `item_${ index }`} detail={ true } lines="full" detailIcon={ checkmark }>
                                <IonLabel>
                                    <h2>{ item.categoria }</h2>
                                </IonLabel>
                                { Badge &&
                                    <IonBadge slot="end" style={{ fontSize: "1rem" }}>
                                        Ver Mais
                                    </IonBadge>
                                }
                            </IonItem>
                        );
                    })}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Frota;
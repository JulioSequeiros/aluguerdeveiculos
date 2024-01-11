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


    /*const stores = [
        {
            name: "Viana",
            address: "Rua da Loja, 123, Viana do Castelo",
            imagem: "https://www.cm-viana-castelo.pt/wp-content/uploads/2023/07/DJI_0529-scaled.jpg",
            descricao: "Viana do Castelo é uma cidade portuária no norte de Portugal, com cerca de 80 mil habitantes. É a capital do distrito de Viana do Castelo e está situada na costa do Oceano Atlântico, na foz do rio Lima.\n" +
                "\n" +
                "A cidade é conhecida pela sua beleza natural, pela sua história e cultura e pela sua gastronomia. A Praia de Cabedelo, uma das mais belas praias do norte de Portugal, está localizada a cerca de 10 km do centro da cidade. O centro histórico de Viana do Castelo, com ruas estreitas e casas antigas, é um património cultural de grande valor. A cidade é também conhecida pela sua gastronomia, nomeadamente pela Francesinha, um prato de carne e enchidos servido com molho picante.",
            email: "happynewcar.viana@happynewcar.pt",
            telefone: 258800700,
        },
        {
            name: "Porto",
            address: "Rua da Loja, 456, Porto",
            imagem: "https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2021/01/porto-portugal-guia.jpg",
            descricao: "O Porto é a segunda maior cidade de Portugal, com cerca de 210 mil habitantes. É uma cidade portuária cosmopolita, conhecida pelo seu vinho do Porto, pela sua ponte icónica e pela sua vida noturna agitada.\n" +
                "\n" +
                "O Porto é uma cidade com uma longa história e cultura. A Ponte Luís I, uma ponte de ferro que liga o Porto à margem sul do rio Douro, é um dos símbolos da cidade. A Ribeira, um bairro histórico situado na margem esquerda do rio Douro, é um local de grande beleza natural e cultural. O Palácio da Bolsa, um edifício neoclássico que abriga a Bolsa de Valores do Porto, é um dos edifícios mais emblemáticos da cidade.",
            email: "happynewcar.porto@happynewcar.pt",
            telefone: 258800600,
        },
        {
            name: "Braga",
            address: "Rua da Loja, 789, Braga",
            imagem: "https://www.bloom-consulting.com/journal/wp-content/uploads/2020/01/braga-4852960_1280.jpg",
            descricao: "Braga é a capital do norte de Portugal, com cerca de 180 mil habitantes. É uma cidade histórica e culturalmente rica, com muito para oferecer aos visitantes de todas as idades e interesses.\n" +
                "\n" +
                "A cidade é conhecida pela sua catedral, a Sé de Braga, um dos edifícios religiosos mais importantes de Portugal. O Santuário do Bom Jesus de Braga, um complexo religioso com escadarias barrocas, é outro dos pontos turísticos mais populares da cidade. A Universidade do Minho, uma das mais prestigiadas universidades portuguesas, também está localizada em Braga.",
            email: "happynewcar.braga@happynewcar.pt",
            telefone: 258800500,
        },
        {
            name: "Lisboa",
            address: "Rua da Loja, 1011, Lisboa",
            imagem: "https://revistaazul.voeazul.com.br/wp-content/uploads/2023/03/Lisboa.jpg",
            descricao: "Lisboa é a capital de Portugal, com cerca de 500 mil habitantes. É uma cidade histórica e culturalmente rica, com muito para oferecer aos visitantes de todas as idades e interesses.\n" +
                "\n" +
                "A cidade é conhecida pelo seu centro histórico, um Património Mundial da UNESCO. O Castelo de São Jorge, um castelo medieval que domina a cidade, é um dos pontos turísticos mais populares de Lisboa. A Praça do Comércio, uma grande praça situada na zona ribeirinha da cidade, é um local de grande importância histórica e cultural. O Chiado, um bairro boémio situado no centro da cidade, é um local ideal para passear, fazer compras e apreciar a vida nocturna.",
            email: "happynewcar.lisboa@happynewcar.pt",
            telefone: 258800400,
        },
    ];*/

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

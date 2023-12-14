import React, { useState } from 'react';
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
}

const generateRandomPrice = () => {
    const randomPrice = (Math.random() * (150 - 50) + 50).toFixed(2);
    return `€${randomPrice}`;
};

const Frota: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const [showModal, setShowModal] = useState(false);
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);

    const carsByCategory = {
        Sedan: [
            {
                marca: "Volkswagen",
                modelo: "Jetta",
                descricao: "O Jetta é um carro sedan médio da Volkswagen. Ele possui um motor 1.4 TSI de 150 cv, uma transmissão automática de 6 velocidades e um consumo médio de 6,0 litros por 100 km.",
                informacao: "O Jetta está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Volkswagen_Jetta_VII_IMG_2964.jpg/1920px-Volkswagen_Jetta_VII_IMG_2964.jpg",
                loja : "Viana do Castelo"
            },
            {
                marca: "Fiat",
                modelo: "Cronos",
                descricao: "O Cronos é um carro sedan compacto da Fiat. Ele possui um motor 1.3 Firefly de 109 cv, uma transmissão manual de 5 velocidades ou automática de 6 velocidades e um consumo médio de 5,5 litros por 100 km.",
                informacao: "O Cronos está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://upload.wikimedia.org/wikipedia/commons/1/16/Fiat_Cronos_1.8_16V_E.Torq_Precision.jpg",
                loja : "Porto"
            },
            {
                marca: "Chevrolet",
                modelo: "Onix Plus",
                descricao: "O Onix Plus é um carro sedan compacto da Chevrolet. Ele possui um motor 1.0 Turbo de 116 cv, uma transmissão manual de 6 velocidades ou automática de 6 velocidades e um consumo médio de 5,5 litros por 100 km.",
                informacao: "O Onix Plus está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/09/fgd_9712.tif_-e1569946637718.jpg?quality=70&strip=info",
                loja : "Braga"
            },
            {
                marca: "Hyundai",
                modelo: "HB20S",
                descricao: "O HB20S é um carro sedan compacto da Hyundai. Ele possui um motor 1.0 Turbo de 120 cv, uma transmissão manual de 6 velocidades ou automática de 6 velocidades e um consumo médio de 5,5 litros por 100 km.",
                informacao: "O HB20S está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/2023_Hyundai_HB20_1.0_T-GDi_Platinum_Plus_%28Brazil%29_front_view_02.png/1920px-2023_Hyundai_HB20_1.0_T-GDi_Platinum_Plus_%28Brazil%29_front_view_02.png",
                loja : "Lisboa"
            },
            {
                marca: "Toyota",
                modelo: "Corolla",
                descricao: "O Corolla é um carro sedan médio da Toyota. Ele possui um motor 2.0 aspirado de 165 cv, uma transmissão automática de CVT e um consumo médio de 6,5 litros por 100 km.",
                informacao: "O Corolla está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/2019_Toyota_Corolla_XSE_%28MZEA12L%29_in_Blue_Flame%2C_front_left.jpg/1920px-2019_Toyota_Corolla_XSE_%28MZEA12L%29_in_Blue_Flame%2C_front_left.jpg",
                loja : "Viana do Castelo"
            },
            {
                marca: "Honda",
                modelo: "Civic",
                descricao: "O Civic é um carro sedã médio da Honda. Ele possui um motor 1.5 Turbo de 173 cv, uma transmissão automática de CVT e um consumo médio de 6,0 litros por 100 km.",
                informacao: "O Civic está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2017_Honda_Civic_SR_VTEC_1.0_Front.jpg/1920px-2017_Honda_Civic_SR_VTEC_1.0_Front.jpg",
                loja : "Porto"
            }
            ],
        Desportivo: [
            {
                marca: "Audi",
                modelo: "RS 3",
                descricao: "O RS 3 é um carro esportivo compacto da Audi. Ele possui um motor 2.5 TFSI de 400 cv, uma transmissão automática de 7 velocidades e um consumo médio de 7,5 litros por 100 km.",
                informacao: "O RS 3 está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://cdn.easysite.pt/pub/12777/1122893/EDN_NCAUTO_24223270-0.jpg",
                loja : "Braga"
            },
            {
                marca: "BMW",
                modelo: "M2",
                descricao: "O M2 é um carro esportivo compacto da BMW. Ele possui um motor 3.0 TwinPower Turbo de 410 cv, uma transmissão manual de 6 velocidades ou automática de 8 velocidades e um consumo médio de 8,0 litros por 100 km.",
                informacao: "O M2 está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://www.motor24.pt/files/2019/11/bmw-m2-cs.jpg",
                loja : "Lisboa"
            },
            {
                marca: "Mercedes-AMG",
                modelo: "A45 S",
                descricao: "O A45 S é um carro esportivo compacto da Mercedes-AMG. Ele possui um motor 2.0 Turbo de 421 cv, uma transmissão automática de 8 velocidades e um consumo médio de 7,5 litros por 100 km.",
                informacao: "O A45 S está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://auto-drive.pt/wp-content/uploads/2020/04/posaidon-mercedes-amg-a45-with-518-hp-1.jpg",
                loja : "Viana do Castelo"
            },
            {
                marca: "Porsche",
                modelo: "718 Cayman",
                descricao: "O 718 Cayman é um carro esportivo compacto da Porsche. Ele possui um motor 2.0 Turbo de 300 cv ou 350 cv, uma transmissão manual de 6 velocidades ou automática de 7 velocidades e um consumo médio de 7,0 a 7,5 litros por 100 km.",
                informacao: "O 718 Cayman está disponível nas cores preto, branco, vermelho, azul, verde e amarelo.",
                precodiario: generateRandomPrice(),
                imagem: "https://hips.hearstapps.com/hmg-prod/images/718-style-edition-18-1667334774.jpg?crop=0.598xw:0.671xh;0.244xw,0.0841xh&resize=768:*",
                loja : "Porto"
            },
            {
                marca: "Audi",
                modelo: "RS Q8",
                descricao: "O RS Q8 é um carro esportivo SUV da Audi. Ele possui um motor 4.0 TFSI de 600 cv, uma transmissão automática de 8 velocidades e um consumo médio de 11,0 litros por 100 km.",
                informacao: "O RS Q8 está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://auto-drive.pt/wp-content/uploads/2022/04/08.webp",
                loja : "Braga"
            }
        ],
        SUV: [
            {
                marca: "Audi",
                modelo: "Q3",
                descricao: "O Q3 é um SUV compacto da Audi. Ele possui um motor 1.4 TSI de 150 cv, uma transmissão automática de 7 velocidades e um consumo médio de 7,0 litros por 100 km.",
                informacao: "O Q3 está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://cf-cdn-v6-api.audi.at/files/951084a2348cbbfcbfa37fcfc84d5d841ae30477/f671e38e-4174-4e19-a2a1-5d955c40f620/1920x1080-audi-q3-ecirgbv22018audiq3stjohnsal14nosign?imwidth=768",
                loja: "Porto"
            },
            {
                marca: "BMW",
                modelo: "X1",
                descricao: "O X1 é um SUV compacto da BMW. Ele possui um motor 2.0 TwinPower Turbo de 184 cv, uma transmissão automática de 8 velocidades e um consumo médio de 7,5 litros por 100 km.",
                informacao: "O X1 está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/BMW_U11_1X7A6826.jpg/1920px-BMW_U11_1X7A6826.jpg",
                loja: "Braga"
            },
            {
                marca: "Mercedes-Benz",
                modelo: "GLA",
                descricao: "O GLA é um SUV compacto da Mercedes-Benz. Ele possui um motor 1.3 Turbo de 160 cv, uma transmissão automática de 7 velocidades e um consumo médio de 6,5 litros por 100 km.",
                informacao: "O GLA está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mercedes-Benz_H247_IMG_2800.jpg/1280px-Mercedes-Benz_H247_IMG_2800.jpg",
                loja: "Viana do Castelo"
            },
            {
                marca: "Volkswagen",
                modelo: "T-Cross",
                descricao: "O T-Cross é um SUV compacto da Volkswagen. Ele possui um motor 1.0 TSI de 116 cv, uma transmissão manual de 6 velocidades ou automática de 6 velocidades e um consumo médio de 6,0 litros por 100 km.",
                informacao: "O T-Cross está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/2019_Volkswagen_T-Cross_First_Edition_TSi_1.0.jpg/1920px-2019_Volkswagen_T-Cross_First_Edition_TSi_1.0.jpg",
                loja: "Lisboa"
            },
            {
                marca: "Peugeot",
                modelo: "2008",
                descricao: "O 2008 é um SUV compacto da Peugeot. Ele possui um motor 1.2 PureTech de 110 cv, uma transmissão manual de 6 velocidades ou automática de 6 velocidades e um consumo médio de 5,5 litros por 100 km.",
                informacao: "O 2008 está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/2020_Peugeot_2008_Allure_Front.jpg/1920px-2020_Peugeot_2008_Allure_Front.jpg",
                loja: "Porto"
            },
        ],
        Eletrico: [
            {
                marca: "Tesla",
                modelo: "Model 3",
                descricao: "O Model 3 é um carro elétrico compacto da Tesla. Ele possui um motor elétrico de 286 cv, uma bateria de 58 kWh e um alcance de 460 km.",
                informacao: "O Model 3 está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgc9TuB0VRlXBTMqS9ZX8G-ohe_9QIccgYlWXuXuqvplCI_qYaTUB78aUeCIk4zu97nIPGgZjZpgjFanqCh5QREuEmq7fROlwS7MyDzB2ar4ud0NGNhR5SWihnIvSxB2V_T5Qe3u9aismr_qXhrflwVfUIyP11hSYUBYY0wjrgh9hbXAXo3O2MqOOmfqXID/s1600/model3highland.jpg",
                loja: "Viana do Castelo"
            },
            {
                marca: "Volkswagen",
                modelo: "ID.3",
                descricao: "O ID.3 é um carro elétrico compacto da Volkswagen. Ele possui um motor elétrico de 204 cv, uma bateria de 58 kWh e um alcance de 420 km.",
                informacao: "O ID.3 está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://bordalo.observador.pt/v2/rs:fill:900/c:750:750:nowe:383:0/q:86/plain/https://s3.observador.pt/wp-content/uploads/2021/01/25095205/volkswagen-id3-2020-2-14-min.jpg",
                loja: "Lisboa"
            },
            {
                marca: "Hyundai",
                modelo: "Ioniq 5",
                descricao: "O Ioniq 5 é um carro elétrico compacto da Hyundai. Ele possui um motor elétrico de 218 cv, uma bateria de 77,4 kWh e um alcance de 480 km.",
                informacao: "O Ioniq 5 está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://www.razaoautomovel.com/wp-content/uploads/2021/03/hyundai_ioniq_5_57-1_925x520_acf_cropped-925x520.jpeg",
                loja: "Braga"
            },
            {
                marca: "Nissan",
                modelo: "Leaf",
                descricao: "O Leaf é um carro elétrico compacto da Nissan. Ele possui um motor elétrico de 150 cv, uma bateria de 40 kWh e um alcance de 270 km.",
                informacao: "O Leaf está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://live.staticflickr.com/65535/52245896377_4caef3377c_b.jpg",
                loja: "Viana do Castelo"
            },
            {
                marca: "Peugeot",
                modelo: "e-208",
                descricao: "O e-208 é um carro elétrico compacto da Peugeot. Ele possui um motor elétrico de 136 cv, uma bateria de 50 kWh e um alcance de 340 km.",
                informacao: "O e-208 está disponível nas cores preto, branco, vermelho e azul.",
                precodiario: generateRandomPrice(),
                imagem: "https://bordalo.observador.pt/v2/rs:fill:900/c:1443:1443:nowe:587:0/q:86/plain/https://s3.observador.pt/wp-content/uploads/2022/09/27123600/peugeot-208-2022-087-fr-632daefee2312-6332a2e7f055e.jpeg",
                loja: "Porto"
            },
        ],
    };

    const handleOpenModal = (car: Car) => {
        setSelectedCar(car);
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

                {Object.entries(carsByCategory).map(([category, carList]) => (
                    <IonList key={category}>
                        <IonItem>
                            <IonTitle>{category}</IonTitle>
                        </IonItem>
                        {carList.map((car, index) => (
                            <IonItem key={index}>
                                <IonCard>
                                    <IonImg src={car.imagem}></IonImg>
                                        <IonCardHeader>
                                            <IonCardTitle>{car.marca}</IonCardTitle>
                                            <IonCardSubtitle>{car.modelo}</IonCardSubtitle>
                                        </IonCardHeader>
                                    <IonCardContent><IonButton color={"red"} onClick={() => handleOpenModal(car)}>Mais informações</IonButton></IonCardContent>
                                </IonCard>
                            </IonItem>
                        ))}
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
                                        <IonLabel><p>Disponivel na seguinte loja: {selectedCar.loja}</p></IonLabel>
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
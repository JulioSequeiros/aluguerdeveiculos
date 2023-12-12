interface Carro {
    id: number;
    modelo: string;
    marca: string;
    categoria: string;
}

const getCarro = (): Carro[] => [
    {
        "id" : 1,
        "marca": "Toyata",
        "modelo": "Yaris",
        "categoria": "SUV"
    },
    {
        "id" : 2,
        "marca": "Honda",
        "modelo": "City",
        "categoria": "Sedan"
    },
    {
        "id" : 3,
        "marca": "Honda",
        "modelo": "City",
        "categoria": "Desportivo"
    },
    {
        "id" : 4,
        "marca": "Honda",
        "modelo": "City",
        "categoria": "Sedan"
    },
    {
        "id" : 5,
        "marca": "Honda",
        "modelo": "City",
        "categoria": "Suv"
    },
    {
        "id" : 6,
        "marca": "Honda",
        "modelo": "City",
        "categoria": "Mota"
    },
    {
        "id" : 7,
        "marca": "Honda",
        "modelo": "City",
        "categoria": "Utiliario"
    },
    {
        "id" : 8,
        "marca": "Honda",
        "modelo": "City",
        "categoria": "Desporitvo"
    },
    ];
    export {getCarro};

/*
[
    {
        "Nome": "Loja de Viana",
        "Lat": "",
        "Long": "",
        "Imagem": "url da imagem",
        "carros": [
            {
                "Marca": "Ford",
                "Modelo": "Mustang",
                "ValorDia": "50euros",
            },
            {
                "Marca": "Chevrolet",
                "Modelo": "Camaro",
                "ValorDia": "50euros",
            }
        ]
    },
    {
        "Nome": "Loja do Porto",
        "Lat": "",
        "Long": "",
        "Imagem": "url da imagem",
        "carros": [
            {
                "Marca": "Ford",
                "Modelo": "Mustang",
                "ValorDia": "50euros",
            },
            {
                "Marca": "Chevrolet",
                "Modelo": "Camaro",
                "ValorDia": "50euros",
            },
            {
                "Marca": "Ferrari",
                "Modelo": "L",
                "ValorDia": "50euros",
            }
        ]
    }
]
*/

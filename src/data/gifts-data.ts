import type { CatalogItems, Gift } from "../types/gifts.types";

import airFryerImage from "../assets/products/kitchen/air-fryer.webp";
import batedeiraImage from "../assets/products/kitchen/batedeira.webp";
import cafeteiraImage from "../assets/products/kitchen/cafeteira.webp";
import cooktopImage from "../assets/products/kitchen/cooktop.webp";
import espressoImage from "../assets/products/kitchen/espresso.webp";
import facasImage from "../assets/products/kitchen/facas.webp";
import jogoPanelasImage from "../assets/products/kitchen/jogo-panelas.webp";
import liquidificadorImage from "../assets/products/kitchen/liquidificador.webp";
import microondasImage from "../assets/products/kitchen/microondas.webp";
import sanduicheiraImage from "../assets/products/kitchen/sanduicheira.webp";
import aparadorImage from "../assets/products/living-room/aparador.webp";
import espelhoImage from "../assets/products/living-room/espelho.webp";
import estanteImage from "../assets/products/living-room/estante.webp";
import luminariaImage from "../assets/products/living-room/luminaria.webp";
import mesaCentroImage from "../assets/products/living-room/mesa-centro.webp";
import painelTvImage from "../assets/products/living-room/painel-tv.webp";
import poltronaImage from "../assets/products/living-room/poltrona.webp";
import rackImage from "../assets/products/living-room/rack.webp";
import smartTvImage from "../assets/products/living-room/smart-tv.webp";
import sofaRetratilImage from "../assets/products/living-room/sofa-retratil.webp";
import cabeceiraImage from "../assets/products/room/cabeceira.webp";
import cabideiroImage from "../assets/products/room/cabideiro.webp";
import camaQueenImage from "../assets/products/room/cama-queen.webp";
import colchaoImage from "../assets/products/room/colchao.webp";
import comodaImage from "../assets/products/room/comoda.webp";
import edredomImage from "../assets/products/room/edredom.webp";
import guardaRoupasImage from "../assets/products/room/guarda-roupas.webp";
import jogoLencolImage from "../assets/products/room/jogo-lencol.webp";
import luminariaMesaImage from "../assets/products/room/luminaria.webp";
import travesseirosImage from "../assets/products/room/travesseiros.webp";
import armarioBanheiroImage from "../assets/products/bathroom/armario.webp";
import cestoBanheiroImage from "../assets/products/bathroom/cesto.webp";
import difusorBanheiroImage from "../assets/products/bathroom/difusor.webp";
import lixeiraBanheiroImage from "../assets/products/bathroom/lixeira.webp";
import organizadorBanheiroImage from "../assets/products/bathroom/organizador.webp";
import portaPapelImage from "../assets/products/bathroom/porta-papel.webp";
import portaSaboneteImage from "../assets/products/bathroom/porta-sabonete.webp";
import prateleiraBanheiroImage from "../assets/products/bathroom/prateleira.webp";
import suporteToalhasImage from "../assets/products/bathroom/suporte.webp";
import toalhasImage from "../assets/products/bathroom/toalhas.webp";
import armarioLavanderiaImage from "../assets/products/laundry/armario.webp";
import aspiradorLavanderiaImage from "../assets/products/laundry/aspirador.webp";
import cestoLavanderiaImage from "../assets/products/laundry/cesto-organizador.webp";
import ferroLavanderiaImage from "../assets/products/laundry/ferro.webp";
import kitLimpezaImage from "../assets/products/laundry/kit-limpeza.webp";
import secadoraImage from "../assets/products/laundry/lava-seca.webp";
import maquinaLavarImage from "../assets/products/laundry/maquina-lavar.webp";
import roboAspiradorImage from "../assets/products/laundry/robo.webp";
import tabuaPassarImage from "../assets/products/laundry/tabua-passar.webp";
import vaporizadorLavanderiaImage from "../assets/products/laundry/vaporizador.webp";
import almofadasImage from "../assets/products/decoration/almofadas.webp";
import cachepotImage from "../assets/products/decoration/cachepot.webp";
import centroMesaImage from "../assets/products/decoration/centro-mesa.webp";
import esculturaImage from "../assets/products/decoration/escultura.webp";
import espelhoRedondoImage from "../assets/products/decoration/espelho.webp";
import luminariaDecoracaoImage from "../assets/products/decoration/luminaria.webp";
import mantaImage from "../assets/products/decoration/manta.webp";
import quadroImage from "../assets/products/decoration/quadro.webp";
import relogioParedeImage from "../assets/products/decoration/relogio.webp";
import vasoImage from "../assets/products/decoration/vaso.webp";
import arCondicionadoImage from "../assets/products/home-appliances/ar-condicionado.webp";
import bebedouroImage from "../assets/products/home-appliances/bebedouro.webp";
import climatizadorImage from "../assets/products/home-appliances/climatizador.webp";
import fornoEmbutidoImage from "../assets/products/home-appliances/forno.webp";
import freezerImage from "../assets/products/home-appliances/freezer.webp";
import frigobarImage from "../assets/products/home-appliances/frigobar.webp";
import geladeiraImage from "../assets/products/home-appliances/geladeira.webp";
import lavaLoucasImage from "../assets/products/home-appliances/lava-loucas.webp";
import purificadorImage from "../assets/products/home-appliances/purificador.webp";
import ventiladorImage from "../assets/products/home-appliances/ventilador.webp";
import alexaImage from "../assets/products/electronics/alexa.webp";
import caixaSomImage from "../assets/products/electronics/caixa de som.webp";
import foneBluetoothImage from "../assets/products/electronics/fone-bluetooth.webp";
import headphoneImage from "../assets/products/electronics/headphone.webp";
import kindleImage from "../assets/products/electronics/kindle.webp";
import monitorImage from "../assets/products/electronics/monitor.webp";
import notebookImage from "../assets/products/electronics/notebook.webp";
import smartwatchImage from "../assets/products/electronics/smartwatch.webp";
import soundbarImage from "../assets/products/electronics/soundbar.webp";
import tabletImage from "../assets/products/electronics/tablet.webp";
import bancoAltoImage from "../assets/products/gourmet/banco.webp";
import churrasqueiraImage from "../assets/products/gourmet/churrasqueira.webp";
import coolerImage from "../assets/products/gourmet/cooler.webp";
import espetosImage from "../assets/products/gourmet/espetos.webp";
import faqueiroImage from "../assets/products/gourmet/faqueiro.webp";
import jogoCoposImage from "../assets/products/gourmet/jogo-copos.webp";
import conjuntoPratosImage from "../assets/products/gourmet/jogo-pratos.webp";
import jogoTacasImage from "../assets/products/gourmet/jogo-tacas.webp";
import kitChurrascoImage from "../assets/products/gourmet/kit-churrasco.webp";
import tabuaCarneImage from "../assets/products/gourmet/tabua.webp";
import aluguelCarroImage from "../assets/products/honeymoon/aluguel.webp";
import cafeManhaEspecialImage from "../assets/products/honeymoon/cafe-manha.webp";
import hotelLuaDeMelImage from "../assets/products/honeymoon/hotel.webp";
import jantarRomanticoImage from "../assets/products/honeymoon/jantar.webp";
import passagensImage from "../assets/products/honeymoon/passagens.webp";
import passeioBarcoImage from "../assets/products/honeymoon/passeio-barco.webp";
import passeioBuggyImage from "../assets/products/honeymoon/passeio-buggy.webp";
import piqueniqueImage from "../assets/products/honeymoon/piquenique.webp";
import spaLuaDeMelImage from "../assets/products/honeymoon/spa.webp";
import tourGastronomicoImage from "../assets/products/honeymoon/tour.webp";

const catalog: CatalogItems[] = [
  {
    category: "Cozinha",
    items: [
      {
        item: "Air Fryer",
        image: airFryerImage,
      },
      {
        item: "Jogo de Panelas",
        image: jogoPanelasImage,
      },
      { item: "Cooktop", image: cooktopImage },
      { item: "Micro-ondas", image: microondasImage },
      { item: "Liquidificador", image: liquidificadorImage },
      {
        item: "Batedeira",
        image: batedeiraImage,
      },
      {
        item: "Sanduicheira",
        image: sanduicheiraImage,
      },
      { item: "Cafeteira", image: cafeteiraImage },
      {
        item: "Máquina de Café Espresso",
        image: espressoImage,
      },
      {
        item: "Jogo de Facas",
        image: facasImage,
      },
    ],
  },
  {
    category: "Sala",
    items: [
      { item: "Sofá Retrátil", image: sofaRetratilImage },
      { item: "Rack", image: rackImage },
      { item: "Painel para TV", image: painelTvImage },
      { item: "Mesa de Centro", image: mesaCentroImage },
      { item: "Luminária", image: luminariaImage },
      { item: "Poltrona", image: poltronaImage },
      { item: "Aparador", image: aparadorImage },
      { item: "Smart TV", image: smartTvImage },
      { item: "Estante", image: estanteImage },
      { item: "Espelho Decorativo", image: espelhoImage },
    ],
  },
  {
    category: "Quarto",
    items: [
      { item: "Cama Queen", image: camaQueenImage },
      { item: "Colchão", image: colchaoImage },
      { item: "Guarda-Roupa", image: guardaRoupasImage },
      { item: "Cabeceira", image: cabeceiraImage },
      { item: "Jogo de Lençol", image: jogoLencolImage },
      { item: "Edredom", image: edredomImage },
      { item: "Travesseiros", image: travesseirosImage },
      { item: "Cabideiro", image: cabideiroImage },
      { item: "Luminária de Mesa", image: luminariaMesaImage },
      { item: "Cômoda", image: comodaImage },
    ],
  },
  {
    category: "Banheiro",
    items: [
      { item: "Jogo de Toalhas", image: toalhasImage },
      { item: "Armário", image: armarioBanheiroImage },
      { item: "Kit Porta Sabonete", image: portaSaboneteImage },
      { item: "Cesto Organizador", image: cestoBanheiroImage },
      { item: "Prateleira", image: prateleiraBanheiroImage },
      { item: "Suporte para Toalhas", image: suporteToalhasImage },
      { item: "Lixeira", image: lixeiraBanheiroImage },
      { item: "Organizador", image: organizadorBanheiroImage },
      { item: "Porta Papel", image: portaPapelImage },
      { item: "Difusor de Ambiente", image: difusorBanheiroImage },
    ],
  },
  {
    category: "Lavanderia",
    items: [
      { item: "Máquina de Lavar", image: maquinaLavarImage },
      { item: "Secadora", image: secadoraImage },
      { item: "Tábua de Passar", image: tabuaPassarImage },
      { item: "Ferro de Passar", image: ferroLavanderiaImage },
      { item: "Cesto de Roupas", image: cestoLavanderiaImage },
      { item: "Aspirador", image: aspiradorLavanderiaImage },
      { item: "Robô Aspirador", image: roboAspiradorImage },
      { item: "Vaporizador", image: vaporizadorLavanderiaImage },
      { item: "Armário", image: armarioLavanderiaImage },
      { item: "Kit Limpeza", image: kitLimpezaImage },
    ],
  },
  {
    category: "Decoração",
    items: [
      { item: "Quadro Decorativo", image: quadroImage },
      { item: "Vaso", image: vasoImage },
      { item: "Escultura", image: esculturaImage },
      { item: "Centro de Mesa", image: centroMesaImage },
      { item: "Relógio de Parede", image: relogioParedeImage },
      { item: "Luminária", image: luminariaDecoracaoImage },
      { item: "Manta", image: mantaImage },
      { item: "Almofadas", image: almofadasImage },
      { item: "Cachepot", image: cachepotImage },
      { item: "Espelho Redondo", image: espelhoRedondoImage },
    ],
  },
  {
    category: "Eletrodomésticos",
    items: [
      { item: "Geladeira", image: geladeiraImage },
      { item: "Freezer", image: freezerImage },
      { item: "Máquina de Lavar Louça", image: lavaLoucasImage },
      { item: "Purificador", image: purificadorImage },
      { item: "Bebedouro", image: bebedouroImage },
      { item: "Forno Embutido", image: fornoEmbutidoImage },
      { item: "Frigobar", image: frigobarImage },
      { item: "Climatizador", image: climatizadorImage },
      { item: "Ventilador", image: ventiladorImage },
      { item: "Ar Condicionado", image: arCondicionadoImage },
    ],
  },
  {
    category: "Eletrônicos",
    items: [
      { item: "Notebook", image: notebookImage },
      { item: "Tablet", image: tabletImage },
      { item: "Kindle", image: kindleImage },
      { item: "Alexa", image: alexaImage },
      { item: "Caixa de Som", image: caixaSomImage },
      { item: "Soundbar", image: soundbarImage },
      { item: "Monitor", image: monitorImage },
      { item: "Headphone", image: headphoneImage },
      { item: "Fone Bluetooth", image: foneBluetoothImage },
      { item: "Smartwatch", image: smartwatchImage },
    ],
  },
  {
    category: "Área Gourmet",
    items: [
      { item: "Churrasqueira", image: churrasqueiraImage },
      { item: "Kit Churrasco", image: kitChurrascoImage },
      { item: "Jogo de Taças", image: jogoTacasImage },
      { item: "Jogo de Copos", image: jogoCoposImage },
      { item: "Faqueiro", image: faqueiroImage },
      { item: "Conjunto de Pratos", image: conjuntoPratosImage },
      { item: "Cooler", image: coolerImage },
      { item: "Espetos", image: espetosImage },
      { item: "Tábua de Carne", image: tabuaCarneImage },
      { item: "Banco Alto", image: bancoAltoImage },
    ],
  },
  {
    category: "Lua de Mel",
    items: [
      { item: "Passagens", image: passagensImage },
      { item: "Hotel", image: hotelLuaDeMelImage },
      { item: "Jantar Romântico", image: jantarRomanticoImage },
      { item: "Passeio de Barco", image: passeioBarcoImage },
      { item: "Passeio de Buggy", image: passeioBuggyImage },
      { item: "Café da Manhã Especial", image: cafeManhaEspecialImage },
      { item: "Aluguel de Carro", image: aluguelCarroImage },
      { item: "Spa", image: spaLuaDeMelImage },
      { item: "Tour Gastronômico", image: tourGastronomicoImage },
      { item: "Piquenique", image: piqueniqueImage },
    ],
  },
] as const;

const prices = [
  39.9, 49.9, 59.9, 69.9, 79.9, 89.9, 99.9, 119.9, 149.9, 179.9, 199.9, 249.9,
  299.9, 349.9, 399.9, 449.9, 499.9, 599.9, 699.9, 799.9, 899.9, 999.9, 1199.9,
  1499.9, 1799.9, 1999.9, 2499.9, 2999.9, 3499.9, 3999.9, 4999.9,
];

export const gifts: Gift[] = catalog.flatMap((category, categoryIndex) =>
  category.items.map((item, itemIndex) => {
    const id = categoryIndex * 15 + itemIndex + 1;

    return {
      id,
      name: item.item,
      description: `Um presente simbólico para nos ajudar a construir nosso novo lar.`,
      category: category.category,
      price: prices[id % prices.length],
      image: item.image ?? `/gifts/${id}.jpg`,
    };
  }),
);

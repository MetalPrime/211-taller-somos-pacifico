import React from 'react';
import './App.css';
import { DisplayImg } from '../../components/DisplayImg/DisplayImg';
import { SelectionElements } from '../../components/SelectionElements/SelectionElements';
import { HashRouter, Route, useHistory } from 'react-router-dom';
import { Amount } from '../../components/Amount/Amount';
import { Price } from '../../components/Price/Price';

const initialSelectors = [
  {
    id: 5,
    name: 'Articulo',
    display: false,
  },
  {
    id: 2,
    name: 'Color',
    display: false,
  },
  {
    id: 3,
    name: 'Material',
    display: false,
  },
  {
    id: 4,
    name: 'Diseño',
    display: false,
  },

];


const currentPrice = 0;

const options = [
  {
    label: 0,
    value: 0,
  },
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    label: 3,
    value: 3,
  },
  {
    label: 4,
    value: 4,
  },
  {
    label: 5,
    value: 5,
  },
  {
    label: 6,
    value: 6,
  },
];

const articleTypes = [
  {
    name: 'thermos',
    img: 'thermos.png',
    price: 15,
    icon: 'optionThermo.svg',
    colors: [
      {
        name: 'red',
        img: 'aosdas.jpg',
        price: 5
      },
      {
        name: 'blue',
        img: 'aosdas.jpg',
        price: 10
      }
    ],
    materials: [
      {
        name: 'aluminum',
        img: 'asdq12.jpg',
        price: 6
      },
      {
        name: 'plastic',
        img: 'sdfd.dfd',
        price: 12

      }
    ],
    design: [
      {
        name: 'design',
        img: 'sdfd.jfp',
        price: 10
      },
      {
        name: 'design',
        img: 'sdfd.jfp',
        price: 10
      }
    ]
  },
  {
    name: 'notebook',
    img: 'libreta.png',
    price: 20,
    icon: 'optionNote.svg',
    colors: [
      {
        name: 'black',
        img: 'aosdas.jpg',
        price: 10,
      },
      {
        name: 'white',
        img: 'aosdas.jpg',
        price: 10,
      }
    ],
    materials: [
      {
        name: 'plastic',
        img: 'sdfd.dfd',
        price: 10,
      },
      {
        name: 'leather',
        img: 'sdfd.dfd',
        price: 10,

      },
      {
        name: 'paper',
        img: 'sdfd.dfd',
        price: 10,

      }
    ],
    design: [
      {
        name: 'design',
        img: 'sdfd.jfp',
        price: 10,
      },
      {
        name: 'design',
        img: 'sdfd.jfp',
        price: 10,
      }
    ]
  },
  {
    name: 't-shirt',
    img: 'camisaBase.png',
    price: 25,
    icon: 'optionShirt.svg',
    colors: [
      {
        name: 'yellow',
        img: 'camisaAmarilla.png',
        icon : '#2d4179',
        price: 7
      },
      {
        name: 'blue',
        img: 'camisaAzul.png',
        icon : '#CAA937',
        price: 5
      },
      {
        name: 'black',
        img: 'camisaNegra.png',
        icon : '#000000',
        price: 2,
      },
      {
        name: 'white',
        img: 'camisaBase.png',
        icon : '#FFFFFF',
        price: 0,
      },
    ],
    materials: [
      {
        name: 'cotton',
        img: 'sdfd.dfd',
        price: 5

      },
      {
        name: 'poliester',
        img: 'sdfd.dfd',
        price: 5

      }
    ],
    design: [
      {
        name: 'design',
        img: 'sdfd.jfp',
        price: 5
      },
      {
        name: 'design',
        img: 'sdfd.jfp',
        price: 5
      }
    ]
  },
];

export const App = () => {

  const [config, setConfig] = React.useState({
    type: null as null | string,
    color: null as null | string,
    material: null as null | string,
    design: null as null | string,
  });

  const [configImg, setConfigImg] = React.useState({
    type: null as null | string,
    color: null as null | string,
    material: null as null | string,
    design: null as null | string,
  });

  const [displays, setDisplays] = React.useState(initialSelectors);

  const [itemPrice, setitemPrice] = React.useState({
    typePrice: null as null | number,
    colorPrice: null as null | number,
    materialPrice: null as null | number,
    designPrice: null as null | number,
  });

  const [price, setPrice] = React.useState(currentPrice);

  const [amount, setAmount] = React.useState(0);

  const history = useHistory();

  const handleDisplay = (id: number) => {
    const copy = initialSelectors.slice();
    const index = copy.findIndex((elem) => {
      return elem.id === id;
    });
    //console.log(copy[index].display);

    if (!copy[index].display) {
      copy[index].display = true;
      setDisplays(copy);
    } else {
      copy[index].display = false;
      setDisplays(copy);
    }

  }





  React.useEffect(() => {
    setPrice(amount * ((itemPrice.colorPrice != null ? itemPrice.colorPrice : 0) + (itemPrice.designPrice != null ? itemPrice.designPrice : 0) + (itemPrice.materialPrice != null ? itemPrice.materialPrice : 0) + (itemPrice.typePrice != null ? itemPrice.typePrice : 0)));

  }, [amount, itemPrice]);


  const handleBuy = () => {
    history.push('/comprar');
  }

  const handleRecommend = () => {
    history.push('/recomendar');
  }

  return (
    <main >
      <HashRouter basename={process.env.PUBLIC_URL}>


        <Route path="/" exact render={
          () =>
            <section className='App'>
              <article className='App__commands'>
                {/* <p> config: {JSON.stringify(itemPrice)}</p> */}
                <section >
                  {
                    initialSelectors.map(({ id, name, display }) => {

                      const showOptions = () => {
                        handleDisplay(id);

                      }

                      return (
                        <SelectionElements
                          name={name}
                          displays={display}
                          key={id}
                          showOptions={showOptions}
                          list={articleTypes}
                          config={config}
                          setConfig={setConfig}
                          price={itemPrice}
                          setPrice={setitemPrice}
                          imgSrc={configImg}
                          setImgSrc={setConfigImg}


                        ></SelectionElements>
                      );
                    }

                    )
                  }
                </section>
                <section className='App__update'>
                  <Amount
                    list={options}
                    setAmount={setAmount}

                  ></Amount>
                  <Price
                    currentPrice={price}
                  ></Price>
                </section>
                <section className='App__btns'>

                  <button className="btn btn__recommend" onClick={handleRecommend}>Recomendar</button>
                  <button className="btn btn__buy" onClick={handleBuy}>Comprar</button>
                </section>
              </article>
              <article className='App__display'>
                <DisplayImg
                  isNone={false}
                  mainItemColor={configImg.color}
                  mainItemDesign={configImg.design}
                  mainItemMaterial={configImg.material}
                  mainItemType={configImg.type}
                ></DisplayImg>
              </article>
            </section>


        } />

        <Route path="/recomendar" render={
          () =>
            <h1>Recomendar</h1>
        } />

        <Route path="/comprar" render={
          () =>
            <h1>Comprar</h1>
        } />

      </HashRouter>
    </main>
  );
}
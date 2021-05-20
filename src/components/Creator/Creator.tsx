import * as React from 'react';
import { useContext } from 'react';
import './Creator.css';
import { Amount } from '../../components/Amount/Amount';
import { Price } from '../../components/Price/Price';
import { DisplayImg } from '../../components/DisplayImg/DisplayImg';
import { SelectionElements } from '../../components/SelectionElements/SelectionElements';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { ProductType } from '../../utils/ProductType';
import { ProductContext } from '../../utils/ProductContext';


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
    img: 'thermo/thermoBase.png',
    price: 15,
    icon: 'optionThermo.svg',
    colors: [
      {
        name: 'red',
        img: 'thermo/thermoRojo.png',
        icon : '#9f0a1c',
        price: 5
      },
      {
        name: 'blue',
        img: 'thermo/thermoAzul.png',
        icon : '#283382',
        price: 10
      },
      {
        name: 'orange',
        img: 'thermo/thermoNaranja.png',
        icon : '#cb651a',
        price: 10
      }
    ],
    materials: [
      {
        name: 'aluminum',
        img: 'thermo/thermoAluminio.png',
        price: 12
      },
      {
        name: 'plastic',
        img: 'thermo/thermoBase.png',
        price: 6

      }
    ],
    design: [
      {
        name: 'Mira ve',
        img: 'shirt/diseñoMiraVe.png',
        icon: 'shirt/MIRAVE.png',
        price: 5
      },
      {
        name: 'Gato',
        img: 'shirt/diseñoGato.png',
        icon: 'shirt/GATO.png',
        price: 5
      },
      {
        name: 'Ya te Caigo',
        img: 'shirt/diseñoYaTeCaigo.png',
        icon: 'shirt/YATECAIGO.png',
        price: 5
      }
    ]
  },
  {
    name: 'notebook',
    img: 'notebook/notebookBase.png',
    price: 20,
    icon: 'optionNote.svg',
    colors: [
      {
        name: 'yellow',
        img: 'notebook/notebookAmarilla.png',
        icon: '#CAA937',
        price: 7
      },
      {
        name: 'blue',
        img: 'notebook/notebookBlue.png',
        icon: '#2d4179',
        price: 5
      },
      {
        name: 'black',
        img: 'notebook/notebookNegro.png',
        icon: '#000000',
        price: 2,
      },
      {
        name: 'white',
        img: 'notebook/notebookBase.png',
        icon: '#FFFFFF',
        price: 0,
      },
      {
        name: 'orange',
        img: 'notebook/notebookNaranja.png',
        icon: '#cb651a',
        price: 0,
      },
    ],
    materials: [
      {
        name: 'leather',
        img: 'notebook/notebookLeather.png',
        price: 10,
      },
      {
        name: 'recycle',
        img: 'notebook/notebookRecycle.png',
        price: 2,

      },
      {
        name: 'paper',
        img: 'notebook/notebookBase.png',
        price: 0,

      },
    ],
    design: [
      {
        name: 'Mira ve',
        img: 'shirt/diseñoMiraVe.png',
        icon: 'shirt/MIRAVE.png',
        price: 5
      },
      {
        name: 'Gato',
        img: 'shirt/diseñoGato.png',
        icon: 'shirt/GATO.png',
        price: 5
      },
      {
        name: 'Ya te Caigo',
        img: 'shirt/diseñoYaTeCaigo.png',
        icon: 'shirt/YATECAIGO.png',
        price: 5
      }
    ]
  },
  {
    name: 't-shirt',
    img: 'shirt/camisaBase.png',
    price: 25,
    icon: 'optionShirt.svg',
    colors: [
      {
        name: 'yellow',
        img: 'shirt/camisaAmarilla.png',
        icon: '#CAA937',
        price: 7
      },
      {
        name: 'blue',
        img: 'shirt/camisaAzul.png',
        icon: '#2d4179',
        price: 5
      },
      {
        name: 'black',
        img: 'shirt/camisaNegra.png',
        icon: '#000000',
        price: 2,
      },
      {
        name: 'white',
        img: 'shirt/camisaBase.png',
        icon: '#FFFFFF',
        price: 0,
      },
    ],
    materials: [
      // {
      //   name: 'cotton',
      //   img: 'sdfd.dfd',
      //   price: 5

      // },
      // {
      //   name: 'poliester',
      //   img: 'sdfd.dfd',
      //   price: 5

      // }
    ],
    design: [
      {
        name: 'Mira ve',
        img: 'shirt/diseñoMiraVe.png',
        icon: 'shirt/MIRAVE.png',
        price: 5
      },
      {
        name: 'Gato',
        img: 'shirt/diseñoGato.png',
        icon: 'shirt/GATO.png',
        price: 5
      },
      {
        name: 'Ya te Caigo',
        img: 'shirt/diseñoYaTeCaigo.png',
        icon: 'shirt/YATECAIGO.png',
        price: 5
      }
    ]
  },
];
interface Creator {
  onFinish: (newProduct: ProductType) => void;
}

export const Creator: React.FC<Creator> = ({ onFinish }) => {




  const { id } = useParams<{ id?: string }>();
  

  const { products } = useContext(ProductContext);



  const productEdit = products.find((product) => {
    console.log(product.id + '' === id);
    return product.id + '' === id});

  const editError = id && !productEdit;



  const [product, setProduct] = React.useState<ProductType>(productEdit || {
    id: Date.now(),
    setConfigTypeName: "",
    setConfigTypeImage: "",
    setConfigTypePrice: 0,
    setConfigColorName: "",
    setConfigColorImage: "",
    setConfigColorPrice: 0,
    setConfigMaterialName: "",
    setConfigMaterialImage: "",
    setConfigMaterialPrice: 0,
    setConfigDesignName: "",
    setConfigDesignImage: "",
    setConfigDesignPrice: 0,
    price: 0,
  }
  )





  const history = useHistory();



  const [config, setConfig] = React.useState( {
    type: null as null | string ,
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
    type: null as null | number,
    color: null as null | number,
    material: null as null | number,
    design: null as null | number,
  });

  const [price, setPrice] = React.useState(currentPrice);

  const [amount, setAmount] = React.useState(0);

  const handleDisplay = (id: number) => {
    const copy = initialSelectors.slice();
    const index = copy.findIndex((elem) => {
      return elem.id === id;
    });

    if (!copy[index].display) {
      copy[index].display = true;
      setDisplays(copy);
    } else {
      copy[index].display = false;
      setDisplays(copy);
    }

  }





  React.useEffect(() => {
    setPrice(amount * ((itemPrice.color != null ? itemPrice.color : 0) + (itemPrice.design != null ? itemPrice.design : 0) + (itemPrice.material != null ? itemPrice.material : 0) + (itemPrice.type != null ? itemPrice.type : 0)));
    setProduct((prev) => ({
      ...prev,
      price: price,
    }));
  }, [amount, itemPrice]);


  const handleBuy = () => {

    onFinish(product);
    history.push('/comprar');
  }

  const handleRecommend = () => {
    history.push('/recomendar');
  }
  //if (editError) return <Redirect to="/newProduct" />
  return (
    <section className='Creator'>
      <section className='App'>
        <article className='App__commands'>
          <section className='App__options'>
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
                    product={product}
                    setProduct={setProduct}

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
            mainItemColor={product.setConfigColorImage}
            mainItemDesign={product.setConfigDesignImage}
            mainItemMaterial={product.setConfigMaterialImage}
            mainItemType={product.setConfigTypeImage}
          ></DisplayImg>
        </article>
      </section>

    </section>
  );
}
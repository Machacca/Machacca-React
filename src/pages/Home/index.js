// En material existe un tag llamando container
/*import { useEffect, useState } from "react";
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { getDataFromPokemon } from "../../service";
import PokemonDetail from "../../components/PokemonDetail";
// vamos a ver como pode ejecutar la funcion que se encargar de traer a los
// pokemones*/

import { Container, Grid } from "@mui/material";
import Chart from "react-apexcharts";



const Home = () => {
  const chartData = {
    series: [
      {
        name: "Tech Development",
        data: [10, 30, 20, 14, 66, 32, 16],
      },
    ],
    options: {
      xaxis: {
        categories: ["JS", "CSS", "HTML", "Firebase", "NodeJS", "React", "Vue"],
      },
      fill: {
        colors: ["#fffaaa"],
      },
      // grid: {
      //   row: {
      //     colors: ["#F44336", "#E91E63", "#9C27B0"],
      //   },
      //   column: {
      //     colors: ["#F44336", "#E91E63", "#9C27B0"],
      //   },
      // },
      chart: {
        zoom: {
          enabled: true,
          type: "x",
          autoScaleYaxis: false,
          zoomedArea: {
            fill: {
              color: "#90CAF9",
              opacity: 0.4,
            },
            stroke: {
              color: "#0D47A1",
              opacity: 0.4,
              width: 1,
            },
          },
        },
      },
    },
  };
/*  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  // vamos a crear una variable la cual se encargue de guardar la lista de pokemones
  const [pokemons, setPokemon] = useState([]);

  // debemos crear una funcion la cual se encargue de ejecutar a getDataFromPokemon y
  // la data que retorne esa funcion guardarla usnado setPokemon
  const fetchPokemonList = async () => {
    const listPokemones = await getDataFromPokemon();
    // ahora como ya recuperamos la lista de los pokemons hay usar
    // la funcion setPokemon para poder guardar esa lista en pokemons
    console.log("listPokemones.results", listPokemones.results);
    setPokemon(listPokemones.results);
  };

  // en react existe una funcion llamada useEffect la cual se ejecuta cuando la pagina
  // esta iniciando, vamos a usar useEffect si queremos ejecutar algo al
  // inicio de la aplicacion
  // La estructura de useEffect es la siguiente
  useEffect(() => {
    // aca llamamos a la funcion que queremos ejecutar
    fetchPokemonList();
    //!IMPORTANTE por ahora en los useEffect debemos colocar un array vacio
    //! esto se hace para evitar un bucle infinio, si no colocamos el array vacio
    //! la funcion que este dentro de useEffect se llamada n veces de forma infinita
  }, []);*/

  return (
    <Container>
        <Grid>
        <h1>Home</h1>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={500}
          />
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height={500}
          />
          <Chart
            options={{
              labels: ["A", "B", "C", "D", "E"],
              fill: {
                colors: ["#addccc", "#f01", "#F44336", "#E91E63", "#ccaadd"],
              },
              dataLabels: {
                style: {
                  colors: ["#addccc", "#f01", "#F44336", "#E91E63", "#ccaadd"],
                },
              },
            }}
            series={[44, 55, 41, 17, 15]}
            type="donut"
            width={500}
        />
      </Grid>
    </Container>
  );
};

export default Home;

// this.state = {
//   series: [
//     {
//       name: "Inflation",
//       data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
//     },
//   ],
//   options: {
//     chart: {
//       height: 350,
//       type: "bar",
//     },
//     plotOptions: {
//       bar: {
//         borderRadius: 10,
//         dataLabels: {
//           position: "top", // top, center, bottom
//         },
//       },
//     },
//     dataLabels: {
//       enabled: true,
//       formatter: function (val) {
//         return val + "%";
//       },
//       offsetY: -20,
//       style: {
//         fontSize: "12px",
//         colors: ["#304758"],
//       },
//     },

//     xaxis: {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//       position: "top",
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//       crosshairs: {
//         fill: {
//           type: "gradient",
//           gradient: {
//             colorFrom: "#D8E3F0",
//             colorTo: "#BED1E6",
//             stops: [0, 100],
//             opacityFrom: 0.4,
//             opacityTo: 0.5,
//           },
//         },
//       },
//       tooltip: {
//         enabled: true,
//       },
//     },
//     yaxis: {
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//       labels: {
//         show: false,
//         formatter: function (val) {
//           return val + "%";
//         },
//       },
//     },
//     title: {
//       text: "Monthly Inflation in Argentina, 2002",
//       floating: true,
//       offsetY: 330,
//       align: "center",
//       style: {
//         color: "#444",
//       },
//     },
//   },
// };
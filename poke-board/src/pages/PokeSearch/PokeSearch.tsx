import React, { useEffect, useState } from "react";
import { PokeCard } from "../../components/PokeCard/PokeCard";
import { BasicPokemon } from "../../types/BasicPokemon";
import { TablePagination, TextField, Autocomplete } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import { dataFetch } from "../../util/dataFetch/dataFetch";

/**
 * Page to search and display pokemon characters
 * @returns
 */
export function PokeSearch() {
  //Pagination current page
  const { currentPage } = useParams<{ currentPage?: number | any }>();
  //Pokemon mited list for pagination
  const [pokemonList, setPokemonList] = useState<BasicPokemon[]>([]);
  //Pokemon full list fetched from PokeApi
  const [pokemonFullList, setPokemonFullList] = useState<BasicPokemon[]>([]);
  //Pagination page
  const [page, setPage] = useState<number>(currentPage ? currentPage : 1);
  //Pagination Page size
  const [pageSize, setPageSize] = useState<number>(24);
  //Browser history
  const history = useHistory();

  /**
   * Fetch complete list of pokemon from pokeapi
   * Avoided server side pagination since call takes less to fetch complete list
   */
  const getPokemonData = () => {
    const pokeUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1124";
    dataFetch(pokeUrl)
      .then((data) => {
        if (data.results) {
          setPokemonFullList(data.results);
          setPokemonData(data.results, page);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * Filter Pokemon list
   * @param event
   */
  const filterPokeList = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredList: BasicPokemon[] = pokemonFullList.filter(
      (item: BasicPokemon) => {
        return item.name.includes(event.target.value);
      }
    );
    setPokemonData(filteredList, 1);
  };

  /**
   * On Autocomplete selection
   * @param pokemon
   */
  const onSearchSelection = (pokemon: BasicPokemon) => {
    const urlEle = pokemon.url.split("/");
    //Pokemon Id
    const pokeIndex = parseInt(urlEle[urlEle.length - 2]);
    selectPoke(pokeIndex);
  };

  /**
   * Set pokemon data for pagination
   * @param pokeList
   * @param currentPage
   */
  const setPokemonData = (pokeList: BasicPokemon[], currentPage: number) => {
    console.log(pokeList);
    const data = pokeList.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
    setPokemonList(data);
  };

  /**
   * Update url param as page changes
   * @param event
   * @param newPage
   */
  const pageHandler = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage + 1);
    history.push(`/search/${newPage + 1}`);
    setPokemonData(pokemonFullList, newPage + 1);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  /**
   * Navigate to Pokemon details page
   * @param pokeNum
   */
  const selectPoke = (pokeNum: number) => {
    console.log(pokeNum);
    history.push(`/pokemon/${pokeNum}`);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPageSize(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4">
          <img
            src={process.env.PUBLIC_URL + "/resource/images/poke-logo.png"}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="row search-container justify-content-center">
        <div className="col-6 topMargin-1x">
          <Autocomplete
            id="combo-box-demo"
            options={pokemonFullList}
            getOptionLabel={(option: BasicPokemon) => option.name}
            onChange={(event, option: any) => {
              onSearchSelection(option);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Pokemon"
                variant="outlined"
              />
            )}
            fullWidth
          />
        </div>
      </div>
      <div className="row">
        <div className="col-9" style={{ paddingTop: "1.5em" }}>
          Total - {pokemonFullList.length}
        </div>
        <div className="col-3">
          <TextField
            id="filled-name"
            label="Filter Pokemon"
            onChange={filterPokeList}
            fullWidth
          />
        </div>
      </div>
      <div className="row noMargin">
        {pokemonList.map((poke) => (
          <div className="col-2 card-holder">
            <PokeCard key={poke.url} pokemon={poke} clickHandler={selectPoke} />
          </div>
        ))}
      </div>
      <div>
        <TablePagination
          component="div"
          count={pokemonFullList.length}
          page={page - 1}
          onPageChange={pageHandler}
          rowsPerPage={pageSize}
          labelRowsPerPage=""
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[24, 48, 96]}
        ></TablePagination>
      </div>
    </div>
  );
}

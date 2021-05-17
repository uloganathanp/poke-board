import { Pokemon } from "../../types/Pokemon";
import { Stat } from "../../types/Stat";
import LinearProgress from "@material-ui/core/LinearProgress";

/**
 * Represetation component
 * @param param0 Pokemon object
 * @returns
 */
export function PokeStat({ pokemon }: { pokemon: Pokemon }) {
  return (
    <>
      <h5>Stats</h5>
      {pokemon.stat.map((stat: Stat) => (
        <div className="row">
          <div
            className="col-4 topMargin-1x"
            style={{ textTransform: "capitalize" }}
          >
            {stat.name}
          </div>
          <div className="col-8 topMargin-1x">
            <div className="row">
              <div className="col-10" style={{ paddingTop: "0.5em" }}>
                <LinearProgress
                  variant="determinate"
                  color="secondary"
                  value={stat.value}
                />
              </div>
              <div className="col-2">{stat.value}%</div>
            </div>
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col-4 topMargin-1x">Abilities</div>
        <div className="col-8 topMargin-1x">
          {pokemon.ability.map((ability: string) => (
            <span
              className="badge bg-info text-white"
              style={{ marginRight: "1em" }}
            >
              {ability}
            </span>
          ))}
        </div>
        <div className="col-4 topMargin-1x">Base Experience</div>
        <div className="col-8 topMargin-1x">
          <strong>{pokemon.base_experience}</strong>
        </div>
      </div>
    </>
  );
}

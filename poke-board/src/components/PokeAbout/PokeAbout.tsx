import { Pokemon } from "../../types/Pokemon";

/**
 * Representation component
 * @param param0 - Pokemon object
 * @returns
 */
export function PokeAbout({ pokemon }: { pokemon: Pokemon }) {
  return (
    <>
      <h5>About</h5>
      <div className="row">
        <div className="col-6 topMargin-1x">Base Happiness</div>
        <div className="col-6 topMargin-1x strong">
          {pokemon.base_happiness}
        </div>
        <div className="col-6 topMargin-1x">Capture Rate</div>
        <div className="col-6 topMargin-1x strong">{pokemon.capture_rate}</div>
        <div className="col-6 topMargin-1x">Habitat</div>
        <div className="col-6 topMargin-1x strong">{pokemon.habitat}</div>
        <div className="col-6 topMargin-1x">Growth Rate</div>
        <div className="col-6 topMargin-1x strong">{pokemon.growth_rate}</div>
        <div className="col-6 topMargin-1x">Shape</div>
        <div className="col-6 topMargin-1x strong">{pokemon.shape}</div>
        <div className="col-6 topMargin-1x">Gender Difference</div>
        <div className="col-6 topMargin-1x strong">
          {pokemon.has_gender_differences ? "Yes" : "No"}
        </div>
        <div className="col-6 topMargin-1x">Egg Groups</div>
        <div className="col-6 topMargin-1x">
          {pokemon.egg_groups.map((group: string) => (
            <span
              className="badge bg-warning"
              key={group}
              style={{ marginRight: "1em" }}
            >
              {group}
            </span>
          ))}
        </div>
        <div className="col-6 topMargin-1x">Hatch Counter</div>
        <div className="col-6 topMargin-1x strong">{pokemon.hatch_counter}</div>
      </div>
    </>
  );
}

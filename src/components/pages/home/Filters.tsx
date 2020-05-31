import React from "react";

import Icon from "../../shared/icon/Icon.tsx";

const Filters = () => {
  return (
    <div className="filters-container">
      <div className="filters-container__search-bar">
        <input type="text" name="text" />
        <a href="/" ><Icon icon={"search"} /></a>
      </div>
      <div className="filters-container__icons">
        <a href="/"><Icon icon={"divingMask"} /></a>
        <a href="/"><Icon icon={"grill"} /></a>
        <a href="/"><Icon icon={"cocktail"} /></a>
        <a href="/"><Icon icon={"palmTree"} /></a>
        <a href="/"><Icon icon={"tent"} /></a>
      </div>
    </div>
  );
}

export default Filters;
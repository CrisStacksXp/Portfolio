import { Hero } from "./scripts/_pages/hero/hero.js";
import { MoreInformation } from "./scripts/_pages/moreInformation/moreInformation.js";
import { dataJson } from "./scripts/util/json-data.js";

const { hero, ...allDatas } = dataJson;

new Hero(document.body, hero).init();
new MoreInformation(document.body, allDatas ).init();


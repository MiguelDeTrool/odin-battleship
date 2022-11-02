import "./styles/reset.css";
import "./styles/styles.scss";

import { gridMaker } from "./grid/grid";

gridMaker.fillGrid(".own .board");
gridMaker.fillGrid(".enemy .board");

import { CartTypes } from "../cart/types";

export interface HeaderProps {
  data: CartTypes;
  openMenu: boolean;
  onClick: () => void;
}

import { BiSupport, BiHomeSmile, BiShoppingBag } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";

export default () => [
  {
    icon: <BiHomeSmile size="27px" />,
    to: "/",
    type: "link",
  },
  {
    icon: <BiSupport size="27px" />,
    to: "/contact",
    type: "link",
  },
  {
    icon: <BiShoppingBag size="27px" />,
    type: "modal",
  },
  {
    icon: <VscSignOut size="27px" />,
    type: "action",
  },
];

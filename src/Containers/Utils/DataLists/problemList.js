import { BsFillCalendarCheckFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsFillLightningChargeFill } from "react-icons/bs";

const content = [
  {
    heading: "6-12 months to hire",
    paragraph:
      "With nearly 1 million unfilled developer positions in the US alone, building a team requires months of recruitment efforts and deep pockets.",
    icon: <BsFillCalendarCheckFill size={"3rem"} color={"#22c35e"} />,
  },
  {
    heading: "3x budget & timeline overrun",
    paragraph:
      'Development projects are notorious for running well past deadlines and budgets. Insiders refer to the "rule of pi" — multiply the original estimate by 3.14...',
    icon: <RiMoneyDollarCircleFill size={"4rem"} color={"#22c35e"} />,
  },
  {
    heading: "50% - 80% failure rate",
    paragraph:
      "Even small development efforts face complexity, technical hurdles, scope creep, and other project risks. Most attempts fail to launch a viable product.",
    icon: <BsFillLightningChargeFill size={"4rem"} color={"#22c35e"} />,
  },
];

export default content;

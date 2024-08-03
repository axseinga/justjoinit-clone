import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";

export const navLinks = [
  { href: "/", label: "Job offers" },
  { href: "/", label: "Top Companies" },
  { href: "/", label: "Geek" },
];

export const signInDropdownList = [
  {
    icon: <FaceOutlinedIcon fontSize="small" />,
    label: "Candidate zone",
    links: [
      { href: "/", label: "Sign in to Candidate's profile" },
      { href: "/", label: "Create an account at Candidate profile" },
    ],
  },
  {
    icon: <PersonSearchOutlinedIcon fontSize="small" />,
    label: "Recruiter zone",
    links: [
      { href: "/", label: "Sign in to Employer's profile" },
      { href: "/", label: "Create an account at Employer Panel" },
    ],
  },
];

export const currenciesLists = [
  { label: "PLN", value: "pln" },
  { label: "EUR", value: "eur" },
  { label: "USD", value: "usd" },
  { label: "GBP", value: "gbp" },
  { label: "CHF", value: "chf" },
  { label: "DEF", value: "def" },
];
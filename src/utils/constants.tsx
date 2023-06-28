import { DesignIcon, OptimizingIcon, ProblemsIcon } from "components/icons";
import ES1x1 from "country-flag-icons/react/1x1/ES";
import GB1x1 from "country-flag-icons/react/1x1/GB";
import ES from "country-flag-icons/react/3x2/ES";
import GB from "country-flag-icons/react/3x2/GB";
export const locales = ["en", "es"];

export const localesWithComponents = {
  en: {
    locale: "en",
    language: "English",
    component3x2: <GB style={{ width: "27px" }} title="English" />,
    component1x1: <GB1x1 title="English" />,
  },
  es: {
    locale: "es",
    language: "Spanish",
    component3x2: <ES title="Spanish" />,
    component1x1: <ES1x1 title="Spanish" />,
  },
};

export const DAPP_INIT_ROUTE = "/";

export const iconsServices = {
  mobile: <ProblemsIcon />,
  data_config: <DesignIcon />,
  config: <OptimizingIcon />,
};

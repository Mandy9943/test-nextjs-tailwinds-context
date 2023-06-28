import Link from "next/link";
import { useRouter } from "next/router";
import { localesWithComponents } from "utils/constants";

const LocaleItem = ({ locale, onClose }) => {
  const localeWithComponent = localesWithComponents[locale];

  const router = useRouter();

  const { pathname, query, asPath } = router;

  return (
    <Link href={{ pathname, query }} as={asPath} locale={locale}>
      <div
        className="flex items-center p-20px py-15px rounded-lg cursor-pointer"
        onClick={onClose}
      >
        <div className="rounded-full w-7 h-7 overflow-hidden mr-4">
          {localeWithComponent.component1x1}
        </div>
        <p className="font-semibold">{localeWithComponent.language}</p>
      </div>
    </Link>
  );
};
export default LocaleItem;

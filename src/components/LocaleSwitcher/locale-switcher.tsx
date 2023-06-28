import useDisclosure from "hooks/useDisclosure";
import { useRouter } from "next/router";
import { localesWithComponents } from "utils/constants";
import LocalesModal from "./LocalesModal";
export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const localeWithComponent = localesWithComponents[activeLocale];
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-1 cursor-pointer" onClick={onOpen}>
        <div className="flex w-6 h-4 rounded-sm overflow-hidden">
          {localeWithComponent.component3x2}
        </div>
      </div>
      {isOpen && (
        <LocalesModal
          isOpen={isOpen}
          onClose={onClose}
          otherLocales={locales}
        />
      )}
    </div>
  );
}

import useClickOutside from "hooks/useClickOutside";
import MyModal from "../Modal/Modal";
import LocaleItem from "./LocaleItem";

interface IProps {
  isOpen: boolean;
  otherLocales: string[];
  onClose: () => void;
}

const LocalesModal = ({ isOpen, onClose, otherLocales }: IProps) => {
  useClickOutside("modal", onClose);
  return (
    <MyModal isOpen={isOpen} onClose={onClose} size="xs" borderRadius="xl">
      <div className="px-3 pt-4">
        {" "}
        <div className="flex items-center justify-between">
          <h3 className="text-xl mb-4"> Choose your language:</h3>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-5px bg-transparent hover:bg-transparent active:bg-transparent"
          >
            <div className="w-14px">{/* <CloseIcon /> */}</div>
          </button>
        </div>
      </div>

      <div className="mb-2 px-3 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          {otherLocales.map((locale) => (
            <LocaleItem key={locale} locale={locale} onClose={onClose} />
          ))}
        </div>
      </div>
    </MyModal>
  );
};

export default LocalesModal;

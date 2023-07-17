import { Button } from "g_shared/ui/Button";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface ILanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher: FC<ILanguageSwitcherProps> = (props) => {
  const { className } = props;
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }
  return <Button onClick={toggleLanguage} className={className}>
    <>{t('Перевод')}</>
  </Button>
}
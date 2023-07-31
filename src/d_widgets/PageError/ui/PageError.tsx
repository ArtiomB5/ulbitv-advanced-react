import { Button } from "g_shared/ui/Button";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface IPageErrorProps {
  className?: string
}

export const PageError: FC<IPageErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const reloadPageHandler = () => {
    location.reload();
  }
  return <>
    <div>{t("Произошла непредвиденная ошибка!")}</div>

    <Button onClick={reloadPageHandler} className={className}>
      <>{t('Обновить страницу')}</>
    </Button>
  </>
}
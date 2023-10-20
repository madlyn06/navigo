import { useTranslation } from "react-i18next"

const { t, i18n } = useTranslation()
const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
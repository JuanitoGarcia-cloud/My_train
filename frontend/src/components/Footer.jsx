import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t } = useTranslation();

  const year = new Date().getFullYear();

  return (

    <footer
      className="bg-light text-center text-lg-start mt-auto py-3 border-top"
      role="contentinfo"
    >

      <div className="container text-center">

        <p className="mb-1 fw-bold">
          Train App
        </p>

        <p className="mb-0 small text-muted">
          © {year} Train App — {t("allRightsReserved", "Tous droits réservés")}
        </p>

      </div>

    </footer>

  );
}

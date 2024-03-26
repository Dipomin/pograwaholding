import Footer from "@/components/footer";
import HeaderPage from "@/components/header-page";
import PageMenu from "@/components/page-menu";
import React from "react";

const Presentation = () => {
  return (
    <div>
      <PageMenu />
      <div>
        <HeaderPage
          titlePage="Présentation de Prograwa Holding"
          headerPageImage="/324.jpg"
          titleDesc="La satisfaction de nos clients est notre priorité, et nous nous engageons à dépasser vos attentes à chaque étape de votre parcours avec POGRAWA HOLDING."
        />
      </div>
      <section className="container p-10 text-xl font-light leading-10">
        <div className="p-4">
          Dans l'objectif d'efficacité et de compétitivité, toute entreprise
          fait face à de nombreux défis à relever pour la satisfaction de sa
          clientèle et surtout faire partir des compagnies qui comptent dans la
          politique publique du gouvernement en matière de croissance. Vu
          l'importance du secteur privé dans cette politique, nos entreprises
          AGINEC GROUPE SA, SAITX TECHNOLOGIES ET BIM.C ont été regroupé en
          holding pour devenir POGRAWA HOLDING. Les secteurs de l'immobilier,
          des nouvelles technologies, des mines et des énergies renouvelables
          sont nos domaines de compétences. POGRAWA HOLDING se place comme un
          acteur majeur dans la sous-région africaine et en cote d'ivoire en
          particulier comme un des acteurs majeurs qui participent au
          rayonnement économique de l'espace UEMOA avec pour ambition de
          conquérir le monde. Avec plusieurs prix reçus partout dans le monde,
          notre groupe atteindra ses objectifs de société sérieuse qui gagne et
          mérite la confiance de ses partenaires.
        </div>
        <div className="p-4">
          POGRAWA HOLDING, un groupe d'entreprises d'envergures exceptionnelles
          qui redéfinit les standards de l'immobilier des mines, des nouvelles
          technologies et des énergies renouvelables. Permettez nous de vous
          guider à travers l'excellence de nos promotions immobilières et
          projets en cours notamment LES CITES IVOIRE DE SONGON, LES CITES
          JACKSON à la Baie des Milliardaires, LES CITES ADO D'AGBOVILLE, LES
          SITES MINIERS DE DANANE DE TABOU ET DE BOUAFLE et NOS PROJETS
          d'INSTALLATION et de MAINTENANCES D'ASCENSEURS. à travers SAITX
          TECHNOLOGIES notre marque d'ascenseurs modernes de haute technologie
          fiable et à moindre coût.
        </div>
        <div className="p-4">
          POGRAWA HOLDING se distingue par sa philosophie axée sur la qualité et
          la durabilité. Voici une première raison convaincante : notre
          politique est de proposer des produits et services à des prix
          compétitifs inégalés sur le marché. Nous accordons une attention
          particulière au rapport qualité prix pour garantir à nos clients des
          conditions de vie optimale sur plusieurs générations, avec des
          commodités inspirées des standards occidentaux. Choisir POGRAWA
          HOLDING, c'est opter pour l'excellence, la fiabilité et la vision d'un
          leader dans plusieurs domaines de grand intérêt pour les populations
          en Côte d'Ivoire, e, Afrique et dans le monde. Rejoignez nous dans
          cette aventure où le luxe rencontre la durabilité, l'accessibilité et
          la qualité. La satisfaction de nos clients est notre priorité, et nous
          nous engageons à dépasser vos attentes à chaque étape de votre
          parcours avec POGRAWA HOLDING.
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Presentation;

import Footer from "@/components/footer";
import HeaderPage from "@/components/header-page";
import PageMenu from "@/components/page-menu";
import React from "react";

const Technologie = () => {
  return (
    <div>
      <PageMenu />
      <div>
        <HeaderPage
          titlePage="Technlogie"
          headerPageImage="/10723.jpg"
          titleDesc="Élégance et Innovation dans la Commercialisation et Maintenance d'Ascenseurs"
        />
      </div>

      <section className="container p-10 text-xl font-light leading-10">
        <div>
          Au-delà de son succès dans le secteur immobilier et de l'industrie
          extractive, Pograwa Holding, à travers sa filiale SAITX, se positionne
          comme un leader dans la commercialisation et la maintenance
          d'ascenseurs. Cette extension de nos activités témoigne de notre
          engagement constant envers l'excellence et l'innovation, offrant à nos
          clients des solutions verticales de pointe.
        </div>
        <div>
          <h2 className="text-3xl p-4 font-semibold">
            Un Partenariat Stratégique avec CTV LIFT
          </h2>
          <p className="p-4">
            En collaboration avec CTV LIFT, une référence dans l'industrie des
            technologies de pointe, SAITX TECHNOLOGIE élargit son offre pour
            inclure une gamme diversifiée d'ascenseurs de qualité supérieure. Ce
            partenariat stratégique renforce notre position en tant que
            fournisseur de confiance, mettant à disposition des solutions de
            transport vertical de pointe pour divers secteurs, des immeubles
            résidentiels aux entreprises en passant par les complexes
            commerciaux et les hôpitaux.
          </p>
        </div>
        <div>
          <h2 className="text-3xl p-4 font-semibold">
            Des Ascenseurs Adaptés à Chaque Besoin
          </h2>
          <p className="p-4">
            La gamme d'ascenseurs proposée par SAITX TECHNOLOGIE répond aux
            besoins spécifiques de différents secteurs :
            <ul>
              <li className="list-disc">
                Immeuble Résidentiel : Hydraulique ou Électrique, adapté pour
                des courses maximales de 20 à 30 mètres, vitesse de 0,5 à 1,6
                m/s, pour des charges allant de 180 à 1 000 kg.
              </li>
              <li className="list-disc">
                Commercial : Hydraulique ou Électrique, adapté pour des courses
                maximales de ≤20 à 100 mètres, vitesse de 0,6 à 2,5 m/s, pour
                des charges de ≤1 600 kg à ≥2 500 kg.
              </li>
            </ul>
          </p>
        </div>
        <div>
          <h2 className="text-3xl p-4 font-semibold">
            Innovation dans le Design
          </h2>
          <p className="p-4">
            Inspirez-vous de notre gamme de cabines, offrant une variété
            d'ambiances sophistiquées qui unissent esthétique, fonctionnalité et
            rapport qualité-prix avantageux. Personnalisez votre cabine pour
            créer un environnement unique. Nous proposons des conseils
            personnalisés pour vous accompagner dans chaque étape.
          </p>
        </div>
        <div>
          <h2 className="text-3xl p-4 font-semibold">
            Études de Compatibilité et Personnalisation
          </h2>
          <p className="p-4">
            Notre équipe recherche le matériel nécessaire et prépare des études
            de compatibilité en tenant compte de la qualité et du prix. Nous
            nous engageons à créer des environnements sophistiqués, fonctionnels
            et personnalisés pour chaque projet.
          </p>
        </div>
        <div>
          <h2 className="text-3xl p-4 font-semibold">
            Composants de Qualité Européenne
          </h2>
          <p className="p-4">
            Nous collaborons avec les plus grands fabricants européens pour vous
            offrir des composants d'ascenseurs et des pièces détachées de la
            plus haute qualité. Que ce soit pour la commercialisation ou la
            maintenance, Pograwa Holding assure une excellence constante.
          </p>
          <p className="p-4">
            Choisir Pograwa Holding pour la commercialisation et la maintenance
            d'ascenseurs, c'est opter pour une alliance entre élégance,
            innovation et fiabilité, tout en mettant à disposition des solutions
            qui transcendent les attentes de nos clients. Rejoignez-nous dans
            cette nouvelle dimension de la verticalité où chaque ascenseur
            devient une expérience chez Pograwa Holding.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Technologie;

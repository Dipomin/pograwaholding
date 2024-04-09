"use client";

import Footer from "@/components/footer";
import MobileMenu from "@/components/mobile-menu";
import PageMenu from "@/components/page-menu";
import Image from "next/image";
import React from "react";

const ReveImmobilier = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <PageMenu />
      </div>
      <div className="block lg:hidden">
        <MobileMenu />
      </div>

      <div>
        <div className="bg-[url('/immobilier_h.png')] w-full h-81">
          <h2 className="lg:text-4xl text-3xl font-bold space-y-10 text-white p-5">
            Pograwa Holding : Réalisez Vos Rêves Immobiliers avec Confiance
          </h2>
          <div className="flex text-lg font-thin space-y-10 text-white p-5">
            Dans le monde dynamique de l'immobilier, choisir le bon partenaire
            pour concrétiser vos projets est essentiel. C'est là que Pograwa
            Holding entre en scène, en tant que chef de file de la promotion
            immobilière, offrant des solutions innovantes et un service
            clientèle exceptionnel. Découvrez comment cette entreprise peut vous
            aider à transformer vos rêves en réalité, avec expertise et
            engagement.
          </div>
        </div>
        <div className="container flex flex-col space-y-10">
          <div className="pt-6">
            <h3 className="lg:text-2xl text-xl font-bold">
              Expertise en Promotion Immobilière :
            </h3>
            <p>
              Avec des décennies d'expérience et un savoir-faire inégalé,
              Pograwa Holding s'est imposée comme une référence dans le domaine
              de la promotion immobilière. Que ce soit pour le développement de
              projets résidentiels, commerciaux ou mixtes, l'entreprise maîtrise
              chaque aspect du processus, de l'acquisition du terrain à la
              livraison du projet clé en main.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="lg:text-2xl  text-xl font-bold">
              Diversité de Projets :
            </h3>
            <p>
              Quels que soient vos besoins ou vos aspirations, Pograwa Holding
              propose une gamme diversifiée de projets immobiliers, adaptés à
              chaque style de vie et à chaque budget. Des complexes résidentiels
              modernes aux centres commerciaux dynamiques, en passant par les
              projets de rénovation urbaine, l'entreprise offre des opportunités
              uniques pour investir dans l'avenir.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="lg:text-2xl  text-xl font-bold">
              Engagement envers l'Innovation :
            </h3>
            <p>
              Au coeur de chaque projet de Pograwa Holding se trouve un
              engagement inébranlable envers l'innovation. Que ce soit en
              matière de conception architecturale, de durabilité
              environnementale ou de technologies de pointe, l'entreprise
              repousse sans cesse les limites pour offrir des solutions
              avant-gardistes qui répondent aux besoins changeants du marché.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="lg:text-2xl  text-xl font-bold">
              Service Clientèle Exceptionnel
            </h3>
            <p>
              Chez Pograwa Holding, la satisfaction du client est une priorité
              absolue. L'entreprise s'engage à offrir un service clientèle
              exceptionnel à chaque étape du processus, en veillant à ce que
              chaque client se sente soutenu, informé et valorisé. De la
              première consultation à la remise des clés, vous pouvez compter
              sur l'équipe dévouée de Pograwa Holding pour vous accompagner à
              chaque étape de votre parcours immobilier.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="lg:text-2xl  text-xl font-bold">
              Investissez dans Votre Avenir
            </h3>
            <p>
              Que vous soyez un acheteur potentiel à la recherche de votre
              première maison, un investisseur cherchant à diversifier votre
              portefeuille ou un entrepreneur visionnaire désireux de développer
              un nouveau projet, Pograwa Holding est là pour vous aider à
              réaliser vos objectifs immobiliers. Avec son expertise, son
              innovation et son engagement envers la satisfaction client,
              l'entreprise est votre partenaire idéal pour investir dans votre
              avenir.
            </p>
          </div>
          <p>
            Ne laissez pas vos rêves immobiliers rester des aspirations
            lointaines. Avec Pograwa Holding à vos côtés, vous avez un
            partenaire de confiance pour vous guider à chaque étape du chemin.
            Découvrez dès aujourd'hui ce que Pograwa Holding peut faire pour
            vous, et commencez à construire l'avenir que vous méritez.
          </p>
          <div>
            <h3 className="text-3xl font-bold pb-6">
              Contactez-nous dès maintenant pour en savoir plus sur nos projets
              immobiliers et découvrez comment nous pouvons vous aider à
              concrétiser vos rêves.
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReveImmobilier;

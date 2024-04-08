"use client";

import Footer from "@/components/footer";
import MobileMenu from "@/components/mobile-menu";
import PageMenu from "@/components/page-menu";
import Image from "next/image";
import React from "react";

const AscenseurSaitx = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <PageMenu />
      </div>
      <div className="block lg:hidden">
        <MobileMenu />
      </div>

      <div>
        <div className="bg-[url('/ascenseur-h.png')] w-full h-81">
          <h2 className="lg:text-4xl text-3xl font-bold space-y-10 text-white p-5">
            SAIT-TECHNOLOGIES : Votre Partenaire Ascensionnel vers l'Excellence
            Architecturale
          </h2>
          <div className="flex lg:text-lg font-thin space-y-10 text-white p-5">
            Dans le monde effervescent de la construction et de l'architecture,
            chaque détail compte pour créer des espaces qui transcendent
            l'ordinaire et inspirent l'admiration. Parmi ces détails, les
            ascenseurs jouent un rôle crucial, non seulement en tant que moyen
            de transport vertical, mais aussi en tant qu'éléments de design qui
            ajoutent une touche de sophistication et de modernité à chaque
            bâtiment. C'est là que SAIT-TECHNOLOGIES entre en jeu, en tant que
            pionnier dans la création d'ascenseurs qui dépassent les attentes,
            du moyen standing au premium.
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
              Ascenseurs : Bien Plus que de Simple Élévation
            </h3>
            <p>
              Imaginez-vous entrer dans un bâtiment et être accueilli par un
              ascenseur qui non seulement vous transporte d'un étage à l'autre,
              mais qui vous transporte aussi dans une expérience sensorielle.
              C'est la promesse que SAIT-TECHNOLOGIES réalise avec chaque
              ascenseur qu'elle crée. De la technologie de pointe qui garantit
              des déplacements fluides et sécurisés à l'attention méticuleuse
              portée au design et à l'esthétique, chaque ascenseur est une
              oeuvre d'art fonctionnelle.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="lg:text-2xl  text-xl font-bold">
              De la Moyenne Gamme au Sommet de l'Exclusivité
            </h3>
            <p>
              Chez SAIT-TECHNOLOGIES, nous comprenons que chaque projet a ses
              propres exigences et ses propres aspirations. C'est pourquoi notre
              gamme d'ascenseurs s'étend du moyen standing au premium, offrant
              des solutions sur mesure pour chaque besoin. Que vous construisiez
              un immeuble résidentiel abordable ou un gratte-ciel luxueux, nous
              avons l'ascenseur parfait pour compléter votre vision
              architecturale.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="lg:text-2xl  text-xl font-bold">
              Conception Personnalisée, Performance Inégalée
            </h3>
            <p>
              L'une des caractéristiques distinctives de SAIT-TECHNOLOGIES est
              notre capacité à personnaliser chaque ascenseur selon les besoins
              spécifiques de nos clients. Notre équipe de designers et
              d'ingénieurs travaille en étroite collaboration avec vous pour
              créer un ascenseur qui correspond parfaitement à l'esthétique et
              aux fonctionnalités de votre projet. Et avec notre engagement
              envers l'excellence et la qualité, vous pouvez être sûr que chaque
              ascenseur SAIT-TECHNOLOGIES offre des performances inégalées et
              une fiabilité sans compromis.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="lg:text-2xl  text-xl font-bold">
              Au-delà de l'Ascenseur : Un Engagement envers l'Expérience Client
            </h3>
            <p>
              Chez SAIT-TECHNOLOGIES, notre relation avec nos clients va bien
              au-delà de la vente d'un ascenseur. Nous nous engageons à offrir
              une expérience client exceptionnelle à chaque étape du processus,
              de la consultation initiale à l'installation et au service
              après-vente. Votre satisfaction est notre priorité absolue, et
              nous mettons tout en oeuvre pour nous assurer que votre expérience
              avec SAIT-TECHNOLOGIES soit aussi agréable que possible.
            </p>
          </div>
          <p>
            Qu'il s'agisse de donner vie à un immeuble résidentiel abordable ou
            de créer un chef-d'oeuvre architectural de renommée mondiale,
            SAIT-TECHNOLOGIES est là pour vous accompagner dans votre ascension
            vers l'excellence. Avec notre gamme d'ascenseurs allant du moyen
            standing au premium, notre engagement envers la personnalisation, la
            qualité et l'expérience client, nous sommes votre partenaire idéal
            pour réaliser vos rêves architecturaux les plus audacieux.
          </p>
          <div>
            <h3 className="text-3xl font-bold pb-6">
              Contactez-nous dès aujourd'hui pour en savoir plus sur nos
              produits et services, et laissez-nous vous aider à atteindre de
              nouveaux sommets.
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AscenseurSaitx;

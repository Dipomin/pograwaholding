"use client";

import Footer from "@/components/footer";
import MobileMenu from "@/components/mobile-menu";
import PageMenu from "@/components/page-menu";
import Image from "next/image";
import React from "react";

const ExplorationMiniere = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <PageMenu />
      </div>
      <div className="block lg:hidden">
        <MobileMenu />
      </div>
      <div>
        <div className="bg-[url('/minier_h.png')] w-full h-81">
          <h2 className="lg:text-4xl text-3xl font-bold space-y-10 text-white p-5">
            Pograwa Holding : Votre Partenaire de Confiance dans l'Exploration
            Minière
          </h2>
          <div className="flex lg:text-lg text-base font-thin space-y-10 text-white p-5">
            Dans le monde de l'industrie minière, la réussite dépend souvent de
            la capacité à trouver les bonnes ressources au bon endroit, et au
            bon moment. C'est là que Pograwa Holding se distingue en tant que
            leader dans le domaine de l'exploration minière, offrant des
            solutions innovantes et un savoir-faire inégalé. Découvrez comment
            cette entreprise peut vous aider à débloquer le potentiel caché sous
            la surface, avec expertise et engagement.
          </div>
        </div>
        <div className="container flex flex-col space-y-10">
          <div className="pt-6">
            <h3 className="lg:text-2xl text-xl font-bold">
              Expertise en Exploration Minière :
            </h3>
            <p>
              Avec des années d'expérience et une équipe d'experts chevronnés,
              Pograwa Holding est reconnue pour son expertise dans l'exploration
              minière. Que ce soit pour identifier de nouveaux gisements,
              évaluer le potentiel minéral d'une région ou gérer des projets
              d'exploration à grande échelle, l'entreprise possède les
              compétences et les ressources nécessaires pour mener à bien chaque
              étape du processus.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="lg:text-2xl  text-xl font-bold">
              Technologie de Pointe :
            </h3>
            <p>
              L'une des clés du succès de Pograwa Holding réside dans son
              utilisation de technologies de pointe pour mener ses opérations
              d'exploration. Des techniques de cartographie géologique aux
              systèmes de modélisation 3D, en passant par les méthodes de
              prospection géophysique, l'entreprise utilise les outils les plus
              avancés pour maximiser les chances de succès et minimiser les
              risques.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="lg:text-2xl  text-xl font-bold">
              Diversité des Ressources :
            </h3>
            <p>
              Pograwa Holding est engagée dans l'exploration d'une grande
              variété de minéraux précieux et stratégiques, notamment l'or,
              l'argent, le cuivre, le zinc et bien d'autres encore. Grâce à sa
              portée mondiale et à son réseau étendu de partenaires,
              l'entreprise est en mesure de cibler les régions les plus
              prometteuses et d'identifier les opportunités les plus lucratives
              pour ses clients et ses investisseurs.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="lg:text-2xl  text-xl font-bold">
              Responsabilité Environnementale et Sociale
            </h3>
            <p>
              Consciente de l'impact potentiel de ses activités sur
              l'environnement et les communautés locales, Pograwa Holding
              s'engage à mener ses opérations d'exploration de manière
              responsable et durable. L'entreprise adhère aux normes les plus
              strictes en matière de protection de l'environnement, de gestion
              des déchets et de consultation des parties prenantes, afin de
              minimiser les impacts négatifs et de maximiser les avantages pour
              toutes les parties concernées.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="lg:text-2xl  text-xl font-bold">
              Partenaire de Confiance pour l'Avenir
            </h3>
            <p>
              Que vous soyez un investisseur cherchant à diversifier votre
              portefeuille, un gouvernement désireux de développer les
              ressources naturelles de votre pays, ou une communauté locale
              cherchant à tirer profit du potentiel minier de votre région,
              Pograwa Holding est là pour vous accompagner dans votre voyage.
              Avec son expertise, son engagement envers la responsabilité
              sociale et environnementale, et sa passion pour l'exploration
              minière, l'entreprise est votre partenaire de confiance pour
              réaliser vos objectifs les plus ambitieux.
            </p>
          </div>
          <p>
            L'exploration minière est une entreprise complexe et exigeante, mais
            avec le bon partenaire à vos côtés, les possibilités sont infinies.
            Pograwa Holding offre l'expertise, la technologie et l'engagement
            nécessaires pour transformer les défis en opportunités et réaliser
            des succès durables dans le monde de l'exploration minière.
          </p>
          <div>
            <h3 className="text-3xl font-bold pb-6">
              Contactez-nous dès aujourd'hui pour en savoir plus sur nos projets
              d'exploration minière et découvrez comment nous pouvons vous aider
              à débloquer le potentiel caché sous la surface.
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExplorationMiniere;

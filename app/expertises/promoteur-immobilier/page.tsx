import Footer from '@/components/footer'
import HeaderPage from '@/components/header-page'
import PageMenu from '@/components/page-menu'
import React from 'react'
import Image from 'next/image'
import HeaderMobile from '@/components/HeaderMobile'

const PromoteurImmobilier = () => {
  return (
    <div>
        <div className='hidden lg:block'>
            <PageMenu />
        </div>
        <div className='lg:hidden block'>
            <HeaderMobile />
        </div>
        <div>
            <HeaderPage titlePage='Promotion Immobilière' headerPageImage='/promotion-immobiliere-VILLA-DUPLEX-NANCY-1.jpeg' titleDesc='POGRAWA HOLDING se distingue par son expertise dans le domaine de la construction et de la promotion immobilière.' />
        </div>
        <section className='lg:container p-4 my-10 lg:p-10 text-base lg:text-xl font-light lg:leading-10'>
            <div className='p-2 lg:p-4'>
            POGRAWA HOLDING, en tant que promoteur immobilier d'exception, incarne l'excellence dans la conception et la réalisation de projets immobiliers de standing. Forte de son fondateur visionnaire, Moumouni Pograwa, entrepreneur à succès à la tête du groupe PROCRAWA, POGRAWA HOLDING se distingue par son expertise dans le domaine de la construction et de la promotion immobilière.
            </div>
            <div>
                <h2 className='text-3xl font-semibold'>Quelques Réalisations Prestigieuses de Prograwa Holding</h2>
                <p className='p-4'>
                    L'entreprise a à son actif une série de réalisations prestigieuses, dont la Cité haut de gamme de Bassam, la Cité la paix de Agboville, les Villas haut standing de la Baie des Milliardaires (Orgey et Jackson), et les logements sociaux à la Cité de Songon (Villa Nancy). Ces projets témoignent de notre engagement envers l'excellence architecturale et du souci constant de répondre aux besoins diversifiés de nos clients.
                </p>
            </div>
            <div>
                <h3 className='text-2xl font-semibold'>
                    Les Villas Jackson - Une Excellence Redéfinie
                </h3>
                <div className='flex justify-center p-6'>
                    <Image 
                        src={"/villa-jackson.png"}
                        width={800}
                        height={300}
                        alt='résidence Les Villas Jackson'
                    />
                </div>
                <p className='p-4'>
                La résidence Les Villas Jackson, située à la Baie des Milliardaires (île boulay), à 20 minutes d'Abidjan, incarne parfaitement notre engagement envers la qualité supérieure. Les propriétés de haut standing, dotées d'un titre de propriété ACD, offrent des espaces de vie somptueux, comprenant 6 chambres autonomes, 3 salons, une salle à manger, un bureau, une salle de sport, quatre terrasses, une cuisine moderne, et un garage pour deux véhicules.
                </p>
                <h3 className='text-xl font-semibold'>
                    Conditions d'Acquisition Avantageuses:
                </h3>
                <div className='p-4'>
                Chez POGRAWA HOLDING, nous comprenons l'importance de rendre l'acquisition d'une propriété accessible. Les conditions d'acquisition flexibles comprennent un prix compétitif de 130.000.000 FCFA, avec des options de paiement, que ce soit au comptant ou à tempérament. Un apport de 50% et le solde étalé sur 18 mois, avec une offre limitée exclusive, font de l'achat chez POGRAWA HOLDING une opportunité à ne pas manquer.
                </div>
            </div>
            <div>
                <h2 className='text-3xl font-semibold'>
                    Un Groupe Diversifié
                </h2>
                <p className='p-4'>
                    En tant que pilier du groupe PROCRAWA, POGRAWA HOLDING opère dans plusieurs secteurs d'activités, notamment le BTP, l'Industrie Extractive, et la Technologie. Ses filiales, AGINEC GROUPE, SAIT TECHNOLOGIE, SOLEFAS, et BURKINAS INVEST MINING CO, contribuent à la diversité et à la solidité de notre groupe.
                </p>
            </div>
            <div>
                <h2 className='text-3xl font-semibold'>
                Engagement envers la Qualité et la Durabilité
                </h2>
                <p className='p-4'>
                    POGRAWA HOLDING, sous la direction éclairée de Moumouni Pograwa, a forgé une réputation solide en tant que promoteur immobilier axé sur la qualité et la durabilité. Nous nous engageons à offrir des logements qui dépassent les normes, avec un souci particulier pour le rapport qualité-prix, assurant ainsi à nos clients des conditions de vie optimales inspirées des standards occidentaux.
                </p>
            </div>
            <div>
                <h2 className='text-3xl font-semibold'>
                Pourquoi Nous Choisir?

                </h2>
                <p className='p-4'>
                Choisir POGRAWA HOLDING comme votre promoteur immobilier, c'est opter pour l'excellence, la fiabilité et une vision à long terme. Nous nous engageons à créer des espaces de vie qui transcendent les attentes, offrant un équilibre parfait entre luxe et fonctionnalité. Rejoignez-nous dans cette aventure immobilière où chaque projet devient une réalisation remarquable chez POGRAWA HOLDING.
                </p>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default PromoteurImmobilier
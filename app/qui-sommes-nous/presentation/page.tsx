import HeaderMobile from '@/components/HeaderMobile';
import Footer from '@/components/footer';
import HeaderPage from '@/components/header-page';
import PageMenu from '@/components/page-menu';
import React from 'react'

const Presentation = () => {

  return (
    
    <div>
      <div className='hidden lg:block'>
        <PageMenu />
      </div>
      <div className='lg:hidden block'>
        <HeaderMobile />
      </div>
        <div>
          <HeaderPage 
              titlePage='Présentation de Prograwa Holding' 
              headerPageImage='/324.jpg' 
              titleDesc='La satisfaction de nos clients est notre priorité, et nous nous engageons à dépasser vos attentes à chaque étape de votre parcours avec POGRAWA HOLDING.' 
          />
        </div>
        <section className='lg:container p-4 my-10 lg:p-10 text-base lg:text-xl font-light lg:leading-10'>
            <div className='lg:p-4'>
            POGRAWA HOLDING, une entreprise d'envergure exceptionnelle qui redéfinit les standards de l'immobilier de luxe. Permettez-nous de vous guider à travers l'excellence de nos promotions immobilières, notamment la résidence de prestige Les Villas Jackson à la Baie des Milliardaires, la Cité Ivoire Songon.

            </div>
            <div className='lg:p-4 my-3'>
            POGRAWA HOLDING se distingue par sa philosophie axée sur la qualité et la durabilité. Voici une première raison convaincante : nos logements sont proposés à des prix compétitifs inégalés sur le marché. Nous accordons une attention particulière au rapport qualité-prix pour garantir à nos clients des conditions de vie optimales sur plusieurs générations, avec des commodités inspirées des standards occidentaux.
            </div>
            <div className='lg:p-4'>
            Choisir POGRAWA HOLDING, c'est opter pour l'excellence, la fiabilité et la vision d'un leader dans le domaine de la construction en Côte d'Ivoire. Rejoignez-nous dans cette aventure immobilière où le luxe rencontre la durabilité. La satisfaction de nos clients est notre priorité, et nous nous engageons à dépasser vos attentes à chaque étape de votre parcours avec POGRAWA HOLDING.
            </div>
        </section>
        <Footer />
    </div>
    
  )
}

export default Presentation;
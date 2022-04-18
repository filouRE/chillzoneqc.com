import React from "react";
import { SlideBlue, SlideWhite } from "../../components/Transition/Slide";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function TOS() {
  return (
    <>
      <motion.div variants={SlideBlue} initial="initial" animate="animate" exit="exit" transition={SlideBlue.transition} className="fixed z-50 w-screen h-screen bg-blue-600">
        <div className="md:text-5xl h-full flex items-center justify-center font-black text-6xl text-white">
          <h1 className="animate-bounce text-center">CHILLZONE QC</h1>
        </div>
      </motion.div>
      <motion.div variants={SlideWhite} initial="initial" animate="animate" exit="exit" transition={SlideWhite.transition} className="fixed z-40 w-screen h-screen bg-white"></motion.div>
      <div className="px-20">
        <Header color="text-black" filter="brightness-0 saturate-100">
          <Link to="/" className="text-gray-900">
            Accueil
          </Link>
          <a className="text-gray-900" href="https://discord.gg/CZQC" target="_blank">
            Discord
          </a>
          <a href="https://www.patreon.com/CZQC" className="bg-blue-600 px-3 py-2 text-white rounded mr-6">
            Whitelist
          </a>
        </Header>
      </div>
      <div className="Tos px-[5em] py-[0em] md:px-[3em]">
        <div className="content">
          <h1 className="text-2xl font-bold flex items-center justify-center text-center">Conditions d'utilisation pour le Chillzone QC</h1>

          <h2>1. Conditions</h2>

          <p>
            En accédant à ce site Web, accessible à partir de chillzoneqc.com, vous acceptez d'être lié par les présentes conditions d'utilisation du site Web et acceptez que vous êtes responsable de l'accord avec toutes les lois locales
            applicables. Si tu n'êtes pas d'accord avec l'un de ces termes, il vous est interdit d'accéder à ce site. Les éléments contenus dans ce site Web sont protégés par le droit d'auteur et le droit des marques.
          </p>

          <h2>2. Utiliser la licence</h2>

          <p>
            La permission est accordée de télécharger temporairement une copie des documents sur le site Web de Chillzone QC pour une visualisation transitoire personnelle et non commerciale uniquement. Il s'agit de l'octroi d'une licence,
            pas d'un transfert de titre, et sous cette licence vous ne pouvez pas:
          </p>

          <ul>
            <li>Modifier ou copier les documents ;</li>
            <li>Utiliser le matériel à des fins commerciales ou pour toute présentation publique ;</li>
            <li>Tenter de désosser tout logiciel contenu sur le site Web de Chillzone QC ;</li>
            <li>Supprimer tout droit d'auteur ou autres mentions de propriété des documents ; ou</li>
            <li>Transférer le matériel à une autre personne ou "miroir" le matériel sur tout autre serveur.</li>
          </ul>

          <p>
            Cela permettra à Chillzone QC de résilier en cas de violation de l'une de ces restrictions. En cas de résiliation, votre droit de visionnage sera également résilié et vous devrez détruire tout matériel téléchargé en votre
            possession, qu'il soit format imprimé ou électronique
          </p>

          <h2>3. Avis de non-responsabilité</h2>

          <p>
            Tous les matériaux sur le site Web de Chillzone QC sont fournis « tels quels ». Chillzone QC n'offre aucune garantie, qu'elle soit expresse ou implicite, annule donc toutes les autres garanties. De plus, le Chillzone QC ne fait
            aucun les déclarations concernant l'exactitude ou la fiabilité de l'utilisation du matériel sur son site Web ou autrement liées à ce matériel ou à tout site lié à ce site Web.
          </p>

          <h2>4. Limites</h2>

          <p>
            Chillzone QC ou ses fournisseurs ne seront pas tenus responsables de tout dommage qui surviendrait avec l'utilisation ou l'impossibilité d'utiliser les matériaux sur le site Web de Chillzone QC, même si Chillzone QC ou un
            représentant autorisé de ce site Web a été informé, oralement ou par écrit, de la possibilité de tels dommages. Certaines juridictions n'autorisent pas les limitations sur les garanties implicites ou les limitations de
            responsabilité pour les dommages accessoires, ces limitations peuvent ne pas s'applique à vous.
          </p>

          <h2>5. Révisions et Errata</h2>

          <p>
            Les documents apparaissant sur le site Web de Chillzone QC peuvent contenir des erreurs techniques, typographiques ou photographiques. Chillzone QC ne promet pas que les éléments de ce site Web sont exacts, complets ou à jour.
            Chillzone QC peut modifier les matériaux contenus sur son site Web à tout moment sans préavis. Chillzone QC ne s'engage pas à mettre à jour les matériaux.
          </p>

          <h2>6. Liens</h2>

          <p>
            Chillzone QC n'a pas examiné tous les sites liés à son site Web et n'est pas responsable du contenu de ces sites liés. La présence de tout lien n'implique pas l'approbation par Chillzone QC du site. L'utilisation de tout site
            Web lié est aux risques et périls de l'utilisateur.
          </p>

          <h2>7. Modifications des conditions d'utilisation du site</h2>

          <p>
            Chillzone QC peut réviser les présentes conditions d'utilisation de son site Web à tout moment et sans préavis. En utilisant ce site Web, vous acceptez d'être lié par la version actuelle des présentes conditions d'utilisation.
          </p>

          <h2>8. Votre vie privée</h2>

          <p>Veuillez lire notre politique de confidentialité.</p>

          <h2>9. Loi applicable</h2>

          <p>Toute réclamation liée au site Web de Chillzone QC sera régie par nos lois, sans égard à ses dispositions en matière de conflit de lois.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

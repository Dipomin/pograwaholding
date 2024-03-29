import nodemailer from 'nodemailer';
import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';

export default async function handler(req:Request, res:Response) {
  if (req.method === 'POST') {

    const app = express();
    
    app.use(bodyParser.json());

    try {
      const formData = await req.body;
  
      if (!formData) {
        throw new Error('Le formulaire est null')
      }
        const transporter = nodemailer.createTransport({
        host: 'vps72807.serveur-vps.net',
        port: 465,
        secure: true,
        auth: {
          user: 'noreply@pograwaholding.com',
          pass: '',
        },
      });

      const mailOptions = {
        from: 'noreply@royalcopywriting.net',
        to: 'info@royalcopywriting.net',
        subject: `Nouveau formulaire soumis }`,
        text: `Bonjour, ${formData.nom} a soumis un nouveau formulaire avec les détails suivants:\n\nNom: ${formData.nom}\nPrénoms: ${formData.prenoms}\nTéléphone: ${formData.telephone}\nEntreprise: ${formData.entreprise}\nE-mail: ${formData.email}\nPack: ${formData.pack}\nBeneficaire: ${formData.beneficiaire}\nDuree: ${formData.duree}\nContenu: ${formData.contenu}\nSite Web: ${formData.siteweb}`,
      };

      // Envoyer l'e-mail
      const info = await transporter.sendMail(mailOptions);

      console.log('Message envoyé: %s', info.messageId);

      return res.status(200).json({ success: true, message: 'Formulaire soumis avec succès' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
      return res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Méthode non autorisée' });
  }
}

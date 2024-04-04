import nodemailer from 'nodemailer';
import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

export async function Handler(req:Request, res:Response) {

    try {
      const formData = await req.body;
  
      if (!formData) {
        throw new Error('Le formulaire est vide')
      }
        const transporter = nodemailer.createTransport({
        host: 'vps41527.lws-hosting.com',
        port: 465,
        secure: true,
        auth: {
          user: 'info@pograwaholding.com',
          pass: 'PkZeYy4#Bh5d',
        },
      });

      const mailOptions = {
        from: 'info@pograwaholding.com',
        to: 'kd_landry@yahoo.fr',
        subject: `Nouvelle réservation de villa`,
        text: `Bonjour, ${formData.nom} a soumis un nouveau formulaire avec les détails suivants:\n\nNom: ${formData.nom}\nPrénoms: ${formData.prenoms}\nTéléphone: ${formData.telephone}\nEntreprise: ${formData.budget}\nE-mail: ${formData.email}\nPack: ${formData.paiement}\nBeneficaire: ${formData.logement}\nDuree: ${formData.site}\nContenu: ${formData.paiement}\n}`,
      };

      // Envoyer l'e-mail
      const info = await transporter.sendMail(mailOptions);

      console.log('Message envoyé: %s', info.messageId);

      return res.status(200).json({ success: true, message: 'Formulaire soumis avec succès' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
      return res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
  
}


export default app;
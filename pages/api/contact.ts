// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
    try {
      const formData = req.body;

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
        text: `Bonjour, ${formData.nom} a soumis un nouveau formulaire avec les détails suivants:\n\nNom: ${formData.nom}\nPrénoms: ${formData.prenoms}\nTéléphone: ${formData.telephone}\nBudget: ${formData.budget}\nE-mail: ${formData.email}\nPaiement: ${formData.paiement}\nLogement: ${formData.logement}\nSite: ${formData.site}\n}`,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log('Message envoyé: %s', info.messageId);

      return res.status(200).json({ success: true, message: 'Formulaire soumis avec succès' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
      return res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

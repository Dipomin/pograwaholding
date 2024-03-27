import Contacts from '@/app/contacts/page';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Pograwa Holding <reservation@pograwaholding.com>',
      to: ['kd_landry@yahoo.fr'],
      subject: 'Réservation de villa',
      react: Contacts(),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

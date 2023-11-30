//resend
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

//função envio de e-mail com o RESEND:
export async function resendEmail(msg, rPath) {
    try {
        const data = await resend.emails.send(msg);
        console.log('Email enviado com sucesso!', data);
        fs.unlink(rPath, () => {
            console.log('Arquivo deletado')
        });
        //res.status(200).json({ data });
    } catch (error) {
        // res.status(500).json({ error });
        console.log(error);
        if (error.response) {
            console.log(error.response.body);
        }
    }
}

//export default resendEmail;
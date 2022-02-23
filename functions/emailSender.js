import sgMail from '@sendgrid/mail';
import { SENDGRID_API, HOST_EMAIL } from '../constants'

sgMail.setApiKey(SENDGRID_API);

const sendMain = async (email, subject, text, html) =>{
    try{
        const msg = {
            to: email,
            from : HOST_EMAIL,
            subject,
            text,
            html,
        };
        await sgMail.send(msg);
        console.log("MAIL_SENT");
    } catch(error){
        console.log(error);
    }finally{
        return;
    }
}

export default sendMain;
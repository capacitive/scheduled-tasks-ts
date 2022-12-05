import * as cron from 'node-cron'
import { createTestAccount, createTransport, Transporter } from 'nodemailer'

let t: Transporter

//createTestAccount((err, account) => {
// create mail transport
let transport = createTransport({
	host: "smtp.ethereal.email",
	port: 587,
	auth: {
		user: "jada19@ethereal.email",
		pass: "RxYq4vZZu6bTfJsNDY"
	}
})

t = transport
//})

cron.schedule("* * * * *", () => {
	t.sendMail({
		to: "jada19@ethereal.emai",
		from: "jada19@ethereal.email",
		subject: "node-cron job test",
		priority: "high",
		text: "Hi! This is a test of the node-cron task scheduler"
	}, function (err, info) {
		if (err) {
			throw err;
		} else {
			console.log(`email successfully sent.  Info: ${info}`);
		}
	})
})






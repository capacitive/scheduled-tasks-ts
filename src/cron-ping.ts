import { schedule } from 'node-cron'


schedule("* * * * *", () => {
	console.log("A minute has passed.")
})
# node-cron vs. crontab
## Reliability, Persistence and Performance Comparison Guide

### crontab configuration instructions

1. install forever `sudo npm install forever -g` (pm2 can be used instead)
1. `EDITOR=nano crontab -u <username> -e`
2. edit crontab entries (need full paths)
```@reboot /usr/share/forever start /your/path/to/your/app.js```
   - if forever can't find node:
	 `@reboot /usr/local/bin/forever start -c /path/to/node /your/path/to/your/app.js`
3. ctrl-O to save (or ctrl-X to exit if just reading)
4. list crontab entries with `crontab -u <username> -l`

### PM2 configuration
```json
"name"        : "test.10minjob",
"cron_restart": "0 0/10 * 1/1 * ? *",
"autorestart" : false,
"exec_mode"   : "cluster",
"instances"   : 1,
```
### use cronmaker to generate time schedule expressions:
http://www.cronmaker.com

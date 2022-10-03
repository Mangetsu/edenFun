MAIN_METEOR_CMD=cd meteor-api &&
MAIN_REACT_CMD=cd eden-party &&

install:
	meteor create --blaze meteor-api
	npm install

start-meteor:
	$(MAIN_METEOR_CMD) meteor run -p 2000

start-meteor-back:
	nohup make start-meteor &> /dev/null &

start-react-back:
	nohup make start-react &> /dev/null &

build-meteor:
	$(MAIN_METEOR_CMD) meteor build

start-react:
	$(MAIN_REACT_CMD) npm run start -p 3000

process:
	jobs

start: start-meteor-back start-react-back

kill-meteor:
	kill $(lsof -t -i:2000)

kill-react:
	kill $(lsof -t -i:3000)

kill: kill-meteor kill-react


.PHONY: up
up:
	docker-compose up

.PHONY: down
down:
	docker-compose down

.PHONY: install
install:
	cd server && npm install && cd ..
	cd client && npm install && cd ..
	docker-compose build
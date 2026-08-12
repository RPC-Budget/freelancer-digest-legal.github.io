dev:
	docker compose up --build
build:
	docker run --rm \
    	-v $(pwd):/app \
    	freelancer-digest-legal \
    	mkdocs build
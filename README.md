# docker-nginx-reverse-proxy
Boilerplate reverse proxy server using Nginx with React client and FastAPI backend services.

`git clone https://github.com/WojoSite/docker-nginx-reverse-proxy.git`

## Development
1. `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up`
2. Navigate to [localhost](http://localhost/)

## Production
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up`
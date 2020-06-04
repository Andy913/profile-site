# credo db

This is where sql scripts go

## PostgreSQL for local development

Install docker

Start up the container

```docker-compose up -d```

Connect to the database

```docker exec -it profile_site_postgres psql -d profile_site_db -U admin```

https://support.rackspace.com/how-to/postgresql-creating-and-dropping-roles/

Stop the container

```docker-compose down```

## Run db migrations using flyway

Flyway manages database migrations

Install flyway https://flywaydb.org/documentation/commandline

```flyway migrate```

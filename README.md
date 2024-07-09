# IMAGINESHOP

Setup database

```sh
docker run --name imagineshop-db -e POSTGRES_DB=imagineshop -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```

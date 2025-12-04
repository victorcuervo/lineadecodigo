---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHZT65V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDTKCshUKKJQo%2FBfl1CSrS4JY6Qb%2Bu78IZlRKo9gC33ZAiBJkF6pbEBvjtAWxN1TRdWFTrpUG7kmlYT%2BWnSKqGaIUCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM7BJBXhy6ywN%2FB5YlKtwDnpsa%2B%2FjMQZhV344GHovtrKciYhCKYkBJMhr67Q%2FREZZwEZa4QNEMMm7PTwtR10I%2BicGU55Y%2BZQjQVQ14gp5pgVB7OvvtVFSdJ3GwawEZIIClaYvySLgZN2S8OAg1vqXVgDT6RCD5fDczKZegkJOTsp1574mYlQeATzqrGMQBwtirP%2B6zZ671jGwE51gLG%2BQ2ev7Nh0PLxubeCFNMVT1c%2Bdy%2Bya61yrfeSWqSftcmdqWAy9dkk%2B2vrLT%2B3zxu46dc2H5%2BAPgutzeQCuysnsP8B3JYlBRTC6DlBJzFeaeRe3JRkAmA%2F3ZAuIfJcg8xrcPAiqGsOp%2BsnZDB4E%2BPJwof46KHm522A1QjisnlH1TJ0zyuhc2MEQKJfOR7z8tlvYwCiYpD3KuWF7U3twwegU%2FRQhms4%2FEv0cj6%2FcQ1iqAwpqKWc%2B5n2VfJbJb65w5%2BaeE6GJkrLvTRWHdc6FESWUVh6WXJhedhhTxd1vCd8dKnthgeDre4fpCdN%2Bm9EvDeUoX2pt8EZKYOo5oEJUqh7%2BdbappRoDPL3opw%2B2qVEjjPv7kMmjvrUMXSiHakEW6wfeeV4veH%2FhmMI2tR21LfSJ0YUOfETcmKqT4MJL%2FsM3AYjg%2BkgZcg71WrsCR13QkwkMvFyQY6pgFliC9wrFyVMftq%2FG1Bx5O%2FFhbifGIjYqtXgQvVlWrmroZwdJZBAl%2BQjcmpwxc2HtHJjiThaunCKi2eDl0MIhwGSTfCOoYldiDfry2auKnhr7C86M9Wiejj74jtzSZwJcBuKb%2FQO8uekExnyauC6wLbTawsUPWFH1xdnunH1Y4SkuTOTE0cL1OUfvNIsxpwCajOnZ%2BwysyyEKN6uI7PLlIPEAAjjPGq&X-Amz-Signature=63112badbf1551a851315842e06f799ca766b05a9de9abf121ecc904afe731ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Dada nuestra tabla de libros, podemos realizar una consulta [SQL](https://www.manualweb.net/sql/), para contar elementos de la siguiente forma:


```sql
SELECT count(*) FROM libros
```


Esta consulta [SQL](http://www.manualweb.net/sql/) nos devolverá todas las entradas que tenga la tabla libros. Es decir, todos los libros de todos los autores. De esta forma, ante una tabla que tengamos los siguientes elementos dentro de ella.


| ISBN               | Titulo                  | Autor             |
| ------------------ | ----------------------- | ----------------- |
|  978-1-4493-0814-8 | What Is HTML5?          | Brett McLaughlin  |
| 970-26-0518-0      | Cómo Programar en Java  | Paul Deitel       |
| 978-84-415-2348-7  | Java SE 6               | F. Javier Moldes  |
| 978-1-4493-1439-2  | What's New in Java 7?   | Madhusudhan Konda |
| 978-1-4493-1608-2  | Just Spring             | Madhusudhan Konda |
| 978-1-4493-2838-2  | Just Spring Data Access | Madhusudhan Konda |

undefined
Obtendremos que hay 6 libros al utilizar la sentencia `count`.


Contar elementos distintos en [SQL](https://www.manualweb.net/sql/) sería para cubrir consultas del estilo... _"Contar todas las editoriales distintas de las que tenemos libros"_ o _"Contar todos los autores distintos de los que tenemos libros"_.


### Count y distinct para elementos distintos.


Para ello deberemos de aplicar la función `count` de [SQL](http://www.manualweb.net/sql/) sobre los campos editorial o autor, pero con una salvedad y es que utilizaremos el modificador `distinct`. Mediante esta sentencia `distinct` estaremos contando aquellos elementos que sean distintos.


La sentencia [SQL](http://www.manualweb.net/sql/) tendrá la siguiente sintaxis:


```sql
SELECT count(distinct campo) FROM tabla
```


Así, para sacar los autores distintos, ejecutaremos la siguiente sentencia [SQL](http://www.manualweb.net/sql/):


```sql
SELECT count(distinct autor) FROM libros
```


Siendo el resultado igual a 4 ya que solo hay libros de 4 autores diferentes.


De esta manera ya sabemos cómo podemos contar elementos distintos con [SQL](https://www.manualweb.net/sql/) mediante la sentencia `count` y el modificador `distinct`.


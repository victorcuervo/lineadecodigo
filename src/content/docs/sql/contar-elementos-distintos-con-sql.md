---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4O5ONQM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDNDrO4vf8w%2BTYo9D8f361JyxSVpMgQK14OTcoVqJLP%2BAiEA8epXTvM75U6tio3lJ1v44O6aAcp1clncHlN%2BaayzIe0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDG9k4pS5EHz1DtdXCSrcA5T%2BnEAJMTdIRVUFZpr7P0n0UyQX3XYv9TfXaG8yRry8vceefQ2VBhDru6Hc3abNZaZB7m8Jsgyv2kX%2FVsgIzobHyvOl1xh3xACObD1dfDFykhU%2FAf%2BkyK%2FyJ9EbwM56z9lu4yOwChLzfStZidKMDlZ7KUU%2BauzlgKP%2BVmCV7wSwqW4QUSzPEHnPhzNeeqHnx%2FXMsZfpjdE%2BKsJWLb8oAPA7Z33y2qpIgYSgcaawDo4Q357Tj7tKWnDs27dRzgizJ2qvc4Z8EWAyP3Rx%2BNQ33iCSIZgzl0TfflM2Idk3uNh2RIWflb%2B%2BP%2BvIiINF6jG2E59h9uHUWFPU7L0FzdFnVqt6QAn846y7uWpVaBq5a6blkD8Eef8OmKE3H5Fk47wm5hvJWlcFzxsF3Jy6OjzeEmtO%2B0TEYvA18ihIa7Ypng0VC1ITODT5sK1giYaAiyRDy33PsZPlz2VZXs8wcRkOZq8WU9umCTAH%2Fo003BCPbLvz1nJYkb3y2sXkk5w%2Bc6pWHMSaUcs6Trkx2S3F%2FcdKUyxHBE1mLN5UEAKvVtByKOOXMPrF0tY68rh%2Foo3YygWPn08KuU8PVHm%2BMsYxwCBetSslW%2Fr%2F1mtl1HkOoqh8sbFhlS1dKUZr%2B1nCiAe3MJmrxckGOqUBaoNP%2Bq%2BfQBx2IzlwsVsL4%2Fw4jUp95MBeH1nmgPXnq98nx5OhJB%2B%2BjiG9WQ%2Bxx3XqhVNX8GDm0OdPCLmT0Hm848%2FmAU5vTcyS6lgUmXv4hWYvDipnRl1O%2FzkH5cWSA5T4q7BAdylJwUSv8AicGtNeXOUShto2y%2FqckjLB9EO9v%2FHA%2BeuGwtqIEbzGn6%2BEbf1YZgaMjueSoMncJJIbX7CNkjXRxg2O&X-Amz-Signature=7f4c8c6012183174795602c5c0d01acbca13571d48b0259cc8499569c986e950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


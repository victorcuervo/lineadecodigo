---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXWVKM3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFrH772rJl1zdXSUgfzw%2FI%2B5458GaDKy4keiwaU7CCb4AiEAzlMHnObSpaZXJdT%2FBXK0OK7DtwnEp4EBbxWJTAuwiWUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDD7LxrvTFwBVdkr0dyrcA7y6VFHURydcrSZIPgdi02l8xZZlM9baRy8oEG37EfXrdr7zSetA3QXWrozXMWRUdKO0Yeo7ZwVh70agw99o4%2FKPr5pcU3HyzqIY%2FxHslSlVGiF7bUl6QoiLfD5MLSXDiFcJxHHDQojCRuAskiAQrKpAqmlTnWf9cKrQh4AycNVyEJNrS56U0cl%2Fq3i51qnNCu8cf3gQ2gexRbJ9PwiDQOGC3cvViAt6rlvzy71K7yIBAaJfMwh47%2B6gdZsuJsM1YX8GMlW7RzQ0GLQy1Ot6ATXp8bmHPMfPrT%2F9LCVDZ9FsLnXyEiIECyTIr9FH48yes%2FYIial%2FX9k1hUCf%2FcNTcjl%2FUGDz%2B24Dzsq5UE3PGxozzRbKLwl54Joaa8%2FR8dKEzrgy9DLAs6MRvRu7sdD2oEPPLrdHcWThEcFqvBH75qflQ4GwJIviQXA3Q5c4PAcoCDyVNWxkIAhPnw%2BHhVUKQPjOCPhlGkFceTts9vbzfgNn%2FN5%2FTOjHotk%2F%2F2yzuvURStH3wSbaDQZyMj8dVQw9CIkWbPqO4w11o6R8R1pPSrd2BoFES6uGtRnsBJqcLHcdTMkNwt7SM8xdEm%2BLo6gzSa85vE1LtfW%2B%2BC7mVkRrQia13%2BVrmET974Hl7G89MMSIwckGOqUBDQDdy22Q8sZ1ku18Fv9UvqeqL5Q6%2BIPdWujMr7GjKwOYXy85yipIUtflZlG5xVoU5v8Fl1pXPudtxnixY9VnLYQoSQRfZgu%2BLI6%2Fj6v%2Fg3kvlGO7J7%2BZY07LikeVHlde83xgrRRLRIu92kCV9dK5zUkHp9cS4648zdrzFa%2FvZgLdqSl5HLTsxOk1loBu91KaSSpToUtvQ2m%2FgJZYhn8FX1m72IWw&X-Amz-Signature=95a07ad9c059485d249a92f4a1300142042f4163cc613c3e2584758ec678b259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


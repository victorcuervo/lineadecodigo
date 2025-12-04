---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AZTFB7C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQD%2FsAlChv8LtrDWiFPxbdJgY%2FOD0rzmEw1Ccre1ig5e9wIhALHDMbgDIA5gLot92UzjWxyAStMl7F0PD365f5UFTzt6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxfHYC2UnUMK%2B1MB0Mq3AOWxbS1lm8KoccwFpRLHwSl1x5A700cPrekt5Zu4TTX9vcMww6iMy4teXyvSPVvxmFyvwxsi0MloA32z0MO205l%2Bq7P7rP22mujPxxIusHVi6%2BlGX%2FXjxPMiYDjTZE1WRbsYeVEj88xhKtve50CVy520mKSVVTQT60hvPFb1vpH7BR3cwbB8o2EWyk5DoEd3dwubLn1ngs9wZwtJZ6Z0sYLSnaqwCjb1rUUUbxBS8Kcn6968eQLRnUAhbjvvu3oUX7DjqH4k%2Bq3PoQ3iFN5j1oytabXP86IMoVmuLSlPiTQERM%2BYOHllSALz3zxXUo3770x3fbZPmC4bHXEIHlVNHm5edDw7lW97zcMa0YZXIzFwmC%2BWa3u8TKT%2F0%2B%2FV50wYmvifXOfnllg6jquw0sUWW1rFrQH1EPPP4r2vjIi1BkHwGNFbIzEWRM%2FI7yDQ6xjnOIheFVgdmiOgtzxvKQyDd%2FI8qBQXyrWj5VxeQ62o8g%2FOLTztIl0ZFuCaLjRNOED9NqR2rn9Ix4jdgFLcj1ja6KsLgB8DyPqXnK14TETLLHyCOTvdbCl4MblZ86EVYsw%2FYkpCCh%2BjtqpXcSfYKt3OwhJfdrZGlCFMv2ZoFKj8r8FxIWetfmcjWEgk957EzD06MTJBjqkAfWR9HjLNX%2B6HF58JJrjJbaV6qFExHEIvARlwBOZupIHg5tf7TKGDWC5BvIoyTAbmYsYV52X82N%2FXc9jvnO6tDhACQIPNSh1alWkwBMZqGw3cAv8vA8gTFdB2VpG1CP%2BKejU5yHPWOda1Acv6IE7GrsoauiuOLqD2ZQ%2BJax9Y5wC3jitM3kZZl8giwwhPK13CQAq4BiooVolgbWPSDp1rwQ%2FrD4K&X-Amz-Signature=53221c666bee0ca81e522e90bdf10060cc4d98cd253f95e5b34f637eb7aeefaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KRTWU5X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDRwuccYEgLnj0aHHtOlnszBzewT9XfrBmRg%2B2lfISDkAIgHg7VwV6a%2BlzXSA1oyiAebm%2Fhfikdv0Hn8ztGn0jpqZAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCSiIKZ7R44%2FPVsJ6SrcA%2B56gceDcKKskya%2F8SMGxI%2FRpbBFwE9%2BtkraUeIWQCugtrxuUfLlIUe57To%2BN825Kegbq%2BIx0k42bYuscydfEI1atzRCnxIcuGbBGsWN59lWVhtnGQcdrCOxtdXSjHIfBD8i3Ynjfyl%2FRyOs11avJHhWu4zm%2FVBfhBaq4nizkp8BiwWnvov5QYZM3TnmwLLprkKHdPO%2Fc1aTmu5RuDquPqixUBWQOELel5bz6w32fY%2BJwD%2Fe7JlXaL7bttiLMfIXjSitRRLgnv8wRckhptgxFkIVwMWrZoG%2BRUF2%2Bb9H7cQjDUgBvd5p247fNrnjvL2I4yT1W9zasTJPBWQ6fIQxM2x6tz7WzFMMZpUPkX7hjqOTquRsRdr9jEedlBosezKVCkW5k52bCjQH20NanDXH0XnKYw2MckGGxRXKSD%2BdLPSBngEYQfh%2BxqBtyJCCK%2FLrfryFhhm9nbB%2BReYOZpAeytbPy2DseWptsFsd5kyJLCVr0fP8PQ%2BjonbxpSfIG%2FPBvEDLdlSBM6iM3fZIyI%2BZ%2BbTZEue0u2gqZBtML5iDfpLmU08Exv1T1snNb1YVyQntYGGjihDRrjeCzEZY1SAnwFIrkmsMb1vjl%2B9prRF8m3mHcnmmcIFpR5zH6Gt5MKu9wskGOqUBpykcaymo5tcJRaHgAlW2hIjEoPRajDv8UTmN2pI9SSMI8xEDSJuZJMvhJWNFttODFECnE99xogAvv0Lxex%2Brqf8FWzqQ3900j9xIBbJT%2BS%2Bi4ecrn39ydV7Sn6D%2BZEfLY4nPOH1qRENhiUecO0JgQtHY8ukdmZIkmO0xKIJ3xw6febRyL03cMCvYYb9og8MhqX%2FM60lmc41POIOKldHArIjRAU%2Fh&X-Amz-Signature=c3e45aa576b4bf5f75fff128f7858eefe73b9b0be4d777ebd7ab4a1a6e36fcae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


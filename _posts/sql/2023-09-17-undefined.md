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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MT6IHBK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDFJixYnDxoz1k4hD50e%2F1fCo79f9jYRqnfEt1zwhu4jwIgBij6ho5yfLjUODRU7swq7A2dHMQuz4fiyc9xI5Ml1fMq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKH%2BNLBlii0WIdNHPircA2Z0YMJjW1SUXuTJf21Fy74EpqSHaAIhQpEr%2BojYplEh%2BOcO1k6MaH3g%2FLxURP1pLIRbY9R9VUnRgXvO5q%2FpXbv9JeUii3bPVByrq0WQQ83MWca6%2BDq2EmS2ofHqeN1oXq5ZJTA32SiQZZIIQyfDbdEEURCFMwr1imAeYZU1AEmzeH9gk8KyU1bwLlHy2jVHMP%2B7EkOgzvNwBsgJB%2FPIcQiaK8J4VpC7u6zGIFq4FUXXYCKsjHbA4obbXstzTMos4nWwtfbBeTQW38%2FWSH%2FUfjlSEzq3DKJiDmlbh4VDacBE4Gp6pEoQNnVdBCOokz7pfrrsAyYyxWbfo%2BnUmfSPo%2BGCi%2FuFiy%2F1ipwHtdaoSbfvie23AHfQt2DRY4TIKZAw6CTGBw%2F0ZC%2FAQvI1avvEnoNfaaBDS1MovdpObBif5cPFcxAUucPzDzh8oMkRbcxHDyPY4eRcqaK0QEDIWd%2B1B11whfRUMZ4WiIWrKWktZb%2F7Xh%2BCW8cKeftBAPs2soD1xDMJsst61GxjdwY%2BMjMD%2BmPd8Iew4x0%2BGbi9HV4VuJhTfGIeTBpoH%2BavBMWW8LXZdYqLuwvBMRX9pR8ESiEKCoTJ%2F0xo77JZM%2F6%2FS53VK%2FI%2FiKtTzqQ%2F0DkytoKkMJT%2FvckGOqUB2veXbZZfNus%2F8CF1VZq6jgtgvDf0zP%2BITY2Klp3iSoM03zFE%2Ba%2Bj9fsh4a32Q5KS4qRUe8TnlhDLzwzn79fwi%2FEd3wD%2B627nDI0DHBgYfKAw5TnEoipEqsSd2adzWBO66O5rpqK1vRy6SYqxaqMwsLcVHWSpvTU%2BytKtzzC%2FJ6zQvT3j%2B2%2FIOW8MNJeePZcG%2BhtBK6KNliahQ4ww9F4PewLYqNIn&X-Amz-Signature=ed9b22de5969dabfffb6e95d70b35c0251f4ee726f971b9a54ed044c569a381d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


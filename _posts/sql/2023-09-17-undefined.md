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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FWQ5PJJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHFxShAAnvLNHK%2FpI5ZzYia0wjNAbSr3nfNXUwYlIpznAiEA2IIYBIE3vXtYGwGio8hm4XiS7VisQ30cKon6YYX%2BJeMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEwZ12v3P4XPNTQ4uircA5T30NyF1y9SJphpTZfqW%2FakALEjdh%2BUYKY%2Br8KWik9khTzJHVXruyW1dEeH1YHEbGsnBF4zHjQHUcvusRfxFkamoyDkSQ%2BSVC0Pz7GlLPvWStDYBQhDs%2BcoDc0Tkcoz4OwTU%2Bl%2FWEfEO67GMMDshme4AxoSq5zWdwq0%2FVyhiTvgqjvZpRo98lZ1mIBmnYb0Wr0ZHlyzv9Y4Qw5ILJ%2FJHJNwSswbQNGO0TAfDZ01rGA%2FC0v6VSd8S9glznstVjY3DNJUaadAGQFbyPxs2jtxQIl2ZC%2BtNUDxJ3yh5RxtkJ3GgljhrP5q1ay1mtEyzOcK8A1vuoUPH0SW2ODQxdiaW7Ij%2B8ygpSHYFUXEeOUw2VSe5qOto2eUJo2OF4PWyWtDBscr6hJmsjSkz4vsjJTuldcRbmW247RGtMQB11ViW9qNCBMX%2B3nFQCiE4DNGfPj9eaUt3GnHLFuoz7iBMI368UgZjLRQgFAd%2B%2BWo2Kgp2guHt4wktu1rK15c4868FTOh9kIJuhoIuw6ZUPC9Sdzk4%2BW8aVhfBUhnzl1nle4uqNL%2BmT1B8X652Hyl39eXYwRCytrSrqxqDg7muoLBu8o9l%2FrD8dC73EdeZxYpFix9K0mPAyZw%2BJVwDSIx9JNQMNmUvskGOqUBNzSjdMpkGERjw35ePHgUjkessuL4C3aiBfVSXUJX%2Bv1gECdaEsZdN3%2FvDzPtNLcIMwc2FKE8lkVvr%2FzGCAZkTCNfWB8ae7xSsP34VNt8gzYUeFpp3jUmIMwJt%2FgHCFAoj%2B2VUYc2%2B4qbdKEDnOC9hR4%2BkTO6Ny2WAhGOHkhm6vwfqmaC5tX5X7oudof6qPjt%2F4%2FcJm55Z%2BV%2BRY%2BASF4fgLHZ3loE&X-Amz-Signature=923c214bd0d3e8be0c89922f562dd236ccd7e8c33cc0d31e302fd992a67a5883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CYUK73R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAVzvoFZ2GysEWyT9Aai2HjWExJyQfRdMCf6G6GA%2BcRlAiEAuO8FgNFo%2BdoI5bKiBw80PBrpbSrhgBOzdgvKevJ5Uisq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDA29oq8dRURo0%2BpdXCrcA4QhfVHLlf5PJfrn8yw5YTD7xkPf3UOg1TGt146M41z8WEMqHDbVFpQ01MLPs%2BthHKQ%2BHNL9jGgNGTKPBvQS7ADLzNUfJ%2BurmEiZkJZCSzNVNUegknnlENZM1RPC6RvpiFufMJQxoaH4kxl1xBVorRwyDJQPfz0P%2F%2F%2BWtLcCB6njx%2B5vrtoy%2FgWm693tof2isBto0GokiElKqp5Wt6vNhVRYDfpGrucfJdaVBEM%2BnZ%2Fwn4Pjxj9f03PbdXbezJsE0jrEayXM9UqkwejNEPn3Sv1SDKDNaTafoRo4YaycU3kRTsnDOpdtYpoXnJfaRDjK0V03yVKuSGNXOjCO6SKpEtiu4H3xfUUFEr392StCK6gcZQj2bgKtqdKLrrelyLVmPaL9XNU%2B2mJ%2Fcfb8J6PuLXa2b5kF%2BXmwrUiq63Ht4tgIPmvGMnXvUqa%2B1pfloU5bfrwb8QZklLnWzEdOIuUl1H7Ep0S%2BJVHWBZaTxJl5zLP%2FjpRHCRLmbmxD5%2Fq1EZLoadwdrNR8z%2F9KFokVC0LybTq5EugQVfGnuM5WE2BB9ifUGIHY147Q4lQydygsdphi3pKaxtFMdMNylupfA26tJHxuLKNu2kthX4iHuTuCXo4jp0qVU3k5qyH3iDuzMJmrxckGOqUBlDS4G72BrykRvWT09mPLTfG%2FVDEn%2BSWjn3H4PiA63qqKQd9MTVnv6jgSu9HUl64lO6Yn4he5VbSvA%2FUu1NI2FJSW7LZezMpPLuA4TefzG4fxxiniJaoYMCZFRFcdMJZlkNRlSHjcNYnLNgKXSiEvcol5yV3NF2wwCkcFqARYgtaj8Z2pRSU7UGdeWV9WO8un439DpGFjRoHq2leQfiBN2%2BbxMsMg&X-Amz-Signature=24a6dbcf9b67597c35074d30889c6ee430c2909a709a529d4d9fd3973a9bd691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXYH4PG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBpiJdMxIz43Yo9SJ7s13pxJrDfG2dsc%2FqdHIkZcKtlzAiBII6CUQI7ka0i9F8WkAAUcBReqsOWju8g3KFfFXo20Kir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM0VqpUmwpBBXY91s8KtwDTNsyk1NVrif48yilHiUN8QRx5MJuXKeHNE6L435TpUIVt3UA9xFGq60jTcaZQu28yCAvej7eFjCFiOOIrfs8%2F4qFN8VM462GwZlBFGUCIsapI7zQ9%2FlkfnMUlmeVJ74VQINxISx4wQhGVe89km3EL5gi%2FWvKkqmyAV9FXCDxh6lOWXtHzOvPEf4vTE39ca%2BMKeCmOOF1Dt8X8PRe7u066UhDDlwfY%2Btuj%2BlKtmqGL9pFzxldcwlaWVpzH9B1xCZzAbrYlZboex4HaZRoc8Lr5ToexnLkPyBSvf0cEQiMsbyXn1pqH5rIUOOpU%2BiCdmgafteu2SXXOsXZVEacNm8rIMYc7P0C2sIrn%2B3EZMVZ5mrBXISsDmcwa1mGKsu2SV01AYpLuiWfGwhypb%2B6s%2FhO7iTEsBgM3zkQA7HSZSFMuvB1D%2FmdmKadVP2whI5ZMZN6Uo86yEWjUX6pupqRkdxhW4lW8BvA2h91eqLewv0dvi2UYpK2RgCt%2FderILU2EBqF5aNVqyAB4Rbw7YZKhEtSUEEvEEsc%2Bh0AkK89eflanTrPl%2F7Eotum0cMDD450y2yaqizW%2FnGGzuynRUO7bGRb8q9BUTxPbSVdXfjB54efcEoNB%2BfXLLgIaaC08C8wp5DEyQY6pgFqzasyFeGssdufUF%2BpukdwXreJiyHPXGUX4f3jragSd5ep50%2FIzn%2BnRJ5t2ap9aGMdDKmodQ%2Fc9G0OpxbX06%2FtlrY8nnFFTVtFM40%2BCkxok7tk4c0PoK4FYXIrVP%2Ba0m7WngS0zQxvSbkYT1JaI%2BQA7Om3A2SLyY5hSKKpJieQ%2FyYFh%2B%2BvRp9wtHTAYvAy8kQjuJyszYLZWPhzPZKDjxbDJxCq0PeP&X-Amz-Signature=094ddeadcd503c48d99a8c93505df98ebb2b7bd15c0ed6a537b4dfdfa0c39c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652SERETY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMxlEzTiU3TuXeFvaQsWibm8R4dvYO5xMImvVK7xaWoAiAWxs9TJSfJsrKA9%2FUrQhtJGSeBr9SFTA%2FeKn0cBaXROCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM3Thqt6DicaHp0JmsKtwDQUQqM2VP%2FL58hCfJ8DhRQtguxCM6wzmKlXE2bR3WfuGa3BWo9Cqm6u0QirQI5iOLOLtEQLEDQE9ESwZcjGIxexhIi4WUKCKUyeup1N0jeknsv9DG0buk%2FFXvRJjqX1QY1mzddFrKRrJesFTd4stsOGCwpA30AqnIOmSYK7gqUuj4FBx6Ddm2PVc2i2DwWO0K2eyncX%2B4PxjJYNFqWRxghuCEhRcbx1RMLoV2HHMVpPm2WZudP1wBDB7M6kGl0EPpRlfqhflMgdZH9GwGExXbAa1MAMdwgIgCEebhr1G2UqFeNTahq6LL%2FG2WI%2FPYGM044817mWIKKd9fh1Vbtgo0tN2pK%2FVuxLMpElfucxPnogcYJGxC5T6Amn4wNsV9OQ5fQHWAQutpU8EuhO%2FqggkLC8ee3E506KsoU%2BEAOTybhq85Vwb1jfJ6fwyXnA5aaWhh%2FqTC%2F%2BT1ZtZVE9J%2BACOZJ6vRUemoreEkpyMvpXegFRa%2F162OlWWYS%2B%2FOJTDGP4J3kDx%2BLeMUoC3j0X5C36vMKOnrxoSp9rtGJ%2BEUtqrj3dv2K7Mcy5oGVvpl9sX2n1bVlq%2FOEVNcDGTBekJePFxJ82%2Fn4pSr7EWQdEcJQ7Z4BzvjTgD6GmG7uasZZwUw3dvGyQY6pgH5uADsWS2UWIN1glxZfWirB%2BIE9P0FnQX3%2BMlRbg5zgAcYOO4ftLOZA8D0mcAU2%2Bcm1L%2FW8l9%2FrgjU9Iyfe4wMVcojIkNouaq4hXDkufigXogW7jP%2ByiCjXP9a3IXPNB2WF6vOGRhBwYnTj%2B4tjgGDhxMWo4dC64pkOVnBzAxA0DuvoUjo5LHJBOPvKk9vaJ8u0h3Ur3JVKoHntfIld%2BS0IbWtlBfN&X-Amz-Signature=7241febccc99eac2d345a283b9975bf7abb423783e93525b7cd9a8aef8b59443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


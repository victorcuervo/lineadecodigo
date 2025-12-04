---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SLJ3XYM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBQSib05YzLrEZubbBlw5hHJn8O5XYzZmoXHtwYB%2FiefAiEAkeIEiiN8YKLrgwxyB%2FLokB%2BvRQ3kCZPLeecTxed7HNgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOLErnTm7Y9TWbzH5yrcA9UcFSuSAK7XaUdx%2B4bdSmktuHp9SGO6Totz3EWBZCsjwvj5tfRkWexuEz4Ck8jvyU4Ud%2BcTiVNFd2sSVTmjDM9gPgRhqg56DaQD8h8zZeA1budZuloi0qY6rbdosZKi5s82y8EfnRrpt5I6Sv%2FlfQSvoB8f1vc0YpB1rVzABsCfFWHMZcucnUpZpa3rE5NOU45kV3BN1Zpy2qXtSTNXMyvHB40KyJi%2FAabeYtUtqyfoZktzP%2FIB9hwUb2DXbXi27cCj1FFhE6y3fJsYablSuW71LtBWzC9u55HzLaJCntKANgAHysHcKyHf4h9waKcigBlWMqryhuI%2FejGZQDCmXLF%2BuatMyL%2Bsg7OCUmMMiPhA7n0MapEUl0efDvL1Cu4h7DnjDo%2FjHqogDuK2zoyKtoUXOI3s46n4mj%2B71JaxmCOF9yZX6v59wUvVIm0ZtOKL4rtDpqzB2ZvsoEoSLvdWpKh2qB5YjH%2BSZWeLsSiAwoy%2B4xlFob3oaEBCCus%2FY85N6m2HMbTIv9jEi4SEg1c9X33R4Zi3UAzebLLN7kUiOKeDXIUmQIDm%2F6x77yEktc32zc57WzqFl5FYG4ABPjcQwYnju5RENbI619Ar4XGUu6SzYoj8ZMm4whZv6x6yMLWGxckGOqUBrOIblZgo6SUVo%2FJq9ZXyPDB8wB0brQX4Htc98DvzTXUGqHYIuJAmtHgXzvw3kKZAtKDgR7Zdp6nWejVSgi7PbzCC8KCzlqThP5SMZzo5Do8THR01j7ok1h8QEgw36WY4KF83EdoxQ1NtihI%2FKTIfSMiyxxkWE%2FRvT6z0rpeUaNe66yiLZqEL454aMB5ZhirUFS%2BzZrKChx40705JT8UebUjGiec8&X-Amz-Signature=003ab36c75bd2f307209b262c9463f4ed4248257dd7ca4d53d867d1379090dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


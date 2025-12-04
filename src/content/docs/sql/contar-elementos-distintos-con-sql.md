---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643AQ2DKK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCZ8q8cJqhqmB%2FAX8lcXiIrcoVtgmAoqpK0AuRjK0C%2F9gIgTD99k31ir78JdzyRPOms4bri4LdTlCNiDofAFlYUk8Uq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDmgYnuOceNM1HTf1ircA0k6G9ZjY7NCszG2ZdsyZZbAbRa8dY2OI2cb6RgWoRuRAVdui%2BirZVBb2cieHl55NUQrFGJPU5bykzF8AcHxwyw1tGfdRpK7bc6YHLi9CtbUkRbf19xk5zCOUvh7eFlalzWhtM8%2FOLozVplxa2JzJffLumXRD1gVKhlugK8ldoIS1njLrdovNZq9HS83lmOuU6TeH3SB2A3vb4h5oXPfE%2FepcmUet8OED9RNua5oXVzL9S%2BM5z%2Bvb8BB1IfdERkeSqIsdWWbpofYBvXm97ApvFp3m5fWMs%2B9pRSX%2BA5HG0jUWxka5Rk1nQasiu9vx7rt1yxrVrBUpOA56wkrCwMafPuMZkfWIBwss1brrKQ%2B4Vjqv6OCn4tdfkCmv08PC8SDBD8Yxcyf0vlfVztFOIp%2FIj6UujU1JkOldGxFTHZbl%2FpyMNVev1i67laKuwn0SniKpW4%2BkdL46I0gDXGfj6MmOSmWQtL48Wgjjpw41c1cNvuwVyExz8v0sqagoHzEuEroYlsqmPeQjHZHbNQjsLeDvLFSw00mLygA1k3F5rYb89v157nenKA4e2TyAPxkDqQxgOz%2Bth35m3e8yOzENRNlxaCaKLvkzedxw%2BarET3YJ6gLjrndXhZqCHEZKO8oMLauxMkGOqUBVGmbgyfl5dSNbJ%2FEeAUwsIfOCthE7G%2FelzKyoe8rMni%2Bu6mvP09YgFfgb6Itim5n0%2F21bS2HwE32Su%2BPPapq0a9W18WRA%2BWSfcM8rasnW5B9JQjdfUoHp0wWIcCRFqwQ0Fzs4EAFU3YpoeUzdrzAML9tRCpTn8R2hXsvGI%2FWWcGFeSR%2FcxTLcyUJTHaHcT1GdKUjPx1QucQUvIiVkZawb8VHgouL&X-Amz-Signature=c24040d57b3fc7edc333bd1425ed0056ffc1f99359b6bacdc97f815e3bf72811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SMT3RMY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHhzR5DpEHw4Bv46mSs%2BqKz0Sk%2FOBz5bxDZoZ62Wid6PAiEA01cUTXlSWT9GoAVMc8Xpu%2Fq5ZcBzV0e87oyf0xGpXpcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOV0jtq3ahP%2BRuVFtircA22pY7nnwbSBNvzNdkcGDD2BzdhsIm%2FKc7mzQVenZIZVkQhzeijtFiWEROy4rVOrz9z2GeAp14WwtLxr2PoKuoKLiKeIWgTFMheQAPHX0c4L7NJA9%2B2hYmEKBnn46efk1pkGwjkkbTCULFRnBPs%2BooBD0S0KWCTZqO%2B5Hxh7WcIhdDYWvV6iHeGvVdrf7JEBpn8snUMqR5zRljFCgU3PnUHyQh2nD3wOFkb6rAXlyesysuoedzI8pP2kjouQZZd12%2FTJN4T3NqPPw52%2FDKONhb1o0NcNuSBGQR0QXEk8lQFWLkoTAjmsYVWwrnvIhoWfTcmM950AlVzb1PIVTf%2BlSvqnS7ZVq0SIr1Z2IOCo0jOE84zh8k87SFw9coivWKfPNGfIXZHPlGVuob8JAopYFe2qfoB4T4sodsV1Cu2wqg8dJ8c3ISkRszMtgo7RY1ILHFM3GJI3PG%2FiLOYJ63KFAtRM6V0JYs%2B8r9ymFUBbfq9HILKeI6%2BQ6pQP78DaOck9dVADNQvGcfFUyA0xzDjpqrx94iU6j9CBesBcvdyJzzL4rCXWXO7IqDPyC5Ju2TNtDRnllh4%2FCt6GaneuCbTQMeYbss7%2FpXXdO9UDrJMr77GtVvL%2Fuzl06MAw%2BckYMLvzw8kGOqUBsOLSXAS9P8XGsmblr3R3amQiHkuMmV8VtAiqZkhgcPb4Ql2L0y9kLCQseyZB1xFxqkPYngzbCInS2oQiYJt2wGLByb4I1iJT2AX9ES5WRf%2B5J5bdfk827OMc0b3kYVGcP8KY1ppU4PSXqSQvZ%2FzH8%2B1TzX7QEtqR3Pdf9vTJAUCvqARyYE5W7sZBjcV716wg4ClapWjPwV2%2FL5uHoEjn00FfhfO3&X-Amz-Signature=9f07f3f651e25f2d2bc40515e65877af65ec52da02a918ecb3b03d929817395d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


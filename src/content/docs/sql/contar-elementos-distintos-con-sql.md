---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGDY6S6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCE%2B9gUnGIJwkTDOnlioIB7cy%2B0QqmJF%2FwGlKTsJrsBBQIhALb640S1gfZW1eCbQrtBAnZZr5RnQCmundwRud2mvTXyKv8DCEcQABoMNjM3NDIzMTgzODA1Igxum9JEeuIGZ5vO5Usq3ANAgdEqv36VfQU9uGfy16PWPDZ0UPGjEAUIWspwsRfVeo4D%2FfR%2FkHDP3JCUwFYpiOsfZd47bTIHRUPN6JPOxXEHvQmI80UqJm5z0cYJY7yB%2Fv3RTHguOQlV01T5UX8NGm%2F8Dh8xKxsHwEiNVKb7tmoepPxkT9VV3GhFFFK3kivpMPoGdtqdzjQI7v6E5pBVgLEa0MpRh6%2Fpprp45PriEa%2FCy70uuH22WDxhP3Ec63o0Dru8VTXawY%2Fzm6S6mrZcc20f424oDXw5ardI88f8my%2FBzm3KQGOQxe0QJgOXqwNt%2BIdUbyPzaDeRBEv2irySg0x1eJhutVRTUDp2xfLg7A0dDTGr8WC9y0%2B0Ss9DmQ5V76ln5sJeXcYua72SM7pljswv%2F2JEscg%2FuDLS69HLoipsHiaSJlg3gnn7ttXlP27WXlIkeTIv0MfIkE2n%2FYtCs2uIvzNWGFak8X9sYTodeWK08Z5PG5uOURUTaYb2991ZJOlWPvc8CPxpTWLqDOmv9TCuq4YnSV8YsJ8EB6ySfsPNIe2B39H9R8VNFIk6eIDhQ7EyOZAkhfx36Ftc%2FqL3REoBgdDKtP%2BPfaKbrv7f8nMXCz6dIUYVGjbvuncFGGSy2jdK5nT0RogBjyR9yzCRosbJBjqkAQoD8Bzd2sp9WI9zv0da6OB9B1Co4DqtjXPXsY7cL2sxlsUB3JkRhIIfVmUqOoTxDD6p2RBiFL9d9cW4tX86gjvwYhyy14ax6UDwh16xrzRX%2Fz6K9ELXCmWtSbqBg%2F85jDBGlZLLAeSpyxMhAeFIIUDLtfYvWmfr7r8dzJuinLwvcPv%2BWw141ZA7imhaIWtkB55b92HZO%2Ftpn%2B2wlb8a%2FnMTaMTy&X-Amz-Signature=052a2c00b8928f1949cc87d4bc39a0d41a187588d2a595b73ac8caf32ae49b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


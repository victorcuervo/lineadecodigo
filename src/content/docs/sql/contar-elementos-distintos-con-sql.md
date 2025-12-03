---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6JTYUB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGBiEis%2Faj0xa5kmPLvKnmhmgJncEdIx0P1PDJose2JPAiB7w5I%2BKhXz31z7beava6UWsmb9K3tHw90mbJjDbsHTZir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM2bF5iZKiDJaEATpdKtwDD0zQj%2BITTCBJjzV2bSE%2Fj7Q8ap9rgGtpxnGxpZg7BSsvMK5b%2FcV8mG9jl0b%2FOFfMUAsyRNXK7o%2Fpf6RQ%2BdvOzaEJeYx7kdFLX%2BzlPHq5%2BQjmvLC%2BDNfD%2F2VUdBVAfYWjfgu2gKLa2hYj0vZEM5asKUyZdcodQ%2B8A0%2B35FrD0EjMcz8IaFda2WzFKJsRnVxXY9LqGNm2kFYCrcGU0c2dr8CzrECcHmNea1zYEq1gpOAluiAa0roqTG%2FrTuULC4d%2FRPU4A%2F5x88o%2FAk9n1SCJ8yIQINHEXqPpJtR1azPBJtUY0MnTCvQWPX9yBcP1aiEkFr%2F3DcMqAnKabJ0urnNqjR3jOdZqb6j%2Bmt%2FLmRhPPLy6hD%2F3FNl05%2FOCVo2YwoqCyvk9gISXxyM0jbp5VVS8ZsVfD%2BcxvOowvuhjEPJfo4bgadXfB0AZXVwaibWoGimP2Tzxt%2BRVagKuvKyan40ld9XAJ7aMATzIIte%2BERBXyeYLiLQxLQs9lvA%2FDTui7%2FUhP3VJr2T6NcqEqBK%2FzwXyOD%2F7kLZZ5Pe7nN9OVcjdJPxSt1lQdLM9261FL%2FxO%2F02oAo6V00N9wrwU5cprMtgkFSPBWQI1R8uU2w4iURcoR2Nvlyp5c7C%2FcJNuTf7swotzCyQY6pgGHkyXPzD74Qwf4wm012jamUh6mSOTca5qNgFzxrNNcaf6tFFjqtEg6c1aIJmc4jrX6A7bnZdbVu8JM%2FCJ0oa77VPNKojnG%2FHu9HSocU0%2FYDtCYR2ycLonuhZN3RRnJzly9Muf72y92YPlsphXgYEAYZG57Je6VvtGuqvqat1KQsFyC32c67WucyAAxDPX4uSf3e9esEPPuzAro%2BycapZrQgoVcKGi3&X-Amz-Signature=32a81bb52bda969e1901b8123c5f5e3457467d1eba7e7ad48b3b801f9b4b3b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


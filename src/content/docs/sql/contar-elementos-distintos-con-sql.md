---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTBGRVM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGrUisAatLOXR%2BFUyhtrRhKpeXxN%2BYJ0BZ0%2BqqoNOPJrAiA%2FekV%2FbsTX1frejy95IuIucPgSax9ClIrWcbAy4Sf%2FCir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMI83%2Bq0A0c8uxrz%2BtKtwDW67I%2BFi6Z7YMncwUl%2FKezWBSi9mtq7u1sgrIi1BIy9SSPETxJbrEojDnhFgu2fTRhKcF0g7YVGhftFgbGqwgqQskug%2Fodx4D8rr9aUF8EeMvjW6qlPBEp0lG9kyqMBv7mwB538csnfP1BU6JoSUspayUG0bFR9KjO%2FGrPIfLVQg2ndbM1RFYNYQ3xzpjVyo49npG3mzuXBbeMz70WChLZc2lzaYIz46Ss8Hx%2FZgFr%2FSCLH4p1kwg2vewLZrsckY6DflwlhsrD5%2BFgHNtCymSiZlPQmwUHkEI%2BT0A0vrtoN8EtefEdIJAnAUecKPL7sPbRCvmrns%2BlXkRzcUxr8dWni%2BFgfH9ViQ3ehSPNwxo1yTWqt2z%2FCMyeKwvrRpnQgjdWalf5A4s7%2FPVXkGjy94WDQjpA3SSuvRl%2BjcJCiv%2FSPILQhFv%2B2MBFMEtcJfT1Dj3lzCM2Pe5Ukn8Ml7n9th2xSMJV6zpIIbXQTFzbqyHa91S23vz9D%2BfJdKN7T73wNhTjaKa2b%2F5TqvdxCU%2BNmZoHyMcdiu%2Fz3muDX5RHTy2kH9kkJmErhqacbiSuwFMa7Bf%2BL50zb9uHe1m6lqIlJ23krKMYjoGs00C47w%2BiWXoQHLFyB8NEyRyCb5fyP0w6oPGyQY6pgEoJbLq72Yn%2BSAbPV88juTU56WelVyQNq%2FP66g%2Bt1WZW%2BQGo3tTYYm9Xs5%2BvMCkqSScpGgne85v1PLXUFIhT1mUvcN8JJwnjQlcSIrTwiHNvpBT9NKeZHwc10jGrVO79ebCyc4aOvtkCKDwMwFY0nuiymkC7i9RZbpFcrM9TFt94pK5hN8dHtcKksmJl7rqu8lObFokzILJvuCeLUqEb8mmed1Gb1rI&X-Amz-Signature=1faeed8ea59aa19d5afb7aa7c43387f4182195e148f851eb515c22ce1d406832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


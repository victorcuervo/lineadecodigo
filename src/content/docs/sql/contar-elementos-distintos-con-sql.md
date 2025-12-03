---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WOXZ622%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHwSoZz%2FS%2BEi6DH0Uoz9i3Pn%2BbKze5DvfQ2T4I2CxQrgAiEA1x3%2BgSXMbpdvltk9uNzBtlVEZPcSHd%2BaPQCiruzGz%2B0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM65LRAq70YaP4fTcCrcAwW66DCexBe3p0qJHOjZigZr%2BV3bI9dwxy48n3VY1JfxUBPr7t%2F7%2Fq7Vn0dqdwQHfV29O5wVUbuVMXyKDJpcFqxDgqrkTGbKZIaXVJ60YEkWVjma%2F%2BYfpshE6XNyfsV3BQfJQC2zXFzwCcueYrP2ZWk50eBihTGnhQ%2FbwYfmPnVl9z78yUj%2B0piswgz7YAHdRtENYE%2BlNh3sNp64BGFUNn%2FCoF3cO%2F3s%2BhhBCFrdD0ZsQU3JxiEzF0Xj7WgXbnAQdT4GLXyfGWereSd8T0N3WVZtIVtlw4S0K78KGQA2qum2zZvO6K9Qb5rlhY09PfdkxwwNRbzjIkzGCeyqwX4ZYHSWWbNXG4UW49UQ9NdrfZi4cdDDV1PwlXE1JdIWWIAAizlOV0PG5D2Zka%2Bp4J9q%2BWWME3jabVcZuXg6UgY%2BfvXl2Q6ofT2YaMKzd1Wzd5TuE3JoodPskkYxI75p4ZPEOEI4%2BThoU4HDuPSsQwgEDhk8U2FbYI9XP7lts%2Bj7gsegH6kjh8hbJ4sewYrzLy38U38PIi9ZswGVv%2BTuVCpp84DJXqo8pmJn2lqqP89%2FSw%2Fkw9MVnh36nXnG%2B%2FE2p78AfLX8zQ%2BMWDR%2B9rLSzqyVgKOxU0R%2BzDrBE6XVK%2BpmMIXdwskGOqUBMivT%2F8OZkvwTNajh4BJvMmHWkgNnlfrzsVlTertTKK4rcU8%2FxSlePusw0A6IKoLZTmwTLq66olee7xdrKhNKeTtwKgQBryOlDKclyZqlNKdrU63dwce2bt29ecgeZ11Hv6ymJ8%2BZYUqpEu1ZjjHoI5cSUfiLB1OO5xcnOg8Y3gD1sjDfmFo3b356QJKy4N4Gv%2BQKONLDcdj%2FYmEzfAu91BncJMUu&X-Amz-Signature=7fb997c3846e1e6614c1bfb134f8062b531447ebbb1aa8ea435653438d235ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


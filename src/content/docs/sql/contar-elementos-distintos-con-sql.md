---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRETWUWS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCDq13%2BfOvZ6y6BlJ49wnZZYeHTVTD9wX4OcHGzHE029QIhAPOAgQpzewVvusKKFi767ohSkZXSKG5DEkwQZdMjhfWtKv8DCD0QABoMNjM3NDIzMTgzODA1Igzo5Ip2gBn73zMeH4Eq3AOx26HU90DAhy5RiXvYFNn8ucdvvvYho51IqY4x8jQ3qcf67%2FW%2BDQQwJ0Fd3LfatEjlVQa9JYCRaVUYr309X9rFD0HVdHTzUBy3xJzVg3yQILfLI9t%2FQj3ZonCPCIQ294c3Lx0y8Ijzgb3QMuXx1J5M33anTBw4xsglSKp9tAmo6tpjyKlj0ryppcapG1EqxZtR%2B%2BGwpIl0JbLPJBn31k%2FMucsOw0KKqcJrIjsayKgRbzk38r6UTZH3t9Ktw1YQVFSII15xsz7dYK6unyCvqf0zk27zEKT8BCB4QBtCE90zXTyVtV%2BDUpTE8QaLriZBX6D%2Bp3Zc8JfADEgeXJUJrDLCdaqouH677FHyT4UYYsZ5ICFDi%2Bqo33aZfQr1zsRvfQZMaptYIC2PZ9sLVkPjfQ6xX%2BsiyCm9EGhxTbOFFMBI6sRW1ObIBdJj%2Fg1RYJcU82HMOCqWjHKVNBVfss2DeyY6poQommRaCtJc8uTo2%2Bd16NANA9nwyyw6F0aNb7uzmYMb0TxYZ4ohphsrPzCXK6R7in4WDCvZuRqy2wgk%2Be9fbrKZHDLypSDJMX4O%2FD6eKLG%2F9eXEvX9w%2BW%2Fdaya898fF6VTkM%2Fl6u%2BVt367UdFRyTe4ssetolSoyIzk91TCUkMTJBjqkAVj38Wpeobo9JfpnGs%2Bf0fec5x%2FQS%2FkNnTZb5hB0cunvbBZrZCERNWr4uBqQTddECqGGbzF07Ive1rOgh9WemYShI9bYz1Z1Gfb%2Fvez95mUJew%2BT%2BnQULPT75EJVHQpFXbd9JVZ7kO2y4ovsm0n2ewK3V2kbO3hXv4ACuEv%2BgC7DZLK6AvCmQItekkO%2Bxkzi3cgyMFfEqcOV4jDOobc0GY1T9KZN&X-Amz-Signature=978e3564050f828e736608d76bb118951c1debadd1f49a76d4b0762c607d2b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


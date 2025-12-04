---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAP3IB5U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICfHsv6OEGn0uk%2BKNpCeVUjyY7Hg%2FZcR%2FGkwrQJQfaDIAiEA4ejRhy97BD6xhwCJkCtuaxenzD3tPYQGdVrMHAe6Fboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCr3pee036%2BJP%2FuGryrcAy5yOImHWpk7nOfgmwfU6LFvusUyYQrrzU3RFVOZYd2QXy67UcDJUDzIBcMpQYxT%2BBIfkdq7i5k8m6vQmQoUEpiT9KaBJVHBAwP%2FlnQ11Ip80ESoXf%2FGSGuqJ4%2Fn4%2BiEWYQ6hkG5fQRH07Mf01KvCDcuMy6SWqdswhssbD7Fv0C3WlTdZYQQwicNeYnqwBwIdIpDUVQ0Ded5hm8eS5%2FLETKnIy5I5y%2BnZHc7pdaKO3AyuICm7VykZWEKc83F9oRZ%2B0eik5Lb%2B59g%2F1wQa1QDL63Eb6t%2FzQRvsdTgROrRJcKnCBZqvdiYSQp5asgsl7KtKYpsRjenfh7XTZQrs8gWove3SjhCFXFn2fpal82TGO07sr5drXRqhZT%2FmE1gv2JhVdlO2chuLqwT0exvFYe8FbpsFIrva0SaapAqfFSnJYHiQd%2Ba2hogbQgbS9O%2BzAWtDTqMH4eTEyXOi0qbd2TMENaRr90LOKskI95SzaBIdhsftGvYv7nNmmv%2FVqOSbpLWftWvCsz6xQoy8iJ%2Fi7OPovHMixgI8hUDE1MQgx098HGth3M15Zq1am%2F0pz5LrlkQALQQeWke0AyWdJBP6t2Eo5OQS1VCjasfsqVz6NTtKuofPlJmOw%2F5FQIQH%2BlcMLnUw8kGOqUB6poz61CAbsi7uzUw%2BmtcX4H24yYfQgr66o1ISWeuq2dB82BVJ3sfzEEUHIqfwV8Fs6NVlifrQuKt51vIfzPXsFAelVNb%2Fek38Y6DlOKCeCaqkTk3PimYUQF6e4ZL22Q2j2YUPJoKN4%2F8B%2Fi9Ty7jzZM%2FeaNVRYTGUzsbOWpm9Prlt5ZaZ6Cw1gOrCM0Vu%2FUa0SRuH%2Br2It%2F04VBQ8vD3BvmW0eNs&X-Amz-Signature=1b5db97504a984822f43d80b43dc09fc44ba2600e22299c1e1f0bb9f36081b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


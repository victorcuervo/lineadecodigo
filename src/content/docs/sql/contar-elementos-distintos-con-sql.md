---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS4CETTI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHZqy6KvoNeiCsaw2wUAPcVhq28AIF6YOJQhdYkQu3CMAiAx11HE%2BKppKL9gfGlFHGnE5nXwb7mz8e%2FmbR%2BpqYnPOCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMlaytpVkiZ%2BEYMe9QKtwDJ9uDYFS9LZcQfsbH5LGs4C8%2Ffb4Gap65tWWCQmgbt4FeQ33EGlPxBCefRyuOYjv5UOX2AHlzmPE07BCL1O32Pk3chDd5MAlzYE6DiqhnymsuLYKYmDNR8EfB8fu7BQke%2ByX9rqvhafmhelEyBNBv5eJkE0cqHElj8erbJoOpw23wcocB9bcwk%2BwiaQ%2Fa1J%2F%2BrFz9TJ2pKpbA7V5h%2Bc4pitrLxFHybt8zpq8y2VHClQ%2BFPIz9Kd2pTLbRA25Ik7AnJrcyAnnnWOC1yHq0Qz4IOakriTJTwh7jG%2B50cz5PiXXXtH5Vad32G9r5%2BUpiK35YIXZ4hS87%2B%2BtXfHPgXJepph13yV7jrIhqQ7E8ssTSbMU1eCGP95X1VsF44jSDl5TR9N%2F4omBLAbCLBwhp724HlUamNdxn%2FZDxw%2FFE4dzknC6wdnD%2BgFcbMHS%2F%2B6SVtFyGNN3dMiN8GrLnR1o%2F5Yb%2BNAZkcz6HJ0kSrsZSmiMcN4wV2Rez5XQiepMElDrZO1vJ9UbUH7i6%2FpAKFzURtxdlcGj%2FfgTEYBo8YwZw76qubAQ97pHOl9NcbuL5K6KIWJoyg2QUY1wI%2BIgjlEc6dOmjoL8%2F5D3Lu6kIOWLLdbxt7gYfNTzafe41maXQHXMw9tTDyQY6pgFfxtHOIp4%2FhEcoAC%2FqY2OtvnWKxknG07ezdtUqKOSsXCIorICEjt1dCisvIyKhDXhjE0GoIfgVHm8eHx5Q%2BBBJgISMvspi80mK8V2tOhQo5kHiZJaANbseaTH7FsB4IY137Mq39fNKD3dBwsfC3olc09VKyiwLtONkaiy0Jjy0PpTW845yTk78Id13AfxO%2Bj1iflWjNrWD5fi4UzypEZ8k9d0jjUmF&X-Amz-Signature=7ba9330458d2e8e510bcee73b27534cbb639bda4e09b9bbf5881411163e9f4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


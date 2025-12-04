---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQNOM6G3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBE8tbVvBIMqisoiSQxegwarwYdzXWQNJgZb9y0TmK7HAiB8tP53Wj47pDULIHKsVXhG88f0zrNveLlvaVagOvwRFSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMA1vQjFeB2o9sRhfwKtwDrVNgqKmhz%2FXPySZFiGu9HmEU72kFaYsxvzno1eWHHXgphGoWLTf7YGgzYX2mjFBkcV%2Bxz4jAbzxn5kFDQXn97X7qs7x0XK3WJLtMOSYTuToNrIfNWdmWYJiET0Gd2czE7bZ0UY18I3cvf4AWLTo4SyM%2Bev855gRmJnKyA2fd9H7fCkwGWrFg0%2Fx%2BBmH8HPLKAZbJc4CwTTi27euBKr9NFkwNuqJotFOkQLOjPblOcVkh%2BALuwKBte4yw2ychPVX4ROSR4ftUfnFzQWy%2BrY1h7rwJrChiltDXEdTg1TRqmk%2B3Xn4yVlG%2FWmiigUQC%2FjeYpb%2Bw%2FZeW%2B2YzYdQuT9136rkSAzeSCzkq%2Bn2Jr59bRLrOWpXI%2B%2FO%2FucOrA5odFizoskDZUGQTX79gOzhFA7TPicoOp5v4lvg1YdBsKlvstiLe%2BGaFJd76KgitJeII2KZ76o1wpnrs6a1lw5hKP8wflH9c%2B694XqiXqUVFfQeYxJwNLbtAykZ7fiFxqJvmE8sKqs9oUgBYrOK2nOlvMtLmEmWZWfa%2FiulG8r4WgUtIhBaTf%2BUW9HKDN1%2BKdDF76zCkWjACR%2BqQugZvv807yOaIMZqQ2GHP%2BvsKQIFrrCv6nrue7xYXabhiYdx6NSgwiefFyQY6pgEAJR8RLFSO4NFBQzJbmKlf1v2j9UAGvBYgViy8sS5aNldeBNg5pH9SuFgmwWY5SMPykJrB1m1FdpF1xElS44gin6wwdtHKHcTx1arxKCQ631VQUV6nsEzxZb%2BLBzv2%2B6qCaEq8HIrB5P%2FkQGP0GgSd6i9LInTV9yjrxRdk0%2B31TN6nAD6gfbpajuAX1R%2F0LCwhvHmBayAtMyoJwmsXrwOwIKjtCP4l&X-Amz-Signature=81ba11decf96d6942559440744fd9918baf68c31c8064c798ae39471a6f83622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


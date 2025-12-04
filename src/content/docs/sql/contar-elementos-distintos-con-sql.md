---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NBDQS4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAbObht282BmESSy5XET2giQjpW5ZFhOPUPdIJyGPoRqAiBmhKw8Z9PWq%2FdH2B4uww9nCp51BgftOgMwq95awVzvGCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMObhSNs%2BfYCGnt%2BFzKtwDa6qw0exgLXC5OyCQ%2BOxGjUxK4EOuTkKXUSEu%2BxVXfNJRd07Q4JuVHqKWBXTSVjMogDyHpOqKqr%2BaO7NQarEW4au3lgJJFF3QAbc%2Bq7yadqHYt98p8gj%2B6p%2Fq44PJ9xqgwhuy8MQ9yF6D6XT0uJqErWuBd8HFLCFNoKJBZRbi7Uqi2s7vetDQfVMpLUb0N1%2FYkofJY%2BQYzIKQQfT5Mql3J0jB5onIv19LHf6lBE4WHBzZEiAIy8m%2FkR403AdK%2B8U9jEH%2Byap%2FjjhFJFc5Y8h0m1Em5n18mfDlg8Kv%2BUIxJAevgFO2RQvM6XT42p%2BDtUTZE7yyUqvWMrw14cEoZK6LBLxYYzDvJZkReOBq7A4viFpGHB7AsDGX2rGr00%2BPKAPT54qeEL7ZZg5twUvPv2w0QksuRvT8EYSVXe%2BzGZGNu11NWQMA%2BC%2F2vDy8WPFJ2gxr%2BS6zJJUbR3Ak66zvpaduEjofRhHjpouV43HpxPTEkQNyDhvlBYHaNh%2BPwDS7Lb1Bcwk2jKAdWPSYORYxudS5flqkM7PtAc7aEcnwnloz7vURwIU3%2FnjHQZIK4D4f5CnOCFOAMgUr%2FaC1BgpRpvgexw7vQ35ZYIG2USAoruPxGBuf9jYuXnUgM%2BTKzZIw%2BoPGyQY6pgFUdl%2ButYnww8G2%2F%2BWuyfYFIGVahKf9RTa48SO2DiV8L%2B%2Fk7kpGOAucYZuLhSPlmdRlhmGzbB7o7bCXUW251OFXrps3yLfiH9hLp%2FJ8Wc28SmU%2B6CGnDchidwygRwoFuPAkq2zhTzjfPsWxodL%2FY4KZDQfez2LiXGcYr6N8jeDbuA31goI72QR%2BEUT6YkseaodmGGyhfqDog7Bl9fWucmU0SEzzTyK5&X-Amz-Signature=0d415a865c9bc08b182679e424f2b5fe1d54e56c3c2342e3a5daf84ac948d515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


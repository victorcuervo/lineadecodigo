---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N5ZBIKX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQFp6gxJK3vHEV8RItLF3A%2F5n5FSuQ9uiq3S9IWbqwpwIhAL7S6if1p8XU6I2UT%2F7fz4Ge0naqopzUWIY2zbmaTm1aKv8DCEkQABoMNjM3NDIzMTgzODA1IgwNSx%2FRhYkGxiehDqQq3APQWxMtpXO5Wy7cbtf9aOrWrJUJhcH3jJVliyCUUYU8pceOBi6vHUwm3A8iHJnpWQKzhxZX0X4AYxefVQib2vultwJNB%2FzKWxQT2D3dVgeGqPRy4SSnWviXB1JWzTGdEE5CcYFQ7%2F1nTXZnGPmx9vFoGaqNR%2Fwj5v8Tqpy90CmcmWXyWH6DDsqLMGX2Bp5Uo4vwE8S70gAucbhtjtIjx%2BhyvIZZNjdvUVqkze46k%2FZ%2B%2FGulP50eKiF1fQ8Ciji%2BxNCqayDOMpSmBeDeTI%2FTBr2NeeSaewt0kJgpb4N7nPo4GH%2BeBZkanY0yi4zsGnIpkh3dHfG1u1oZGiZSAr%2BbydwI8qXPhjZAGQ6EdzeWKFmYl9J%2BQGjHHgDE3m91XVJYT74zgSO1fpRo9Rv4q5vh1rI7WK2UG2Oh0SJApG4eDjhnnyu8EO5YRpEosJXSOPZpj0O6NYjn5P26%2FtnxKVPZbM5aN9dhKhJvvKPKCpLYpzsIlbMIUrcQV%2FSDsI%2BMMVgbqq%2Bfpx5BhGI9B%2FXgBA61Tooqv2ZoQiGkXL9%2F94W8o6ZDvnspIFgClRTSZ7aPnYDUex82olGcbY6BwAv5B3tmHTOMCJ54TYKFAsxFgoWU52%2FVDv%2ByfOs2zZ1Et01dxTDM3MbJBjqkAUfXUrJsq%2Fqqju6tsXPw2gxZKL4KWZXsrteXauKbXZuNX%2FVNFFI8SCXFPgmHJ9bxmOtpaPdDboq8QMqG9GcGRoOgJ9QULyCP695c16juribELPRD9okuRolh58RS%2BHWxzzdMpjsO%2Fr69LMA5avb8KWTkQqj6c3kLdTyoETWsKdzYzXX9TCtzSAP27oJNd9u96mPCBAdK0%2Fw05TYu%2BL4rudjzPew3&X-Amz-Signature=3e7dc6abf27b256d841c8c87f7af5c8f76d4894b0d9a54112729758fc30477db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


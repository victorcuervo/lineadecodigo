---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TB3LVAS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGkrkKXPyoj02esQnSiRCZStRa6pFKmKtP0KRcSnwKb7AiEAoUUhWMU8i%2BXUYa9Flh91RE9ynTPENctc8ga%2FrYfqS80q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJieBy5nkvKeMhJC8SrcAxDTyRka5%2BpHffUEJ2UcSzeffVktSEehFzb5Tohjo%2ByfNpQhbcekQc9on2h0TGqNI1uHvrV7hpe6iTeYhLv%2FEHNaBo5c067r938YM6NKRl09SXI1DAvZAuA5nfELQIkb8hpGvVpUErjc743GEg4WhloBhv8AdwkISHhceqNiIh5l4b3yRaqR2YQXciw048o5XOUJeQhAoKlrI7COzcz27PmaWVLOAUjKtTsU8upA7n6ZGIstI77ILDls%2F0%2B0H8SpCnMmhozg27mnjRQt37YNz0PeRVdJrAmfJh7HeMSkyzJHM3DjKsgV5ZWCTkp0vo6RmbfaFMhswHuhIqJrzYnBsnc5IXxZvWVYVTQQi5PLvJMg3LB4b9KQtcKi9YuRiCuCoBUMsiUfcECtsZTvUoIQ%2FryeHqp8RS8tdZ96mfjUCqecX6NE6%2FGZ2evfTQOdzzZBwXlVFnhLrnpNw3%2FKSLKRR9L8hj0xx9LrNSnusL%2FfLXjrk8QQ21Gy4j5VKm0BqX1jeaN3qwZy85m6JvzWYFrqXoeSzUhnE1fo6oNbUNm64kfatVzc6jDZ2YFX1N4lcvkHHw3y6Fe15pMy4vJFzjZ8E1TpDQz%2FbqVlLtvztl0k06irCvxlOdPKQadxAw6nMI3nxckGOqUB2A%2FHGGGsHqjwEzt5m6sZ%2BQeKey9tHeejThNbS8ESsSClnjREOfAk1PUdsvW2CNrFDuYt%2FRGXJYJ2SxIQDe8qfL0%2F78DfO5SP03%2Bjm%2FFyCPsDXENR2lzaIqdOk2sPPZ%2F13PHOhpfAg83aELQ6%2FPIO12TekzbPDQa4iiwFnMzlgSYRYdva8kpaYITSmjNjWvMpzPOF%2BpMvNALfhdkcoI%2FVoaJdEsFl&X-Amz-Signature=7abc4506f9c66044bd958bb20120993a52f4c094ea79559d5a2f0f764bea88ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


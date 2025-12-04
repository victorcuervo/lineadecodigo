---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKWVZERS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCID61RG6tzKz6Qf5rG99wTBrRNy0GGBpSz90AIv5AdCGaAiB6zahbcNfZ2OQWUOkdQs7vxrktW1RgGhPMURGaMdol4ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMVzIbHLeM%2B1lAa8jlKtwDkruMMwBNFukSio6fvikybCHqQWz%2FSl%2BpB8sNRoLR89JyPLzJpbvACJ4cgn%2BhnRjt7UK75gWbNK2epXD%2F%2BJYfxKfk9ZmhZzHMmTZVvV1TQiyCro7zLvofsZAHeHuawla1DilHZSQEtOpxE9lY6hobSwHRve7odUtf57bIElkr0Q4PWh7yhdUuOSqYcLrbYRfU2LV4iAOvyiylX3z5Si3AMaW518OeSgXMU0RWRF0yivpIM5z9IoyCLEHUk9mZfMMnz7eKYnu9gJPRgKdcVgbnwUunWfzPTxjs0W8XSkoT2wCOvXSyP2hWpjh8tC5qxjKLh9dqef6dN%2BSaIv0CagOQVk5j7Loehm5kPTzz8tdIoEDpVDiXNZeR0JKjpOIquwzl%2BEpxMqPQMo3pxxxHI99LST0vDTbUlhB0SlAvIK9H7Ir37m99WEpsBe205HdW1dv7PY2Nikt8e0v77NFwWqEBX2%2BT122Nh3xGDTCXG4lkq2hvaBAIK2XJFYDWfcEwd6FCpy9rRPW%2FQvLtCqt%2BGw%2B%2BB4v%2BGdRPvPH4TJmwquhinoN04wLZRUlw1tNAX2DiER1RtzqT1EOshnK7sOUNpFP%2F%2FGq1CIrkvcftu9BbeuFMLEzy4dk9z1vx1UIa%2FSgwnJXDyQY6pgHVGfY4Swf%2F%2Ft3GN41gAWd5lqC7MgbC%2Ftr1E2xNdl5xsbnPC0iakzY9z6AoLMs0IHX05V6ZCl8MKtSPuVbWeYZyM07C0O%2Fd1UG3ajOeGUvSjN9%2Fp8L6WDft%2FEiWigE9VflNe%2BRJXyF1NiX8RmT6fAN8C3rJBmLfhJdg4brRHs%2B9Xu3oLkL%2F8L%2FpyWOWLMUfO58z7fj8njo5Htd6vwq%2FjEzOcodUismA&X-Amz-Signature=02c7cbc3b9b7c008865be358962a2ca9f923274758e2923cde440da973c95383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


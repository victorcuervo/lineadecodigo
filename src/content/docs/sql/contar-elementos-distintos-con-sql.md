---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BQGJCN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIFYflnoWPoZz3OJmKzi0He%2BvSZTeMKZtqSr4pJF6ucwMAiAnKj8iIJAdB5BNEKFNthzCuGfRr3VSI9bUDo2kRZ9mZCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMBNQW0%2BEuZ5Tm9QtuKtwDgCKSpma6uVMKdE%2BfLs50ioiD8K5%2FLkgIXVRzCXRBAeWfAFyfo0uOJAjgz%2Bcid%2FHlTaauZa50rybqZfHZIWk0VUxiVoPnED9K7YY5LSPS%2F3Nz7Y87pXiNM96RVxLW7PkJ7936I6QIcMYfnVkq4V6tZN5wr3YtYPEQXfqFgYPvYmqB4Y%2B8jr9ekeHxbeXv7BBpe%2FDU2uyaI7eC8Fzfy8%2FYOzlWlD32Uiw8sB%2BjGxJTDrh3pZl2rq3tBKIVnTwoTL6oHORKxFDngKxStAEDYhTNRyaXWJPPBYSBb1Aza8dM0u%2F8tPPRD%2BGFvcDaCWTMKAAUriM8ymvGrWRgrs59YBdXaNFssJw6J2v0c%2BxxyKxlyg96RX5mIrs8FW2FjAt22EbvhJB0o%2FY8vmhypw2Dx4ikozwYEtl950oIL%2FncLjREjIfswms470ECeiLgUuBW910n%2FCY4GL3mv34fIHiOOQp7jx6CsrSN%2B%2Fuoh1nMYn6IqrM2B1BJmyZ7emRlud6IWSgroFvngsSW11y%2FkAWj7MnUiBorjHhXm2gok0Q7O3gFQbct0T4pJBaZN0psMPBmhSh2Kb9MKX2DrCpN7zS7xqortbISSf2A2pTT8bPcCQWaORPGrnOQ1aANxj1gGUww577GyQY6pgEdwDIvY8o1meSwRImdCd08G%2BLKRr8ECyKMPEM8E04D6wKfO2iTSnS7B9lVKRoJJT%2BCVQPMVNoQ2CLcykCe%2Fj4bO7vsyXmtw46QQFD89SMBnhU%2By2w8A4LKV%2BwA%2FxV0yWPxQMgrj2zPmppCcmMXXQADyLPTD2244rq2VIeq%2BV1dsjhfWBRu6Yn7zddFhpzVCwEPS9l01miE0OGDuNAXBfftLMYjG296&X-Amz-Signature=9edec200020a135b2465eed694b00fecd650afbf5e81b8af29b1e64796f5bb38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


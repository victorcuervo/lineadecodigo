---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LPEQGBW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCNSPgLqKpPM9os71Vf29j%2FjVuhriQLBbyNgowRtSTHLwIgPpYO5%2FJTwadcY9JA%2Fi81cFFPFZgHLmGxwoZqKJHM7I8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIdbn4ixlsq0vA5emSrcAyWD8Gbd3tCKTZ6F9k%2Bi5Vm4TqJ%2B0qYJ1%2B9o%2FT0HJJPKxHdN1v3mPhvOkKt7QjRJrY36fb6sStjJf3ipVhqP5K74E3Qerxou2h%2FRa1TKbB%2B%2BbOJrQ1eEAoM%2FaPibKczTFuzCZWwNljKnhgxfqrklYWq9gozzjnobJ57LavuQCLKCArZHUjIjsHTrr8kFZ1JWmGtK3GyejDoVnaYPYEu70u6GeAha%2BY4Lb1pGR08ONFhI5X8LCL1eS1bPWB1e927JcA8g0yDUbosMmxsO9fhS4B3LrTaNGM5wfw4KRK4qqLMMefx0rH2nMOPellLkpMdQeoRKIvyACmogeLkntfDKoLzSe6UV7Qj2fkn92fPhXgB0b%2BrHLXhOP9jcE%2FQO2RR9FA6rEUlkGgoersqhGeJ0oGwdtfi8aqtFkdWUhjchFSrRcYuljGBMbc3UzSq7Kjs0DdrAWJpspNTKWEQt98aY18NUsS8G4Ammjjk%2BI9RLzxvxBv8LTuggoRSuZSna2CJlnUuir0WNm1D8BOACKCCR9FM66zXBcMbEgEqbFyplbZEjo8EmwgWqXL1BfltScVeZPyuLwGpLYfJsz7uE7vEE5081cgWJXJRkvHiBsj3QyJfk4E4g8Nh3RQNx9001MKChxskGOqUBG3gL5dx04%2F2Y4RbZD15Zg%2BvFE0b96CKGWvxf7JWaITqDnj9TdCwHVvz9%2BbcDGkBiHA5y5EJtMJOaUhxFw2euRyCiDfgp4pDjIGdL0egNk8ZnaYsywxtvMvW5Yz9o%2BKwC6Hix9PzCBCrTMM3VeXiv6uCaQTZHiTCufHrop4vbSN%2FLUn0UY2vxJIhGRT4ouEhkqYh45dp%2FvEAkidOOE9xX%2B1fsZDiv&X-Amz-Signature=4350e09f7c5ff3452cc4b809eb117cde003be1dd96a95b4b97e5206be6e330ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


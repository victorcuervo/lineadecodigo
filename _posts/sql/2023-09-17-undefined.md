---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LYDEF5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCcaAcUseTtM%2FTs2OnA09uLcdEFyLSbBRnzApbrPmqE4QIhAO1%2BIGzdgyhLB%2B60m1uu532B6yhsfx4H4fFfQaqbmR4wKv8DCCIQABoMNjM3NDIzMTgzODA1Igx2MumyvLtdiV8jZjEq3ANm4%2BE94uFwWnBx6WmTFED6MZyRfomYi6xx%2F9Vrw8Wvc90cLNXGdOuJxIMxlphtRtPjWPbOu01o3merIMCiual%2BcXk9oIgZ70QKK6Iu%2BlqpUtJmGZgbU8OCP9E95gzX6wx3zwZ16jaRwyHOzbApRin9HI5sKs%2FXZkR2Hs62xmGZnvfdNWHUasrxjFrMvz4S9Opnh%2BdthPsZqsxPNQSMlAZvvIeJsbxnpqH7lChbueGOl4V1quoM3xr3Q%2BJ7pm2YzMSRf1rJ2LJ8Q997MapwpHX3js3S2%2FxAV9yATbglTWhzWZL%2BjFP986S8xze0wOUFseHEG7DauI2RePuZ2DOWX81XEyzGP73rHpVQU8QW9mlUFmvEdOST0jpbajMUUF9sTRYB4LpkwkItUPrGqZBW0JbIQLE3CTlJp0uG3Mj9YEjgy8s%2BvYSksG2L%2F7wGB3A6kE5FZnGofE5GBq1x%2BJFMjAKQnG1byj2CrvdhvBZrtVT58JpbArCN0nOlG%2BYzBwdPOVfLKnAYqC6db4LC64EHfzqY8bHfe20%2FSr0d9tOhQTGgvMOlh47wLKGuxollps%2Fl1DlfvNkIpUCBXaVsm5tXlB0lnGwBbFslmazym3UWxFIIGn8FTY1HC9PXaPTc2zC8lb7JBjqkAVSzO68VqrP40DLgRjjy8i8jeMzlF6ssRVvztuaaie8g5dQSy%2FH4m7KzefG8fICyA9jzSeIhNWryb0Smu7%2F%2BWisPuCIhlG8HCUE76Fn1zvelxeEF6z426XRsFCGW%2BfLVQ2%2FTyJ59uldMvJOWePBok%2ByE%2BdnDLYQSx5mhLnyLIX9XbE%2BIH6eV9zo7oi2QHgsmvj4eTZu4NeVDOP8sMWRoghVHcP8R&X-Amz-Signature=469290963ea884ec627e79f476be212342d8b8f27cb039a8aeb8744dd077ca84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


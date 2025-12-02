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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z55I5U4%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDbd2xWbqfnHzVpjTTKClz6GQJL%2BiuLaHdmX6LEqcAjugIgAJ9HqIGxskwsjoDaPuflqzBobvWBoOW1lT6JH6yquyoq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFwuNJ6NCJmUBdarLCrcA%2FSxAPSQAnUmqWV%2BOyqogJSmdFmJs5EKUY7FNV0RAr8aV5i7WC%2BpNd2j161shmBilNKiSXndcCJ5QVwC14STIUhNo0zhhoOCgYOCR%2FoSkfk3o8VEB3CVP1T7mYriZ2Picrq7CKbWv8m3kHLPOykNbZzSbltLX33W2%2B4Oikm2jU97ci71FwddHArII3X0C34%2Fw5d86hTMFYR92NoVV1BZYUqyAlqVW02RypYOMLtmnzeiHwR2QYoV5JbZqJhs0JC7ufXmZ9460fNYh3YWqX%2BsA%2FZqkOeU%2FOCtwlLLjbQUnR96Ny0cnj1335HfTnjmmEpIl3%2FSuYzzBeS6uhKzd8ZnvqfuIp24OaKNOhxW%2F3z6xMBLcBh%2Bo9X7UaMQtmDzXdE16DLFhWjGM1uhoa9ZSq9iFmZ6gWJiOCeB4RrIh%2B40DZ9crvuTn%2F%2BTF0JZK6eakZ6QwmSpeLyKq67hZmgOoANzNeuXYYt%2F2K9F%2B%2FK9%2BeXsBEIfQq4UxVitGRuLxkjCXOY2yLfLaSoTauNg6wv2J6ij3djC4AtzEi%2FWqBZSfSxGgsiWmzIyZuQCe7iW770PIq69K3UsXvf9y6RYV1H2m6j3Ibh1mXKU9jgRKN1zhBWZBltoOSjzkIia9ME2dxhMMJzlvckGOqUB6Okr8GYAjqgWsZSuMqXFjbNSX7X%2BYeTJ3AWpXof2ZCpeOhQ3kqhUYx9cIAES92FUdLdhQNm7fvLChCw9ee%2F3Cu9Ykpc9Aqolh8nRY9hDAE5Kh9JS%2FQVPQRjBEwd35JpvbIFWsj%2Fb05USVd11fbFpRRvy2w1DGTpSKedo19wkVLJvTUtYO8WIFMpcM7WhpMV7eJj4XX3E5g44CNt7Qer8fF6VEN%2FA&X-Amz-Signature=cd9738b302cf8f71204184804554ceeea6e5a33967b9258cfa26daf239551bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


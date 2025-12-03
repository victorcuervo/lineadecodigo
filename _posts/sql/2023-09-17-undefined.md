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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Z42BJM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDY6vKAbhoTb5AmR1ZUuUsTtHymEjaYuLwvBwcHF5M8MAIhAJjux5abpqRTJCjb8wL92SN28zqcllCyUVuL%2BC1FUD5UKv8DCDIQABoMNjM3NDIzMTgzODA1IgzC9k3M3EKmIuoPS1Aq3APmEut9kKuHwV4j%2BV1NN9DMV6%2BtWiZs6a26VpBeH8rkugFrTlyr0W6qO6ZE0L3BrRrr0qphRxbT8%2Bst%2FcgVXoXs6Ux7ET9AwTCAnryLPBO8bT870BkJQx8JenHP3abhFtbqtJiSTEvMqqFVGmI248xCxcsUWzM4FisLkfr0llQfQWddJXczIyPs%2FX%2FrdaJDFMsoWqsqtvnS2ON5hnH6BjBkM86vdRHSybOV%2B1wPSUXMRb%2BfSSm0F30%2B4Ij7XWkjpnFRSlAWQkqiKhwmCVF0VJ8uYbChkh5QPZ1TOqPsvMoNQ209et6IsXQ%2B56ONDbAtZ8sH3vc3w4h78tg2HjhnU2pGZD0nkYlo96vZ1SNeKwHJz%2BaOzRb3e1c1n2XD8smM7f4kq%2B%2BZzGAGfvkpXp81nB6qO9ZarQYg4S0rkD%2B52CNjmeiudPn%2FRKOnnjUahjuDK9lrN9rjaT%2Bq83FK%2Ftrj%2BmcwgRxoSeJnZirv6q0IGOvJfPuLWdBpwTS235kJqukFMb%2B77kG20I5Qqy6yfwJTMOjn3berSr7A67TQ3xEUAccg7kybMnLlQ8%2BWe2XMOWuTazmlZtY1cIa%2F1XoiWFoD8K6mQfT3gpNgxV6YPdNgPJgGmLY%2BUmfYReTin%2BcG%2FDC92sHJBjqkAXTLq%2By2SU8JCFeSLPas0X5HexVLa32jvaeeeFfMFuMPZHGSGqLDUH6LveGyLd4A%2Fiw%2BTXdtMXIQGlryHm8E%2F5KAus5noCFLzuwr0yKXsiIcM9NmYtzydLmYSbrTP4qrrf%2BUDaQiMTV0Kh%2B39ptjPzWF2TYbCq4dUX9%2FiEo%2FzLy1R54btE1jFPqzp1EFRQZ7Zjic76hrkYJ3xlcrmbVqCi4TXZkC&X-Amz-Signature=1dee05153e0ec1fcede694e078ad2f2707bd21ad666307d490d4087f7e172c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


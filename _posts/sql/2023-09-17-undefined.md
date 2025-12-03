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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQQORL4I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEj982YsF7xRQh2Ooj5Wh0hUG5jljKa%2B043nhUxRsa%2BrAiBpVQxOZtyKnhmL9kssiZGAB99Wddrzk%2FfRL4ojzJbV9Cr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMhQsoRSbFWwoeW262KtwD3olxS1DnQOikAa%2FVgslWwo1egzC7i5uJxYbmfei8e6KZHDe2FCggy7ZLN93GiQGXpdkquRocyg7%2FJo6R0J9rFC5KQaXROciQ5efbvaq5PN8ptO8x7otfjKmPBRhkjA0dCiXTfOiiJWEmVehOBPLUkqvyKIOMLFiqY9hrH411R%2BhxHy1IpEbzUo%2FPmcXaDLm35GTxdTkQW%2FsGWWzn0rMMq4uQurZcUBzGde6s%2FZwq9ZTsW1IZgaq%2BnGkrACrZSDK6rbAC31zRtfMUfMKgED3N9L%2FRaAlUM9pwwGmsTVhtuNl5tlEN%2Ffg62TiiNmYsBq0xXgpru6HepPGmDOYNQ1iw9fFaXNmmnVncaAkKuU46CoA5EH7PIzRDtR0u3vQ3vNDD8757imxW27xKsXP26OsQwNadKqA2EZyWoGFyyGMVzlXgSP2ac18wPLU9VBWX4cHXBvj0NJcRtzwz9ftJQrm7PdDshA4pYBi8aG9un2xQSjkk7YQxivq8Llem0Du9LL1lt7RwXRbuVXGku7FkYUQbu82zIQatzVmawN8kBzFN985YY0pth912eD0l4MM8u2BRXYrwX1VJ83qE5PvjrFbq%2FG%2F1YVV%2BnkT%2FrfrMBMp5huO%2FlGW1jJlHP10Bxp8wq6bByQY6pgHXSyC1gyghYnPtRmxj1Gvnyzg6RtPyrR6gg8%2F6EKK1%2F13UXTI6o4tDJPOoQCSoHTXPwyMwac0eiqotSZuAKz1wI8mdNmz1luMhOBoxeKuiy9ANKc0s%2FDDKYOPO1V3YfrMT6V3NtKuvHG6B%2BVdtVuBZDE9AZbdd0X8kGuhnxARLulCIDiic3C1gXYIVVqqLvpwlv7wtYVcebFHdUG92QPhh%2BHyhlt0u&X-Amz-Signature=5870cfc6bafafbd717a8ab57f6c97ac09426a09dae75aeb20dbd0d3b0c3468c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


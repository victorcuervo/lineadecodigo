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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RSFFAS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIG0Dt8RxXAzsDsVd8XQ4XO1slwNJbVqA37O2EB0NVd7GAiEAtoKIWgJFKlqMevctSfX2%2F%2BAw1yQiqwzVwb9Ywjew3PQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOS%2FnCamid8oXYF5DyrcAx58hyU9WxDn8%2BO7ODohLh5YbyGIjnTK1cvP7Z0gF7djN4tH8RHXHPYjNl%2FW1mqumaPZFSeBiuZWirWvkhm2ec85acNdvKup%2BgSgYt7Lhz%2FR4vE%2Bd%2FI4n8EbNc6y5ZvhHAGEwKeK5Ddmb7fV0GVyR0stE8ewIRj5eQs6Qc8YzIy2Nw96zEWIayriJLzIkHXdkOQB%2BUneBLpweqwj3j9R%2FCBxMVysLN5doouOnO34oQ%2BlIu5rUYNnqZ0JirTrfBTUF6yiCjoJa8inMBm83x4CMyqWOmt3MqifhGH3SAfUBnXhUGPq%2F3Xp%2FoerL1AV9v8F4uK2j1oYRih3zbF4Gu3ItJA9QIklD%2BnAERcm14QgFpYAItdAdnA2A1VWT9ic%2FriyRG3V%2BsbFQ1x%2B%2F5Pf95%2BgswL7L0PuoSj2Y7K1jNFzJHzXy9Ox2v6ZoZfCM89Kx20GEmvwN5wH8oj2uyHhXGjumI1JXdaXi0TpzqzobsiZRXBRrpW3XiiXIyld3M%2FWZnhPsVu7g8odqrMU%2BXHWrdNSyzBwtmUyUcE%2FnO%2BR7KA5ocQBTta2cVgRFyj%2B2tiZr2x6954v3ngEETENHlhG3nBzu1C2WyYNlVyeG9wq2xcvrhF81n0kOZo6SGJ0ov8PMJKIwckGOqUBswBFeQgy2rSLTTSDgG591AJKBbPWqh62rLtxnnApdkD0ZuH1QQXI86%2Ft%2BxVgQGL9n3QtrjLTEd6Ss2aKpyvjK4UJaD5tZWB5zsLPFXFUmH7Ol0wlN64heP%2F3IlHP7QcjlAgd3OssE%2B6vgGCf0mwFmwuoI%2FY%2BOObMzdGi0MsH6%2B7Wc%2Bs9W1A4PdiQggxOZbDJjjK1q4e5kpmVicHzwEA1XYrAXN%2BC&X-Amz-Signature=6e014f0ce696280f36cb7a04c01c39d19a28d1ce7562c1d39eb78c8d6d649460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


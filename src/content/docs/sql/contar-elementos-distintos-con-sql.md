---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNAT2Y4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLytS1MZa0RURSyofFaaZ4BP7z9D4bBTpoqni8KrvHPQIgTvaXSITn6g6ad2SUXwoufzj78H2Qr%2BFkm1dRDKZrIPAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDExGoRuGUcKf%2FbhxQircAyjzCgvgpmZjbcHj33Sq1FU0ICrB%2FRf79rXo1t96mafFAUpThJWwSgK%2Fe%2Bht1t4WY2PO3LP0r2s9frHokvRbrqFY3oQOAJyY8ZrIdhOncpBN7BogQYARdU%2BQETip%2B5spmdOGY4ZWFKj8P00GwkCFJqyWyTFSSTOnqyJNi4mbwaZvBx6Qgihi4EbuWyFUIkZiw6DdZoJlfdpT17sy0oE5EmCZJunvTFUvh7IjSyfOc2C0V6lz1la8tFMbX4hcaQnknLOtF%2F333KnCyZpHaMcXXacjUs8Tqfj9OH2taOqDbWjJf9tRuKktsMCpYUMyKTa8vDZe6sldZoUZo7dZQ%2FLBtecKQ%2BmreHBg3U7R0XFdipVfEBZAR1u0kO%2BBmyJ%2BmDYvJFLcrYizIa%2BaHOavUo%2FBYmBpWqChBXxf00%2BwXx44ahDtfnfKRIyahFF5aIE70Zk%2Flx%2FnU0QHUq%2Fz0UKab0gtUXcq8LvaRMIxFA%2F5csuqxjSMK5sA%2BjnqCoy6i3WwmL8GAyg4c%2BTcDrir6%2FnVgFRtXdi3J6CImHEUYGJAWboBbxSnJABR9%2FreZBrkJRq4ziQ7h3AS9O3gza38XXdnkmpOW8WRyZypd1SZhwRsQ2MqKXPHCXDglFKoFRqK0K5PMNWUw8kGOqUBDmj7OqhCYvc3g9%2B5boAXOuEcs4oVbmA29X0ftMSRU7OqGQEza8WfHOKjmTFZBlxTCXYsecc98Y5hjX6JyJEbg0VgWKsknWZVpDqCGxlO%2F0l9enOiWT18V4M2g58ljFXzXq%2FrHqGQLeBrR1vcGPnGXWOM5fPZ%2F0YV8qRCu0Mj75L%2B%2B%2BQ%2BuXC5Am5o0Dos%2B6o6HYb5J15xsdQ3ik5b7ZpgHVOafLAL&X-Amz-Signature=341c7059de1629404e766364089498e24c6d7587a30314896950485c96c89789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


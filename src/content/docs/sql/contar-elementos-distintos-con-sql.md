---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P4HYRT7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCKGmWSAOYM9MmMMoHzPBrPo1pRYgYHdvMm2FTqme8qhwIgNNvNyWWLpEcDIn5uaAP0OiQtMcwZN8f%2Bhr0DqSrQ9w8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDUs3Luf59XfIl23lyrcA8%2FbrLQRQ%2Fg2sS0DNgfaPmZ%2FYnyWDqgCLOqjXfFMYpZf6Uk1WUFiyUjmiZF%2FShQ0YvaH5n26KaqeEsxdJTzrl6YVuVUUF4OK4uCCudMohLOSQKOYCXG7NVXanQo1w%2F252WacCjm2tLlSbipRcn2d%2BA%2FmWDw5o1b1xusP7oPFcMhfSAiCw8Il1X6aoYWx0r692es6ZKhwW0H5lVM%2FLH7Sn%2BHL7hI7nANw8AZEmBWDozz1%2FG9RYSFyiXzunyVSF%2F6hOU4U0SOPXyWYNz0f8qxljPjItgN4AT6ZxV6zLfpg08WR8KS0n45H%2FIrbIYvXVPSf2tJnsfxPtbUNkkQlsvgNeR5ox3BBOm2xhO3Fc%2FJ%2FLgAuFKO6kPiSWNNYLN1DMgC5AK81COliqYhBX64Hn2da2W3mjAm1ewJ56VzkCB%2FmnUeBBMffVBiWKIIbLeA4wEa2ncEdvAkgPL6KOG3XxQqoZ3Zq26cqFSoeBtPiBie54sdrFiCIazn8HOeI5mSkbGi1Q2WlEJtk%2BfNrjQYpSA%2FWBjdZES5EKJ25rV83C%2FiCG0N%2FzGW7ZA%2B9Mi77RT5GXrYTN0uNRtCdarcD8TDBm5NIvil55ZPt%2BBBWKgRkYLlTdz%2Bf0KcbOZ0QZaqchadPMKeRwskGOqUBnEpKmmQk5cUjL3X%2FJAH2mO937q2w6PmBcTLjwSG%2FbIFzh0I%2BCGD1vRnoPvc6usFPqFVswsbfv8qKcrR2nwhXyrkmifXIa544xBoCmesPM2xD%2B9qGanwbeFfNvAnbHJYSpB%2BkvoIaDmsZvN8YPeIZ0%2BwY8I%2FRmxXXasuKYyIL9%2FKv8SH01JGFLWYKsNUxYDMri4lQ3Qu8VWiKmq0VW3Od40J%2FnQ6V&X-Amz-Signature=06c0d50ca73a9724fe13ad87193bd3d5d2e51330da1f78fe77646aa76ac714cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


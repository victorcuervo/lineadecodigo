---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE3Y7WJV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEbC60fKrD34Jf3uagS3YxmgXFR%2Bp6z72h%2F0dT5Q43LpAiBsiueO1F2XsfjcMRko8n5Ycs2W5N8%2B5HtRjLQrYE85Iir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMOGVn6dpEK2Kg8fKQKtwDbq9tZ4sYHYXIqiZR3ws3VNn12i1BwP70NR0AqNst35ezgJTquWl1C00pX7KTMyIxX5kWQ6ZucD6KaE6qTD3qfC80HWYXF1ypLKFIV8hDeELF1VsyHHHkmuesSWHIXIT%2FW9wyfLWzm%2FM8LXZFZHZBFrfP4p7iIU%2BxWMjz0Nc5GIu%2FW4R3DbcUSOPqx5LLYbMfK7flRziLd7PA%2F2Afkjw1zYG33gVmzCADN8%2FlNGJ4DbruOOAyLCJMFVPPwxAZZyNBJgHsQ1poSKXvBdD4uYQqPewOICARSqF%2BkHEN%2BEOUgpox4j%2BGGxVIV2CneCuraZSsiakBwg4mktwFvjKS5%2FoW%2FHDj%2ByfiLQBdf8FBrWqz53sNhWEahTbznnp6M19Hawruj6TOz2eMjQPPhbXFr0raUJas5d6n3cqzCmYaVEfqfTqBVLisXK3C3d9L%2F%2F8Fx0Q4kughyYLBn%2BsMmxjMVj4U1rOUn45L2vPU3GvBVPdPoo2INxHNuaQa3r0DodHsbL2tP7ue4DIx1mNewBWqLTkH8KCbS64E6vwxm%2FCym%2FOMeM57OkWNU8yiFVOLnUSn6M4kEmUzpjpQxLO5yG24YPT8ypwtvm8VfVgecwmOXHWd7PsT6nZNdUOsGh7nCPIww6LGyQY6pgEmI6wuhT4stfS%2FW8KZg8aj7Tb6kCWIEbTMf0E%2F83kwVmnhBG4f6U73CzqhQFInBPyUlPYgJWyAA4gATcmjx42Th%2FEKkCNVVZdBzN0uyEsszTwtumij6bf6WOPBERiHRxjc1yvGVUKs%2FT5D7DYw2HnwWxHmReilmrXuvI2X4br3b0oHMwBlhsuGuMJGaIaUMKg6creA61TM%2BINQqImKbQLaJuGNG%2FAf&X-Amz-Signature=84e544c3062a821d2c442004b93de7307b7562b38082a28ad836a575193a2f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


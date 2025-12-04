---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCRRAV2E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIBrXtR0MU%2FRkdWuNY2GjW0B1JP8izOFwk6DteQkqVB%2BMAiEAtim4yp4KIyEFgBV0aTKS%2BW%2FRt4lQOYbGi8b0kht38cIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMI9l0NFQDdxA2PsIircA9coBnn%2B4fO0GqG7eMDGUbf%2FpmbG35ZbSPagyZcOTSIxhe6UsAlmtyprslzQReVgm44LJ9RY%2BycUsBS4QDJPdlMQ%2BbFFZp%2FFFHosn1JG2z1ji6LGupBxZeJUIH9XJUlCkHHW9XmAk%2B3LsTYodXuEJq0SlAJY72LGY2xeaQm436pS%2Bt8u1T71ulnTdgT6KjyEp5ghXWWZUP3K28v3IZPAmwiR3P%2BhEIt5c%2BYEEYbcp2TQHyMuNYsO4kL6cILI1kQPIoyhkOtYyc66veNqZjx3e4HdzxPSkiSX9eILY25OQAYHhNDZ4NyAmWHNoBBLlonIE93sm6LuV1J%2BLus2x%2By%2FaqLiRf5zlG6SSCfFhS2tI1fhWTr8ZFqZ7%2F4hPlOYS9f7oXgCE0JKrzWsL1oVSul9DMxT%2Fxa%2BW6HGrm7h%2B1QuLFTnzwHxEv2ynMt5rv4JxhAxKDUPVhrhgrzgccyNC8M%2Bvi3cAtX58ZzJchYElKo9vst0TpqKPQRBisIjQpjc9QLrUOZ6RCm4B1oqfXEraH7DKWWJB4BbzDdWkwXX%2BoHmLZTFqKpNdwWTZJBV%2BRobFjnu%2BDvf%2F4AxyPNhsr3dWmCS8MWwD7%2Ff5HHhsvEGF2%2BGajMNy%2Foe6YSoRWST%2FbwTMMO%2BxskGOqUBj32x0a86bpOjF5%2FfUQqwQGPe01tIE%2FOwK1Cpi3FiHaG65xSYbRV3yhHOb37XQMdI5iKAbpeqZFKRkosixIQ1dqD8b9fjDf4txlhrHxOgU6ndczL2P706M7ttk%2FsxfiyhfmFchjBh1SZ%2FBd98JzcrusA6TYqAoFNDM6m233Kiy95f%2FYcHqI1kaY%2FFlBIjRgGnt0PfcplgX43OVafuCNoeLq%2B5c83Q&X-Amz-Signature=0bc0373f754dc74fe975380574f43e599f6514b9671696db96dbb4335bd05f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


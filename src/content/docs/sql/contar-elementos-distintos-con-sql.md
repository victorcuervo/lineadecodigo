---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIVKORS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCLAKMSrpIQYJVgXGOCfXtcb1D9%2B9PZcjx%2BoWWZbfEnRgIhAN4eOVTB09m6XsLZiruvOoWC0NHKzilRNlyFG01HpsV6Kv8DCDYQABoMNjM3NDIzMTgzODA1IgySd4p%2BbCiZ1yXJVmgq3AMDOHLLB0s5w9lA1e5wJTSmtR9hqtdbRESl4VH5w3%2Fnf5uTvX1qMnKpmUA02I0gHFNKIKmfZ%2BMkDilNc9AuQAk5mjyIRSMRihcypNv5LfCknCebtSlUNshC%2FjrRwTHYfF2bx3MUj5ryjgjRbvR4R8BBqsn5mjGHiNc4IwF56%2B9W%2BpykEV9yv%2F84W78hBFcs6q2YoQCrHUIsiLVk2KZNXVM%2Bir0DtC7DJt6soPZTF6l%2BMU4gRcpFRd4A4H3Att9%2BqZzY3Y%2FjasQStLLNuR0UNmoZ5BK9Z0sX810sqt6u56rQw4a2TLRW%2BClca0AnhaPzmVHTauxf3YTOcacrgaot8BBLUBeWcYBuE0WNNzK1pQScbRAR%2F7er8If5xnEWqq5Juc7T0myVv%2BYmtKA7eowX1l%2B17nnR%2Fj6QlUPkx5vG83wLX%2FoLQiyPFJOXltoRlGf9kL59p%2FfauAQZDY9ULbZuxu39oCsJhQLUcarvWtIZVqiTd82aEtlp5Gi%2B%2BxlS%2B9vYJ9HuaHHBW3zzRhK31%2Bp%2Fwhgi%2B3SOC7Zm1MCJ7FS1H1GSk7oQ7GvSFqOQZI%2BofTNuJ8utuxWYEkgNnzPygFbvD%2BwlQaEpd%2FLPY%2BeTCErakDEIZV%2FbGedZXYJ3tf20DzC7vcLJBjqkARjROhSihhmoNlzGVd3QT8q6fuXKWpsNAahhCA4dBBCdVYS5VkSjBQwH4EMiOfZ%2FE19D4rfRLOALGGhD%2F2KKaEJJ0olY42%2BIM7ypgjrbYs0q4zz%2FznaU%2FVaus69I%2FBamggfIZNXaCIHGkAeXQBJaY%2FUfKVPGeAiMlt8h2B6mJqiFpCCmS7jN8RObboYSJmkfcUZZBfJXhICLMocAyLm04WoLkOD3&X-Amz-Signature=afc49bc0ccc00da3c9b2fc8f9f9980b9925f768c75fbfab02d25ebe5ed19ac5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


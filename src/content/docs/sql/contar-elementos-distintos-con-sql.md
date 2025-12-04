---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLREVCP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2F8JuyTwGCFTjIK7i5cIeWi36tSFckrVyQOikNj18EjAIgQOi%2FqLAW%2BIo23oby0kJbt5ym%2BQfsppJ3Y65M74Isde4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDASxwIsTk5ZvDGH2KSrcA%2Brah3KrLkK2vUWWID16S3eku6YbF3WCDxwXU4px5Yk0eZ%2FY95xYwxLLTla1B97mBt5p1vFbHSd0zpmJskOogsc54kEU82ubPVFIZE0BmAl8WxQSp2JY79KAb2XGqCYVC9jcXemnjPr16G7jwc%2FbVj6vj6TcqR9dzs4jVnjAZ%2F%2FVKWFbWkR2JCjJq44diNzINrUgrS8TH%2BIRk0YsCArAxlHivKggDd9Ait%2BYpOkAmaOaoOLSFu6m4p4aIvCFCsetcriZuM4uqUHuLDOlw0EFw0Ks2doEqDXgF4RuJsKRwpANATC6SVfy8gvYesLvyTa99zXri%2BowcEbt4YUClqErGzPfCXkY47WUc4o6X3I3MXi2uUVxXmGihhYQA%2BEnRnok4hrl1ccFNMd9UqIwe2CPmdXwA4HmWkBUuTeV5M6Dq3z5i4b7ZtRggCkvZ7woJLZT34N6WLmbPwPWe16bbq9auqWLW4SHL%2FQvZ3G0FC8gbMrfVFCX3FABkvtm64RZc%2BxQP2bXIflksZNb24BUrAVrFhUE5LEzRetdppwt%2BY4PoESh%2FekZhfs3GSa9jnitQB84XPbeoJ%2FnpJW2gBrPsw%2FBszVZTZLG4erqGMZwEGfgQkaXC05XkUP7AaD1oRrZMKChxskGOqUBp%2Bv5qvLQnkbzeQIGMJTHvzGsqRL8VeWZ9rUWv9EhQM9b870AtOV3Lsr1M5HxdK9nBj6ZMILIXuMDu%2F5VN7pGl7YqbqRzdlECkKW0Lw0qReHSvCzZ4nBtQAo06%2Fq94hgJLA04DLlHcCXScC06IeHEW68c%2Bh8cVGuyAz1rQbkMmB3HahkF4kAd3NP3A5PUmWIft2Fux0QQMs5gP3WskN1DR6Ribjb7&X-Amz-Signature=fc30e3f925aa923b0b65ee2dafeddb8642697b9560029ee320238a5b6f32ca9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


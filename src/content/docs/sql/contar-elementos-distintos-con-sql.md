---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEQZSSE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFIQ7wGr%2BualzdYhyDXCIKf1kJbu66AzTLdCbppQjvjRAiEAudk%2Fonltqr4pkg3sm%2Bt2OhR5yYwZag4xxOsa5ko1QTYq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDKxU%2B9BzM9IR0e%2BqCCrcA6knY70mipRC9iRhd7Mp15B1d%2Fzj7aKLf7go7otaPYKYZ1rtynr%2BlOq77fVp3gWhqLOyVjKdzsYNwm%2FLW2uROgRTqX9Ff7uZ4e08hSveNTf5A4GPdre4RcKE3yuw4T%2FNbEQQRRGB0JIYi%2Fe6WE%2FiwgalA0gqU4q0V%2Fg05RNEUVq%2Fu1t7XawNJ7isxIA02fY0rg1JnCAwEN8gATsFI9TPOGEBPcHO0g6Eoz4UmGXIMOj0lctKMaL%2FWWRc8tcRE1fS2bD%2FG20CBouK9iPFCncwOxV4%2BLfVZW1wjYoAjBEOdJdqj9x4EypHaBQM7YULeIUSScty691XxEe3dUXQUOHvXGGC%2FwBGu5uiwrminfLffg2o4eFDQfDnRXXL7GbY%2FGVzR0trm6GWw2HlUi3NyPk2iXJ32vJ%2BBroDJFQ2JLw9ruHKgBbB2ohj8ztklSFwD30kvF3BOj6jNb9bQpt9cWzav%2BYk2jQeEHJX13LlcHtn1FK0t9Kr2Nw%2BBkYUIZE0%2BsnnDonpjKUsvcGzBRPL6Ooapm%2FgOxcjVe0mDebPfb08%2F0pt0%2FqZgvTi06J3F%2BxFMP6Scv0aMdws%2Bl%2B5vw0lJ%2BCSTOpCrz0IlgoLkI99x5ysPAZYZeBXcTEfXbxlWA03MKPnxckGOqUB0iZOICHMQNG%2BjA1Bsj2ZEX6NEfjM8Z5oGdaOSxlo2VKZkrRkJEOJN2diCx91oq1WhA%2B9G4r8OX9u9J2f1XM8YEmSQiE3tcOCXL9kj8dhQ%2BkKpLyYpqjecmT2FWrPVQDBymrkMF%2FPt6liIvSuGtoe0GA7v7Gq3BA9Xz%2BfeVqkK62X9YN02BhbySibTEfj7AibO1XPV%2BkbV5BKUDDj4cj5Byyh60Pa&X-Amz-Signature=085f3ca87ded12d0c6b57d2e9e3b9406fd104bacce0cb1d64373e1086a93b08e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


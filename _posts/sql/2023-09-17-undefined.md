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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WM62T43%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCLM%2Fd9PlYiC01hKWCz7V7iGEPkfRn027PuY7HrXFE9wAIgSvPSWC1V1oxnj2irehEaz6SzPiZ3Q%2BhjLGjmWGgJmnMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEj2nMbNukS4Jt1L3SrcAxXy2qfzbL0CVImoiYy2V5NU6lI1780zla8b9gOy8xGBzc9TJyoWeNLrHZbGsK%2B8FWXLov0gamnNCv0HGtoPJ2rtUjJE31ftEy8HyeK372TJAn7FB2tTtCB33zBH09Di9t1w1YBbvROcPlITw%2BcC6otyQgweK1A7clIpaoFTdX%2FJGEt8GapgwAth9WDNd1AGWcNe4fPnc4JeuUXq%2FrWJplh5fx3JnXTi9AJN4WX%2F6pfRT0P0aWo48KaR7BemP4UOOt%2B5ab4zncMefKSGGbaN4%2FPPEfQD1xDe3CBfW7h9DGV0pa8vAqVQ4ejvthtD7GHOSqQtNrIKj4F3z6qjbxSNprFNp1588RRins0YxBfyK4mjKMQEi3iLO%2FN9jXy%2BPATLHpFRcUBwfmsgEIT5PPWSLguo6gXQtsFz4VVVc7GjZxnZl2amk2oIrWdE6KAHohUHEJ1PcE%2FtSIhBFCZW4Mc1th2sUSu8L4tv3Xhgjpy5cmodZ3rohmBzHCH1kq19zL33euVuVkBORplOXFHSw9lZNN6zODOAHXvf2B8QFHjY9Qp1xGUXlXzLnpIVjPdMAcxlsxPYs79U4nAzb1dRQLBuWyyP3CCg7l15PY%2FkCDRUD6W3kzC9WOyjSBz908wVMKzpwMkGOqUBepH73yVkSdinHy8rFE5NDlpt1cn0QlnmJahWckooyg5h7BFIbw39JylUDYOG28kmj591ICX53mYylRSFzoLvi95vvAtifgFhmdvhLauawK%2F5pUnXtk5%2Bds7fT6Yy70pgGMnoEwSLSOV67sz3Orxw9mW9KmKzHvHaNoasz9wkpcvD9fzYonE39XZ3WTAtzMxxwsIRSIkZ5d%2Bb%2BXFJ405jNl8w%2BezS&X-Amz-Signature=a263756e07aa784ecd9afb5dd495cef41dff6ef98c24e4c2072d57df31fc26cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


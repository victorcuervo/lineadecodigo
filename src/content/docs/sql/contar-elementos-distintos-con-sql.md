---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYQASMI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDLBpUWddKPQCvw3d%2F4qWBfL7v3eG1DkSpF35mFSJu65AiEArVwjnVnKBQkzx25de1qGrw4eVWQ%2BQTVc3AWgxVJB02kq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIysBs81B%2Fo601I3aCrcA%2Bi8b7L2JfC3RfmCOCBYzVCSn60sJJbgQnU7x6su4iCHUITyHD5fg8pR9sCsOTRxWaFt7xpxojkwKHl1rbrZW5C1m0mbe0eFvNUdNrfeEmkeNjECdQmE81Ddq1T25yzwSyGEmqm%2Boym3a62B8aEq37titTBnHtadKXyoKDc9ztmVEhRAUZq%2FmrLrITf1FD1BS30WVg5tUXUbpacncfZAkp0uFeP6BEfJn0qlC4yL1RVc4xW6Af8zDKUTGKPvr%2BIgfftN2oZQPGICsSECPx%2Fa5vDXHTNtaBee2vF1EpL0ILE6IEudErXtUD0hij415C1tfC1emPUlzgI4SzHxUYGJmIjnjreGAz8IqOK2m43lbGYDXDTH2EJGOKuy6Qex8HhASs3wGo5dId9xohpoH7BTWDD6rWDoNBtOdtT7ZsYj7Bel3YgS0emWkQSz4%2BBUuA%2FX0ovSW7Boz7G%2Bx0LdX21yXNZp497Frpk%2BdB3sSjvhBpEJADOv5AfF05nrRNeTQszD%2FxkHmqBDj3wtxu76JD27V5Ga%2FaxMG0mYSTxAyiIMOSZVwpHJ2a%2FgCjP5a4GGiEedmY2iBh9tNNvlroW7Vchd8RvzWucJDCVHybLx9KLcpyzZOJKroaHZDKwHRfaOMKrdwskGOqUBxtkFkySZPTntKwPTnQVoIA6%2B2XK%2BagB1958JpNsReLBKALKen2yFPhsiA0ovbDNipTHllWdvDj4rOWceZ%2FE1BN6V0tZifVCF9Vt5s9ndssXjOXPRZVf7%2Ftly%2FKMHFQsVe8sOzItVWDITEAcRb6lQFnwp%2BA3iwcFP83lKBQAz3aNtSZfOUkWaPyQ%2Bcuxf5hSWJ%2BH9sRElDqtokZC3brTndVmUkWsx&X-Amz-Signature=3f82a436db3d062bdd71457eca557304a6facd7d90a0cabae502833abca37dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


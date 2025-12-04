---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJE3I37Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC5wkslnusP6yu1OWMrcbKeT5%2BNFPZ9Y9xCmAkAsp5w%2BAIgUA%2FnScchzdurjKwSkHOpDho57OhP4SbCBvaJFyhS94sq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCfSIGRNmv%2BmOWVDVCrcA6OsMTrUdx0p%2BOhRZ4ODrC%2B2Q8SRQKDx3vKwP1HraHVeeHbopNFsXytv1hhng50ps8kGaDB0ICCTTsLt4xnek8ZVR2W0NrlxPc%2FRZf9yDdkuYZrd2bBJxaCTkfmOhuhGs%2FfQYZAB5VqG8MiKiwTg3rfTP%2B1UFdKGheIKV74D%2BvD6vnIU5CL6ct%2BPiEfPGq5JG0Z5auwMUIVQCtD3DHRycxWpaVfMvL9rY1YRwh%2BYVAsEjRJAO1FOoGaLoSR6jz4nNGqayWQ%2BgW9S4qoNMaYlws0AbeyZ7SeSbkuK73qA0MiDAlQPkrqCqA7sJ3k0BTBXzxh93Y7homsXMKSc2p1oUZcbPfuVf6LNmwbLZ0GZtcVVsXl96BuGxfGwN%2Bc0SLSaqVBzhRqtv7aSvNqxp7a3kC%2FA6cgIP7H92cXrjsRtACwm0ix1uqabaXnL1Gz3i4TITIFS%2Ffhr3rb6S%2FbnklP9xUkRdvqhQf70YmH%2BRJeMUvzvWdDh6Tjoy0CPErQ8n5YBg7ugFmS1BhqA9pJRXDsj5LMfzbCBFHGMFwPHKGMsBPyU%2BKRGd%2FXavN9Vm3kKhLR4ee%2FM6gaeSKSuYgRVMJA7AM5WXBrRVOP7BSCs1o6FKQm3DboZ5yrcfsSxRvioMMW1w8kGOqUB1H2JFotrZg3y3eOcMFD9sVu7CLnZY1Tyck1XvA%2B2xbRwIiIkC2W4SI63rXQlQnJT7iolINbQ0ewyrVdUSNR%2BmHdlO%2BF8LLleWAthIkbqLeCuAJy7MrLgeWD4c04fR86Ygwv2XOebjowY%2B0GMuPBvDGI6O0LgHSa7GuQAC5T3lLUhiFKQsRJN7v4RWKH2TrimCpQcY%2Bq5vVH4flwIp47VRDvr1Vph&X-Amz-Signature=18af2abf84662c9ad53545f6eafe442cfa30ed9b86c9298139a053649260411f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THMRO4P%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICFrbRtgzXjpsqkyRlvwt0cM1V1x3e8CqkOd71euHkE1AiEAsg80nMNeEblzREucpT4bUjau3fAG0YVH5sPp08oxtJ8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCGDBVArHR6YPbHmXyrcAyEuJ%2B9kptZUU7vvtFWbmLEtIOjyyZ3A15N1zV0jFW1Pr5DXe8nMGhCkSdHg4yl9eCKRXbHnGvwy7zSnQW%2FcDZsduu%2FBbxlzVf5sw%2Biy4%2BcaC5JAV0I3uTS4%2BIjEx7HpClDLL7PHSg26qyGAzbiPG0BQu%2FgHBuNiXJvQjNxAY9LKw6Apy%2FoSqAtywgK2k8qfBu1x0NjBSDpILGgp3eyoQDK%2FpdmXFkQpkiUObFIZ68ykBP56xNKjIxRxgfo9CGKF8KivJJ6f7seAwPeuC02T2YUyAyNnDWDXEfJ%2BV3flAIpmLN3aS%2BTOI7uNagAPx%2F61QOSVmW3QF5%2FPJAeUQ%2FV1T04XgNDdCuAxigb89jjoODbgtoeYSffX2NNYSjPL2IfAhpMlyCcWNauEIJQd07EKhh2gn57Vd88JHEfMZF5KUV4D2g1dt9%2FyLTxKPHdHUXF7cnSE94FGqiDZJHx7RT5TEle9IC%2FsMl1BpMlz8ZegoD18lJbmJdYKYAafToMwbgCFXSJT2deQYiY%2Fn4J5TK9kQmbSaWUyuTObgs%2FwI5IyhzakYIGjyvR0bL2CIMs8ZW4b2UfQSWXP0%2FtxIWypVYlkGX7JTBCQhKi8T1yfwnEwwDVkL35CQhD4tu2z66sGMMGWvskGOqUBqa66fmAEAAmyw2AHq2kIe98s1dCzxAmpAr%2BfgpTXyz2a6RVSXd96q4mqdBkiZvXTPOVYCQJjPSkYEK7dGfKDDuIQmFeuWDid9iZ7kjmwrH9HQnRYiLWFO3PAePA4R8UFszKfqXZUTkJL%2BffhO0hFWznN%2FYwcZXRx2rWBW9puCbYGrant1fsADODL866%2Fo6Ws40fXfisD1QUWTPYzdh9%2BDxGHGq2Y&X-Amz-Signature=3d47375be648bbe388e316d57567c8513d0cea1a62a8f445aecb3835d2e50531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


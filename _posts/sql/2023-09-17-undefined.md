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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KA54SWP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBPHHIDCh7K6gbKyLhIMiEvt%2FPYMLLSL7y3mJ5z9WWYnAiEAkuCrNWGvHhJj19%2FSdE0rWdUrrX6LQyqNzE2ka9HGEhgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHxgl1L%2B8WwSQf8boSrcA1rVSRzEARNtVRs61sJZwnUQ%2BUQ%2B0R4tne7MIJUjlJli5NidqHPyz4wsZd%2FBdH95WIsxdMipwGrtSr01BQ5wZRQrHyDuHxpuxgAc6IwLHn19ZI%2FATlhMbavxZloWjxI%2Fhz3vZu5Kqe%2Fyf%2Bz0DAbDxjws6acwjFYG4GHNmKfZR8hajYqfTeRaz2q98RO9oEf0sr64NuGKG6MOPXSYn%2FRUc09WcKSGC0T2wBfVRx32PG7ZyeEtuG5pKNfsUDsTH7eezkPobSxpz8u%2BhvSFckx411xcynmDR2ChITiyrjI0wcs%2BF9Kddw1SyZb1A1yAw8oDCDSwor0U2iEHs0kQx12l44QQPcMolDNo2SeHkduuleWsP1kC%2FTSLSmLmeS996dJRrXzNftzIm7m277l%2FuTnjj3clxY0bf4c33KrcWIMhN9V6iYpNKaFo5mVVmLmJcUpbeU%2FgMzJk%2F540GCAO2Arsycifx%2FjLWJz1EIz1%2BbwjjEf02nFwQPswh46T9T4qSxqhlK3ryXSqGJebChkzqbK32QAnoeEyYB7Cx6adu%2F2RuXQh42bfdDIf4%2Bor%2FiAeCD5PD05Ujfni315wGi7PI5cs3DrVU0eQcIfUl5vjXX0iRC7ibnY9o9CGuoOHaMTyMICuwMkGOqUBshQpkkgOlk%2FK4lyaRl2LM8P79Cj6h4dgsBf4StjYAdusIlTAOiwV4j4vtWCDaDpUx20CCq%2Fx1z2hGxdv0UV2v2hj90Oy5TCSSEozS9aUACu%2FNISZ1bRMLYUiO2VmrEC4zaT8njLnS8iHTCgOvbYtMLQCayjhedbDEYrdXIQnVcZRSJDf%2BEGI1Uw0l68g6lD8foAixwILedjUHOFi43ko%2F4HFtLQQ&X-Amz-Signature=54df0ca273f01b872556e4db38474aa5925d799dcfb4de0fe829677d056fbe49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


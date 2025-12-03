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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ALRT5OJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCbsClmuTeF4txwp7FkfABUnYD0XQ1Qp%2BYteJHI%2FVHEZwIgF%2FU4HWDGY%2BiYx6pht%2FnHAmKo3QEPsngdcu0fcyfbqm8q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJF9ilTYpsyeqGuOXCrcA4xmOUoLo%2B%2FKj%2FBEbVam41SixY1Vrs0NO3hB0m44T4%2BTMzCTsIry3E%2FW5m9wBRIJkb9pCsKFE7t%2B%2FW7zy0nLQ6dA4piTE3KAG2SBVpum9QTqm54B39FRw98dItrD6hga4%2BKqyGYdaRFsnXn6f6SiEywOZ9Umf0cZuBwPWqwF%2Bm1bZmFz26pl2NyAL7zID2bispFZjSGnrOKmSVFKCradCsdigys%2BzRy4zUH8ItmqsFYz%2FpL3Lx%2Fsad%2BAxl7BEVs4Q3RzI1p5pHayQ%2FggWuSeGctxu8JjGpLTivCSNTP%2F15HJM7wj6PefmZ8qQ1Ak1cW3DBtFWWzutmq%2FhLI5tlOu8RmLBnjRz8hnx6WRjknOW11kEaxa8VEM8jzfk1frdWoRGTautc68ue5ZvtoQSTCDqoMzI7OBV9527z0BYySuBKPNx0cdN0TkjJ6n%2FfkHULW175fSGu15kaqrbs2NCOeQvqJ5JZLTiqkA%2Bxvuz%2FrHRrwB6ErtCGei9Gr5kSkhlKARlZtL6%2FohJcszwndrl4YgSAMYHT2xzuQXLU5odkQzqcnb24%2F6bqSRraGau56iUthFTMW69DFhHChBovD9AzCTEVN9RLyc7aBZz76nGUWbZFS77lO1SvUq4%2BWodJicMIL%2FvckGOqUBO%2BPsLDifXEor8dTXj7tRwhIUbEHa%2BEyebklv0ZwB%2FHhQDltSy%2BPdLZa1CH%2F4r%2Fx%2BMU%2BP%2FaquNnZGHV4u2HvPm8b4%2Bjwl9AG3zMyo8EDJ7PTSigRmbFUx7HkAGln8vBR1e%2F%2FOEsPSYPEVnA5YO0Hj7KNy%2B%2B6EQXpjisIdvqIIS%2Fixj89VfD%2Bmy%2FMNXM0qGXqZ8ujX7Dfu5IQJNosDtpBHlI%2FZq4Ku&X-Amz-Signature=555d9699f1ab1c0832cedc073d7981fba560f5770590ee26fe97a0a2a560fd9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


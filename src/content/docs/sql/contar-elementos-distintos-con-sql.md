---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YIG7GHA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKRDw%2Bm%2FwgX%2BjlUiqV7s%2FRcGeFWjTcjSxmAWLhMiS6TAiBQ6DxHLVBKWY6WKMFsO7ZMDmkBK67%2BIaVBSlr%2FwC7ytCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMi9emnEccSkLKhQGJKtwD1s%2FU9OwzUMsSfdqClnM8rNWcaxo9a5DnGCMbPCl5%2FelHsgvsJ%2Fpzkh2MmQzaMUU26crghVnD%2FlHK29Wdc07gIgtLpy4e8PKjOI1wcieBJph9XJMrOj5bckm1Duu4lQZ%2Ffl6sfSJYdM7raNfhbu1zMsPHF070giOYDHImAP2MT9CxVGBiuSH0E81AIbV6HMifc%2FRDZzZWwiNFOE5f%2FGmTe3y0IcptYUShvlrfIqSiMaX1YOWW5JGZ7VSp3R6xZsOYl6dGRYHiTHB1EL8tO456UZF%2BWJylV550ylrmsoLVQ%2FX9dUw47EvNvAYrYQEWqY8ExlhviH3XXfPjUx0IWm23SYNnteZelj8M1dXCFx2Qx80eszl%2BS8el3%2F7FWCU%2BaOru%2F9ePIPyeDiNvxf2bDBN1S0qNxpc1rdegBXBNx8lfEouE03BylgBwNCYOujjoejPGJbxrIlRb3wZy4WQ6h7wjI1%2FcHBJJbZg532oNvoFiAZAneLNhxsfPy6ZsLQLrxG2T1uruySIuQ2pqfmVFzx7WtxqEH8g1cL1TC9Cy3Vz6XYpAEutI9aPSykTEjasUsSjxGn0bVQtaX4liOB0xXOh54Aei%2FAdBg49QgoBjlN%2Fi5jaTGMxzEM2p5zyaahEwz9vGyQY6pgHAczVsr%2BsfTlEHJXJR00%2BKxBlIx8BXa4%2BI5kbLEX9lupCl1x0qJH62rt3EgnURY%2FhD6ivIZPQpLeCz1bPsbn0mdCG1vNo2BiSBILui4QaDQbxqGDHVelXK2e%2BVRTV7toRqWRKRXixStzCOAaffkE7R2OqEJ%2B4CC%2FMPcdIkahabWdtjtbj6mO2K1H3xf5dC9s7jtNzDDvkdH%2FrQ6gpbHdfRHiHSwpVj&X-Amz-Signature=c51cf97c36883cc1815660c41b7a2633ab6da383af24b1c89adc765ec51f9452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


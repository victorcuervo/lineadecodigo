---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALSE7FM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAYQUl3ptuVzu0qOFU5B8pUsFEQUxEHqEzlmt0YfU1MXAiEA58DvaPPRB6Z5YlbyvqBmNRH1i0tZaqP8HnMJZwoIsD8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPR1Ipcp41zu0FFcySrcA7Su89Q88zUXN0v6m5ZSv38q4PLDOOdQqKmPV%2BAqpDyhl5hoIxRYuLr%2FBmnimFnxMAJL1rOCztVG1%2B%2Fwn3z3NrVRJpJU0LvGmaVoKQ%2Fi1vCUu0HlJByigEORzmhnFruWgExXeBtuS7Pl1JuaZsC4DZQV2fMsKEXC%2BlgGGLeb5Ys38QozYASJyOipkj2GUKpCPlmBstwlzxTyMxjWPMnQGNkd9lTYVdojo5dWIXA2tPgWdcRsLeLDHy5Y0FDInPieoAh7if6JJGbsAfdRyoT32SGZzwmAp50KQ5ERWANbR3Glrx0Q7oJyXP1C0fDtjcxvc%2Fgz%2BZ%2BbSbs43anUEHjCxTAiH7XJS0Cf1W3hrHAD%2Bf%2FL2vU3fd786czjSGQCGaYLU6NslS4EHXupuBkDskbsipq3zzp4raa4U7f%2BsHawJGSkt3M6MpZwXxd%2BKJg4tlr%2FECf%2BqUHTDfqSeSjU2uWnmgej1OqRTzFem95oparxQaOhzrIuVn9phFu11%2FKd7gY%2FgNhcWeiPTZILSL3OHFDL1tP4KvxFVwLdoG4dLdf4fJj2OH%2FoTSwMw0d5LLVlGRqMuF%2B3Ei%2BBhTVc0b8kozilYgbLwyIeibxS726VxE4LST9qQzOEYgY2ZtS9ECp0MLOGxckGOqUBOhHxPZbH3FAduqSs%2BaElVsEL0CtPoJnQvQNBfsjhlueYL%2BMAN2LJdOVYdH8SF4vBXLyEFHMPsfIajly2FJzock1z9QocyMql4I2MJ50yJizVyrOMopsSSKydy%2F9JI%2BtXxhh31pUjyN0doC59Qvu786or%2Bmq6ham3SigFU6%2FKsFgO0uYJ6gb%2FBfCSg%2BTjRi%2FLnzgaW1AK4THgCXV34cO%2F9iLskyyA&X-Amz-Signature=54c841f24779a09bc2794f324d4138adb899ef19d23cbcfe20594e68b271759c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


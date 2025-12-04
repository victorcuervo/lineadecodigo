---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFWLQCNH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBoM4gUy9FBv17GAifabXwsFRdYY2IDEv1Gjot5J2PzTAiEA0IsoBgNya233PQpUFVpvzl7pGRMP0tXGPtYHw35tEicq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNglrxaohyBCI4LsMyrcA5qJxDnngsjG8G6vjhPFms1b7i20CyRuMPncDErTLbGJDhaJIaZz%2FfAXud8pco372N9uYIeXXR40ornAE%2FhXM4IYgpuhVloFkJoCnhHvcD8CqkP6AkoiDLPmHhkq%2FNkJxoJxzYNWoMiIpzjZLtYQn0NzMb4V3PKdUcTTPvBMa%2BbKoEMsTs5tds2MImZhe%2FkoJcXX4DyQjHnO37GaxJn5PiURzNozQJLHoxqZtJ9PA6lXyeBX6Xx8qbBJ65MWuKTiStR8lXv2mb27MO1pwNa%2BGwWiCmYmOp%2BzHep7w6q9E7vHWG1Ek22PFNGl8LmtgM3goe%2BWgBCVBBzSaqMBipzK2WW04DoVgSkUTcKmOG1HkT9G2lXS6%2BcDGymo8zBrMBq1hE9QjwGyLHhdXaCX8Ph0tSPiXzlZDU36LMpsFXXfrk88S%2Bo2X8Yp7RClcnaYWLUXgrpO7Cn2XRmeSan9NdKRfbDLiccSAzpwSCKradnmBuGCfRhU256QLHANk10hpONMpR6k99lekw8NB%2FPS58HJH6UkBNQHSF6YRa7hsfu6wr8m145MwPdnmaW5KH7y8JmFUqU3KxG7aaZ7uF8pCOTTIAf%2BAUnoPvgUmoR%2Fz%2BTd8L%2BIpSWXeHdpxxUucU0jMP%2FIxckGOqUBNCBI6lNMldAle4adgv5q6zOn8yIF2LmSB6ZZhZDzyffs08FEkpxPl6ij6s6dWu7Ne91neKFsR80yBssXTTX9lXCrqwSLK%2BJyZIqmNRq1yvKiwhfvXszM1JY%2BL%2B7kNPA%2BQQyPgNAo6EJkQUYTg%2FAPJkxlHLifisjEuEXA%2FC9qcr0k1rhKhETAjg%2FGyxHhm%2F1DV5ZUPJgO7pjNDmtCASFLKATlHDMH&X-Amz-Signature=e2dd90656e6cf7efb97dd4ebdcc2ffec5957f037322bfd33b7a46ac6d286fc90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


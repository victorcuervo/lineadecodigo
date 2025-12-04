---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQAVIDL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIG%2B%2BTARvp6H%2BWOBgFxe%2B0g9gGOzpSJ05nGEmC8FgdZUfAiBHwiCRLgM6pH3BAbTCzK0Kd1VkpsthRafgJi0qusC4Iyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMQERrVSwSZeWvTWXKKtwDKnc6a4KPRDohK2vLgtY7wjdqLIH8TUWFZJzjf%2FJ0NUxK3n2yDp3l0kBvOZngQ6emCAsFR%2FP3WuKVKvX2T86Zg2afKhUaWqOSw%2BLQ4sMMcr%2BGZDXItsPWO9kJsd4JFLJS52yvAje04Ue5z9xWydgb%2Fo48LPLIU9LE8l2VVetSmDnNz%2FRKEPLbayID0Hr3xTcU7iKt%2FKrFPBzrgFVLjtMRbduK%2FJ3NOdQrMN0yssI8gCqUU7en2eQMcBrqtjhqRtGpFd7Hyz3XHc27KUsVwOOilCj0KIQC%2FR4uvLymV1%2B%2BMdblzhwWn7hAQUkrkv6C9BiZvOOpYweEL%2FwSAhYvWUAbmLX7vCbxqDUx21nlbwVXXTHvm3Y446IHVRl0xYevmJzOQWY1AmVpRGOnUJUt4PRX%2F5tW%2BDIjGJhemERcudqBBIUEyeBPfAaeQlGwH9yD731vpGL6s102G%2BNepFxO1%2Fd%2FGe1gaa8fAcHOkeJ7I%2FoRON%2F3wARrZbuEGq4kBzVrCEqILanKM3ZjHLsMKdAbVXFI0b%2BeYSlNQsJ%2FOwSWCGMCm%2BcbU%2FvIO9KUOsI%2FZudr7jKKX%2FhNwXcf7wn6%2BPuKZbrGydrgrrccNEZBSDCabJhHntkJaW8k51FiROwNXUAwydTDyQY6pgGx34r1O%2FVRbEQuZngnQkn2ARKmvGjQp8Y24HtjkxNdoFkEHHuoSojtCjRdt3lKkiXLoICOjxl%2BzmbsLwc4LEhky2NkMjBvPGTc0RXtRv0U3CPRtE2AJK87f6WUI9MfsP9NJs679dzdzCSJvvvPF%2BALGs%2BhPe%2B4CKs0ZNsbvdtEzdtlCYl%2B1RLURMOV%2Fkd9dCpFpA2WNRiKccPl1cDsWo6m2XefZtXF&X-Amz-Signature=187031871eaebd897658b2d3067bfb35adde2924b110dbbd6ea3508f78caa4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


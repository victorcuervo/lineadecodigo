---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFBKMWCU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDKFENEUHD5Z84ZfFmhYAU8EkorRx7k2DAxwTT8Xc7qOwIgDNxWGXCvDaqDPaCuEbsbtrtKZf61It6hOTJ%2Bzmr%2B1bYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJUWWuI3pNjxyEydqircA%2F7i5jBs1UuyuXqAuIGl%2Fn27pfN8PGRFPU%2BNyG72R8vAmwfOo4dMCgJHq5zxrn0GYKNtrwYNrViF5E7yAF%2B%2BfwN0LMn8RKz8GfWBZI9xpLqK72fmbHxLnQIW9I%2F1NmeQnmPVlfRUYpaid7A0Kk6JAm8BbzNhrQXUikqmn7qkwk6bV21srdmw41HPobRJbw7%2FoU2bMSCq1zHGjx9RfrVetj9D%2BDFF6LQemVA6PMMN2nAMNtSzc6OAh%2F%2Fp22n9xByvINXv49V%2FdmUS9z%2BJmOYKQS2P9tXcN7yIg%2F8Ngdmp0%2FN4uZ1f2ROjCNCOBeKVfAUojNvWfn5fNB2U1q0monWG8n2%2BXcHZ1KR3Ha3RD2ZErSlA%2B5Tueun9pbbXl%2Fo%2B5pkpBZeCZYDObOst71p%2FD3pnhSogLuIxeBBplrUbOnaP9Mg7Z4QahslEY13uopwBALL7bMdcTo9p1kSUhygvxwzorKpr%2FZ%2FJlMwgMIYfCN306nsplFIT7sK1407SJ12eTlx2Qr6aBfAbRki6TdLY1IyHZ0A1dBKuCN%2BmzN%2BSYBXWTDse3NXmBL9bgQH0jJJP4U9y6UPvCHdjMag4W%2BB4J3fMd8CTsWO%2BVG%2BtPCV4KxWzDujhioWEBQQ7wK31KVEJMNqQxMkGOqUBoBLzbp02vrI1Exru%2BXWUbVAEj3gxou2SrIV1HlLk6oKoi8NKLpFrxXs3NaUPFNjkOlIjuVxq2k5Luxcs8WPba%2B%2FvmC%2BVK2ADRi5XLr%2F%2F58%2B3wxavLvSd8rVX1DT2otIqKw4Wx6k6pXFeKPjibD%2Bj2RgPg86OkpQ%2B%2F2J7h9EESqFvlk%2FZSPs5W4t2Oh6BpcSCiYlJE1gvL7rOkglkKtQ8JeGdyAj4&X-Amz-Signature=29d236d5ca249a2381ebb907a96e62a0ad379978d21069ba80a9f7443549e227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


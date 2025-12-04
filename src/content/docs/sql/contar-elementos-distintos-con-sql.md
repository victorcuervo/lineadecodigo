---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQLFDI3Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDJ8dDYDOV0L4vzLtA2LMLGexru2PKBoiRc1Il1skcTsAIhAJieXaOT1Yn0zXj4EGSk9LqWRzBU2QhobhhZ3R1quGsIKv8DCDwQABoMNjM3NDIzMTgzODA1IgwlNmOCNQP5bp2atnoq3APC%2Bd4Bg2y1c%2F0Un%2Bf1QWONSjAjXooRffMmiTnE5bqP63%2BwNj0PSwL3jyWzwYBqNphy3xa83eE4nfdJxGDHR1LYDkexV2rz%2B7TqjCcHfYIwhQMPJxgdCus76H6Bd5w1vwCg4YqaLrVrS08FTOd1eooXEgkkt9kLzA4Qz4kRqWq%2BB9ROHVi7U1VsXS6EGRtgK3k0nctMoAHRzhe5YNrxPUAZCxQdgoEPZDbngzQTm959aZ5UJXh74Wg4ar1CKCLbbnQtH9dnF%2BjVq7YYbP4xyVZcIjDwFQrZYBXeCgPFdypUEV4yQrzndgvDA%2Bgo7BohzH5xmMgdYQEIAxtFBiibAu9nXSS87fHAHZq34GUgP4n8nHHerzlkj4ACwgquT9ABa7GZJl6xp00VuvGEouE2vrf3uCHP6nNWWBmqeXYzREujOHwgC4t3J8ivybkvntRMzjD3bSlGmKNqNsbx2t74Tb%2Bmh7V82yJzYQGDvb2o6%2Flw8tdzrH7zMMZKuLdhNX7vnnrrxXXXiQCRp8e6DHnsvusqTgoDBIKvyn7IB73tovdlZyhvmulxoVZuGHf7LxqKUf%2BIPVojRc%2BnO6ANUHCMpfoolg5drGE%2FQPpYS84NMCxHkftK4%2BuEPXa79F5jGjDl8sPJBjqkAc5Dqyfr40xKQCeMCtq%2FdHpQIvZsAKPOHI3VQQ8k4HIQ15Fdeir%2FSJT014RNL%2BvK3do6RdHBqu%2Br1qeJpIspWDy%2F9AQJDqSDYG%2FJ3rK1H%2FhldqUGXaTch61HAZ5t5JPzvpy8naMkHNvw6BMg0SRCmLXCfK7Ccz5byzIYXzM8eJQYfjJV7Bf3rKY0xx4aCePRaeDWzytwTuJsW2tJ%2BP%2BzPxFXkD9i&X-Amz-Signature=e10c0e3db6fcae0e46ac1180b420975b77c86d7fad671fa0a6f700f3e2c3c510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


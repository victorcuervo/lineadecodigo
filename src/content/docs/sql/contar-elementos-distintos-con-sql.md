---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEM7VR2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDspDqWCRc3z93Yzfys%2FiUGi5eR9D4ZZl5VUYH2EqL2TAiATwIZDrGPvL53%2BHzyfKuUS8rxxoLDfkuAgY72KkTCXcCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM8ub43kz8AZiM9L1bKtwDKBdpqKDYmpbKcPBu%2BkmI7drksXa%2BaPAMtBVeEZptdBBPK6TfSQJdM%2BxmZFZpZEgKXF%2FKt6ncEzU3h0%2F%2BJk1VK7ibcjgbpFiB0W4TxJVR4ouweRUfiU4TOt%2BNkYH8Y%2BoGM4PTm7I%2Bw40lncFZbvriH9P1rw6TFzMNsFVvbjAMRebMLEYbOtZH90L5YhRV5cVmIDFv7PmPI5IPwhMpZk%2B1VTuhzfcTFBtT1EIY%2B59jCrgVgCJEg7ekEb4qmGjmvanqmvb6%2BLMcny6C4ukGGv7ZTCYS%2BG8Ip9IETm6m1L2%2BbsfA0EFlGR9sL7WLyveaUIjqiKm%2FRv%2FSi3kMZtQzIleKMm93%2FTdRrUMvJ%2FYbBJv1ZSXKuUWzq%2B7QSP47uOv4p0GTRMbvranF1L%2FAdEhsnaYT9H0wulaf8fbRYLmcOIhiSNVGFgBRTdtO%2FjzOqzy7188%2FUoe7YdRUKpfnY%2BlXfyctTtdoVmYR8g7flnsqJeNaupapERDi%2B2ZUFaChvTvvI70yUBqo6kjlnxnvgVcLIypKpoSSn%2FoSprDZ%2F3Fe3ylRQyfVddWSkwoNXgpYqlwFWPlrKyk1NX3vgVGA%2BkKCBoKNG5meLHyY8O5SXr4dTxrqP6i3thf24XS%2B%2BIpmEKswur%2FGyQY6pgGnGhfEWs4UaHZkbY3cFEy12JOjKYVggkGTlZe03J7N615jTX6vaQwOMN61g6BWaLCFLThq7Dx1UOGmU8rN61l3LTmxv2hj3o8sNWfjs0mTaa%2Bz1B%2FIKYBrVlDAOd%2Bbn8dZnBBVw1R96ZsbUGKmPCR5IxgVe81nuNuJHFf91VW%2BnGsyLqL%2F7kgx0EKu5rdQx%2BpZ6fvhUgEGMnfw%2B3oFIed9YdQXJWHZ&X-Amz-Signature=871f4e7d2f21d6a5edf4353918681f606b71b8aa9fc7b690871d685a3becb7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


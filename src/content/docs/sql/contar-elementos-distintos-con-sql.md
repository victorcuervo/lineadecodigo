---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTBBL7XD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD%2FxwnNMCTpSwrk5guqz3y7WUjdpJWqJEZWexWJEs1KqgIgE4gpfiG6Lil06mF1BSy4170K5hf3osToiOCcN4MwogIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDC8na3363eYCRVa16ircAx082lBfDqoK4Z6YTWd1ya9SMeXmK2pVj%2BwALkRxqTgZnzL%2B%2B9u3JnkLIc50LVMjFBstbEpFV2zNigUEjixCygIu8G0yY4Dh3P0%2Bvm0BNrpLCGSfwtmuxZWazadTWADYWfEzM89GjwXmDaRBP099n1BxCZh3ZMT5hvbzWHuX6vNYcm%2FrT5XG5j5X%2FN6GEszj2JPj5W6i1TA57tFqcQzK91i6G0F3hoehtiB%2Bfn%2B61eVyUwOXR4RD%2Fj3n80Zy2HZ%2FBoHcTt7%2FEoyboY2f8b5l7E1K%2BI5Jejq2VK8A0NIVWJCcF6cBEDETH0ZiApyYI2J9UZCR0ZmRdjzWwFGSYK9lh0TZUyWQYBmCZ8WadERqq%2B377f9BdoaDzGufgKFLC6pCRNG6lwptbaTF77eKOispHc1i6IeKLnExYrSmasT%2FT9AsFZ1OA7kYNdb%2BwJLC1LacSQez9LZ%2ByBpNW0DWRgotSuAUjGDI5oybOb5ivk8miG32n0kvs73zww68VGs8qDFL61YXjbGNS8Hmuxz19fzzqdzPcd3TMsLbSHeJusKBTfjkCWPurXdfGNBxgf6R6i%2FGpSmILSQUm2gNa7JkEvWcW9BFiFecCKX7Fgua5CiVtZaDMhIjKp%2B1zMY5P3TsMJGExskGOqUBTFsctBgpjQrZar243bl9yd3DxyUkHTRsSBC01P7scZDP%2FXILxLGozJjnLuznByYstxWXig1hcz1z2YAxZqeDlXs2SOTDOYA8ViSSrzgjpnMqczE%2FOQaNykGvF3nZsswko2fJz4VddEfkZM65KGsT0D2bVaBnXo%2BL6cGkHreJwfQQhrNMX86x8tiftuhRa11cHHoE0KWgwtODbecmVtwxwQI2j68s&X-Amz-Signature=aa70bc21dc4a39872dc3fe2ba6f7338468437f68fc4092b658aca5d5a544b3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


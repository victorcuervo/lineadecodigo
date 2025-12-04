---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD57VEKZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGPNdaMscGVfD1eglKQ1OV7sinKGaQkQeZBwav0xs8TLAiAfNGNXiG6RspGYFeZ9XTy2RmzJdYv386Yv0jOLPD%2Bfzir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMxV0n264ntprgr9heKtwDM%2BFaWgZZskGY%2BnXLXoaiKkRf%2BrhvUyZIpXr0i4RHRTjq1leJV3KgGJrYs8PcN8or%2FP4%2FOUooH2m531xjRcyuG0Hxma47BkEv8pt93xOhU1FK9JImVaPw%2FuE2VGa%2Fce6YezQ7uTMzOVtUYznf87hDJ1RE5tqa%2BbLKF43Owz3diy75jY4PEHKMnvxfw7MruLenwxbkl9PVqfMnrnMQrVMhc9V6XNnsUjSpecmWLbqmCGToBJLl8QWBl3dNQzggye23nxuun3MFpBgGcX1%2FVSMbd6W1q%2BejX17owZUU%2Fe%2FiOsu%2BIPu1cY0WvlP%2BfMbHMhIEC%2Blis0TGncueEvs%2BGv2O0tJmNaQrOJErsP%2Fi1H8oBXSH1WZhJyKT4jbJn%2Fvac0AfxbE6Gvhlahux%2FHLhSzTgu8QobdQ82AlmTLwq%2BjVsZxMERFzouhRhJWOWMj8KXTho7CXSfvjksZrgcIq%2FDDUPDU%2F6q9%2FCh7NNlaN4F%2FlCZ520DTTuN%2BbY6kv36Y2Y2%2FDan58SlSFlcWt1eqym6NW7PHIohMpPoQnIDN0KwIXVLptZCN3nm7wnfFCIpiS5%2BFPLQFYOuX9jlqPKCGk5hvPp8hEIW7cJKtm65fs3a3UC4KsSXYLq%2FrJdRI8VZXMwwrXDyQY6pgFfdj6VO41PR3KWJfCsAtZRmyEiGr9onPiQa29gXnFskG0MmwgqNVunFa1E3IZt6QE1EI0FfjEumENzW5rarQ5eFIxqCXTPuhgxeFKipjQO2EiEvJnGAGDhFdPJGdcSsdO9BC9SebE8A7P5drUg60OnMu1QW8T9%2BlnGTJ7sXAoWv%2BfD0dEx9wG3nVOu%2FQLv4P9XT8BnoMThI1ydAGNqqaPzmCTIEmJ7&X-Amz-Signature=4e4973245dd2e72edf01f4d7d00d4bc5e2da5962daadc1c2124aa4e9ce53cbb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


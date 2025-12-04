---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB2D6WQV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICAnUMUhCeISw0V5tw2upQ2Qs29WH93ECneU6q77bdWqAiAOpqFJAcrC9codTl8r4Ew4KdCpdx67Qq8%2FsJIVQpiWDCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMOBHhCRRcq5EfQpNYKtwDt1NkR7x7kd4yoee9tMTT2f8EC2MgSD3LHqvCtftOjJor36QZyryTdCl73zrGx49Xei0KG2cHcQo5gNBVu25R%2Ba4MKg5XVjSVXAnBZlbdGZJwCZEXn6xeZiw5fpZm22yN3vx2zLJntf228TdQoIXfoNXyIJa7%2BNjchgZchEAdXVMfadYhXHjpf%2Ba1X4k84gWl5bcjg8lt5trUsqDMucobwlkCWYUIXNvgCpFwZLX25CKDyKjmX0QSTgWhC7KRmQxUygZdkmIChz9KL2EDPce7wkTA091JEVSwG5LS2bdlAO53r03GSLQv6SECRcR6kE8GQClx08IHOfuuEAlHR8rg%2FqjhAGOVufsFxF8rfsUNnQ0wIrGHANG0WYTvTh1TipRjvOpsnXW37vR2PWAMiEInNmhRaVkPLIOsDILLqXs%2BBmJRBQ1duwrc7AoKIixLWclfSGN1buzM34PMLpFuYkkfmO6GY%2FqN6GqVMvA%2BW27swA2ET%2FDGxjEGIf3oQRJ5c8VW5qOaOVWQP0nSIwmvdmsQAdI880MGRYZUik5fz2dGy8Z6ZH5tvq96pUxAVes13IF06Ct7hh1DT%2Byb3foBvlRW1fM6Yua%2FFc%2FQ7LvwJWqMMD1EwAqUuASF1%2FnYOrowrMrEyQY6pgH9EvbKztsoam0CAPHhIKknM58rqFYSfe3kcbWmzdwerZ1DxvC6mChzCOlIsZC%2BH80DbNu3XkApinj516O55zOOKir3JcNkkRT5xKV%2FBGJgxPgOFFPbMrrEI37lRYUTHsNWUT3B%2Fx%2BjIWJqkd78OpxRtC3shldHaL8SKb7IE5OGYhjjkcgAwxfw5aLKF4VxEL73FQDFU8v9MHU4G1rkxyTMen14bmRR&X-Amz-Signature=8524b119faaa17b070485704221a43c0a1efdbe9ccac027c88c847d644d60384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


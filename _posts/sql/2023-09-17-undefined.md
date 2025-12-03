---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCVQSSZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD1FpephK84G7%2Biw0Y54jDCa3xBqaZI7nlRppvII6bElgIgVeCfp33HEq4Z9fhlRNiCjcT8JvTHRP1KJ7ArHQqD6UIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFcPBKi8awViJ%2Fwb5yrcA8KI6KTwJmuxEh9oSKFIhg5oPYpK%2FXoyDWQKhZUE%2FDgsSt2CLu%2BhZCthMgFNhxBElfldlCAKaSvegRg1Jtln1cf%2BDHU5zEDPSOL7ygZiwE2ANwt6rP7PW67MdRy5JzXM0uzBaQJ8RFPOPQQKI8h77OT13lozrm0DS1ALVP1scuzptvQqjKv1MtWvEbtGwK803ss3aznDq5dgRHRN2SDAoAeKpNWFDms65w8%2Bt%2BkwH6fOwI1bhW8Vmn91zbxwgEtEq%2FfV3HgZ%2FWGPnKOeTZC0X8puxoNutXzZAhPYoNq7G3qjyiYc59kVIf0iHi%2B22SCLOCbU6ukbTLopR9YbXtZL3QRGAMlIyLRo4MdRxZKPNmvXfr9cHpnmHiO6%2BNJATPnpmF53gYhM%2FQax03aai4H7DBSGmwqaMBfLse%2BJIBOwzPDYQ7CTu2Kb1bAJrQ92NgfWfRD14yDdqVf9A0ZPfMOCnwvHh2tzxaL%2BLTpc8ohF0NSn5psDHempGLq1EDAQd6saV8AndZx9BncftCC5yPC%2FN8BaR%2BvUft2gJwIfmoF%2FtrHBqqCERS9Tkde1da8fUCUfeMEREMcI1lGL5DQBZeTjnbh5zqy3%2BXK7%2BdpfDX%2FWvNK1a1kgqqB9UBVcjmkgMMP%2Bv8kGOqUBqxibB8r5u5ndEwECBvF6v9QUPNzex0xFsyL%2BUyoT%2F%2FYYmEUg%2BGxKCoS2sV8LetLbjVpU1iL6WeLLTmc4f8%2FtcJCZiBd4a%2Br6iT42bsAOJWPoI1vaTPsQg%2BoW3%2B67y0xmfxqVJapwJ%2FGEMdP%2BKC%2BbNyVNZ9%2FArVufkdjTOjazKHfoIjv8MrnnLFAh8qS%2Bio5VrqbQk7tsOREcvKBtS5HdyqmNSyMr&X-Amz-Signature=1b8e2db05c22081d83d1a3ab19d642ddf96a8fcd0b0d98ca11582cae99293b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


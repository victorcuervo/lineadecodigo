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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGQODMH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDR5hfG2SOWn9y%2F2cXbJqwJjLohLR%2FFgKmsxQVfvpp3PAIga7531E2v%2F6jWkylIwwH8L9SfH1z3I8ABKD6dfL7Qg1Qq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDPkR5IJANL3yEzXvNCrcA2jksePA5sDefhNz28Hf8wtUvjZ3eoU0eK0fo2%2BYopmI6VyIUUG%2BYj2zTTOXd9mGYOfXI%2B%2FkabSGb669cGkstRX6934XjErjP88ItKPSjLJjib3nDc4kg2T6mmNumUMVcE7yyLTPdH8TxGBvcvftY%2BW2WzmfY15hq9kpzc33%2FHQYJv8eOd0WtWmAyA0AqHpUKpf5qkEWsJcsGV%2F0ZZFde7Vhbmh9Alskt4rd7nk%2BlyfjKFlbmA%2FtborCOkyPe%2FT8T8oIEB2CWnOhSmtmSZdfyhL6l6qz4FABJAq%2FXDBxGt0PbSAvFvtdI3kW7wxO7UQfcfrTMut44VRpC2GtiuJqzFPzLzY2t0ag7PqYPeHp%2FGpBuofQfFKNDWGmsKe84RuR0d1avgbVnCfSrEFb6FZ1tn2JMmpAmncGClb9rpWQfT4Ed3tw%2F%2BefeRy0utgOPMh6zixLrBKznUYVsVw2HKm6HiMEI912%2FLpF68csD8ObMOBWBahOBvk5ch%2B6bedf0ZdvrdpP3VSuEtv9k0SfJZOtp4I%2FMJa%2BZv9htGLW3a3Gmqe9jdmqiPooZZg9lEPYXRe%2BbUWhirLpM4F79nArrCTgF6xO34jdqKt19gqr3DvHzzdlRmKjOXsSuaueLG8tMM%2F%2BvckGOqUBLozdKv1L2ppeWHzqkGqfuFu5htLzcoPr0T6GwRQBsfeVBPGeJBooDZUQEU%2F6K5OWQYKos%2FAqRAEYkksoxU7dEPrpAaxjZ740g7dkVfDawfsNV8C5Bc7sIKVsoPqiTpmFD1nBFmMuU1IsX7rORW28yJ9k6un0sCyIHq4UL8AhfWQxRM%2B6aVgzOMi7gkrZ1e%2F6SS2RbjoEYhwrmBjMNgQELiSPkTbo&X-Amz-Signature=f464680e5a6044f954482449b51aa54fce3a3bda17dc22ce9f24f3e5ad6189f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

